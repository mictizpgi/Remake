import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"

const root = document.getElementById("root")!
const app = <StrictMode><App /></StrictMode>
// The HTML is pre-rendered (see prerender.mjs), so attach to it instead of rebuilding it.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
