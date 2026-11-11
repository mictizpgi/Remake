// Builds one plain HTML file per case study at its current URL (case-studies/<slug>.html).
// Each file carries the full text, headings, search tags and structured data, plus the shared
// app script and stylesheet that add the animations, chart hover and theme switch.
//
// usage: node scripts/prerender.mjs [--preview]
//   --preview  leaves out the Google Analytics tag (for review links, so test visits aren't counted)
import fs from "node:fs"
import path from "node:path"
import { renderStudy, studies } from "../dist-ssr/entry-server.js"

const PREVIEW = process.argv.includes("--preview")
const SITE = "https://porticogroup.co"
const OUT = "site"
const GA = "G-WE0ZEXKN9B"

const shell = fs.readFileSync("dist/index.html", "utf8")
const assetTags = [...shell.matchAll(/<(script type="module"[^>]*><\/script>|link rel="stylesheet"[^>]*>)/g)].map((m) => `<${m[1]}`)
if (assetTags.length < 2) throw new Error("app script/stylesheet not found in dist/index.html")

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")

function head(study, root) {
  const url = `${SITE}/case-studies/${study.slug}.html`
  const img = `${SITE}/assets/img/${study.seo.image}`
  const t = esc(study.seo.title), d = esc(study.seo.description)
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: study.seo.headline,
        description: study.seo.description,
        image: img,
        url,
        mainEntityOfPage: url,
        articleSection: "Case studies",
        keywords: study.seo.keywords,
        datePublished: study.seo.datePublished,
        dateModified: study.seo.dateModified,
        author: { "@type": "Person", "@id": `${SITE}/#michael`, name: "Michael Ortiz", url: `${SITE}/#about`, sameAs: ["https://www.linkedin.com/in/ortizmichael"] },
        publisher: { "@type": "Organization", "@id": `${SITE}/#org`, name: "Portico Group, Inc.", logo: { "@type": "ImageObject", url: `${SITE}/assets/img/portico-logo.png` } },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Results", item: `${SITE}/#results` },
          { "@type": "ListItem", position: 3, name: study.seo.headline, item: url },
        ],
      },
    ],
  }
  const ga = PREVIEW ? "" : `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA}');</script>
    `
  return `${ga}<title>${t}</title>
    <meta name="description" content="${d}">
    <link rel="canonical" href="${url}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Portico Group">
    <meta property="og:title" content="${t}">
    <meta property="og:description" content="${d}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${img}">
    <meta property="og:locale" content="en_US">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${t}">
    <meta name="twitter:description" content="${d}">
    <meta name="twitter:image" content="${img}">
    <script type="application/ld+json">${JSON.stringify(ld, null, 1).replace(/</g, "\\u003c")}</script>
    <link rel="icon" href="${root}assets/img/portico-logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
    <script>var r=document.documentElement,v=r.getAttribute('data-theme'),t=null;try{t=localStorage.getItem('theme')}catch(e){}if((v||t)?(v||t)==='dark':matchMedia('(prefers-color-scheme: dark)').matches)r.classList.add('dark');</script>
    ${assetTags.map((tag) => tag.replace(/(src|href)="\.\/assets\//, `$1="${root}assets/`)).join("\n    ")}`
}

fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(path.join(OUT, "case-studies"), { recursive: true })
fs.cpSync("dist/assets/app", path.join(OUT, "assets/app"), { recursive: true })

const root = "../"
for (const study of studies) {
  const body = renderStudy(study.slug, root)
  const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${head(study, root)}
  </head>
  <body>
    <div id="root" data-page="${study.slug}" data-root="${root}">${body}</div>
  </body>
</html>
`
  fs.writeFileSync(path.join(OUT, "case-studies", `${study.slug}.html`), page)
  console.log("built", `case-studies/${study.slug}.html`, `${Math.round(page.length / 1024)} KB`)
}
