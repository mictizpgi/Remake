// Puts the fully rendered page into dist/index.html so crawlers read the text without running JavaScript.
import fs from "node:fs"
import { render } from "./dist-ssr/entry-server.js"

const file = "dist/index.html"
const html = fs.readFileSync(file, "utf8")
const marker = '<div id="root"></div>'
if (!html.includes(marker)) throw new Error("root marker not found")
fs.writeFileSync(file, html.replace(marker, `<div id="root">${render()}</div>`))
console.log("prerendered", file)
