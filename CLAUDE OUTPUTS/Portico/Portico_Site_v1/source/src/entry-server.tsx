import { StrictMode } from "react"
import { renderToString } from "react-dom/server"
import { studies } from "./content"
import { CaseStudyPage } from "./case/CaseStudyPage"
import { HomePage } from "./home/HomePage"

export { studies }
export function renderStudy(slug: string, root: string) {
  const study = studies.find((s) => s.slug === slug)
  if (!study) throw new Error(`no study ${slug}`)
  return renderToString(<StrictMode><CaseStudyPage study={study} root={root} /></StrictMode>)
}
export function renderHome(root: string) {
  return renderToString(<StrictMode><HomePage root={root} /></StrictMode>)
}
