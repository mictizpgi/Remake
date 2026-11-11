/**
 * Homepage content. Every line comes from the current porticogroup.co homepage;
 * only the structure changed (fewer sections, case studies listed once, industries become filters).
 */
export type Cat = "mfg" | "health" | "supply" | "pe" | "smartsheet"

export const filters: { key: Cat | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "mfg", label: "Manufacturing" },
  { key: "health", label: "Healthcare" },
  { key: "supply", label: "Supply chain & distribution" },
  { key: "pe", label: "PE-backed & high-growth" },
  { key: "smartsheet", label: "Built on Smartsheet" },
]

export interface ResultCard {
  n: string // the big number, exactly as the homepage or case study shows it
  text: string // one line, from the homepage card
  client: string
  kind: string // "Healthcare · Patient operations"
  cats: Cat[]
  href?: string // case study page, if there is one
}

export const home = {
  h1: "Your operation isn’t broken.",
  h1Accent: "It just can’t see itself clearly.",
  lead: "We find the friction points that slow growth, build the systems that make them visible, and deliver results you can measure.",
  credentials: [
    { n: "25+", label: "years running operations" },
    { n: "100+", label: "client engagements" },
    { n: "EN · ES", label: "US/Mexico experience" },
    { n: "1", label: "principal-led, no junior handoffs" },
  ],
  hero: { src: "hero.jpg", alt: "A manufacturing floor at night, with an operations dashboard on the wall" },

  // the numbers band from the current homepage; each links to its story
  proof: [
    { value: 25, prefix: "$", suffix: "M", label: "annualized savings identified at a major integrated health system", href: "case-studies/clinic-medication-kanban.html" },
    { value: 5000, label: "hours of patient capacity per 100 beds, projected regionwide from a hospital pilot", href: "case-studies/hospital-evs-patient-flow.html" },
    { value: 50, prefix: "+", suffix: "%", label: "on-time delivery improvement for a steel tank manufacturer", href: "case-studies/steel-tank-supply-chain.html" },
    { value: 10, suffix: " wks", label: "from kickoff to a 45% lead time cut, US/Mexico", href: "case-studies/transformer-lean-us-mexico.html" },
  ],

  approach: {
    title: "We start where the work happens, and step back when your team runs it.",
    steps: [
      { t: "Walk the floor", d: "We start where the work happens, not in a conference room. We see the workarounds your team has learned to live with." },
      { t: "Find the friction", d: "Root causes, scored and ranked. A short list of what to fix first and why it matters to the P&L." },
      { t: "Build the system", d: "Processes, cadences, and Smartsheet tools that make the right information visible to the right people." },
      { t: "Hand it off", d: "We embed with your team until it runs without us. Then we step back, and your people carry it forward." },
    ],
    services: [
      {
        t: "Operational assessment & strategy",
        d: "Where jobs stall, where information has to be asked for instead of seen, and where capacity is lost to broken handoffs. You get a scored priority list and a clear first move, not a report that sits on a shelf.",
        tags: ["Friction mapping", "Roadmap", "Prioritization"],
        link: { label: "See an assessment in action", href: "case-studies/steel-tank-supply-chain.html" },
      },
      {
        t: "Process improvement",
        d: "Lean, Kanban, and continuous improvement, used as tools and not dogma. We eliminate waste, reduce variation, and build repeatable processes that scale with you.",
        tags: ["Lean", "Kanban", "QDIP", "CI"],
        link: { label: "See Lean in action", href: "case-studies/transformer-lean-us-mexico.html" },
      },
      {
        t: "Smartsheet & digital operations",
        d: "Dashboards, automated workflows, and real-time command centers built on Smartsheet. Your team gets visibility. Leadership gets the data to make faster, better decisions.",
        tags: ["Smartsheet", "Dashboards", "Automation"],
        link: { label: "See the Smartsheet builds", href: "#results" },
      },
    ],
  },

  results: [
    { n: "$25M", kind: "Medication management", text: "Annualized savings and 8%+ less medication waste, from simple Kanban pulls in clinic medication closets.", client: "Large integrated health system", cats: ["health"], href: "case-studies/clinic-medication-kanban.html" },
    { n: "12,000+", kind: "Workforce mobilization", text: "Contingent workers onboarded and deployed with zero glitches, during what the union called the largest open-ended health care strike in U.S. history.", client: "Large integrated health system", cats: ["health", "smartsheet"], href: "case-studies/healthcare-strike-workforce.html" },
    { n: "5,000 hrs", kind: "Patient operations", text: "Patient-capacity gain per 100 beds, projected across the region from a pilot that improved housekeeping scheduling, productivity, and data.", client: "Major integrated health system", cats: ["health"], href: "case-studies/hospital-evs-patient-flow.html" },
    { n: "−45%", kind: "Lean transformation", text: "Lead time reduction plus a 30% gain in labor efficiency, within 10 weeks of kickoff.", client: "Custom transformer manufacturer · US/Mexico", cats: ["mfg"], href: "case-studies/transformer-lean-us-mexico.html" },
    { n: "+50%", kind: "Supply chain assessment", text: "On-time delivery with 30% more production capacity, no added headcount or capital equipment, plus another 30% projected from a new facility layout.", client: "Bolted steel tank manufacturer", cats: ["mfg"], href: "case-studies/steel-tank-supply-chain.html" },
    { n: "+49%", kind: "Dual sourcing", text: "Product availability after qualifying 110 products at contract manufacturers, taking 30M+ units off a plant under repair.", client: "Fortune 100 skincare manufacturer", cats: ["supply"], href: "case-studies/skincare-dual-sourcing.html" },
    { n: "+50%", kind: "Electronics", text: "Production capacity from S&OP process design and SAP integration.", client: "Fortune 100 electronics manufacturer", cats: ["mfg"] },
    { n: "2×", kind: "Pet nutrition", text: "Year-over-year growth supported by operations and supply chain work, with 10%+ supplier savings plus 3–5% in rebates.", client: "PE-backed fresh pet food company", cats: ["supply", "pe"], href: "case-studies/pet-nutrition-growth.html" },
    { n: "~$340K", kind: "Network strategy", text: "Annual benefit projected from an East Coast fulfillment partner, with 1 to 2 days faster delivery. A clear go/no-go case for the board.", client: "National consumer wellness products company", cats: ["supply", "pe"], href: "case-studies/east-coast-3pl-sourcing.html" },
    { n: "$2M", kind: "Inventory", text: "Inventory relief through demand planning, with a 25% gain in project management productivity.", client: "$150M+ skincare company", cats: ["supply"] },
    { n: "−30%", kind: "Process equipment", text: "Grinder assembly labor, with 1 to 2 days faster turnaround and a 40% faster seal cell, through Lean and Kanban.", client: "Wastewater equipment manufacturer", cats: ["mfg", "pe"], href: "case-studies/wastewater-kaizen-program.html" },
    { n: "+30 pts", kind: "Customer experience", text: "NPS improvement from an operations and customer service initiative across US airport locations.", client: "Major national car rental company", cats: ["supply"] },
    { n: "~85%", kind: "Land acquisition", text: "Fewer columns per tracker, cut from more than 200 to a few dozen, after a multi-state program was re-architected around one tract register, one plan template, and role-based views.", client: "Engineering firm", cats: ["smartsheet"], href: "case-studies/land-acquisition-program.html" },
    { n: "1", kind: "Enterprise projects", text: "Standard project kit, launched by Control Center, with every project rolling up to one portfolio view. In progress.", client: "Engineering firm", cats: ["smartsheet"], href: "case-studies/enterprise-project-control-center.html" },
    { n: "+$890K", kind: "Facility move", text: "Net cash from a full warehouse and office move run from one Smartsheet command center. Finished on time, and orders kept shipping.", client: "Consumer products company", cats: ["supply", "smartsheet"], href: "case-studies/facility-move-command-center.html" },
    { n: "~95M", kind: "Repair operations", text: "Formula references engineered out of a Work App that follows every repair from driver pickup to billing.", client: "Home medical equipment repair", cats: ["smartsheet"], href: "case-studies/hts-repair-work-app.html" },
    { n: "40", kind: "Facilities engineering", text: "Medical centers staffed from the work up, checked by every site, and delivered through Smartsheet.", client: "Large integrated health system", cats: ["health", "smartsheet"], href: "case-studies/engineering-staffing-model.html" },
    { n: "100%", kind: "Position control", text: "Of position requests reviewed, with a fast track for budgeted backfills and committee votes that record themselves.", client: "Health system", cats: ["health", "smartsheet"], href: "case-studies/position-control-workflow.html" },
    { n: "0", kind: "Onboarding", text: "New hires dropped: a daily feed, a human approval step, and orientation invitations that send themselves.", client: "Home health division of a health system", cats: ["health", "smartsheet"], href: "case-studies/care-at-home-onboarding.html" },
  ] as ResultCard[],

  smartops: {
    title: "SmartOps Pro gives every layer of your organization the visibility to act.",
    lead: "A complete operational intelligence suite built on Smartsheet, from daily floor huddles to executive dashboards.",
    modules: [
      { t: "Challenge", d: "Operational maturity assessment and structured improvement program" },
      { t: "Lean", d: "Digital tools for waste elimination and flow" },
      { t: "ISO", d: "Compliance tracking, audit readiness, and document control" },
      { t: "Meeting", d: "Meeting cadence, format, and accountability from the floor to leadership" },
      { t: "QDIP", d: "Daily huddle boards for quality, delivery, inventory, and productivity" },
    ],
    shot: {
      src: "shot-smartops-qdip-tier1.jpg",
      alt: "SmartOps Pro QDIP tier 1 dashboard in Smartsheet with quality, delivery, inventory and productivity status, a daily summary report, open items by supervisor, and quick links",
      caption: "A SmartOps Pro tier board, live in Smartsheet. Names replaced.",
    },
  },

  quotes: [
    { q: "He was able to hit the ground running on a complex project with many stakeholders. I would hire Michael again as he was a great fit with our team and was able to drive measurable results and supply chain improvements.", who: "Marty Duff", role: "SVP at Yeti" },
    { q: "His success with implementing Lean principles and supply chain optimization methods was unparalleled. Michael is a person of high integrity and values and he is best known as an individual who ‘makes it happen.’", who: "Bob Lane", role: "Founder/CEO at LaneOPX" },
    { q: "His greatest asset is his engaging personality which results in his ability to form cohesive teams, remove barriers, and achieve great results. I look forward to our next project together.", who: "Alan Mencher", role: "Director at Kaiser Permanente" },
  ],

  about: {
    title: "Operations consulting should be done by people who’ve run operations.",
    paras: [
      "I founded Portico Group in 2014 on that premise. Our team brings 25+ years of experience across manufacturing, healthcare, and distribution.",
      "What sets us apart isn’t a methodology. It’s range. We’re equally at home presenting to a board and walking a shop floor. When you engage Portico Group, you get an experienced principal leading the work, not a junior team running a playbook.",
    ],
    points: [
      "Smartsheet Aligned Elite Solution Partner, full certification stack",
      "Bilingual team, English & Spanish, with US/Mexico cross-border experience",
      "100+ engagements, from Fortune 100 enterprises to PE-backed growth companies",
    ],
    name: "The name comes from Solomon’s Portico. The rising steps in our logo stand for growth built on a strong foundation.",
    photo: { src: "michael-ortiz.jpg", alt: "Michael Ortiz, Founder and Principal of Portico Group" },
  },

  ctaQuestion: "Ready to see what’s possible?",
}
