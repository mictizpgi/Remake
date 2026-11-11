import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import type { Block, CaseStudy } from "@/content/types"

const cardCls = "gap-0 py-6 shadow-[var(--shadow-card)]"
/** Content text may contain <b> only; it is our own content, never visitor input. */
export const Html = ({ html, className }: { html: string; className?: string }) => (
  <span className={className} dangerouslySetInnerHTML={{ __html: html }} />
)
const label = "text-[length:var(--text-label)] text-muted-foreground"
const CHART_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)", "var(--chart-4, var(--chart-3))"]

function Bars({ b }: { b: Extract<Block, { type: "bars" }> }) {
  return (
    <div>
      <p className={label}>{b.caption}</p>
      {b.rows.map((r) => (
        <div key={r.label} className="mt-4 grid grid-cols-[minmax(90px,140px)_1fr_auto] items-center gap-3 max-sm:grid-cols-[1fr_auto]">
          <span className="text-[length:var(--text-label)]">{r.label}</span>
          <div className="h-3 overflow-hidden rounded-full bg-muted max-sm:col-span-2 max-sm:row-start-2">
            <div className={`h-full rounded-full ${r.highlight ? "bg-primary" : "bg-chart-3"}`} style={{ width: `${Math.max(2, Math.min(100, r.width))}%` }} />
          </div>
          <b className="text-right font-semibold whitespace-nowrap tabular">{r.display}</b>
        </div>
      ))}
    </div>
  )
}

function Stack({ b }: { b: Extract<Block, { type: "stack" }> }) {
  const config = Object.fromEntries(b.series.map((s, i) => [s.key, { label: s.label, color: CHART_COLORS[i] }])) as ChartConfig
  const last = b.series.length - 1
  return (
    <div>
      <p className={label}>{b.caption}</p>
      <ChartContainer config={config} className="mt-3 aspect-auto w-full" style={{ height: 40 + b.rows.length * 52 }}>
        <BarChart data={b.rows} layout="vertical" barCategoryGap={14} margin={{ left: 0, right: 0, top: 0, bottom: 0 }} accessibilityLayer>
          <XAxis type="number" domain={[0, "dataMax"]} hide />
          <YAxis type="category" dataKey="label" tickLine={false} axisLine={false} width={64} tick={{ fontSize: 13 }} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" formatter={(v, n) => (
            <div className="flex w-full justify-between gap-6"><span className="text-muted-foreground">{config[String(n)]?.label}</span><b className="tabular">{v}%</b></div>
          )} />} />
          {b.series.map((s, i) => (
            <Bar key={s.key} dataKey={s.key} stackId="a" fill={`var(--color-${s.key})`} isAnimationActive={false}
              radius={i === 0 ? [6, 0, 0, 6] : i === last ? [0, 6, 6, 0] : 0}>
              <LabelList dataKey={s.key} position="center" formatter={(v) => (Number(v) >= 8 ? `${v}%` : "")}
                className={i === last ? "fill-foreground" : "fill-white dark:fill-background"} fontSize={12} />
            </Bar>
          ))}
        </BarChart>
      </ChartContainer>
      <div className={`mt-3 flex flex-wrap gap-x-5 gap-y-1 ${label}`}>
        {b.series.map((s, i) => (
          <span key={s.key} className="inline-flex items-center gap-2">
            <i className="size-2.5 rounded-[3px]" style={{ background: CHART_COLORS[i] }} />{s.label}
            {i === 0 && b.legendNote && <b className="font-semibold text-foreground tabular">{b.legendNote}</b>}
          </span>
        ))}
      </div>
      {/* the same numbers as text, for search engines and screen readers */}
      <p className="sr-only">{b.rows.map((r) => `${r.label}: ${b.series.map((s) => `${s.label} ${r[s.key]}%`).join(", ")}`).join(". ")}</p>
    </div>
  )
}

function FixTable({ b }: { b: Extract<Block, { type: "table" }> }) {
  return (
    <>
      <Card className="gap-0 overflow-hidden py-0 shadow-[var(--shadow-card)] sm:hidden">
        <ul className="divide-y">
          {b.rows.map((r) => (
            <li key={r.a} className="grid gap-1.5 px-4 py-4">
              <p className={label}><Html html={r.a} /></p>
              <p>{r.bLead && <b className="font-semibold">{r.bLead}: </b>}<Html className="text-ink-2" html={r.b} /></p>
            </li>
          ))}
        </ul>
      </Card>
      <Card className="hidden gap-0 overflow-hidden py-0 shadow-[var(--shadow-card)] sm:flex">
        <Table className="text-[length:var(--text-body)]">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className={`h-11 w-[44%] pl-5 ${label}`}>{b.head[0]}</TableHead>
              <TableHead className={`h-11 pr-5 ${label}`}>{b.head[1]}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {b.rows.map((r) => (
              <TableRow key={r.a} className="hover:bg-muted/50">
                <TableCell className="py-4 pl-5 align-top whitespace-normal text-ink-2"><Html html={r.a} /></TableCell>
                <TableCell className="py-4 pr-5 align-top whitespace-normal">
                  {r.bLead && <b className="font-semibold">{r.bLead}: </b>}<Html className="text-ink-2" html={r.b} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  )
}

function Stats({ b }: { b: Extract<Block, { type: "stats" }> }) {
  return (
    <div className="grid content-start gap-3">
      {b.items.map((x) => (
        <Card key={x.label} className="gap-0 py-4 shadow-[var(--shadow-card)]">
          <CardContent className="flex items-baseline gap-4">
            <span className="font-serif text-[length:var(--text-num)] leading-none whitespace-nowrap tabular">{x.n}</span>
            <span className="min-w-0">
              {x.tag && <span className="mr-2 inline-block rounded-full bg-good-bg px-2.5 py-0.5 text-[length:var(--text-label)] font-medium text-good">{x.tag}</span>}
              <Html className="text-ink-2" html={x.label} />
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function Facts({ facts }: { facts: CaseStudy["facts"] }) {
  return (
    <dl className="grid content-start gap-0 text-[length:var(--text-label)]">
      {facts.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[88px_1fr] gap-3 border-t py-3 last:border-b">
          <dt className="text-muted-foreground">{k}</dt>
          <dd className="text-pretty text-foreground">{v}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Charts, bars and tables sit on a card; text, stats and facts sit on the page. */
export function BlockView({ b, study, root }: { b: Block; study: CaseStudy; root: string }) {
  switch (b.type) {
    case "bars": return <Card className={cardCls}><CardContent><Bars b={b} /></CardContent></Card>
    case "stack": return <Card className={cardCls}><CardContent><Stack b={b} /></CardContent></Card>
    case "table": return <FixTable b={b} />
    case "stats": return <Stats b={b} />
    case "facts": return <Facts facts={study.facts} />
    case "text": return <p className="max-w-[68ch] text-ink-2"><Html html={b.html} /></p>
    case "quote": return <p className="font-serif text-[length:var(--text-h2)] leading-snug"><Html html={b.text} /></p>
    case "list":
      return (
        <ul className="grid max-w-[68ch] gap-2 text-ink-2">
          {b.items.map((i) => <li key={i} className="flex gap-3"><span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-primary" /><Html html={i} /></li>)}
        </ul>
      )
    case "image":
      return (
        <figure className="overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-card)]">
          <img src={`${root}assets/img/${b.src}`} alt={b.alt} className="w-full" loading="lazy" />
          {b.caption && <figcaption className={`border-t px-4 py-3 ${label}`}><Html html={b.caption} /></figcaption>}
        </figure>
      )
  }
}
