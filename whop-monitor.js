#!/usr/bin/env node
/**
 * SIDEHUSTLER — Whop Milestone Monitor
 *
 * Watches for:
 *   ✅ First member
 *   ✅ First payment
 *   ✅ First review / first promo use
 *
 * Run: NODE_PATH=/root/.npm-global/lib/node_modules node whop-monitor.js
 */
process.env.WHOP_API_KEY = "apik_XyS8gGapXphPy_C4062661_C_cbf15248c68c5039ef24d11828be14c506a0f41ecb77b213536283335cde8e";

const Whop = require("@whop/sdk");
const client = new Whop.Whop({ apiKey: process.env.WHOP_API_KEY });
const CID = "biz_CR7TgUn4i5qg8z";
const STATE = "/root/.openclaw/workspace/.whop-monitor-state.json";
const fs = require("fs");

function load() { try { return JSON.parse(fs.readFileSync(STATE, "utf8")); } catch { return {}; } }
function save(s)  { fs.writeFileSync(STATE, JSON.stringify(s, null, 2)); }

(async () => {
  const s = load();
  let changed = false;

  async function apiGet(apiFn, params) {
    try { const r = await apiFn(params); return r.body?.data || []; }
    catch(e) { console.error("api error:", e.message?.substring(0,80), params); return []; }
  }

  const [memberships, invoices, reviews] = await Promise.all([
    apiGet(client.memberships.list.bind(client.memberships), { company_id: CID, first: 10 }),
    apiGet(client.invoices.list.bind(client.invoices), { company_id: CID, first: 10 }),
    apiGet(client.reviews.list.bind(client.reviews), { company_id: CID, first: 10 }),
  ]);

  if (memberships.length > (s.members || 0)) {
    s.members = memberships.length;
    changed = true;
    if (!s._first_member) {
      s._first_member = memberships[0];
      console.log("\n🟢 1st MEMBER SIGNED UP");
      console.log("   product:", memberships[0].product?.title || "—");
      console.log("   user:", JSON.stringify(memberships[0].user || {}).substring(0,120));
    } else {
      console.log(`📈 New member #${memberships.length}:`, memberships[0].product?.title || "—");
    }
  }

  if (invoices.length > (s.invoices || 0)) {
    s.invoices = invoices.length;
    s.revenue = invoices.reduce((a, i) => a + (i.amount || 0), 0) / 100;
    changed = true;
    if (!s._first_payment) {
      s._first_payment = invoices[0];
      console.log(`\n🟢 1st PAYMENT RECEIVED — €${s.revenue.toFixed(2)}`);
      console.log("   invoice:", invoices[0].id);
      console.log("   amount:  €" + (invoices[0].amount / 100).toFixed(2));
      console.log("   status: ", invoices[0].status);
    }
  }

  if (reviews.length > (s.reviews || 0)) {
    s.reviews = reviews.length;
    changed = true;
    if (!s._first_review) {
      s._first_review = reviews[0];
      console.log(`\n⭐ 1st REVIEW`);
      console.log("   rating:", reviews[0].rating);
      console.log("   text:  ", JSON.stringify(reviews[0]).substring(0,140));
    }
  }

  if (changed) save(s);

  const flags = JSON.stringify(s._first_member || s._first_payment || s._first_review
    ? { _first_member: !!s._first_member, _first_payment: !!s._first_payment, _first_review: !!s._first_review }
    : {});
  console.log(`[${new Date().toISOString().slice(11,19)}] members:${memberships.length} invoices:${invoices.length} revenue:€${(s.revenue||0).toFixed(2)} reviews:${reviews.length}`);
})();
