# 7. Tier Comparison: Managed and Connected

**Status:** Draft for review | **Brief:** v2, Section 12 item 7

## 7.1 Summary

Both tiers run on the same engine. The difference is **whose Smartsheet account the workspace lives in**, which decides whose credential the platform uses and what Portico can enforce.

| | **Managed** | **Connected** |
|---|---|---|
| In the MVP | **Live** | Designed, built after the MVP |
| Workspace lives in | Portico's Smartsheet plan | Client's own Smartsheet plan |
| Best fit | Businesses new to Smartsheet. Free-trial Challenges. | Clients already on Smartsheet. Healthcare. Anyone whose IT wants data in their own account. |
| Portico can enforce access | Yes | No. The client's admin has the final say. |

## 7.2 What changes, area by area

### Authentication

| | Managed | Connected |
|---|---|---|
| Credential | One token for Portico's service account | OAuth grant from a named user at the client |
| Setup by the client | None | One click-through consent screen. Their IT may want to review the scopes first. |
| Lifetime | Until Portico rotates it | 7-day access token, refreshed automatically. Ends if the client revokes, or if their admin enforces a token expiry. |
| Failure mode | Portico's token problem affects every Managed client at once | One client's problem affects only that client |
| Region | Portico's | Per client (US, EU, AU are separate) |

### Provisioning

| | Managed | Connected |
|---|---|---|
| Copy performed by | Portico's service account | The client's authorizing user, through their token |
| Source | Master in Portico's account | Same master, shared temporarily to the client's user so their token can copy it. **Unverified: needs a test before build.** |
| Owner of the result | Portico's service account | The client's user |
| Seat impact | None on Portico's plan, provided clients are Editors | The authorizing user needs a paid seat on the client's plan, since they will own sheets |
| Sharing | Platform shares to client users. Fully controlled. | Platform asks Smartsheet to share. The client's Safe Sharing policy may block or change it. |
| Fallback if API copy across accounts fails | Not needed | **Adopt mode:** the client uses "Save as New" on a shared master by hand, and the platform then finds and records the assets by name. Adopt mode also brings existing hand-built clients onto the platform. |
| Form link step | Admin pastes it | Client's user or admin pastes it |

### Metric sync

| | Managed | Connected |
|---|---|---|
| Token used | Portico's, shared by all Managed clients | The client's own |
| Rate limit | Shared 300 per minute across all Managed clients | 300 per minute for that client alone |
| If access is lost | Does not happen without Portico's action | Sync stops. Portal shows "connection needed" with a reconnect button. Numbers are shown as of the last good read. |
| Webhooks (post-MVP) | Stable | Permanently disabled if the client revokes the app. Must be recreated after reconnecting. |

### Offboarding

| | Managed | Connected |
|---|---|---|
| Trigger | Trial ends without upgrade, or cancellation | Cancellation, or the client revokes the connection |
| Day 31 of a free trial | Client shares removed. Portal shows upgrade page. Workspace kept for the retention window. | Sync stops. Portal shows upgrade page. Workspace is theirs and is not touched. |
| Final offboarding | Export sheets to Excel, deliver a download link, remove shares, delete the workspace after admin confirmation | Revoke the token, delete stored tokens, stop sync |
| What the client keeps | The export | Their whole workspace and data |
| "Go independent" path | If they buy their own Smartsheet plan, ownership of the workspace can be handed over by hand in Smartsheet, and they become Connected. No API exists for this. | Already independent on the Smartsheet side |
| What stops | Everything | Portal, benchmarks, rollup inclusion, upgrades, support |

### What the platform retains after offboarding

| Data | Managed | Connected |
|---|---|---|
| Client record, contacts, dates, tier, source channel | Kept (business record) | Kept |
| Audit log entries | Kept | Kept |
| Numeric metric snapshots | Kept, for portfolio totals and anonymous benchmarks, **if the contract allows** | Kept **only if the contract allows**, otherwise deleted at offboarding |
| Smartsheet tokens | Not applicable | Deleted immediately |
| Asset IDs and links | Kept for 90 days, then cleared | Cleared at offboarding |
| Export file | Deleted 30 days after delivery | Not applicable |
| Row content from sheets | Never held | Never held |

The contract language for retained metrics is a decision for you and your counsel. The platform supports both answers through a per-client setting.

### Entitlements and pricing shape

| | Managed | Connected |
|---|---|---|
| Setup fee | Lower | Higher (template license) |
| Monthly | Higher, all-in | Lower (platform and support) |
| Free trial | Natural fit. No license cost to Portico. | Possible, but the client needs a Smartsheet plan first |
| Editor seats | Limit set by Portico per plan (2 to 3 to start) | Limit is the client's own business |
| When the entitlement ends | Access is removed by the platform | Platform features stop. The templates stay in their account, which is why they are licensed by contract, not protected by software. |

### Security and data

| | Managed | Connected |
|---|---|---|
| Client operational data sits in | Portico's Smartsheet plan | Client's Smartsheet plan |
| Healthcare clients | **Not offered** | **Required** |
| Isolation between clients | One workspace per client, shared per workspace | Separate accounts entirely |
| Who administers Smartsheet users | Portico, through the platform | Client. The platform reports drift. |

## 7.3 Which tier first

**Managed.** Three reasons:

1. **It fits the funnel.** The Challenge starts as a free trial for businesses that mostly do not have Smartsheet. Connected would require them to buy a plan before the trial.
2. **It is the smaller build.** One token, no consent screens, no cross-account copy, full control over access.
3. **It costs nothing extra in licenses**, because external editors on a Business plan are free Guests (document 9).

What Managed first postpones: healthcare clients, and clients already on Smartsheet who want data in their own account. Both wait for Connected, which is the first item after the MVP.

## 7.4 What makes Connected cheap to add later

These are built in the MVP even though only Managed is live:

- `hosting_tier` on the client and a `smartsheet_connections` table with both credential types.
- Every job resolves its token through the connection record, never from a global setting.
- Suspend and offboard are written as tier-aware runs from the start.
- The portal already has a "connection needed" state.
- Asset discovery by name, which is the core of adopt mode.
