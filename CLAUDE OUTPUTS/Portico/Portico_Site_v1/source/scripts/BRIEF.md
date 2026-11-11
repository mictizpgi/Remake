# Brief: convert Portico case studies into the new content format

Portico Group (porticogroup.co) is Michael Ortiz's operations consulting firm. Its case study pages are being redesigned. The page template is already built; your job is **content only**: turn an original case study page into one TypeScript content file.

Work in: `/tmp/claude-0/-home-user-Remake/dec885d1-f257-5065-90a7-f5747c9306f5/scratchpad/web` (call it WEB).

## Inputs
- Original page: `../live/case-studies/<slug>.html` (relative to WEB). Read the `<head>` (title, description, og:image, JSON-LD headline) and `<main>` fully, including every figure (`sig-fig`, `app-frame`, `dash-mock`): figure numbers are data too.
- Format (read first): `src/content/types.ts`.
- Worked example (read closely, mirror its tone and density): `src/content/studies/hospital-evs-patient-flow.ts`. Compare it with `../live/case-studies/hospital-evs-patient-flow.html` to see how an original became the new format.
- Publish dates: `../live/sitemap.xml` `<lastmod>` for that page → `datePublished`. `dateModified` = "2026-11-11".

## Output
Write `src/content/studies/<slug>.ts` (same shape as the example: `import type { CaseStudy } from "../types"`, `const study: CaseStudy = {...}`, `export default study`). Touch no other file.

## Hard rules
1. **Keep every number** from the original `<main>` (stats, body, figures, facts). Each number appears **once** on the new page; pick the single best place for it (headline tile, reason, chart, table cell, stat card, or text).
2. **Invent nothing.** No new facts, numbers, names, clients, outcomes or claims. You may rearrange, shorten and merge the original sentences. If something is ambiguous, keep the original wording.
3. **The client's voice matters most in `approach`.** `approach.challenge` and `approach.approach` should be built from the original's own sentences (first person "we"/"I" as the original uses), lightly trimmed. `approach.thesis` + `approach.accent` = the original's central insight, in its own words where possible (accent is the key half, shown in coral).
4. **Headings are plain sentences** that state the point ("Rooms here waited longer for a housekeeper than the regional average"), never clever labels ("The road ahead"), never "Situation/Problem/Action".
5. **Limits:** 1–3 `sections`; ≤ 6 table rows; ≤ 5 list items; ≤ 3 stat cards per block; text blocks ≤ 2–3 lines; only `<b>` tags inside text. Table cells ≤ ~12 words.
6. **Show, don't write.** Prefer `bars`, `stack`, `table`, `stats`, `image` over `text`. Turn the original figure into the matching block (before/after bars → `bars` or `stack`; a list of problems and fixes → `table`). A `stats` card `n` must fit on one line (e.g. "21 min", "$400K", "5 of 6"); put the comparison in `tag` ("was 39 min", "vs. 2022").
7. `headline`: exactly the original's 4 hero stats, as numbers the ticker can count to (`value`, `prefix`, `suffix`, `decimals`). `label` lower-case, `tag` says what it's per/compared to.
8. `reasons`: exactly 3, the strongest supporting results not already in `headline`.
9. `hero`: the original hero image file name (under assets/img) and its exact alt text. App screenshots in `app-frame` figures become an `image` block with the original alt.
10. `path`: only if the story has a real sequence of 3–6 steps described in the original; otherwise omit it.
11. `facts`: the original sidebar `dl` (Client, Scope, Partners, Approach, Timeline...). Drop "Approach" if the approach section already covers it. Use `{ type: "facts" }` once, usually as `side` of the first section.
12. `seo.title`: "<Industry topic> Case Study: <original short title> | Portico Group" (e.g. "Hospital Patient Flow Case Study: Clean Rooms, Sooner | Portico Group"). Keep the original meta description unless it lacks the topic phrase. `seo.headline` = original JSON-LD headline. `keywords`: original keywords plus 4–6 terms a buyer would search, all supported by the page's text.
13. `audience`: who would buy this, from the page's own context ("manufacturing operations leaders", "healthcare HR leaders").
14. `closing`: one short line from the original's closing callout, if it has one.
15. No "Where else it works" section unless it carries concrete content; if it does, it can become a short `list`.

## Check before you finish (both must pass)
- `python3 -I scripts/check-study.py <slug>` → `MISSING: none`. `ADDED` must be none, or only numbers you can justify as layout (explain each in your report).
- `npx tsc --noEmit --strict --skipLibCheck --target es2022 --module esnext --moduleResolution bundler src/content/studies/<slug>.ts` → no errors.

## Report back (short)
For each slug: the check result, the h1, the 3 section titles, anything from the original you were unsure how to place, and any judgment call a reviewer should look at.
