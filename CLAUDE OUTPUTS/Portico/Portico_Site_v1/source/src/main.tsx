import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import "./index.css"
import { studyBySlug } from "./content"
import { CaseStudyPage } from "./case/CaseStudyPage"

// Each page is pre-rendered (scripts/prerender.mjs); attach to it for the animations, chart hover and theme switch.
const root = document.getElementById("root")!
const study = studyBySlug(root.dataset.page ?? "")
if (study) hydrateRoot(root, <StrictMode><CaseStudyPage study={study} root={root.dataset.root ?? ""} /></StrictMode>)
