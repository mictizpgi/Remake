import { useEffect, useState } from "react"
import { MotionConfig } from "motion/react"
import { ArrowRight, Clock, Moon, Sun, TrendingDown, Users } from "lucide-react"
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"

import heroImg from "@/assets/hospital-wing.jpg"
import logo from "@/assets/portico-logo.png"
import logoMono from "@/assets/logo-mono.svg"
import badge from "@/assets/smartsheet-elite-partner.png"

const BOOK = "https://zcal.co/michaelortiz/meet"
const SITE = "https://porticogroup.co"
const NAV = [["Services", "/#services"], ["Industries", "/#industries"], ["SmartOps Pro", "/#smartops"], ["Results", "/#results"], ["Insights", "/insights/"], ["About", "/#about"]]
// Emil: strong ease-out; one entrance, 30-80ms stagger, 200-400ms each
const ENTER = { duration: 0.36, ease: [0.23, 1, 0.32, 1] as const }

/* ---------- data: every number from the original page ---------- */
const headline = [
  { value: 15963, label: "hours of patient capacity", tag: "per year" },
  { value: 665, label: "more patient days", tag: "per year" },
  { value: 1.3, decimals: 1, prefix: "$", suffix: "M", label: "soft savings", tag: "per year" },
  { value: 5000, prefix: "~", label: "hours per 100 beds", tag: "projected region-wide" },
]

const reasons = [
  { icon: Clock, lead: "26 min shorter", text: "wait for a housekeeper, and still 22 min shorter during a patient surge" },
  { icon: TrendingDown, lead: "60% fewer", text: "urgent STAT requests, about 1,700 fewer interruptions a year" },
  { icon: Users, lead: "1,514 hours", text: "of EVS staff time back a year, enough to clean about 5 more rooms a night" },
]

const fixes = [
  { gap: "Bed board checked too rarely; dirty rooms sat in the queue", fix: "Eyes on Board", how: "EVS managers check it about every 30 min, every shift" },
  { gap: "IV poles, trays and meds still in the room", fix: "Room Ready swarm", how: "Nurses clear patient items before discharge" },
  { gap: "6,113 rooms not flagged dirty, waiting 37 extra min", fix: "Wristband trigger", how: "Cutting the wristband flags the room dirty" },
  { gap: "Discharges peaked at 11am; cleaning crew started at 4pm", fix: "Staggered shifts", how: "Crew starts earlier, agreed with union stewards" },
  { gap: "STAT requests pulled housekeepers out mid-clean", fix: "STAT assignments", how: "Managers who see the whole floor assign urgent rooms" },
  { gap: "Room moves within the same unit", fix: "Same-unit transfers", how: "An approval step; cut moves about 20% in an earlier pilot" },
]

const mix = [
  { when: "Before", stat: 10, next: 12, normal: 78 },
  { when: "After", stat: 4, next: 21, normal: 75 },
]
const mixConfig = {
  stat: { label: "STAT (urgent)", color: "var(--chart-1)" },
  next: { label: "Next", color: "var(--chart-2)" },
  normal: { label: "Normal", color: "var(--chart-3)" },
} satisfies ChartConfig

/* ---------- theme switch: follows the system until the reader picks ---------- */
function useTheme() {
  // the boot script in index.html already picked the theme (viewer setting, saved choice, then system)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"))
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])
  const toggle = () => {
    setDark((d) => {
      try { localStorage.setItem("theme", d ? "light" : "dark") } catch { /* ignore */ }
      return !d
    })
  }
  return { dark, toggle }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-[min(1120px,100%-32px)] py-10 sm:py-12">
      <h2 className="mb-6 text-[length:var(--text-h2)] leading-snug sm:mb-8">{title}</h2>
      {children}
    </section>
  )
}

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <MotionConfig reducedMotion="user">
      {/* ---------- site header ---------- */}
      <header className="sticky top-[env(safe-area-inset-top,0px)] z-20 border-b bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-[min(1120px,100%-32px)] items-center gap-6">
          <a href={SITE} aria-label="Portico Group home" className="shrink-0">
            <img src={dark ? logoMono : logo} alt="Portico Group" className="h-8 w-auto" width={471} height={131} />
          </a>
          <nav aria-label="Main" className="ml-auto hidden gap-6 text-[length:var(--text-label)] text-muted-foreground md:flex">
            {NAV.map(([t, h]) => (
              <a key={t} href={`${SITE}${h}`} className="py-2 transition-colors hover:text-foreground">{t}</a>
            ))}
          </nav>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="pressable ml-auto size-11 rounded-full md:ml-0">
            {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          {/* site-wide action: same on every page */}
          <Button asChild className="pressable h-10 rounded-full px-4 text-[length:var(--text-label)] font-semibold">
            <a href={BOOK} target="_blank" rel="noopener"><span className="sm:hidden">Book a call</span><span className="hidden sm:inline">Book a free assessment</span></a>
          </Button>
        </div>
      </header>

      <main>
        {/* ---------- first screen: header line, point, ask, numbers, reasons ---------- */}
        <section className="mx-auto w-[min(1120px,100%-32px)] pt-6 pb-4">
          <p className="border-b pb-3 text-[length:var(--text-label)] text-muted-foreground">
            <a href={`${SITE}/#results`} className="text-foreground underline decoration-border hover:decoration-foreground">Case study</a>
            {" · "}Portico Group · For hospital operations leaders · Book a call
          </p>

          <div className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <BlurFade delay={0} transition={ENTER} direction="up">
                <h1 className="text-[length:var(--text-title)] leading-[1.05]">
                  Fixing handoffs, not adding staff, got a hospital’s rooms cleaned and patients placed sooner.
                </h1>
              </BlurFade>

              <BlurFade delay={0.06} transition={ENTER} direction="up">
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Button asChild className="pressable h-12 rounded-full px-6 text-[length:var(--text-body)] font-semibold">
                    <a href={BOOK} target="_blank" rel="noopener">
                      Book a free 30-minute assessment <ArrowRight className="size-4" />
                    </a>
                  </Button>
                  <span className="text-[length:var(--text-label)] text-muted-foreground">With Michael Ortiz. No pitch.</span>
                </div>
              </BlurFade>

              <ul className="mt-8 grid gap-3">
                {reasons.map((r, i) => (
                  <BlurFade key={r.lead} delay={0.12 + i * 0.05} transition={ENTER} direction="up">
                    <li className="flex items-start gap-3">
                      <r.icon className="mt-0.5 size-5 shrink-0 text-good" strokeWidth={1.75} aria-hidden />
                      <p className="text-ink-2"><b className="font-semibold text-foreground">{r.lead}</b> {r.text}</p>
                    </li>
                  </BlurFade>
                ))}
              </ul>
            </div>

            <BlurFade delay={0.1} transition={ENTER} direction="up" className="hidden lg:block">
              <img src={heroImg} width={1536} height={1024} className="h-full max-h-[360px] w-full rounded-xl object-cover"
                alt="Quiet hospital inpatient wing with a freshly made room, a cleaning cart, and a bed-status board at the nurses’ station" />
            </BlurFade>
          </div>

          <dl className="mt-10 grid grid-cols-2 border-y lg:grid-cols-4">
            {headline.map((s, i) => (
              <div key={s.label} className={`py-5 pr-4 ${i % 2 ? "border-l pl-4" : ""} ${i === 2 ? "lg:border-l lg:pl-4" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-[length:var(--text-num)] leading-none tabular whitespace-nowrap">
                  {s.prefix}<NumberTicker value={s.value} decimalPlaces={s.decimals ?? 0} delay={0.15 + i * 0.05} />{s.suffix}
                </dd>
                <dd className="mt-2 text-pretty text-[length:var(--text-label)] text-muted-foreground">
                  <span className="text-foreground">{s.label}</span> · {s.tag}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- the story, in Michael's own words, before any data ---------- */}
        <section aria-labelledby="approach" className="mt-12 border-y bg-card sm:mt-16">
          <div className="mx-auto w-[min(1120px,100%-32px)] py-12 sm:py-16">
            <h2 id="approach" className="max-w-[20ch] text-[length:var(--text-title)] leading-[1.08]">
              Each department was doing its job. <span className="text-primary">The gaps were between them.</span>
            </h2>

            {/* the room-turn path from the original story; handoffs are where time was lost */}
            <figure className="mt-10">
              <figcaption className="text-[length:var(--text-label)] text-muted-foreground">
                Every one of the hospital’s <b className="font-semibold text-foreground tabular">30,000</b> room turns a year runs through these five steps
              </figcaption>
              <ol className="mt-5 grid gap-0 sm:grid-cols-5">
                {["Patient leaves", "Room flagged dirty", "Housekeeper assigned", "Room cleaned", "Next patient moves in"].map((step, i, all) => (
                  <li key={step} className="relative flex items-center gap-3 pb-7 last:pb-0 sm:block sm:pb-0 sm:pr-3">
                    {/* connector: dashed coral line = a handoff between people */}
                    {i < all.length - 1 && (
                      <>
                        <span aria-hidden className="absolute top-9 bottom-0 left-[15px] border-l-2 border-dashed border-primary/70 sm:hidden" />
                        <span aria-hidden className="absolute top-[15px] right-0 left-9 hidden border-t-2 border-dashed border-primary/70 sm:block" />
                        <span className="absolute left-12 top-[38px] text-[length:var(--text-label)] font-medium text-primary sm:hidden">handoff</span>
                        <span className="absolute top-[22px] right-0 left-9 hidden text-center text-[length:var(--text-label)] font-medium text-primary sm:block">handoff</span>
                      </>
                    )}
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-card font-serif text-[length:var(--text-body)] tabular">{i + 1}</span>
                    <span className="font-medium sm:mt-4 sm:block sm:pr-4">{step}</span>
                  </li>
                ))}
              </ol>
            </figure>

            <div className="mt-12 grid gap-8 border-t pt-8 md:grid-cols-2 md:gap-12">
              <div className="min-w-0">
                <h3 className="text-[length:var(--text-h2)]">The challenge</h3>
                <p className="mt-3 max-w-[62ch] text-ink-2">
                  At a busy medical center chosen as the pilot site, dirty rooms were sitting empty while patients waited for beds. None of this was a people problem.
                </p>
              </div>
              <div className="min-w-0">
                <h3 className="text-[length:var(--text-h2)]">Our approach</h3>
                <p className="mt-3 max-w-[62ch] text-ink-2">
                  We didn’t add staff. We built a dashboard fed daily from the hospital’s records system, so everyone was looking at the same numbers. Then we got out of the conference room and into the department, and brought Nursing, bed control, case management, and transport to the table. We fixed the handoffs between Environmental Services, Nursing, and bed control, one small test at a time.
                </p>
              </div>
            </div>

            <p className="mt-8 flex items-center gap-3 text-[length:var(--text-label)] text-muted-foreground">
              <span aria-hidden className="flex size-9 items-center justify-center rounded-full bg-foreground font-semibold text-background">MO</span>
              <span><span className="font-medium text-foreground">Michael Ortiz</span> · Portico Group</span>
            </p>
          </div>
        </section>

        {/* ---------- 1. the problem, as a comparison ---------- */}
        <Section title="Rooms here waited longer for a housekeeper than the regional average">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <Card className="gap-0 py-6 shadow-[var(--shadow-card)]">
              <CardContent>
                <p className="text-[length:var(--text-label)] text-muted-foreground">Average wait for a housekeeper, before the pilots</p>
                {[
                  { who: "Region", t: "1h 13m", w: 79, hot: false },
                  { who: "This hospital", t: "1h 32m", w: 100, hot: true },
                ].map((r) => (
                  <div key={r.who} className="mt-4 grid grid-cols-[110px_1fr_64px] items-center gap-3 max-sm:grid-cols-[1fr_auto]">
                    <span className="text-[length:var(--text-label)]">{r.who}</span>
                    <div className="h-3 overflow-hidden rounded-full bg-muted max-sm:col-span-2 max-sm:row-start-2">
                      <div className={`h-full rounded-full ${r.hot ? "bg-primary" : "bg-chart-3"}`} style={{ width: `${r.w}%` }} />
                    </div>
                    <b className="text-right font-semibold tabular">{r.t}</b>
                  </div>
                ))}
                <p className="mt-6 border-t pt-4 text-ink-2">
                  Clean times here were among the region’s longest too.
                </p>
              </CardContent>
            </Card>

            <dl className="grid content-start gap-0 text-[length:var(--text-label)]">
              {[
                ["Client", "Major integrated health system"],
                ["Scope", "Environmental Services (EVS) and patient flow; one pilot site as the model for the region"],
                ["Partners", "EVS, Nursing, bed control, case management, transport"],
                ["Timeline", "A few months, through a hospital-wide patient surge"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[88px_1fr] gap-3 border-t py-3 last:border-b">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-pretty text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* ---------- 2. gaps and fixes, one table ---------- */}
        <Section title="Six handoff gaps, and the change we tested for each">
          
          <Card className="gap-0 overflow-hidden py-0 shadow-[var(--shadow-card)] sm:hidden">
            <ul className="divide-y">
              {fixes.map((f) => (
                <li key={f.fix} className="grid gap-1.5 px-4 py-4">
                  <p className="text-[length:var(--text-label)] text-muted-foreground">{f.gap}</p>
                  <p><b className="font-semibold">{f.fix}:</b> <span className="text-ink-2">{f.how}</span></p>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="hidden gap-0 overflow-hidden py-0 shadow-[var(--shadow-card)] sm:flex">
            <Table className="text-[length:var(--text-body)]">
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="h-11 w-[44%] pl-5 text-[length:var(--text-label)] text-muted-foreground">What was going wrong</TableHead>
                  <TableHead className="h-11 pr-5 text-[length:var(--text-label)] text-muted-foreground">What we changed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fixes.map((f) => (
                  <TableRow key={f.fix} className="hover:bg-muted/50">
                    <TableCell className="py-4 pl-5 align-top whitespace-normal text-ink-2">{f.gap}</TableCell>
                    <TableCell className="py-4 pr-5 align-top whitespace-normal">
                      <b className="font-semibold">{f.fix}:</b> <span className="text-ink-2">{f.how}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Section>

        {/* ---------- 3. the main chart ---------- */}
        <Section title="After the changes, far fewer room cleans were interrupted by urgent requests">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <Card className="gap-0 py-6 shadow-[var(--shadow-card)]">
              <CardContent>
                <p className="text-[length:var(--text-label)] text-muted-foreground">Room assignments by priority, pilot site</p>
                <ChartContainer config={mixConfig} className="mt-3 aspect-auto h-[150px] w-full">
                  <BarChart data={mix} layout="vertical" barCategoryGap={14} margin={{ left: 0, right: 0, top: 0, bottom: 0 }} accessibilityLayer>
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis type="category" dataKey="when" tickLine={false} axisLine={false} width={56} tick={{ fontSize: 13 }} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" formatter={(v, n) => (
                      <div className="flex w-full justify-between gap-6"><span className="text-muted-foreground">{mixConfig[n as keyof typeof mixConfig].label}</span><b className="tabular">{v}%</b></div>
                    )} />} />
                    {(["stat", "next", "normal"] as const).map((k, i) => (
                      <Bar key={k} dataKey={k} stackId="a" fill={`var(--color-${k})`} isAnimationActive={false}
                        radius={i === 0 ? [6, 0, 0, 6] : i === 2 ? [0, 6, 6, 0] : 0}>
                        <LabelList dataKey={k} position="center" formatter={(v) => (Number(v) >= 8 ? `${v}%` : "")}
                          className={k === "normal" ? "fill-foreground" : "fill-white dark:fill-background"} fontSize={12} />
                      </Bar>
                    ))}
                  </BarChart>
                </ChartContainer>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[length:var(--text-label)] text-muted-foreground">
                  {Object.entries(mixConfig).map(([k, c]) => (
                    <span key={k} className="inline-flex items-center gap-2"><i className="size-2.5 rounded-[3px]" style={{ background: c.color }} />{c.label}{k === "stat" && <b className="font-semibold text-foreground tabular">10% → 4%</b>}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid content-start gap-3">
              {[
                { n: "21 min", tag: "was 39 min", label: "wait for rooms flagged late, on the pilot unit" },
                { n: "2 min", tag: "per room", label: "shorter clean time" },
                { n: "5 of 6", tag: "", label: "changes stayed in place through the patient surge" },
              ].map((x) => (
                <Card key={x.label} className="gap-0 py-4 shadow-[var(--shadow-card)]">
                  <CardContent className="flex items-baseline gap-4">
                    <span className="font-serif text-[length:var(--text-num)] leading-none whitespace-nowrap tabular">{x.n}</span>
                    <span className="min-w-0">
                      {x.tag && <span className="mr-2 inline-block rounded-full bg-good-bg px-2.5 py-0.5 text-[length:var(--text-label)] font-medium text-good">{x.tag}</span>}
                      <span className="text-ink-2">{x.label}</span>
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <p className="mt-10 font-serif text-[length:var(--text-h2)]">Small, steady changes hold up under pressure.</p>
        </Section>
        {/* ---------- closing ask: repeats the top button for readers who reached the end ---------- */}
        <section id="contact" className="bg-foreground text-background dark:bg-card dark:text-foreground">
          <div className="mx-auto grid w-[min(1120px,100%-32px)] gap-8 py-14 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="min-w-0">
              <h2 className="text-[length:var(--text-title)] leading-[1.05]">Where is your capacity hiding?</h2>
              <p className="mt-4 max-w-[52ch] opacity-85">Book a free 30-minute operational assessment. No pitch. Just an honest look at where you are and what to do next.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline" className="pressable h-12 rounded-full border-current bg-transparent px-6 text-[length:var(--text-body)] font-semibold text-inherit hover:bg-background/10 dark:hover:bg-foreground/10">
                <a href={`${SITE}/#results`}>See more results</a>
              </Button>
              <Button asChild className="pressable h-12 rounded-full px-6 text-[length:var(--text-body)] font-semibold">
                <a href={BOOK} target="_blank" rel="noopener">Book your free assessment <ArrowRight className="size-4" /></a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-[min(1120px,100%-32px)] flex-wrap items-center justify-between gap-6 pt-10 text-[length:var(--text-label)] text-muted-foreground">
          <div className="flex items-center gap-5">
            <img src={dark ? logoMono : logo} alt="Portico Group" className="h-9 w-auto" width={471} height={131} />
            <img src={badge} alt="Smartsheet Aligned Elite Solution Partner" className="h-16 w-auto" width={104} height={104} />
          </div>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[...NAV.filter(([t]) => t !== "Results"), ["Contact", "/#contact"]].map(([t, h]) => (
              <a key={t} href={`${SITE}${h}`} className="py-1 transition-colors hover:text-foreground">{t}</a>
            ))}
            <a href="https://www.linkedin.com/in/ortizmichael" target="_blank" rel="noopener" aria-label="Michael Ortiz on LinkedIn" className="p-1 transition-colors hover:text-foreground">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </nav>
        </div>
        <div className="mx-auto mt-8 flex w-[min(1120px,100%-32px)] flex-wrap justify-between gap-3 border-t py-6 text-[length:var(--text-label)] text-muted-foreground">
          <p>© 2026 Portico Group, Inc. · porticogroup.co · 714-501-8437 · <a href={`${SITE}/privacy-policy.html`} className="underline">Privacy</a><br />Smartsheet is a trademark of Smartsheet Inc.</p>
          <p className="font-serif text-[length:var(--text-body)] italic text-good">Finding silence in the noise.</p>
        </div>
      </footer>
    </MotionConfig>
  )
}
