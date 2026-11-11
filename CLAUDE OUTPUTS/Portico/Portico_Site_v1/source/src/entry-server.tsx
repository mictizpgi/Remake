import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { studies } from "./content"
import { articles } from "./content/insights"
import { CaseStudyPage } from "./case/CaseStudyPage"
import { HomePage } from "./home/HomePage"
import { ArticlePage } from "./insights/ArticlePage"
import { InsightsIndexPage } from "./insights/InsightsIndexPage"
import { LegalPage } from "./legal/LegalPage"

export { studies, articles }
export function renderStudy(slug: string, root: string) {
  const study = studies.find((s) => s.slug === slug)
  if (!study) throw new Error(`no study ${slug}`)
  return renderToString(<StrictMode><CaseStudyPage study={study} root={root} /></StrictMode>)
}
export function renderHome(root: string) {
  return renderToString(<StrictMode><HomePage root={root} /></StrictMode>)
}
export function renderInsightsIndex(root: string) {
  return renderToString(<StrictMode><InsightsIndexPage root={root} /></StrictMode>)
}
export function renderArticle(slug: string, root: string) {
  const a = articles.find((x) => x.slug === slug)
  if (!a) throw new Error(`no article ${slug}`)
  return renderToString(<StrictMode><ArticlePage a={a} root={root} /></StrictMode>)
}
export function renderPrivacy(root: string) {
  return renderToString(<StrictMode><LegalPage root={root} /></StrictMode>)
}
