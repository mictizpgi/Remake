# 4. Module Definition Spec

**Status:** Draft for review | **Brief:** v2, Section 12 item 4

## 4.1 What a module is

A module (a suite) is a **versioned package with two halves**:

1. **A master workspace in Smartsheet.** The real sheets, reports, dashboard and form, with no client data. This is what gets copied.
2. **A definition file in the repository.** A short manifest that says what the master must contain, which values the platform reads, and what the portal shows.

Neither half is enough alone. The master is the only practical way to carry forms and dashboards (document 3, section 3.2). The definition is what lets the platform check a master before publishing it, check a copy after provisioning it, and know where to find each asset without anything being hard-coded.

**Adding Suite #2 means:** build its master workspace, write its definition file, publish. The provisioning engine, data model, sync and portal shell do not change. The portal's module page is rendered from the definition, so new portal code is only needed if a suite wants a layout the shell cannot express.

## 4.2 Versioning rules

- Versions follow `major.minor.patch`.
  - **Patch:** wording, formatting, a formula fix that changes no structure.
  - **Minor:** additive only. A new column, a new metric, a new report.
  - **Major:** anything that renames, removes or restructures.
- Each published version has its **own master workspace**, named with the version. Publishing freezes it. Work on the next version happens in a copy.
- A client instance is **pinned** to the version it was provisioned from. New clients get the latest published version.
- Publishing runs a **master lint**: the platform reads the master through the API and confirms it matches the definition (every asset present, every keyed column present, every metric key present, no formula errors, no sample rows, no partner branding strings). A master that fails lint cannot be published.

## 4.3 Definition format

One file per version at `modules/<key>/<version>/definition.yaml`.

| Section | Purpose |
|---|---|
| `module` | Key, display name, version, brand color token. |
| `master` | Smartsheet workspace ID of the frozen master. |
| `naming` | Pattern for the client workspace name. |
| `assets` | Every asset the copy must contain: a stable key, type, exact name in the master, and for sheets the columns the platform depends on. |
| `metrics` | The contract with the metrics sheet: key, label, unit, how to roll up across clients, whether it shows in the portal. |
| `sharing` | Which Smartsheet access level each platform role receives. |
| `seed` | Values written into the copy at provisioning time. |
| `portal` | What the client's portal page shows: welcome copy, link cards, progress tiles, next step. |
| `checks` | Post-copy verifications beyond the defaults. |
| `migrations` | For minor versions: the additive steps that move an instance from the previous version (document 6, question 5). |

## 4.4 Worked example: Challenge 1.0.0

```yaml
module:
  key: challenge
  name: SmartOps Pro Challenge
  version: 1.0.0
  color_token: suite.challenge        # resolves to #1A8C8A

master:
  workspace_name: "PGI 20 SmartOps Pro | Challenge | Master v1.0.0"
  workspace_id: TBD                    # assigned when the master is built

naming:
  workspace: "{client_name} | SmartOps Pro Challenge"

assets:
  - key: friction_log
    type: sheet
    name: "Friction Log"
    columns:                           # only the columns the platform depends on
      - { key: friction_id,   title: "Friction ID" }
      - { key: status,        title: "Status" }
      - { key: opp_score,     title: "Opportunity Score" }
      - { key: eligible,      title: "30-Day Eligible?" }
  - key: friction_form
    type: form
    on: friction_log
    name: "Log a Friction Item"
  - key: action_tracker
    type: sheet
    name: "30-Day Action Tracker"
    columns:
      - { key: type,          title: "Type" }
      - { key: pct_complete,  title: "% Complete" }
      - { key: est_impact,    title: "Estimated Impact ($)" }
      - { key: status,        title: "Status" }
  - key: metrics
    type: sheet
    name: "Metrics"
    columns:
      - { key: metric_key,    title: "Metric Key" }
      - { key: value,         title: "Value" }
  - key: quick_wins
    type: report
    name: "Top-Ranked Quick Wins"
  - key: active_actions
    type: report
    name: "Active 30-Day Actions"
  - key: snapshot
    type: dashboard
    name: "Operational Snapshot"

metrics:
  - { key: friction_logged,      label: "Friction items logged",  unit: count,   rollup: sum, portal: true }
  - { key: quick_wins_selected,  label: "Quick wins selected",    unit: count,   rollup: sum, portal: true }
  - { key: initiatives_active,   label: "Active initiatives",     unit: count,   rollup: sum, portal: false }
  - { key: completion_pct,       label: "Initiative completion",  unit: percent, rollup: avg, portal: true }
  - { key: est_impact_total,     label: "Estimated impact",       unit: usd,     rollup: sum, portal: true }
  - { key: avg_opp_score,        label: "Average opportunity score", unit: score, rollup: avg, portal: false }

sharing:
  portico_admin: ADMIN
  client_owner:  EDITOR
  client_member: EDITOR                # counts against the client's editor seats
  client_viewer: VIEWER

seed:
  - sheet: metrics
    set: { challenge_start_date: "{start_date}" }

portal:
  welcome: content/welcome.md          # "what happens in the next 30 days"
  links:
    - { asset: friction_form,  label: "Log a friction item",  primary: true }
    - { asset: action_tracker, label: "30-Day Action Tracker" }
    - { asset: snapshot,       label: "Operational Snapshot" }
  tiles: [friction_logged, quick_wins_selected, completion_pct, est_impact_total]
  next_step:
    label: "Book your review session"
    url: "https://zcal.co/michaelortiz/meet"

checks:
  - no_formula_errors: [metrics, friction_log, action_tracker]
  - metric_keys_present: true
```

The six metrics map directly onto the portfolio rollup in Section 8 of the brief:

| Rollup tile | Source |
|---|---|
| Total Clients | Count of `clients` (platform) |
| Active Challenges | Count of active Challenge `module_instances` (platform) |
| Friction Items Logged | Sum of `friction_logged` |
| Avg Challenge Completion % | Average of `completion_pct` |
| Total Estimated Impact | Sum of `est_impact_total` |
| Conversion to Engagement | Clients with status `converted` divided by clients whose Challenge has ended (platform) |

## 4.5 Golden master recommendation

**Recommendation: build a new master, `PGI 20 SmartOps Pro | Challenge | Master v1.0.0`, assembled from the best parts of the two existing workspaces. Neither existing workspace should be copied as is.**

What I inspected, read-only, on November 17, 2026:

| Workspace | Built | Shape | Strengths | Problems as a master |
|---|---|---|---|---|
| **Webinar Series** (`7436625580976004`) | March 2026 | One company's Challenge: 3 sheets, metrics sheet, 2 reports, dashboard | Right shape for one workspace per client. Dashboard layout is complete. | No column formulas; scores are typed or per-cell. About half the metrics are typed. Chart blocks are fixed at three initiatives. Sheets are named "Sheet 1", "Sheet 2", "Sheet 3". |
| **Challenge Program** (`3286731542816644`) | April 2026 | A cohort: registry of participants, shared inventory, tracker per participant, leader and participant dashboards | Better engineering: column formulas for Frequency Weight, Opportunity Score and Priority Rank, auto-numbered friction IDs, a description on every column, a clean metrics schema. | Cohort shape: many companies in one workspace, which you have ruled out. Contains "R4I Referral" as a picklist value and an "R4I Referral Rate" metric. A column is titled "Fricttion ID". |
| **Operational Maturity Series** (`3959729295779716`) | March 2026 | Three-session program | Wider than the Challenge | Different product. Not a candidate. |
| **Template Sets** (`2050799942559620`) | 2025 | Lean Suite and Student Health Center Suite folders | | Contains no Challenge assets. |

**What goes where:**

| From | Take | Becomes |
|---|---|---|
| Challenge Program | Friction Inventory sheet (its formulas, auto-number, column descriptions) | `Friction Log` in the master |
| Challenge Program | 30-Day Action Tracker (same columns as Webinar, plus descriptions) | `30-Day Action Tracker` |
| Challenge Program | Dashboard Metrics schema (name, category, value, unit, source) | `Metrics`, with a `Metric Key` column added |
| Webinar Series | Operational Snapshot Overview dashboard and its two reports | `Operational Snapshot`, `Top-Ranked Quick Wins`, `Active 30-Day Actions` |
| Challenge Program | Participant Registry, Challenge Tracker, Program Dashboard Metrics, Leader View | **Not copied to clients.** These are the Smartsheet version of the platform's client registry and portfolio rollup. Their columns informed the data model (client status journey, Path at Day 30, source channel). |

## 4.6 Hardening list before version 1.0.0 can be published

This is Phase 0 of the build plan. It is Smartsheet work, not code.

1. **One friction sheet, not two.** Today the Friction Log and the Prioritization Engine hold separate copies of the same items, and their statuses already disagree. Keep scoring, rank, recommended action and status on the Friction Log. Replace the Prioritization Engine sheet with the `Top-Ranked Quick Wins` report over that sheet.
2. **Every metric is a formula.** No typed values in `Metrics`. In the Webinar workspace, Overall Completion, High Severity, Needs Attention and all three chart blocks are typed, and the chart shows 65% and 20% where the tracker says 6.5% and 2%.
3. **Charts that work for any number of initiatives.** Drive the charts from a report or from the tracker itself, not from three fixed rows.
4. **Real links, not retyped text.** `Linked Friction Item` on the tracker should reference the Friction ID.
5. **A stable `Metric Key` column** on `Metrics`. Labels can then change freely without breaking sync.
6. **Clean names.** No "Sheet 1" prefixes, no client name inside any asset name, no session or topic numbering.
7. **No partner strings.** Remove "R4I Referral" and "R4I Referral Rate". Source channel moves to the platform's client record.
8. **Nothing client-specific on the dashboard.** No client name or logo typed into a widget, so the copy needs no dashboard edits (document 3 explains why this matters).
9. **Empty of data.** Sample rows live in a separate demo copy, never in the master.
10. **Fix typos that would be frozen into every client:** "Fricttion ID", "Imact Value".
11. **Decide the 30-Day Eligible rule and make it a formula.** The two workspaces state it differently (score of 5 or more in one, score of 4 or more with effort of 3 or less in the other).
12. **Brand pass.** The dashboard uses a different navy (`#0b347d`) and Arial. Move to the SmartOps Pro palette where Smartsheet allows.

## 4.7 Where the scoring logic lives

The Opportunity Score is Severity times Frequency Weight divided by Effort. **Recommendation: keep it in the sheet.**

- People working in the Friction Log need the score the moment they pick a severity. A platform-computed score would arrive minutes later through the API and would stop working the day a Connected client disconnects.
- The formula is simple enough that hiding it protects nothing.
- What does belong in the platform, and cannot be copied out of a sheet: cross-client benchmarks ("your completion rate is in the top third of manufacturers your size"), the portfolio rollup, the portal, version upgrades, and later AI summaries. Document 6, question 1 expands on this.
