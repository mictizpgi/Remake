# 5. Security Model

**Status:** Draft for review | **Brief:** v2, Section 12 item 5

## 5.1 Roles

| Role | Scope | Can do |
|---|---|---|
| **Portico Admin** | All clients | Everything: clients, modules, template versions, provisioning, offboarding, rollups, audit log. |
| **Portico Consultant** (future) | Assigned clients only | View and support assigned clients, trigger a metric refresh, view their audit entries. Cannot create clients, publish templates or offboard. |
| **Client Owner** | Own client | View portal, progress and results. Invite and remove their own users, within the seat limit. |
| **Client Team Member** | Own client | View portal: getting started, links, progress. |

Roles map to permissions through data (document 2), so a Partner role or a read-only Executive role is added by inserting rows.

## 5.2 Permission matrix (MVP)

| Permission | Admin | Consultant | Client Owner | Team Member |
|---|:-:|:-:|:-:|:-:|
| Create or edit a client | Yes | | | |
| Assign modules and entitlements | Yes | | | |
| Trigger provisioning, suspend, offboard | Yes | | | |
| Publish a template version | Yes | | | |
| View portfolio rollup | Yes | Assigned only | | |
| View a client's portal | Yes | Assigned only | Own | Own |
| Manage client users | Yes | | Own | |
| Trigger metric refresh | Yes | Assigned only | Own | |
| View audit log | Yes | Assigned only | | |

## 5.3 Two layers of access, kept in step

A client user has access in two places, and the platform is the single place both are managed.

1. **Portal access** is a `memberships` row.
2. **Smartsheet access** is a share on the client's workspace.

When an admin or Client Owner adds or removes a user, the platform changes both. When a trial ends, the platform removes the shares and marks the instance suspended in one run, with the result recorded in the audit log.

In the Managed tier the platform can enforce this, because Portico owns the workspace. In the Connected tier the client's own Smartsheet admin has the final say, so the platform records what it asked for and reports drift instead of pretending to control it.

## 5.4 Isolation

| Layer | Control |
|---|---|
| Database | Row-level security on every client-owned table, default deny (document 2, section 2.4). |
| Application | Every query in portal code runs as the signed-in user, so RLS applies. No portal route uses the service credential. |
| Smartsheet, Managed | One workspace per client. Shares are per workspace, never at folder or account level. Client users are never added to a Portico-wide group. |
| Smartsheet, Connected | The workspace lives in the client's account. The platform holds a token that reaches only what that client authorized. |
| Links | The portal shows only links from `instance_assets` rows the user's client owns. Smartsheet's own sharing is the second lock: a leaked link still needs a share to open. |
| Dashboards | Shared to named users. Not published with "anyone with the link", because a published link needs no login and has no isolation at all. |
| Testing | Automated cross-tenant test on every deploy: client A's session must get zero rows of client B from every table and every portal route. |

## 5.5 Secrets

- **Smartsheet tokens** (Portico's service token and each Connected client's OAuth tokens) are encrypted in the application with a key held in the hosting provider's secret store, then stored as ciphertext. A database dump alone does not expose them.
- **No token is ever sent to the browser.** All Smartsheet calls are made from server-side jobs.
- **Nothing secret is in the repository.** A `.env.example` lists variable names only. Secret scanning runs on every push.
- **The Portico service token belongs to a dedicated Smartsheet user** (a service account such as `platform@...`), not your personal login. That keeps your personal sheets out of reach of the platform and lets the token be rotated without touching your own access.
- **Rotation:** the service token is rotated on a schedule and immediately on any suspicion. OAuth refresh happens automatically. Revoking a Connected client is a single action that deletes the stored tokens and calls Smartsheet's revoke endpoint.
- **Least privilege:** OAuth scopes requested from Connected clients are limited to what provisioning and metric sync need (document 3 lists them).

## 5.6 The PHI boundary

**The platform does not handle protected health information (PHI), and it is built so it never needs to.**

What makes that statement checkable:

1. **The platform database stores no free text from client sheets.** Metric sync reads numbers from one metrics sheet per instance and stores numbers. Friction descriptions, initiative names, owners and notes stay in Smartsheet.
2. **Portal pages show counts, percentages and dollar totals**, plus links into Smartsheet. They do not render row content.
3. **Logs and error reports are scrubbed** of request and response bodies from Smartsheet.

What software cannot guarantee, and how it is handled instead:

- A person at a healthcare client can type a patient detail into a friction description. The data then sits in Smartsheet, not in the platform. For that reason:
  - **Healthcare clients (`handles_phi` = true) are Connected tier only**, so any such data sits in their own Smartsheet account under their own agreements, never in Portico's plan.
  - The Friction Log form carries a plain notice: "Do not enter patient names or patient information."
  - The client agreement states that the Challenge is for operational friction, not patient data.
- **AI assist (post-MVP) would read row text.** It must be designed as pass-through processing with nothing stored, and it stays off for `handles_phi` clients unless a proper agreement is in place. This is the one planned feature that touches the boundary, so it is called out now.

## 5.7 Audit log

Recorded for every state-changing action: who, when, what, which client, and the outcome.

- Client created, edited, suspended, offboarded
- Module assigned, entitlement changed
- Provisioning run started, each step result, run finished or failed
- User invited, removed, role changed
- Smartsheet connection created, refreshed, revoked
- Template version published or retired
- Sign-in events for Portico roles

The table is append-only at the database level. No role, including Portico Admin, has update or delete rights on it.

## 5.8 Portico account protection

The Portico Admin login is the highest-value target in the system, since it can reach every client. It requires a second factor from day one. Client users sign in by magic link (document 6, question 3).
