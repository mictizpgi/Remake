# 8. MVP Build Plan

**Status:** Draft for review | **Brief:** v2, Section 12 item 8

## 8.1 Scope of the MVP

| In | Out (designed for, not built) |
|---|---|
| Challenge module only | Suite #2 |
| **Managed tier live** | Connected tier (OAuth). The connection table and tier branching exist from day one, so adding it does not disturb what is built. |
| Free trial with day-31 suspend or upgrade | Stripe billing |
| Admin console, client portal, portfolio rollup | Client self-serve signup, partner layer |
| Audit log | Template upgrades pushed to live clients |
| Offboarding for Managed | Per-client branding (theme tokens are in place) |

## 8.2 Phases

Effort is in **focused working days for you plus Claude Code**. These are rough. The spread reflects how much is unknown in each phase, and Phase 0 exists to shrink that spread.

| Phase | What gets built | Effort | Done when |
|---|---|---|---|
| **0. Master and proof** | Build the Challenge master to the hardening list (document 4, section 4.6). Create the Smartsheet service account. Run three throwaway scripts against the real API: copy the master, confirm every reference points at the copy, read the Metrics sheet. | 4 to 6 days, mostly Smartsheet work | A copied workspace has a correct dashboard with no hand edits. The three scripts pass. |
| **1. Foundation** | New repository, deployment pipeline, database schema with row-level security, sign-in (magic link, second factor for Portico), roles and permissions, theme tokens, empty console and portal shells, the cross-tenant isolation test. | 4 to 6 days | You can sign in to an empty admin console in production. The isolation test runs on every deploy. |
| **2. Registry and provisioning** | Client registry screens. Module catalog with Challenge 1.0.0 published. Provisioning engine as resumable steps. Live run status and retry in the console. Audit log entries. | 6 to 9 days | **First demo** (see 8.3). |
| **3. Portal and metric sync** | Portal page rendered from the module definition: welcome, link cards, progress tiles, booking link. Scheduled sync plus refresh button. Welcome and magic-link emails. | 4 to 6 days | A client user signs in and reaches every Challenge asset, and sees four tiles that match their Smartsheet dashboard. |
| **4. Portfolio rollup** | Cross-client view with the six tiles from the brief, filter by source channel, per-client drill-down, audit log viewer. | 2 to 3 days | One screen shows every client and the totals. |
| **5. Trial lifecycle and offboarding** | Trial-ending emails, day-31 suspend, upgrade (resume), Managed offboarding run with data export and access removal. | 3 to 5 days | A test client can be taken through trial, suspend, resume and offboard, entirely from the console. |
| **6. Pilot and hardening** | Two or three friendly clients on real trials. Fix what they hit. Error monitoring, uptime alert, backup restore drill, token rotation drill, a one-page runbook. | 4 to 6 days elapsed alongside real use | Three clients onboarded, each in under 15 minutes, with no manual Smartsheet rework. |
| **MVP total** | | **about 27 to 41 working days** | |

## 8.3 First demo milestone

**End of Phase 2.** In one sitting, on production:

1. Open the admin console and create a client named "Demo Manufacturing" with two contacts.
2. Assign the Challenge module on a free trial.
3. Click **Provision**.
4. Watch the steps complete on screen.
5. Open the new workspace in Smartsheet: correctly named, shared to the two contacts, dashboard live and showing zeros, form ready to submit.
6. Submit one friction item through the form and see the dashboard count become 1.
7. Open the audit log and see the whole run recorded.
8. Delete one step's record and re-run to show that provisioning resumes without creating a second workspace.

This proves the hardest and riskiest part of the platform before any portal polish is built. If Phase 0 or Phase 2 uncovers a blocker, it surfaces within the first three weeks.

## 8.4 Backlog by phase

**Phase 0**
- Build `PGI 20 SmartOps Pro | Challenge | Master v1.0.0`
- Merge Prioritization Engine into the Friction Log, replace with a report
- Rebuild Metrics with a `Metric Key` column, all formulas
- Rebuild charts so they do not depend on fixed rows
- Create the Friction Log form with the "no patient information" notice
- Create the Smartsheet service account, generate its token
- Spike 1: copy workspace through the API, inspect what came across
- Spike 2: verify cross-sheet references, report sources and dashboard widgets point at the copy
- Spike 3: read Metrics by key, share and unshare a user
- Record findings back into document 3

**Phase 1**
- Create repository, connect to hosting, set environment secrets
- Schema migrations for every table in document 2
- Row-level security policies and the isolation test
- Sign-in flows, second factor for Portico roles
- Seed roles, permissions and the default theme
- Layout shell with theme tokens, DM Serif Display and DM Sans

**Phase 2**
- Client list, create and edit screens
- Module catalog screen, definition loader, master lint
- Smartsheet client module: rate limiting, retry, logging
- Provisioning steps (document 3, section 3.4)
- Run status view with per-step result and a Retry button
- Audit log writes for every action

**Phase 3**
- Portal home rendered from the definition
- Metric sync job and refresh button
- Email templates: welcome, magic link
- Client Owner screen to invite and remove users, kept in step with Smartsheet shares

**Phase 4**
- Portfolio view and tiles
- Source channel filter
- Audit log viewer

**Phase 5**
- Trial expiry job and notices at day 23 and day 29
- Suspend and resume runs
- Offboarding run with export to file storage

**Phase 6**
- Pilot onboarding
- Monitoring and alerts
- Restore and rotation drills
- Runbook

## 8.5 Risks

| Risk | Likelihood | Impact | Response |
|---|---|---|---|
| **The copied workspace needs hand fixes** (a reference, chart or form does not come across cleanly) | Medium | High. It breaks the 15-minute promise. | Phase 0 spikes exist to find this first. The master is redesigned around whatever the API does reliably. |
| **Template hardening takes longer than planned** | Medium | Medium | It is Smartsheet work in your own area of expertise, and it is valuable even without the platform. |
| **Written permission to host client users is not on file** | Low, by your account | High for the Managed tier | Get it in writing before the pilot. Connected tier is the fallback and is already designed. |
| **A client user creates items and becomes a billable seat on Portico's plan** | Medium | Low to medium | Share as Editor only. Turn off auto-upgrade. Review provisional members before each true-up. |
| **Smartsheet changes the API** (it retired the `VIEWER` access value in October 2026) | Medium over a year | Medium | All Smartsheet calls go through one internal module. Subscribe to the API changelog. |
| **Rate limits when many clients share Portico's one token** | Low at MVP scale | Medium | One sheet read per client per sync. A shared limiter in the Smartsheet module. Document 3 has the arithmetic. |
| **Solo operator: you are the only person who can run it** | Certain | Medium | Managed services only, a runbook, and every operational action available as a button in the console. |
| **A healthcare client enters patient information** | Low | High | Healthcare clients are Connected only, form notice, contract language (document 5, section 5.6). Since Connected is not in the MVP, healthcare clients wait for it. |
| **Scope creep into Suite #2 or billing before the pilot** | Medium | Medium | The out-of-scope list in 8.1 is the agreement. |

## 8.6 After the MVP, in suggested order

| Item | Effort | Why this order |
|---|---|---|
| Connected tier (client OAuth, cross-account provisioning, revoke) | 6 to 10 days | Unlocks healthcare and clients already on Smartsheet. |
| Stripe billing tied to entitlements | 4 to 6 days | Worth it once trials are converting. |
| Suite #2 (QDIP is the smaller of the two partial builds: 4 sheets and a dashboard, against 16 sheets for Meeting) | 5 to 8 days, mostly master hardening | Proves the "definition and template only" claim on the easier case first. |
| Template upgrades with a diff and opt-in | 5 to 8 days | Needed once a second version of Challenge exists and clients are long-lived. |
| Per-client branding | 2 to 3 days | The theme layer is already there. |
| Consultant assignment, partner layer | 3 to 5 days each | Roles are data, so these are mostly screens. |
| AI assist | Scope separately | Touches the PHI boundary. |

## 8.7 What I need from you to start Phase 0

1. Approval of these documents, or changes.
2. The new repository (steps are in the conversation).
3. A decision on the 30-Day Eligible rule (document 4, hardening item 11).
4. A decision on merging the Prioritization Engine into the Friction Log (hardening item 1).
5. A Smartsheet service account on your plan.
