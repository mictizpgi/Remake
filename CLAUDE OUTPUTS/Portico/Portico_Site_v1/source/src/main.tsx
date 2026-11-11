import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import "./index.css"
import { studyBySlug } from "./content"
import { CaseStudyPage } from "./case/CaseStudyPage"
import { HomePage } from "./home/HomePage"

// Each page is pre-rendered (scripts/prerender.mjs); attach to it for the animations, filters, chart hover and theme switch.
const root = document.getElementById("root")!
const page = root.dataset.page ?? ""
const base = root.dataset.root ?? ""
if (page === "home") hydrateRoot(root, <StrictMode><HomePage root={base} /></StrictMode>)
else {
  const study = studyBySlug(page)
  if (study) hydrateRoot(root, <StrictMode><CaseStudyPage study={study} root={base} /></StrictMode>)
}
