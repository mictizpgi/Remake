import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "land-acquisition-program",
  seo: {
    title: "Land Acquisition Case Study: A Record That Holds Up | Portico Group",
    description: "How Portico re-architected a federal land acquisition program in Smartsheet: one tract register, one project plan template, and role-based views, so reporting builds itself and the record holds up.",
    image: "land-corridor.jpg",
    keywords: ["Built on Smartsheet", "Land acquisition", "Federal land acquisition", "Tract register", "Right-of-way", "Smartsheet Work App", "Program reporting", "Condemnation"],
    datePublished: "2026-11-02",
    dateModified: "2026-11-11",
    headline: "A record that holds up, and reports that build themselves.",
  },
  audience: "infrastructure program leaders",
  industry: ["Built on Smartsheet", "Land acquisition"],
  h1: "Rebuilding a land acquisition program’s Smartsheet setup made the record hold up and the reports build themselves.",
  reasons: [
    { icon: "clock", lead: "No hand assembly", text: "of the twice-weekly client reports, often rebuilt after hours before" },
    { icon: "check", lead: "One set of names", text: "landowner names from three trackers consolidated, every decision logged" },
    { icon: "shield", lead: "Clean revocation", text: "access sits in role-based Work App views and can be revoked cleanly" },
  ],
  headline: [
    { value: 1000, suffix: "s", label: "land tracts under management", tag: "across multiple states" },
    { value: 85, prefix: "~", suffix: "%", label: "fewer columns per tracker", tag: "after the rebuild" },
    { value: 100, suffix: "%", label: "of the client roll-up rebuilt from the new model", tag: "matched cell by cell" },
    { value: 10, label: "roles, each editing only its own milestones", tag: "one view per role" },
  ],
  hero: {
    src: "land-corridor.jpg",
    alt: "Desert right-of-way corridor marked by survey stakes, with a field tablet showing a parcel map",
  },
  approach: {
    thesis: "Fix the reporting first, so the pain stops.",
    accent: "Then rebuild underneath at a pace the team can absorb.",
    path: {
      caption: "From one register of record to a client report that builds itself",
      steps: ["Register: one row per tract", "Project plans from one template", "Exceptions flagged by formula", "Role views where people work", "Roll-up: the client report as output"],
    },
    challenge: "Every contact with a landowner is a legal record. On a program heading toward condemnation cases, those notes and their dates can become evidence. The setup, built fast under pressure, got the program moving, but couldn’t carry that weight.",
    approach: "We re-architected it: one register of record, one project plan template, and role-based views where people actually work. Nothing went big-bang. The old environment keeps running, untouched, until the team is ready to retire it, and the two are reconciled before anything is switched off.",
  },
  facts: [
    ["Client", "National engineering and infrastructure firm"],
    ["Program", "Federal land acquisition across several states, two-year runway"],
    ["Platform", "Smartsheet · Work App · Dynamic views · Data Shuttle · Data Mesh · API"],
    ["Users", "Land agents · Analysts · QC · Document team · Program leads · Partners"],
    ["Status", "Pilot built and validated, rolling out in phases. Old and new run side by side until the switch"],
  ],
  sections: [
    {
      title: "The same work was tracked in several places, and nobody could say which was right",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we built"],
          rows: [
            { a: "Tract IDs typed by hand; one tract, many versions", bLead: "One register", b: "One row per tract; reporting and GIS read from it" },
            { a: "A column for every milestone in one wide tracker", bLead: "Milestones as rows", b: "One project plan per project, from a single template" },
            { a: "Quality checks meant line-by-line review", bLead: "Exception queue", b: "Formulas flag what’s late, overdue, blocked, or missing" },
          ],
        },
        { type: "text", html: "Dates were stored as text, so <b>turnaround time</b> couldn’t be calculated at all." },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Moving milestones to rows took each tracker far from the platform’s cell limit",
      main: [
        {
          type: "bars",
          caption: "Columns per tracker",
          rows: [
            { label: "Before: one wide tracker", display: "200+", width: 100 },
            { label: "After: one project plan", display: "~30", width: 15, highlight: true },
          ],
        },
        { type: "text", html: "The old tracker was closing in on the limit before the program was <b>half</b> done. Now a new project is a new sheet, so capacity grows with the program." },
      ],
    },
    {
      title: "The new model rebuilt the client’s roll-up, and it matched the old files",
      main: [
        { type: "text", html: "Before anything replaced the old setup, the new model rebuilt the roll-up for the <b>pilot tracts</b>. It matched, apart from a couple of known quirks in the source data." },
      ],
    },
  ],
  closing: "Update once. Everything downstream follows.",
}

export default study
