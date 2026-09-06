# Product Requirements Document (PRD)

## SkillBridge (working title — name TBD)
### A train-and-place platform: learn in-demand skills, then get placed into jobs with AI-powered application automation.

| | |
|---|---|
| **Document status** | Draft v1.0 — for review |
| **Date** | 31 August 2026 |
| **Author** | Founder / Product (with AI agent) |
| **Audience** | Engineering, design, curriculum team, investors, advisors |
| **Reference products** | 10Alytics (training), RoboApply (job automation), GlobalReady (ATS CV building) |

---

## 1. Executive summary

**SkillBridge** is a dual-sided career platform for African talent that combines what today takes three separate products:

1. **An academy** (like 10Alytics) — live, instructor-led, project-based training tracks that take a beginner to job-ready in 4–8 months, ending with a virtual internship and a public portfolio.
2. **A career toolkit** (like GlobalReady) — ATS-optimized CV builder, per-job CV tailoring, job-fit scoring, cover letters, and interview practice.
3. **A job automation engine** (like RoboApply) — AI job matching, one-click/automated applications, application tracking, and interview copilot.

The differentiator: **the loop is closed.** Learners are trained on the platform, their portfolio and CV are generated from verified coursework, and the same platform actively applies to jobs on their behalf and routes them into an employer marketplace — so training, proof-of-work, and placement live in one system with one data model.

**North Star metric:** qualified placements per month (learners/fellows hired into roles they were trained for).

---

## 2. Problem statement

**For students/job-seekers (supply side):**
- Tech training programs exist but are disconnected from hiring: after paying for a course, graduates are left to fight the job market alone.
- Generic CVs are rejected by Applicant Tracking Systems (ATS) before a human sees them; most applicants don't know how to tailor documents per role.
- Manual applying is a numbers game (100+ applications for one interview); job-seekers can't sustain the volume while working or studying.
- "Certificate without experience" — employers want work samples and experience, which most fresh graduates lack.
- Costs are a barrier: lump-sum tuition, application/relocation costs, and subscription tools priced in USD.

**For employers (demand side):**
- Difficulty verifying the actual skill of African tech talent; CVs are unreliable, portfolios scattered.
- Recruiting junior talent is high-effort: sourcing, screening, and assessment are manual.
- No single place to hire *pre-vetted, freshly trained* talent with verified project work and internship records.

**Existing alternatives solve one half each:**

| Need | 10Alytics | RoboApply | GlobalReady |
|---|---|---|---|
| Structured training to job-readiness | ✅ | ❌ | ❌ |
| Verified portfolio / virtual internship | ✅ | ❌ | ❌ |
| ATS CV building & tailoring | Partial (human service) | ✅ | ✅ |
| Automated/volume applications | ❌ | ✅ | ❌ |
| Interview practice (AI) | ❌ (human coaching) | ✅ | ✅ |
| Employer-side hiring pipeline | ❌ | ❌ | ❌ |
| End-to-end "train → place" loop | ❌ | ❌ | ❌ |

**Nobody closes the loop. That is the product.**

---

## 3. Market & competitive analysis

### 3.1 10Alytics (benchmark: training side)
- EdTech company (founded 2020, Canada/Manchester/Nigeria presence), 70,000+ trained across Africa, Europe, Middle East, North America; ACTD-accredited.
- **Model:** live instructor-led cohorts, 8-month tracks (~$600 discounted from ~$1,250, monthly payment plans), tracks across Data Analytics, Business Analysis, Financial Analytics, HR Analytics, Cybersecurity, GRC, Data Engineering, Data Science w/ AI-ML, Product Design, DevOps, Agile PM, Health Tech Analyst.
- **Employability layer:** CV review, LinkedIn optimization, interview prep, weekly mentorship, Upwork/freelance optimization, referrals — plus a **2-month virtual internship** for real experience.
- **Also runs:** community, hackathons, alumni network, B2B corporate training, and a data consulting arm.
- **Gap we exploit:** placement support is human-powered and non-guaranteed; no automated job application engine; no employer marketplace. Graduates still leave to job-hunt elsewhere.

### 3.2 RoboApply (benchmark: application automation side)
- AI job-search automation: auto-apply across LinkedIn/Indeed/Monster and job boards, AI resume builder, resume scoring, tailored resumes per job, AI cover letters, interview guide + live interview copilot, application tracker, job board, credits system.
- **Pricing:** $9 3-day trial → Basic ~$37–47/mo (20 apps/day) → Standard ~$99–129/mo (100 apps/day) → Premium $389/mo (500 apps/day); pay-as-you-go $0.01/credit; $499 done-for-you service; enterprise from $999/mo. 90-day interview guarantee.
- **Gap we exploit:** it only helps people who *already* have skills and a CV; no training, no verified skills data, no employer side. Volume-applying weak candidates produces rejections, not hires.

### 3.3 GlobalReady (benchmark: CV/global-readiness side)
- Focused product: ATS-optimized international-standard CVs, job-targeted rewrites (paste a job description → tailored CV), job-fit check, cover letter generation, interview practice, premium job links, saved-jobs/application tracker, "skill-to-fund pathways" (income skills to fund relocation/application costs).
- **Pricing:** freemium — Free (1 CV, preview only) → €1.99/7-day → €9.99/mo → €24.99/4-month → €69.99/yr. Honest positioning: "No promises. Just preparation."
- **Gap we exploit:** thin product (CV utility), no training depth, no automation, no placement; job features are links out, not a pipeline.

### 3.4 Positioning statement

> For ambitious African students and career switchers who can't afford a dead-end education, **SkillBridge** is a train-and-place platform that turns beginners into hired professionals — unlike 10Alytics (training only), RoboApply (applying only), or GlobalReady (CV only), we combine verified training, automated job applications, and an employer marketplace so that getting trained and getting hired happen in the same place.

---

## 4. Goals & objectives

### Business goals (first 18 months)
| # | Goal | Target |
|---|---|---|
| BG1 | Launch MVP (academy + toolkit + tracker + employer beta) | Month 4–6 |
| BG2 | Paying learners enrolled | 1,500 in year 1 |
| BG3 | Employer partners signed | 40 by month 12 |
| BG4 | Verified placements (learners hired) | 150+ in year 1, ≥60% within 6 months of graduation |
| BG5 | Monthly recurring revenue from toolkit/job-engine subscriptions | ₦ equivalent of $8k MRR by month 12 |

### Product goals
- One account, one profile: coursework, projects, CV, and applications share a single data model.
- ≥70% of graduates use the placement engine within 2 weeks of graduation.
- Time from graduation → first interview invitation ≤ 30 days (median).
- Employer satisfaction: ≥4.5/5 on candidate quality.

### Non-goals (for v1)
- Degree/accredited-diploma awarding.
- Physical campuses; in-person-only cohorts.
- Building our own ATS for third-party companies (we integrate, not replace).
- Guaranteed-job promises in marketing (risk + regulatory exposure); we guarantee *effort and access*, not offers.
- Full browser-automation auto-apply on LinkedIn (ToS risk — see Risks); v1 uses aggregated feeds, partner boards, direct employers, and assisted apply.

---

## 5. Users & personas

### P1 — Ada, 24, fresh graduate (Port Harcourt)
BSc in a non-tech field, unemployed, has a laptop and unreliable power/data. Wants a remote or Lagos/PH junior data role. Can pay ₦15k–40k/month installments, not $600 upfront.

### P2 — Emeka, 31, career switcher (bank operations)
Employed, evenings-only. Wants to move into business analysis. Needs flexible cohorts, credible certificate, and a placement pipeline he doesn't have time to run himself.

### P3 — Chidinma, 27, already-skilled job seeker
Took courses elsewhere; skilled but stuck applying manually. Wants only the toolkit + automation engine (subscription tier).

### P4 — HR manager at a mid-size company / remote-first startup
Needs junior–mid analysts, sales ops, customer insights talent. Wants pre-vetted candidates with verified project work, at lower cost than agencies.

### P5 — Facilitator / instructor (internal + contracted)
Delivers live classes, grades projects, mentors. Needs scheduling, LMS tools, learner analytics.

### P6 — Platform admin / ops
Runs cohorts, payments, content, employer relationships, placement ops. Needs dashboards and controls.

---

## 6. End-to-end user journey (the loop)

1. **Assess** — Ada takes a 10-minute aptitude/interest assessment; platform recommends a track.
2. **Enroll & pay** — chooses a cohort; pays in installments (or applies for a scholarship/ISA-style deferred plan in later phases).
3. **Train** — live weekly classes + self-paced labs; milestone assessments; attendance/participation tracked.
4. **Build proof** — every completed project auto-publishes to her **verified portfolio page** (public URL).
5. **Virtual internship** — final 2 months: simulated company projects with deliverables and supervisor reviews.
6. **Graduate → auto-generate profile** — one click generates an ATS-optimized CV from her verified coursework, projects, and internship record.
7. **Activate placement engine** — she sets preferences (role, salary, location/remote, sectors). The engine matches jobs from aggregated feeds + partner employers; one-click/assisted apply; CV auto-tailored per job; tracker shows every application status.
8. **Interview** — AI interview practice (question drills + mock with feedback); optional live copilot in later phase.
9. **Get placed** — hired via partner employer or external application; platform records placement (self-report + employer confirmation).
10. **Alumni loop** — she returns as mentor/community member; employers who hired her become repeat hirers; her outcome becomes marketing.

---

## 7. Feature requirements

Priorities: **P0** = MVP must-have · **P1** = fast-follow · **P2** = later/differentiator.

### Module A — Academy (LMS)

| ID | Requirement | Priority |
|---|---|---|
| A-01 | Course catalog with tracks (launch with 3: Data Analytics, Business Analysis, Digital Marketing/Sales Ops — expand later) | P0 |
| A-02 | Cohort management: start dates, capacity, waitlists, live class schedule | P0 |
| A-03 | Live class integration (Zoom/Google Meet embed) + session recordings | P0 |
| A-04 | Structured curriculum: modules → lessons → labs; progress tracking % | P0 |
| A-05 | Assessment engine: quizzes, graded projects, pass thresholds | P0 |
| A-06 | Certificate generation (verifiable public certificate URL + QR) | P0 |
| A-07 | Verified portfolio page: auto-compiled from completed projects (public, shareable) | P0 |
| A-08 | Virtual internship workspace: briefs, deliverable submissions, supervisor review workflow | P1 |
| A-09 | Learner analytics for facilitators (progress, risk flags for drop-off) | P1 |
| A-10 | Mentorship booking + community (WhatsApp/Telegram bridge in v1; in-app forum later) | P1 |
| A-11 | Self-paced/crash-course tier (low-price entry funnel, GlobalReady-style "fund your journey" pathway) | P2 |
| A-12 | B2B portal: corporate training seats | P2 |

### Module B — Career Toolkit

| ID | Requirement | Priority |
|---|---|---|
| B-01 | Profile-driven CV builder: pulls education, skills, projects, internship from learner record | P0 |
| B-02 | ATS-safe CV templates, PDF export | P0 |
| B-03 | CV score (structure, keywords, ATS parse test) | P0 |
| B-04 | Job-targeted tailoring: paste job description → rewritten/optimized CV + keyword match report | P0 |
| B-05 | AI cover letter generator (tone/length controls) | P1 |
| B-06 | LinkedIn profile optimizer (headline/about generator) | P1 |
| B-07 | AI interview practice: role-specific question bank, mock interview with feedback | P1 |
| B-08 | Live interview copilot (real-time answer prompts) | P2 — legal/ethics review required |
| B-09 | Freelance-readiness pack (Upwork profile optimization, proposal templates) | P2 |

### Module C — Job Automation & Matching Engine

| ID | Requirement | Priority |
|---|---|---|
| C-01 | Job seeker preferences: role titles, seniority, location/remote, salary floor, sectors | P0 |
| C-02 | Job aggregation from public feeds/APIs (e.g., Greenhouse/Lever public boards, Remotive, WeWorkRemotely, Jobicy, local boards) — deduped, normalized, tagged | P0 |
| C-03 | Match scoring: job requirements vs. verified learner skills/projects | P0 |
| C-04 | In-platform job board: search, filters, saved jobs | P0 |
| C-05 | One-click apply for partner/direct employers and API-friendly boards | P0 |
| C-06 | Application tracker: status pipeline (applied → screening → interview → offer), reminders, follow-up nudges | P0 |
| C-07 | Weekly matched-jobs email/WhatsApp digest | P1 |
| C-08 | Assisted apply: auto-fill common application forms, generate tailored CV + cover letter per application, human-in-the-loop confirm | P1 |
| C-09 | Full auto-apply agent (volume applications; browser automation for third-party boards) | P2 — ToS-risk gated |
| C-10 | Recruiter-email finder + follow-up sequence (RoboApply-style direct outreach) | P2 |
| C-11 | Placement verification workflow (offer upload → confirmation → counted as placement) | P0 |

### Module D — Employer Marketplace

| ID | Requirement | Priority |
|---|---|---|
| D-01 | Employer onboarding & company profile | P0 (beta) |
| D-02 | Post jobs (free in beta); roles auto-matched to graduating cohorts | P0 |
| D-03 | Talent pipeline view: filter graduates by track, skills, project scores, internship rating; view verified portfolio + tailored shortlist | P0 |
| D-04 | Interview scheduling + candidate messaging | P1 |
| D-05 | Placement fee / success-fee billing workflow | P1 |
| D-06 | Employer dashboard: funnel analytics, hire history, retention of hires | P1 |
| D-07 | Managed-service tier: we shortlist 3–5 vetted candidates in 72h (human recruiting on top of the platform) | P2 |
| D-08 | Freelance/contract gig postings paid per milestone (income pathway for learners mid-program) | P2 |

### Module E — Payments, Plans & Credits

| ID | Requirement | Priority |
|---|---|---|
| E-01 | Local payments: Paystack/Flutterwave (cards, bank transfer, USSD) + USD for diaspora | P0 |
| E-02 | Installment payment plans for tuition (auto-reminders, dunning) | P0 |
| E-03 | Subscription plans for toolkit/job engine (free tier, monthly, annual) | P0 |
| E-04 | Credits system for AI actions (tailoring, cover letters, applies) — monthly allocation + top-ups | P1 |
| E-05 | Scholarships / promo codes / cohort discounts | P1 |
| E-06 | Deferred-tuition option (pay a deposit + balance after hire) | P2 — requires funding & legal design |

### Module F — Admin, Ops & Analytics

| ID | Requirement | Priority |
|---|---|---|
| F-01 | Admin console: users, cohorts, payments, refunds, content CMS | P0 |
| F-02 | Facilitator portal: class management, grading, learner flags | P0 |
| F-03 | BI dashboard: enrollment funnel, cohort completion, engagement, application funnel, placements, revenue | P0 |
| F-04 | Support: help center + in-app chat (Intercom/Crisp in v1) | P0 |
| F-05 | Email/SMS/WhatsApp transactional messaging (notices, nudges) | P0 |
| F-06 | Referral program (learners earn credits/fee discounts for referrals and for verified hires) | P1 |
| F-07 | Outcome tracking: post-placement surveys at 1/3/6 months | P1 |

---

## 8. Non-functional requirements

| Category | Requirement |
|---|---|
| Performance | Job board search < 2s on 3G; CV generation < 10s; match digest batch runs daily |
| Bandwidth | Media served compressed/adaptive; class recordings downloadable at low resolution (144p–360p); core flows usable on mobile web |
| Mobile | Full learner + toolkit flows usable on Android/mobile web (majority NG traffic); native apps later |
| Security | Encryption in transit/at rest; role-based access; payment handled by PCI-compliant processors (no card storage); secrets management |
| Privacy & compliance | Nigeria NDPR (+ GDPR for EU users); CV/application data used only for the user's job search; explicit consent for sharing profile with employers; AI-disclaimer on generated content |
| Availability | 99.5% uptime target; maintenance windows off-peak WAT |
| Accessibility | WCAG 2.1 AA target for public pages |
| AI safety | AI-generated CVs/letters clearly labeled; human review encouraged; no fabricated experience — tailoring may rephrase, never invent |
| Scalability | Start serverless/managed (e.g., Next.js + Postgres + queue) to keep ops cost near zero at small scale |
| Data integrity | Verified badges only from platform-graded work; anti-fraud on assessments (plagiarism checks, viva spot-checks) |

---

## 9. MVP definition & roadmap

### Phase 1 — MVP (Months 0–5): "Train + Toolkit + Tracker"
**In:** A-01…A-07, B-01…B-04, C-01…C-06, C-11, E-01…E-03, F-01…F-04 (essentials).
- One or two pilot cohorts (25–50 learners) of the flagship track.
- CV builder + tailoring (the GlobalReady wedge) free for enrolled learners.
- Curated/aggregated job board + manual-friendly tracker (the RoboApply wedge, minus automation risk).
- Employer waitlist + manual shortlisting (founder-led, concierge placement).
- **Exit criteria:** ≥60% cohort completion; ≥30 graduates using toolkit; first 5 placements logged; payment/checkout stable.

### Phase 2 — Placement Engine (Months 6–10)
- Employer marketplace beta (D-01…D-03), virtual internship (A-08), cover letters & interview practice (B-05, B-07), digests (C-07), assisted apply (C-08), credits (E-04), referral program (F-06), outcome surveys (F-07).
- Second and third tracks added.
- **Exit criteria:** 15+ active employers; 25% of graduates get ≥1 interview within 60 days of graduating.

### Phase 3 — Automation & Scale (Months 11–18)
- Full auto-apply agent behind ToS/legal review (C-09), recruiter outreach (C-10), managed service (D-07), deferred tuition (E-06), B2B portal (A-12), gig marketplace (D-08), live interview copilot (B-08).
- Multiple cohorts per track; pan-African expansion (Ghana, Kenya).

---

## 10. Monetization (indicative — pricing workshop required)

| Revenue line | Model | Benchmark |
|---|---|---|
| Training tuition | Installment plans per track; e.g., ₦250k–₦450k total (~$170–300 at launch pricing) vs 10Alytics ~$600 — undercut to gain share, raise as brand matures | 10Alytics $600/8mo |
| Toolkit + job engine subscription | Freemium: Free (1 CV, preview) → Pro monthly/annual for CV download, tailoring, job-fit, cover letters, tracker | GlobalReady €9.99/mo, €69.99/yr |
| Credits (AI actions) | Monthly allocation + top-ups; prevents AI-cost abuse | RoboApply $0.01/credit, credit-metered features |
| Employer placement fee | Success fee 8–15% of first-year salary, or flat fee per junior hire; free job posting in beta | Standard agency practice |
| Managed service (later) | Done-for-you sourcing, premium price | RoboApply $499 done-for-you |
| B2B corporate training (later) | Per-seat licensing | 10Alytics for-business line |

Naira + USD pricing both required (diaspora/NRNs pay USD).

---

## 11. Risks & mitigations

| Risk | Severity | Mitigation |
|---|---|---|
| **Auto-apply vs. platform ToS** (LinkedIn/work boards prohibit bots; account bans, legal exposure) | High | v1 avoids third-party browser automation; use official APIs, public feeds, partner boards, direct employers, and human-in-the-loop assisted apply. Full automation only after legal review, opt-in, rate-limited. |
| **Placement quality > volume** — volume-applying weak candidates yields rejections & brand damage | High | Verified-skills gating: automation tiers unlocked by coursework progress; match scoring uses verified skills; employer-side pre-vetting. |
| **"Job guarantee" liability & marketing risk** | High | Never promise offers (GlobalReady's "no promises, just preparation" is the right posture). Guarantee process, effort, access. |
| Learner drop-off mid-program (funding, power/data, motivation) | High | Installments, low-bandwidth materials, mobile-first, risk flags + intervention ops, community/cohorts for accountability |
| Employer cold-start (no jobs → engine useless) | Medium | Founder-led concierge placement for first cohorts; free postings in beta; partner with 10–20 remote-first employers hiring in Africa before public launch of marketplace |
| AI hallucination in CVs (fabricated experience) | Medium | Restrictive prompting: rephrase/reshape only from verified record; user review step; disclaimer |
| Payments failure/chargebacks; FX volatility | Medium | Paystack/Flutterwave rails, USD+NGLN pricing, dunning flows |
| Copycats (10Alytics adds an apply-bot; RoboApply adds courses) | Medium | Moat = verified talent data + employer network + outcomes track record, not any single feature |
| Regulatory (recruiting licensing, NDPR) | Medium | Legal review of placement-fee model in NG; DP compliance from day 1 |
| Cost of AI at scale (tailoring/applies per user) | Medium | Credit metering, caching, model tiering (cheap models for scoring, premium for rewriting) |

---

## 12. Key dependencies & integrations

- **Live classes:** Zoom/Google Meet (embed + recordings).
- **Payments:** Paystack/Flutterwave (+ Stripe for USD).
- **LLM provider:** OpenAI/Anthropic/Gemini (tailoring, scoring, cover letters, interview practice) with usage metering.
- **Job data:** Greenhouse/Lever public APIs, Remotive, WeWorkRemotely, Jobicy, + curated local boards; dedupe/normalization pipeline.
- **Comms:** Email (Resend/Postmark), SMS/WhatsApp (Termii/Twilio).
- **Support/CMS:** Intercom/Crisp + headless CMS.
- **Analytics:** PostHog/Mixpanel + internal BI.

---

## 13. Success metrics (dashboard spec)

- **North star:** verified placements/month.
- Acquisition: visitors → assessment starts → enrollments; CAC by channel.
- Learning: enrollment → completion rate; project completion; attendance.
- Toolkit: CVs built; tailoring runs; median CV score before/after.
- Job engine: jobs matched/learner; applications sent; interview rate (interviews ÷ applications); time-to-first-interview post-graduation.
- Placement: placement rate within 3/6 months; salary uplift; employer repeat-hire rate.
- Revenue: MRR (subscriptions), tuition cash collected, placement fees; churn on subscriptions; credits burn.

---

## 14. Open questions & decisions needed

1. **Brand name + domain** (working title "SkillBridge" is a placeholder).
2. **Launch tracks** — recommendation: Data Analytics + Business Analysis (proven demand, employer hunger); confirm.
3. **Pricing workshop** — naira tuition number, subscription tiers, employer fee structure (flat vs %).
4. **Placement ops model for first 12 months** — founder-led concierge vs hiring a placement lead early.
5. **Deferred tuition (ISA-style)** — in or out of roadmap? (Requires legal + funding position.)
6. **Build vs buy for LMS** — custom (flexible, slower) vs Teachable/Graphy/Moodle wrapper (fast, generic) — recommendation: custom-lite LMS since verified projects/portfolio are core IP.
7. **Auto-apply appetite** — how aggressive post-legal review?
8. **Legal entity & jurisdiction** (NG-only at first; Delaware/Canada for USD contracting with employers?).

---

## Appendix A — Competitive feature matrix

| Feature | 10Alytics | RoboApply | GlobalReady | **SkillBridge (us)** |
|---|---|---|---|---|
| Instructor-led training tracks | ✅ 8-mo, ~$600 | ❌ | ❌ | ✅ installment-friendly |
| Self-paced / crash courses | ✅ | ❌ | ❌ | Planned (P2) |
| Virtual internship + verified portfolio | ✅ (manual) | ❌ | ❌ | ✅ platform-native |
| ATS CV builder + score | Partial (service) | ✅ | ✅ | ✅ auto-built from verified record |
| Per-job CV tailoring / job-fit check | ❌ | ✅ | ✅ | ✅ |
| AI cover letters | ❌ | ✅ | ✅ | ✅ |
| Interview practice / copilot | Human coaching | ✅ guide + live copilot | ✅ practice | ✅ practice (copilot later) |
| Job aggregation + matching | ❌ | ✅ | Partial (links) | ✅ verified-skill matching |
| Automated / assisted apply | ❌ | ✅ (core) | ❌ | Assisted (P1) → auto (P2, gated) |
| Application tracker | ❌ | ✅ | ✅ | ✅ |
| Employer marketplace / hiring side | ❌ | Enterprise only (white-label) | ❌ | ✅ core |
| Placement success fees | ❌ | ❌ | ❌ | ✅ |
| Local (₦) payments & installments | Partial | ❌ USD | ❌ EUR | ✅ |

## Appendix B — Pricing benchmarks (as researched Aug 2026)

- **10Alytics:** ~$600 per 8-month track (list ~$1,250), monthly plans, frequent discounts; ~$ Crash courses lower.
- **RoboApply:** $9/3-day trial; Basic $37–47/mo (20 apps/day, 4,000 credits); Standard $99–129/mo (100/day, 15k credits); Premium $389/mo (500/day, 50k credits); PAYG $0.01/credit; done-for-you $499 (intro; $999 list); enterprise from $999/mo.
- **GlobalReady:** Free (1 CV, preview); €1.99/7-day; €9.99/mo; €24.99/4-month; €69.99/yr.

## Appendix C — Sources
- 10alytics.io homepage & program pages (10alytics.io)
- 10Alytics LinkedIn company profile (70k+ trained; program structure; career support)
- ACTD accreditation page (actd.us/10alytics)
- RoboApply pricing & FAQ (roboapply.jobs/pricing, roboapply.jobs/faq)
- GlobalReady homepage & pricing (globalready.tech)
- Independent review: 10Alytics 2026 review (buttondown.com/flexoba); RoboApply review (jobcopilot.com)

---

*End of PRD v1.0 — feedback requested from engineering (feasibility/estimates), curriculum (track content), and legal (Sections 7C-09, 10, 11) before v1.1.*
