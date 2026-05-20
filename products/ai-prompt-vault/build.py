#!/usr/bin/env python3
"""Build the AI Prompt Vault deliverable."""
import json

prompts = [
    # Social Media & Reels
    ("TikTok hook-first caption", "TikTok|reels|social",
     "First sentence: a hook that makes someone stop scrolling. Second sentence: the payoff/insight about {TOPIC}. Max 200 chars. No emojis, no hashtags. Format: [hook] — [insight about {TOPIC}]."),
    ("LinkedIn operator post", "LinkedIn|social|thought leadership",
     "Write a LinkedIn post from the POV of a founder who turned {COMPANY} from zero to ${REVENUE} in {TIME}. No bragging. One counterintuitive insight per short paragraph. 3-4 paragraphs total. End with one question. No emojis, no hashtags."),
    ("IG carousel slide 1 hook", "instagram|social|carousel",
     "Slide 1 of a 10-slide Instagram carousel about {TOPIC}. Hook must interrupt scroll. One dominant number or fact. No exclamation points. Under 20 words on this slide."),
    ("YouTube Shorts 15s script", "youtube|social|video",
     "15-second YouTube Shorts script about {TOPIC}. Format: 0-4s hook | 4-12s main point with visual cue | 12-15s CTA. Script in seconds. Total words under 70."),
    ("Twitter thread opener", "twitter|social|thread",
     "Write a 7-tweet thread about {TOPIC}. Tweet 1: counterintuitive but defensible. Tweets 2-6: one point + one example per tweet. Tweet 7: specific CTA. Zero filler."),
    ("Subversive one-liner tweet", "twitter|social|perspective",
     "One tweet quietly challenging a dominant belief in {NICHE}. Feels like on-the-ground context, not a hot take. Max 280 chars."),
    ("Twitter reply that wins the thread", "twitter|social|engagement",
     "Respond to a viral tweet about {TOPIC}. Add one data point the OP missed. 2-3 sentences. End with a question that continues the conversation."),
    ("IG Stories 5-card swipe sequence", "instagram|social|stories",
     "5 consecutive Instagram Stories slides about {TOPIC}. One sentence each. Progressive build: hook → 2 learning → pain → CTA. Under 40 words per slide. No emojis."),
    ("YouTube comment reply as creator", "youtube|social|engagement",
     "Reply to a YouTube comment on a {TOPIC} video. 30-50 words. Answer the question, add one tip not in the video, invite deeper questions."),
    ("Discord community announcement", "discord|community|writing",
     "Discord announcement message to your community: {ANNOUNCEMENT}. Casual first-person, 'heads up' energy. What changes, what you are asking, one bottom-line question. Under 100 words."),
    # Copywriting
    ("Cold email opener", "email|cold outreach|copywriting",
     "Cold email opener for reaching a {TITLE} at a {COMPANY_TYPE}. Never mention the product. One specific signal you researched them. Max 22 words."),
    ("SaaS landing H1 + subhead", "saas|landing page|copywriting",
     "H1 (≤7 words of benefit) + subhead (≤15 words decoding the mechanism) for a SaaS page selling {PRODUCT} to {AUDIENCE}. Benefit-first, not feature-first. No jargon."),
    ("Facebook ad copy", "facebook|ads|copywriting",
     "150-word Facebook ad for {PRODUCT}. Structure: [2 sec hook] → [pain] → [solution] → [proof in metrics] → [CTA]. One benefit per sentence. One clear call to action."),
    ("5 email subject lines", "email|newsletter|copywriting",
     "Five email subject lines for a '{TOPIC}' newsletter. Each targets a different persuasion lever: (1) curiosity gap, (2) FOMO clock, (3) social proof, (4) low-effort win, (5) contrarian hook. Label each."),
    ("15 checkout CTA labels", "checkout|conversion|copywriting",
     "15 checkout CTA button labels for a digital product. Mix clarity, urgency, and aspirational framing. Each 1-5 words. Flag any that are weak and why they do not convert."),
    ("Launch email sequence", "email|launch|copywriting",
     "3 product launch emails, 2 days apart. Email 1: teaser → build → waitlist CTA. Email 2: launch → proof → purchase CTA. Email 3: reminder + deadline urgency. 80-120 words each."),
    ("Objection reframe", "sales|objection handling|copywriting",
     "Objection: '{OBJECTION}' when selling {PRODUCT}. Feel-Felt-Found reply in 60 words. Acknowledge → align → outcome evidence. No defensiveness."),
    # Email & Outreach
    ("Newsletter intro", "email|newsletter|writing",
     "Opening paragraph of a solo-founder newsletter on {TOPIC}. 40 words. Peer-update feel, not a broadcast. Specific, warm, teases content without revealing all."),
    ("Re-engagement email", "email|retention|engagement",
     "Re-engagement email for subscribers inactive 90 days. Self-deprecating about oversending. One related exclusive resource as incentive. No guilt trips. 80 words."),
    ("Status update email", "email|incident|writing",
     "Status update for a feature incident: {FEATURE}. 3 paragraphs max: what happened, what is resolved, ETA. Simple words. No jargon. No defensive language. One genuine apology."),
    ("LinkedIn InMail cold", "LinkedIn|outreach|email",
     "120-word LinkedIn message to a {TITLE} at {COMPANY_TYPE}. One genuine reason you are reaching out specifically. One open question about their situation. Purpose: start a conversation, not book a call."),
    ("Post-purchase welcome email", "email|onboarding|retention",
     "Welcome email after purchase of {PRODUCT}. 90 words. Confirm purchase → two-step starter action → one support detail → sign off."),
    # SEO & Long-Form
    ("SEO meta description", "seo|meta|writing",
     "SEO meta description for a blog post about {TOPIC} targeting keyword {KEYWORD}. Max 160 chars. Natural fit. End with 'Learn more'."),
    ("Blog pillar article outline", "seo|blog|content",
     "6-section H2 outline for 1800-word pillar article: {TITLE}. Each: heading + 2 sub-bullets + one key idea. Intro + conclusion included."),
    ("Listicle intro", "seo|blog|content",
     "60-word intro for a listicle: {TITLE}. First sentence: the problem. Second: tease the sharpest insight. Include the action verb {VERB} in the hook sentence."),
    ("FAQ section", "seo|faq|content",
     "5 FAQ entries for {PRODUCT}. Two pre-purchase, two objections, one logistics. Format: **Q:** | A: 40-60 words. Include section heading."),
    ("YouTube description + chapters", "youtube|seo|content",
     "YouTube description for a 15-min video on {TOPIC}. 2-paragraph hook, 5 named chapter timestamps at approximate positions, 3 key takeaways as bullets. End CTA: subscribe + comment code word."),
    # Code & Technical
    ("Conventional commit message", "git|dev|code",
     "Conventional commit for change: {CHANGE}. Format: <type>(<scope>): subject (≤50 chars) + empty line + body (≤72 chars/line, explains what and why, not how). Type: {feat|fix|refactor|docs}."),
    ("OpenAPI endpoint YAML", "api|code|documentation",
     "20-line OpenAPI 3.0 YAML snippet for POST endpoint: {ENDPOINT}. One request body field, 201 response struct, Bearer security. Valid YAML."),
    ("Code review feedback", "code review|dev|engineering",
     "Review a PR changing {COMPONENT} in {TECH}. Name 2 strengths, suggest 2 improvements (one performance, one readability). 80 words. Constructive tone."),
    ("SQL query explainer", "sql|data|engineering",
     "Explain SQL query in plain words for a non-technical stakeholder: {QUERY}. Break down: what it reads | what it filters | business output. 120 words max."),
    # Image & Visual AI
    ("Midjourney product photo", "midjourney|image|product",
     "Midjourney v6 prompt for product photography of {PRODUCT}. Neutral studio lighting, {BG_COLOR} background, centered, catalogue quality. --v 6 --ar 3:2 --style raw. Format: subject → composition → tech parameters."),
    ("DALL-E brand illustration", "dalle|image|branding",
     "DALL-E prompt for flat-vector brand illustration of {SUBJECT} for a {INDUSTRY} brand. Must read clearly at 512px thumbnail. No photorealism, no text, no logos."),
    ("YouTube thumbnail concept", "youtube|thumbnail|image",
     "YouTube thumbnail prompt for video: {TITLE}. Max 3 visual elements, one high-contrast dominant focal subject, red or orange accent. No text in image. --ar 16:9."),
    ("Website hero image", "dalle|website|image",
     "16:9 website hero image prompt for a {NICHE} brand. Brand colors: {C1} + {C2}. Subject: {SUBJECT}. Mood: {MOOD}. No text or logos. DALL-E 3 format: one paragraph, all details."),
    # AI System Prompts
    ("Customer service bot system prompt", "ai|prompt engineering|chatbot",
     "System prompt for a {COMPANY_TYPE} customer service chatbot. Rules: be concise, offer specific next steps, flag human handoff. Warm tone, no friendliness theatre. <200 words. Include escalation triggers."),
    ("Claude summarisation system prompt", "ai|prompt engineering|writing",
     "Claude system prompt for summarizing {CONTENT_TYPE} documents. Output format: TL;DR (one sentence) → 3-5 key points → one analysis sentence. Neutral expert tone. No advice. Specifies response language rules."),
    ("Tool-routing agent system prompt", "ai|agents|prompt engineering",
     "System prompt for an AI assistant routing to 3 tools: {T1}, {T2}, {T3}. Rules: identify intent, select right tool, never invent data. Output JSON schema included."),
    # Decision Frameworks
    ("Weighted decision matrix", "decision making|business|strategy",
     "Choose between {OPT_A} and {OPT_B} for {DECISION}. Weighted decision matrix: 4 criteria with weights, score each option out of 10 per criterion, final recommendation with one-line reasoning. 150 words max."),
    ("Five whys root cause", "problem solving|business|strategy",
     "Team at {COMPANY_NICHE} facing '{PROBLEM}'. Run the Five Whys with actual answers (not generic). End with one mandatory action. 120 words. No jargon."),
    ("Heckler call-out reply", "social media|engagement|writing",
     "On a LinkedIn post about {TOPIC}, someone says 'That only works if you are lucky / have connections.' Write a confident, generous, data-backed reply. 60-80 words. Wins the thread."),
    ("5 quick wins list", "productivity|startup|business",
     "5 quick wins a {ROLE} at a {STAGE} startup can implement this week on {TOPIC}. Each: one sentence, no budget, under 2 hours. Total 8 lines."),
    ("Bad news email to customer", "email|communication|writing",
     "Inform a customer that {BAD_NEWS} regarding {PROJECT}. Age it well: delay a sentence, clarity, a direct yes/no, then what replaces it. Warm but not effuse. 100 words."),
    ("Beta announcement arc", "launch|writing|product",
     "320-word product launch announcement arc for beta of {PRODUCT}. Opening hook with the pain in direct plain language. Problem context (1-2 para). Beta decision with one genuine tension. Close with a specific call for the first 50 beta testers to contact you."),
    ("LinkedIn carousel body copy cheat sheet", "linkedin|instagram|social",
     "Contextual copy for a 7-slide Instagram carousel on {TOPIC}: Slide1 hook, Slide2 pain, Slides3-6 evidence or examples, Slide7 CTA. Max 280 chars per slide body. Label each slide."),
    ("Email-to-text reframe for busy execs", "email|communication|strategy",
     "Rewrite the 120-word version of {CONTENT_SUBJECT} for a C-level exec who checks email on mobile in <15 seconds. Frontload: decision needed, then one-line rationale, then what happens if nothing changes. 80 words total."),
    ("Hostile audience opening", "presentations|public speaking|strategy",
     "Opening line for a talk to an audience that is already skeptical about {TOPIC}. Do not defend, do not apologize. Name the doubt directly, then reframe it as your core argument. 35 words. Wins the room before it starts."),
    ("Internal product brief template", "product|strategy|engineering",
     "Write a 5-sentence interal product brief for {FEATURE}. Include: the user pain, the proposed solution shape, what success looks like in 30 days. Sharp, no fluff. Sprint-planning ready."),
]

flat = [{
    "category": cat.split("|")[0],
    "tags": [t.strip() for t in cat.split("|")],
    "name": name,
    "prompt_text": prompt
} for name, cat, prompt in prompts]

catalog = {
    "product": "AI Prompt Vault",
    "version": "v1.0",
    "total_prompts": len(flat),
    "description": "50 production-ready AI prompts you can copy, paste, and use today — no setup, no learning curve, no AI slop.",
    "prompts": sorted(flat, key=lambda x: (x["category"], x["name"]))  # sort alphabetically for the file
}

# Sort by category-grouped for output
from itertools import groupby
cat_key = lambda x: x["category"]
flat_sorted = sorted(flat, key=cat_key)

# Write JSON catalog
with open("/root/.openclaw/products/ai-prompt-vault/prompt_vault.json", "w") as f:
    json.dump(catalog, f, indent=2)

# Write Markdown deliverable
with open("/root/.openclaw/products/ai-prompt-vault/AI_PROMPT_VAULT.md", "w") as f:
    f.write(f"# AI Prompt Vault\n\n")
    f.write(f"**{len(flat)} production-ready prompts**\n\n")
    f.write("Copy each template, fill in the `{{VARIABLES}}`, paste into your AI tool.\n\n---\n\n")
    current = None
    for i, p in enumerate(flat_sorted, 1):
        if p["category"] != current:
            current = p["category"]
            f.write(f"\n## {current}\n\n")
        f.write(f"### {i}. {p['name']}\n\n")
        f.write(f"> {p['prompt_text']}\n\n")

# Write plain text list (shorter)
with open("/root/.openclaw/products/ai-prompt-vault/PROMPTS_LIST.txt", "w") as f:
    f.write(f"AI PROMPT VAULT — {len(flat)} Prompts\n{'=' * 40}\n\n")
    for i, p in enumerate(flat, 1):
        f.write(f"{i}. [{p['category']}] {p['name']}\n")
        f.write(f"   {p['prompt_text']}\n\n")

print(f"✅ Generated {len(flat)} prompts across {len(set(p['category'] for p in flat))} categories")
