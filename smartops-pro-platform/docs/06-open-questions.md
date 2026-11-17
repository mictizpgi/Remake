# 6. Recommendations for the Open Questions

**Status:** Draft for review | **Brief:** v2, Section 11 and Section 12 item 6

## Summary

| # | Question | Recommendation |
|---|---|---|
| 1 | Hosting tiers | Launch Managed. Build Connected first after the MVP. |
| 2 | Copy vs. build from definition | Copy the master. Keep a definition file beside it for checking and for the portal. |
| 3 | Portal auth | Magic link. Second factor for Portico. SSO later for enterprise. |
| 4 | Metrics sync | Scheduled pull of one sheet per client, plus a refresh button. |
| 5 | Template upgrades | Pin clients to a version. Additive upgrades only, with a drift check and opt-in. |
| 6 | Tech stack | Next.js on Vercel, Supabase, Inngest. Runner-up: one app on Render. |
| 7 | Run cost | About $47 per month at 5 clients, $47 to $73 at 25, $95 to $195 at 100. |
| 8 | Entitlements | Per client, per module. Seats as a limit on the subscription, not a billing unit. |
| 9 | Theming | Theme tokens in the portal. Smartsheet dashboards stay on one SmartOps Pro look. |

---

## 1. Hosting tiers

**How auth and provisioning differ.** Managed uses one Portico service-account token; the service account owns every client workspace. Connected uses an OAuth grant from a user at the client; that user owns the workspace. Everything after "which token" is the same code. Document 7 has the full comparison.

**Which tier first: Managed.** It matches a free trial for businesses new to Smartsheet, it is the smaller build, and it adds no license cost because external editors on a Business plan are free Guests.

- Tradeoff: healthcare clients and clients who want data in their own account wait for Connected.

**Keeping the Connected subscription worth paying for.** I recommend against moving scoring out of the sheets. The Opportunity Score is Severity times Frequency Weight divided by Effort. Hiding it protects nothing, and moving it makes the sheet slower and breaks it on disconnect. The recurring value should be things a client cannot take with them:

| Stays in the sheet (licensed once) | Lives in the platform (subscription) |
|---|---|
| Scoring formulas | Benchmarks against other clients of similar size and industry |
| Sheet structure, form, dashboard | The portal: one front door, progress, next steps |
| Reports | Portfolio view for multi-site clients |
| | Template upgrades as the method improves |
| | AI summaries of friction themes (later) |
| | Coaching and support, booked through the portal |

- Tradeoff: a Connected client who cancels keeps a fully working Challenge workspace. That is the honest version of "go independent", and it is what the brief asks the platform to make feel real.

**Offboarding and retention.** Managed: export, remove access, delete. Connected: revoke, stop sync, leave their workspace alone. The platform keeps the client record and audit trail in both cases, and keeps numeric metrics only where the contract allows. Document 7, section 7.2.

## 2. Workspace copy vs. build from definition

**Recommendation: copy, with a definition file as the contract.**

The API cannot create forms, dashboards or automations (document 3, section 3.2). A code-only template would arrive without the three things clients see first. So the master workspace is copied, and a short definition file states what the master must contain.

| | Copy the master | Build from code | **Copy plus definition (recommended)** |
|---|---|---|---|
| Forms, dashboards, automations | Yes | Not possible | Yes |
| You can improve the template in Smartsheet, where you are fastest | Yes | No | Yes |
| Versioning | Weak alone: a workspace has no version | Strong | Strong: one frozen master per version, checked against its definition |
| Upgrades to live clients | No help | Would be ideal, but not possible | Additive steps written into the definition |
| Catches a broken master before clients get it | No | | Yes, through the lint at publish |

- Tradeoff: two things to keep in step, the master and its definition. The lint makes a mismatch impossible to publish.

## 3. Portal auth

**Recommendation: magic link by email. A second factor is required for Portico roles.**

| Option | Verdict |
|---|---|
| **Magic link** | **Recommended.** No password to manage or leak. Works for every client on day one. Fits users who visit a few times a month. |
| Tie to Smartsheet identity | Not recommended. Smartsheet sign-in as an identity provider would require every portal user to have a Smartsheet account before they can see the "getting started" page, and it ties portal access to a Smartsheet session. |
| SSO (Microsoft, Google, SAML) | Later, for enterprise Connected clients who require it. The auth layer supports adding it without changing the role model. |

- Tradeoff: client editors sign in twice, once to the portal and once to Smartsheet. That is unavoidable while Smartsheet is the engine. The portal's welcome page says so plainly and walks a new user through creating their free Smartsheet login with the same email.
- Tradeoff: magic links depend on email arriving. Links are short-lived and single-use, and the sending domain is set up properly so they do not land in spam.

## 4. Metrics sync

**Recommendation: scheduled pull, one sheet per client, with a refresh button.** Hourly in business hours while a Challenge is active, every six hours otherwise.

- One API call per client per cycle. At 100 Managed clients that is about 100 calls spread over several minutes, against a limit of 300 per minute.
- Webhooks are deferred. They are per sheet, their callbacks carry no data so a read is still needed, and a Connected client revoking access disables them permanently.
- Tradeoff: numbers can be up to an hour old. The portal shows the "as of" time, and the refresh button covers the moment someone wants to see a number move.

Document 3, section 3.9 has the comparison table.

## 5. Template upgrades

**Recommendation: pin, then upgrade additively and by choice.**

1. **Every client is pinned** to the version they were provisioned from. Publishing a new version changes nothing for existing clients.
2. **New clients get the latest version** automatically. This alone delivers most of the value: improvements stop being lost.
3. **Minor versions carry migration steps** in their definition: add a column, add a column formula, add a metric row, add a report. All of these the API supports.
4. **Before upgrading a client, the platform runs a drift check**: it compares their sheets to the definition they were provisioned from and lists anything they changed (renamed or deleted columns, changed formulas).
5. **The admin sees a diff** (what the new version adds, what the client has customized, any conflicts) and the client **opts in**.
6. **Changes that cannot be made through the API** (form layout, dashboard widgets, automations) are listed as a short manual checklist for that client, or left as they are.
7. **Major versions are never pushed.** A client who wants one gets a new workspace beside the old one, and data is moved across deliberately.

- Tradeoff: live clients do not get dashboard or form improvements automatically. This is a limit of the Smartsheet API, not a design choice. For a 30-day Challenge it rarely matters, since most clients finish on the version they started. It matters more for long-lived suites such as Meeting and QDIP, which is one more reason upgrades are built after the MVP, when there is a second version to learn from.
- Rule that makes this safe: an upgrade never deletes or renames anything in a client's sheet.

## 6. Tech stack

**Recommendation**

| Layer | Choice |
|---|---|
| Web app | Next.js with TypeScript, hosted on Vercel |
| Database, sign-in, file storage | Supabase (Postgres) |
| Background jobs and schedules | Inngest |
| Email | Resend |
| Monitoring | Sentry, plus an uptime check |

Why this fits a solo operator building with Claude Code:

- **Nothing to patch or keep running.** Every piece is a managed service.
- **Tenant isolation is enforced by the database**, not only by application code, which is the non-negotiable in the brief.
- **Resumable multi-step jobs come built in.** The provisioning requirement (idempotent, recoverable halfway) is what Inngest is designed for.
- **The most widely used tools in their class**, so documentation, examples and Claude Code's own familiarity are as good as they get. Boring and reliable.
- **Push to deploy, with a preview link for every change**, so you can review before anything reaches clients.

**Runner-up: one application on Render** (a web service, a background worker and managed Postgres on one host), with a Postgres-backed job queue.

- Why it is attractive: one vendor, one bill, a worker with no time limits, and slightly lower cost.
- Why it is second: sign-in, row-level security wiring, file storage and resumable jobs each have to be assembled and maintained by hand. That is more surface for one person to own, in exchange for saving about $20 per month.

- Tradeoff of the recommendation: five vendors instead of one. Each is replaceable, because provisioning state and all business data live in the platform's own Postgres tables.

## 7. Hosting and run cost

| | 5 clients | 25 clients | 100 clients |
|---|---|---|---|
| Platform run cost per month | about $47 | about $47 to $73 | about $95 to $195 |
| Added Smartsheet license cost for Managed | $0 per client | $0 per client | $0 per client |

The target of under $100 per month at 5 to 10 clients is met. Document 9 has the breakdown, the assumptions, and the caveat that prices were gathered from search results and should be confirmed on the vendors' own pages.

## 8. Entitlements

**Recommendation: per client, per module. Seats are a limit, not a billing unit.**

| Layer | What it holds |
|---|---|
| **Subscription** (one per client) | Plan, status (`trial`, `active`, `past_due`, `canceled`), trial end date, setup fee, monthly price, editor seats included |
| **Entitlement** (one per client per module) | Active or not, start and end dates, how it was granted (trial, subscription, manual) |

- The one question the code ever asks: "does this client have an active entitlement to this module today".
- A free trial, a paid plan, a second suite, and both tiers are all expressed with these two records (document 2, section 2.5).
- Setup fee and monthly price are recorded per client from the start, so the data is ready when Stripe is added.
- Editor seats are enforced when a Client Owner invites users. Higher plans raise the number.
- Tradeoff: no per-seat pricing in the MVP. If you later want to charge per editor, the seat count is already stored and billing can read it.

## 9. Theming

**Recommendation: per-client branding applies to the portal. Smartsheet dashboards keep one SmartOps Pro look.**

**Portal**

- Every color, font and logo comes from a **theme record** of named tokens (`color.brand`, `color.accent`, `color.suite.challenge`, `font.heading`, `font.body`, `logo`).
- The SmartOps Pro default theme holds the values from the brief: Navy `#1C2B4A`, Coral `#CF5B42`, Challenge Teal `#1A8C8A`, DM Serif Display, DM Sans.
- A client theme is a second record that overrides only the tokens it sets. Turning on client branding later is a settings screen: upload a logo, pick two colors.
- A contrast check rejects color pairs that would make text unreadable.
- "SmartOps Pro" stays visible in the footer of a client-branded portal.

**Smartsheet dashboards**

- The API cannot edit dashboard widgets or replace images (document 3, section 3.2), so per-client dashboard branding cannot be automated.
- Smartsheet's own account-level branding (logo and colors) is a Business and Enterprise feature and applies to the whole account. In the Managed tier that account is Portico's, so it carries SmartOps Pro branding for everyone. In the Connected tier the client's own account branding applies automatically, which is the right outcome.
- Tradeoff: a Managed client who wants their logo on the Smartsheet dashboard needs it placed by hand, about ten minutes of work. I would offer that as a paid option on higher tiers, not as a platform feature.
