import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import "./index.css"
import { studyBySlug } from "./content"
import { articleBySlug } from "./content/insights"
import { CaseStudyPage } from "./case/CaseStudyPage"
import { HomePage } from "./home/HomePage"
import { ArticlePage } from "./insights/ArticlePage"
import { InsightsIndexPage } from "./insights/InsightsIndexPage"

// Each page is pre-rendered (scripts/prerender.mjs); attach to it for the animations, filters, chart hover and theme switch.
const el = document.getElementById("root")!
const page = el.dataset.page ?? ""
const root = el.dataset.root ?? ""
const mount = (node: React.ReactNode) => hydrateRoot(el, <StrictMode>{node}</StrictMode>)
if (page === "home") mount(<HomePage root={root} />)
else if (page === "insights") mount(<InsightsIndexPage root={root} />)
else if (page.startsWith("insight:")) {
  const a = articleBySlug(page.slice(8))
  if (a) mount(<ArticlePage a={a} root={root} />)
} else {
  const study = studyBySlug(page)
  if (study) mount(<CaseStudyPage study={study} root={root} />)
}
