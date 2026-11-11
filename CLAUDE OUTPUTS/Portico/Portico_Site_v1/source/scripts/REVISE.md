# Revision brief: remove repetition inside each case study

Work in `/tmp/claude-0/-home-user-Remake/dec885d1-f257-5065-90a7-f5747c9306f5/scratchpad/web` (WEB). Read `scripts/BRIEF.md` (the original rules still apply) and `src/content/types.ts` first.

## The problem the client found
On the care-at-home page, the first data section ("Orientation invitations went out by hand…") listed the same points the "The challenge" paragraph had just said. Readers see the approach section (thesis, path, challenge, approach), the 3 reasons, the 4 headline tiles, then the data sections. **Nothing should be said twice across those.**

## Worked example (already fixed — read it)
`src/content/studies/care-at-home-onboarding.ts`. What changed:
- The section-1 list repeated the challenge. Its two *new* specifics (a hire arrived without clearance; another missing a document; missed orientations on another manual list) were folded into `approach.challenge`, and the list section was deleted.
- Section 3 repeated reason 3 (checklists stay in the training platform). The detail went into the reason's text; the section kept only the genuinely new "where it fits" content.
- The status line moved into `facts` as a "Status" row.

## For each of your slugs
1. Read the content file and the original `../live/case-studies/<slug>.html`.
2. Find every repetition between: `approach.challenge` / `approach.approach` / `path` / `reasons` / `headline` / section titles / section blocks / `facts` / `closing`. Same point in different words counts.
3. Keep each point once, in the most visual place (chart, table, stat card, headline tile beat text). Fold any genuinely new specifics into the paragraph that keeps the point, then delete the repeat.
4. If a section becomes empty or thin (one short line), merge it into a neighbour or delete it. Keep at least 1 section; `{ type: "facts" }` must still appear once (move it to the first remaining section's `side`).
5. Do not change: `h1`, `audience`, `ctaQuestion`, `seo`, `headline` numbers, `hero`, `slug`. Do not invent anything. Keep the client's own wording.

## Checks (both must pass after your edits)
- `python3 -I scripts/check-study.py <slug>` → `MISSING: none`, `ADDED: none`.
- `npx tsc --noEmit --ignoreConfig --strict --skipLibCheck --target es2022 --module esnext --moduleResolution bundler src/content/studies/<slug>.ts` → no errors.

Edit only your slugs' files. Report per slug, in 2–4 short lines: what repeated, what you kept where, what you deleted.
