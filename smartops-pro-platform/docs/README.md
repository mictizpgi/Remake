# SmartOps Pro Platform: Phase 1 Design

**For:** Michael Ortiz, Portico Group, Inc.
**Responds to:** Design Brief v2 (November 17, 2026), Section 12
**Status:** Draft for review. No production code has been written.

## Documents

| # | Document | Brief item |
|---|---|---|
| 1 | [Architecture overview](01-architecture.md) | 12.1 |
| 2 | [Data model](02-data-model.md) | 12.2 |
| 3 | [Smartsheet integration design](03-smartsheet-integration.md) | 12.3 |
| 4 | [Module definition spec](04-module-definition-spec.md) | 12.4 |
| 5 | [Security model](05-security-model.md) | 12.5 |
| 6 | [Recommendations for the open questions](06-open-questions.md) | 12.6 |
| 7 | [Tier comparison](07-tier-comparison.md) | 12.7 |
| 8 | [MVP build plan](08-mvp-build-plan.md) | 12.8 |
| 9 | [Run-cost estimate](09-run-cost.md) | 12.9 |

Suggested reading order if time is short: 6, then 8, then 4.

## The design in ten lines

1. A small web app with a database and a job runner sits around Smartsheet. Smartsheet remains where the work happens.
2. Each suite is a **frozen master workspace** plus a **definition file**. Provisioning copies the master and checks the copy against the definition.
3. **Managed tier launches first.** Connected is designed in and built next.
4. The Challenge starts as a **30-day free trial**. On day 31 the client upgrades or access is removed.
5. **One workspace per client.** Isolation is enforced in the database and by per-workspace sharing.
6. The platform stores **numbers only** from client sheets, read from one `Metrics` sheet per client.
7. Client users sign in to the portal by **magic link**.
8. **Platform run cost is about $47 to $73 per month** at 5 to 25 clients.
9. **Managed adds no Smartsheet license cost per client**, because external editors on a Business plan are free Guests.
10. **MVP is roughly 27 to 41 focused working days**, with a first demo at the end of Phase 2.

## Decisions taken from your answers on November 17

| Topic | Your answer | How it is used |
|---|---|---|
| Challenge pricing | Free trial at first. Day 31: upgrade or lose access. | Trial subscription and time-boxed entitlement. Suspend run at day 31. |
| Workspace shape | One workspace per client, not a cohort. | One `module_instance` and one workspace per client. |
| Smartsheet plan | Business, with Enterprise available through a demo account. Hosting clients is not an issue. | Managed first. Free Guest seats for client editors. |
| Editors | 2 to 3 per client, more on higher tiers. | `editor_seats_included` on the subscription. |
| Control Center | Not ruled out. Reserved for the highest tiers. | The platform does its own provisioning. Control Center is not a dependency. |
| Repository | A new one, separate from the website. | These files are parked on a branch of `Remake` until it exists. |

## Where I pushed back on the brief

| Brief says | Recommendation | Where |
|---|---|---|
| The Challenge suite is built and proven. | The method is proven. The template is not yet ready to clone: metrics are partly typed, items are duplicated across two sheets, charts assume three initiatives. Hardening the master is Phase 0. | Doc 4, section 4.6 |
| Keep proprietary logic such as scoring in the platform. | Keep scoring in the sheet. Put benchmarks, rollups, the portal and upgrades in the platform. | Doc 6, question 1 |
| Recommend which existing workspace is the golden master. | Neither as is. Build a new master from the best parts of two. | Doc 4, section 4.5 |
| Onboarding with no manual Smartsheet rework. | One 30-second manual step remains: pasting the form link, because the API cannot read it. | Doc 3, section 3.6 |
| Adding Suite #2 requires no new platform code. | No changes to provisioning, data model or sync. Portal code only if a suite needs a layout the shell cannot express. | Doc 4, section 4.1 |
| Template upgrades pushed to existing clients. | Additive changes only, with opt-in. Forms, dashboards and automations cannot be changed through the API. | Doc 6, question 5 |
| The MVP should not handle PHI. | The platform never stores row text. Healthcare clients are Connected only, so they wait until Connected is built. | Doc 5, section 5.6 |

## What is verified and what is not

| Area | Basis |
|---|---|
| Your existing Smartsheet workspaces | Inspected read-only on November 17, 2026. Nothing was changed. |
| Smartsheet API capabilities | Official SDK source code read directly. Developer docs read through search extracts only. Nothing tested against a sandbox yet. |
| Smartsheet licensing | Search extracts of Smartsheet's help center and pricing pages. |
| Vendor pricing | Search extracts of each vendor's pricing page. |
| Everything marked "confirm in Phase 0" | Not yet tested. Doc 3, section 3.12 lists each check. |

## Decisions I need from you

1. Approve these documents, or tell me what to change.
2. **Merge the Prioritization Engine into the Friction Log?** (Doc 4, hardening item 1.) I recommend yes.
3. **Which 30-Day Eligible rule?** Score of 5 or more, or score of 4 or more with effort of 3 or less. (Doc 4, hardening item 11.)
4. **Paste the form link by hand, or build a portal intake form?** (Doc 3, section 3.6.) I recommend the paste for the MVP.
5. **May the platform keep a former client's numeric metrics** for portfolio totals and anonymous benchmarks? (Doc 7, retention table.) This is contract language.
6. Create the new repository and a Smartsheet service account.

One item to close on your side: written confirmation from Smartsheet that client users may be hosted on Portico's plan. You have told me this is not an issue, and the design assumes so. Smartsheet's public terms restrict resale without written authorization, so having it on file protects the Managed tier.
