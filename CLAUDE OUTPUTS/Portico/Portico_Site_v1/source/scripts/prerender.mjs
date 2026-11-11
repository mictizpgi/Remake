// Builds one plain HTML file per case study at its current URL (case-studies/<slug>.html).
// Each file carries the full text, headings, search tags and structured data, plus the shared
// app script and stylesheet that add the animations, chart hover and theme switch.
//
// usage: node scripts/prerender.mjs [--preview]
//   --preview  leaves out the Google Analytics tag (for review links, so test visits aren't counted)
import fs from "node:fs"
import path from "node:path"
import { articles, renderArticle, renderHome, renderInsightsIndex, renderPrivacy, renderStudy, studies } from "../dist-ssr/entry-server.js"

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
    <script>try{var nv=performance.getEntriesByType('navigation')[0];if(!location.hash&&(!nv||nv.type!=='back_forward')){history.scrollRestoration='manual';addEventListener('DOMContentLoaded',function(){scrollTo(0,0);document.documentElement.scrollIntoView({block:'start'})})}}catch(e){}</script>
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

// ---------- homepage: keeps the live homepage's own title, description, share tags and structured data ----------
{
  const live = fs.readFileSync("../live/index.html", "utf8")
  const seo = live.slice(live.indexOf("<title>"), live.indexOf('<link rel="icon"')).trim()
  const ga = PREVIEW ? "" : `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA}');</script>
    `
  const shared = head(studies[0], "").split("<link rel=\"icon\"")[1]
  const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${ga}${seo}
    <link rel="icon"${shared}
  </head>
  <body>
    <div id="root" data-page="home" data-root="">${renderHome("")}</div>
  </body>
</html>
`
  fs.writeFileSync(path.join(OUT, "index.html"), page)
  console.log("built", "index.html", `${Math.round(page.length / 1024)} KB`)
}

// ---------- Insights: index + articles at their current addresses ----------
{
  fs.mkdirSync(path.join(OUT, "insights"), { recursive: true })
  const root = "../"
  const ga = PREVIEW ? "" : `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA}');</script>
    `
  const shared = head(studies[0], root).split("<link rel=\"icon\"")[1]
  const strip = (h) => h.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&")
  const author = { "@type": "Person", "@id": `${SITE}/#michael`, name: "Michael Ortiz", jobTitle: "Founder & Principal", url: `${SITE}/#about`, sameAs: ["https://www.linkedin.com/in/ortizmichael"] }
  const publisher = { "@type": "Organization", "@id": `${SITE}/#org`, name: "Portico Group, Inc.", logo: { "@type": "ImageObject", url: `${SITE}/assets/img/portico-logo.png` } }
  const page = (seo, dataPage, body) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${ga}${seo}
    <link rel="icon"${shared}
  </head>
  <body>
    <div id="root" data-page="${dataPage}" data-root="${root}">${body}</div>
  </body>
</html>
`
  const liveHead = (file) => { const t = fs.readFileSync(file, "utf8"); return t.slice(t.indexOf("<title>"), t.indexOf('<link rel="icon"')).trim() }

  for (const a of articles) {
    const file = `../live/insights/${a.slug}.html`
    let seo
    if (fs.existsSync(file)) seo = liveHead(file) // existing article: keep its live title, description, share tags and structured data exactly
    else {
      const url = `${SITE}/insights/${a.slug}.html`, img = `${SITE}/assets/img/${a.seo.image}`
      const t = esc(a.seo.title), d = esc(a.seo.description)
      const ld = { "@context": "https://schema.org", "@graph": [
        { "@type": "Article", "@id": `${url}#article`, headline: strip(a.h1), description: a.seo.description, image: img, url, mainEntityOfPage: url,
          datePublished: a.seo.datePublished, dateModified: a.seo.dateModified, articleSection: "Insights", keywords: a.seo.keywords, author, publisher, inLanguage: "en-US" },
        ...(a.faq?.length ? [{ "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: a.faq.map((f) => ({ "@type": "Question", name: strip(f.q), acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })) }] : []),
        { "@type": "BreadcrumbList", itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE}/insights/` },
          { "@type": "ListItem", position: 3, name: strip(a.h1), item: url } ] } ] }
      seo = `<title>${t}</title>
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
    <script type="application/ld+json">${JSON.stringify(ld, null, 1).replace(/</g, "\\u003c")}</script>`
    }
    fs.writeFileSync(path.join(OUT, "insights", `${a.slug}.html`), page(seo, `insight:${a.slug}`, renderArticle(a.slug, root)))
    console.log("built", `insights/${a.slug}.html`)
  }

  // index: keep its live title, description and share tags; structured data now lists every article
  const live = fs.readFileSync("../live/insights/index.html", "utf8")
  const top = live.slice(live.indexOf("<title>"), live.indexOf('<script type="application/ld+json">')).trim()
  const old = JSON.parse(live.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])
  const graph = old["@graph"] ?? [old]
  const coll = graph.find((g) => [].concat(g["@type"]).includes("CollectionPage")) ?? { "@type": "CollectionPage", url: `${SITE}/insights/` }
  coll.mainEntity = { "@type": "ItemList", itemListElement: articles.map((a, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE}/insights/${a.slug}.html`, name: strip(a.h1) })) }
  delete coll.hasPart
  const others = graph.filter((g) => g !== coll && ![].concat(g["@type"]).includes("Article"))
  const ld = { "@context": "https://schema.org", "@graph": [coll, ...others] }
  const seo = `${top}\n    <script type="application/ld+json">${JSON.stringify(ld, null, 1).replace(/</g, "\\u003c")}</script>`
  fs.writeFileSync(path.join(OUT, "insights", "index.html"), page(seo, "insights", renderInsightsIndex(root)))
  console.log("built", "insights/index.html")
}

// ---------- privacy notice: live head kept exactly; body text kept exactly ----------
{
  const ga = PREVIEW ? "" : `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA}"></script>
    <script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA}');</script>
    `
  const live = fs.readFileSync("../live-now/privacy-policy.html", "utf8")
  const seo = live.slice(live.indexOf("<title>"), live.indexOf('<link rel="icon"')).trim()
  const shared = head(studies[0], "").split("<link rel=\"icon\"")[1]
  fs.writeFileSync(path.join(OUT, "privacy-policy.html"), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${ga}${seo}
    <link rel="icon"${shared}
  </head>
  <body>
    <div id="root" data-page="privacy" data-root="">${renderPrivacy("")}</div>
  </body>
</html>
`)
  console.log("built", "privacy-policy.html")
}
