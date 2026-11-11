import type { CaseStudy } from "../types"

const study: CaseStudy = {
  slug: "hospital-evs-patient-flow",
  seo: {
    title: "Hospital Patient Flow Case Study: Clean Rooms, Sooner | Portico Group",
    description: "How six small tests of change in a hospital’s environmental services department added 665 days of patient capacity a year.",
    image: "hospital-wing.jpg",
    keywords: ["Healthcare", "Patient operations", "Patient flow", "Environmental Services", "EVS", "Bed turnover", "Hospital capacity", "Discharge"],
    datePublished: "2026-11-01",
    dateModified: "2026-11-10",
    headline: "Clean rooms, sooner. Patients placed earlier.",
  },
  audience: "hospital operations leaders",
  industry: ["Healthcare", "Patient operations"],
  h1: "Fixing handoffs, not adding staff, got a hospital’s rooms cleaned and patients placed sooner.",
  reasons: [
    { icon: "clock", lead: "26 min shorter", text: "the wait for a housekeeper, and still 22 min shorter during a patient surge" },
    { icon: "down", lead: "60% fewer", text: "urgent STAT requests, about 1,700 fewer interruptions a year" },
    { icon: "users", lead: "1,514 hours", text: "EVS staff time back each year, enough to clean about 5 more rooms a night" },
  ],
  headline: [
    { value: 15963, label: "hours of patient capacity", tag: "per year" },
    { value: 665, label: "more patient days", tag: "per year" },
    { value: 1.3, decimals: 1, prefix: "$", suffix: "M", label: "soft savings", tag: "per year" },
    { value: 5000, prefix: "~", label: "hours per 100 beds", tag: "projected region-wide" },
  ],
  hero: {
    src: "hospital-wing.jpg",
    alt: "Quiet hospital inpatient wing with a freshly made room, a cleaning cart, and a bed-status board at the nurses’ station",
  },
  approach: {
    thesis: "Each department was doing its job.",
    accent: "The gaps were between them.",
    path: {
      caption: "Every one of the hospital’s <b>30,000</b> room turns a year runs through these five steps",
      steps: ["Patient leaves", "Room flagged dirty", "Housekeeper assigned", "Room cleaned", "Next patient moves in"],
      connector: "handoff",
    },
    challenge: "At a busy medical center chosen as the pilot site, dirty rooms were sitting empty while patients waited for beds. None of this was a people problem.",
    approach: "We didn’t add staff. We built a dashboard fed daily from the hospital’s records system, so everyone was looking at the same numbers. Then we got out of the conference room and into the department, and brought Nursing, bed control, case management, and transport to the table. We fixed the handoffs between Environmental Services, Nursing, and bed control, one small test at a time.",
  },
  facts: [
    ["Client", "Major integrated health system"],
    ["Scope", "Environmental Services (EVS) and patient flow; one pilot site as the model for the region"],
    ["Partners", "EVS, Nursing, bed control, case management, transport"],
    ["Timeline", "A few months, through a hospital-wide patient surge"],
  ],
  sections: [
    {
      title: "Rooms here waited longer for a housekeeper than the regional average",
      main: [
        {
          type: "bars",
          caption: "Average wait for a housekeeper, before the pilots",
          rows: [
            { label: "Region", display: "1h 13m", width: 79 },
            { label: "This hospital", display: "1h 32m", width: 100, highlight: true },
          ],
        },
        { type: "text", html: "Clean times here were among the region’s longest too." },
      ],
      side: [{ type: "facts" }],
    },
    {
      title: "Six handoff gaps, and the change we tested for each",
      main: [
        {
          type: "table",
          head: ["What was going wrong", "What we changed"],
          rows: [
            { a: "Bed board checked too rarely; dirty rooms sat in the queue", bLead: "Eyes on Board", b: "EVS managers check it about every 30 min, every shift" },
            { a: "IV poles, trays and meds still in the room", bLead: "Room Ready swarm", b: "Nurses clear patient items before discharge" },
            { a: "6,113 rooms not flagged dirty, waiting 37 extra min", bLead: "Wristband trigger", b: "Cutting the wristband flags the room dirty" },
            { a: "Discharges peaked at 11am; cleaning crew started at 4pm", bLead: "Staggered shifts", b: "Crew starts earlier, agreed with union stewards" },
            { a: "STAT requests pulled housekeepers out mid-clean", bLead: "STAT assignments", b: "Managers who see the whole floor assign urgent rooms" },
            { a: "Room moves within the same unit", bLead: "Same-unit transfers", b: "An approval step; cut moves about 20% in an earlier pilot" },
          ],
        },
      ],
    },
    {
      title: "After the changes, far fewer room cleans were interrupted by urgent requests",
      main: [
        {
          type: "stack",
          caption: "Room assignments by priority, pilot site",
          series: [
            { key: "stat", label: "STAT (urgent)" },
            { key: "next", label: "Next" },
            { key: "normal", label: "Normal" },
          ],
          rows: [
            { label: "Before", stat: 10, next: 12, normal: 78 },
            { label: "After", stat: 4, next: 21, normal: 75 },
          ],
          legendNote: "10% → 4%",
        },
      ],
      side: [
        {
          type: "stats",
          items: [
            { n: "21 min", tag: "was 39 min", label: "wait for rooms flagged late, on the pilot unit" },
            { n: "2 min", tag: "per room", label: "shorter clean time" },
            { n: "5 of 6", label: "changes stayed in place through the patient surge" },
          ],
        },
      ],
    },
  ],
  closing: "Small, steady changes hold up under pressure.",
  ctaQuestion: "Where is your capacity hiding?",
}

export default study
