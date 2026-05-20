#!/usr/bin/env node
/**
 * SIDEHUSTLER — Whop Milestone Monitor
 *
 * Watches for:
 *   ✅ First member
 *   ✅ First sale / payment received
 *   ✅ First promo code used
 *   ✅ First review
 *
 * Run: NODE_PATH=/root/.npm-global/lib/node_modules node whop-monitor.js
 */
process.env.WHOP_API_KEY = "apik_XyS8gGapXphPy_C4062661_C_cbf15248c68c5039ef24d11828be14c506a0f41ecb77b213536283335cde8e";

const Whop      = require("@whop/sdk");
const client    = new Whop.Whop({ apiKey: process.env.WHOP_API_KEY });
const CID       = "biz_CR7TgUn4i5qg8z";
const STATE_FILE = "/root/.openclaw/workspace/.whop-monitor-state.json";
const fs        = require("fs");

function loadState() {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, "utf8")); }
  catch { return { members: 0, invoices: 0, reviews: 0, checkedAt: null }; }
}
function saveState(s) { fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 2)); }

let state = loadState();

function flag(name) {
  if (!state._flags) state._flags = {};
  state._flags[name] = true;
}

async function fullCheck() {
  const [products, plans, invoices, memberships, reviews] = await Promise.all([
    client.products  .list({ company_id: CID, first: 10}).then(r => r.body.data).catch(() => []),
    client.plans     .list({ company_id: CID, first: 10}).then(r => r.body.data).catch(() => []),
    client.invoices  .list({ company_id: CID, first: 10}).then(r => r.body.data).catch(() => []),
    client.memberships.list({ company_id: CID, first: 10}).then(r => r.body.data).catch(() => []),
    client.reviews   .list({ company_id: CID, first: 10}).then(r => r.body.data).catch(() => []),
  ]);

  const planIdSet = new Set(plans.map(p => p.id));

  // ── FIRST MEMBER ──────────────────────────────────────────
  if (memberships.length > 0 && !state.members) {
    state.members = memberships.length;
    flag("first_member");
    console.log("\n🟢 1st MEMBER SIGNED UP");
    console.log(`   Store:  whop.com/${products[0]?.store_route || "sidehustler"}`);
    console.log(`   Product: ${memberships[0].product?.title || "—"}`);
    console.log(`   User:      ${JSON.stringify(memberships[0].user)?.substring(0,100)}`);
    console.log(`   Joined:   ${new Date().toISOString().slice(0,19)}`);
  }

  // ── FIRST PAYMENT ─────────────────────────────────────────
  if (invoices.length > 0 && !state.invoices) {
    state.invoices    = invoices.length;
    state.revenueEUR  = invoices.reduce((s, inv) => s + (inv.amount || 0), 0) / 100;
    flag("first_payment");
    const inv = invoices[0];
    console.log(`\n🟢 1st PAYMENT RECEIVED`);
    console.log(`   Invoice:  ${inv.id}`);
    console.log(`   Amount:   €${state.revenueEUR.toFixed(2)}`);
    console.log(`   Status:   ${inv.status}`);
    console.log(`   Plan:     ${inv.plan?.id}`);
    const planObj = plans.find(p => p.id === inv.plan?.id);
    console.log(`   Product:  ${planObj?.product?.title || "—"}`);
    console.log(`   Member:   ${inv.member?.user?.username || inv.member?.id || "—"}`);
  }

  // ── REVIEWS ────────────────────────────────────────────────
  if (reviews.length > 0 && !state.reviews) {
    state.reviews = reviews.length;
    flag("first_review");
    console.log("\n🟢 1st REVIEW RECEIVED");
    console.log(`   ${JSON.stringify(reviews[0]).substring(0,200)}`);
  }

  // ── PROMO CODES ────────────────────────────────────────────
  try {
    const codes = await client.promoCodes.list({ company_id: CID }).then(r => r.body.data).catch(() => []);
    for (const c of codes) {
      const used = (c.stock ?? 0) - (c.uses_remaining ?? 0);
      if (used > 0 && !state.promo_codes) {
        state.promo_codes = used;
        flag("promo_used");
        console.log(`\n🟢 PROMO CODE USED: "${c.code}"`);
        console.log(`   Uses:    ${used}`);
        console.log(`   Amount:  ${c.amount_off}%  |  type: ${c.promo_type}`);
      }
    }
  } catch(e) { /* promo list may 403 */ }

  const allHits = Object.keys(state._flags || {}).length;
  saveState(state);

  return {
    ts:      new Date().toISOString(),
    members: memberships.length,
    invoices: invoices.length,
    revenue: state.revenueEUR || 0,
    reviews: reviews.length,
    hits:    allHits,
  };
}

fullCheck().then(console.log).catch(e => console.error("ERROR:", e.message));
