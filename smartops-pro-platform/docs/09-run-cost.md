# 9. Run-Cost Estimate

**Status:** Draft for review | **Brief:** v2, Section 12 item 9

## 9.1 Bottom line

| | 5 clients | 25 clients | 100 clients |
|---|---|---|---|
| **Platform run cost per month** | **about $47** | **about $47 to $67** | **about $115 to $195** |
| Target in the brief | under $100 | | |
| Managed-tier Smartsheet licenses (separate) | $0 added per client | $0 added per client | $0 added per client |

The target of under $100 per month at 5 to 10 clients is met with room to spare. Cost is nearly flat up to roughly 40 clients, because every service sits inside its included allowance until then.

**How far to trust these numbers.** Prices were gathered on November 17, 2026 from search results that quote each vendor's own pricing page. The vendor sites could not be opened directly from this session, so each figure should be checked against the live page before you commit. Vendor prices also change. Treat this as a planning estimate.

## 9.2 Platform run cost by service

| Service | Plan | 5 clients | 25 clients | 100 clients | What moves the cost |
|---|---|---|---|---|---|
| Vercel (web app) | Pro, 1 seat | $20 | $20 | $20 to $25 | Pro is required: the free plan forbids commercial use. Includes $20 of usage, which this app will not exceed at these volumes. |
| Supabase (database, sign-in, files) | Pro | $25 | $25 | $25 | 8 GB database and 100,000 monthly users included. The platform stores little, so this stays flat. The free plan is unsuitable for production: it pauses after a week idle and has no backups. |
| Inngest (job runner) | Free, then Pro | $0 | $0 | $0 to $99 | Free covers 50,000 step executions per month. Hourly metric sync for 100 clients needs about 72,000, which crosses the line. See 9.3. |
| Resend (email) | Free, then Pro | $0 | $0 | $20 | Free covers 3,000 emails per month with a cap of 100 per day. Magic links for 100 clients' users will pass the daily cap. |
| Sentry (errors) | Developer, then Team | $0 | $0 to $26 | $26 | Free is one user. Move to Team when a contractor joins or volume grows. |
| Uptime check | Free tier | $0 | $0 | $0 | |
| Domain | | about $2 | about $2 | about $2 | A subdomain of smartopspro.io costs nothing extra. |
| **Total** | | **about $47** | **about $47 to $73** | **about $115 to $195** | |

## 9.3 The one cost that depends on a design choice

The job runner is the only line that jumps, and it jumps because of how often metrics are synced.

| Sync approach at 100 clients | Step executions per month | Job runner cost |
|---|---|---|
| Every hour, around the clock | about 72,000 | $99 (Inngest Pro) |
| Every hour in business hours, every six hours otherwise | about 28,000 | $0 |
| Every two hours, plus a "refresh now" button in the portal | about 36,000 | $0 |

**Recommendation:** business-hours cadence plus a refresh button. A 30-day Challenge does not need overnight freshness, and the button covers the moment a client wants to see a number move. That keeps the 100-client total near $115 per month.

If the platform outgrows the free allowance anyway, Trigger.dev at $10 to $50 per month is a drop-in alternative, because provisioning state is kept in the platform's own tables (document 1, section 1.6).

## 9.4 Managed-tier Smartsheet license cost (shown separately)

This is the cost of Portico's own Smartsheet plan when it hosts client workspaces. It is priced into the Managed tier, not into platform run cost.

| Item | Cost | Basis |
|---|---|---|
| Portico Business plan | $19 per Member per month billed annually, 3-Member minimum, so **$57 per month** as a floor | You already hold this plan. |
| Dedicated service account for the platform | $19 per month, or $0 if it uses one of the three minimum seats | Recommended in document 5 so the platform does not run as your personal login. |
| **Client editors (2 to 3 per client)** | **$0** | On Business and Enterprise plans, a person from a different email domain who is shared as Editor is a free **Guest**. |
| Client viewers | $0 | Free Contributor seat. |
| Form submitters | $0 | No seat and no login needed. |

**So Managed license cost does not grow with client count**, as long as three rules hold:

1. **Clients are shared as Editor, never Admin.** A Guest who creates a new sheet, report or dashboard becomes a Provisional Member on your plan, and is billed at the next true-up unless downgraded. Editors cannot create items, so the Editor level closes this off.
2. **Auto-upgrade of Provisional Members is turned off** in your Smartsheet Admin Center, and the list is reviewed before each true-up. Reconciliation is quarterly on annual billing.
3. **Portico stays on Business or Enterprise.** The Pro plan has no free Guest seat.

A free trial therefore costs Portico no Smartsheet license money. Its cost is the platform run cost above, shared across all clients.

### What I could not confirm

- **Written permission to host client users.** You told me hosting clients on your plan is not an issue, and I have designed on that basis. Smartsheet's public User Agreement and Acceptable Use Policy restrict resale without written authorization, and the partner agreement is not public. Having the permission in writing protects the Managed tier. This is your call, noted here once.
- **Control Center.** No public price. Third-party reports range widely. It is an add-on on Business and Enterprise, and its users must hold paid seats. Reserved for the highest tier as you said; not part of this estimate.
- **Enterprise pricing.** Quote only, 10-Member minimum.

## 9.5 Not included

- AI usage (excluded by the brief).
- Stripe fees, when billing is automated.
- Your time.
- One-time costs: none required. All services above start on monthly billing with no setup fee.

## 9.6 Cheaper and dearer alternatives considered

| Option | Monthly at 5 to 25 clients | Why not chosen |
|---|---|---|
| Recommended stack | about $47 | |
| Render (web service, worker, Postgres on one host) | about $20 to $45 | The runner-up. Slightly cheaper, but sign-in, row-level security helpers and file storage must be assembled by hand. More to maintain for one person. |
| Free tiers only (Vercel Hobby, Supabase Free) | $0 | Vercel's free plan forbids commercial use. Supabase's free plan pauses and has no backups. Fine for development, not for clients. |
| Clerk for sign-in in place of Supabase Auth | adds $0 to $25 | A second vendor holding user records, with no gain for magic-link sign-in. |
