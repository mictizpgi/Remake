import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { ResultCard } from "@/site/ResultCard"
import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Button } from "@/components/ui/button"
import { BOOK, Layout } from "@/site/Layout"
import { filters, home, type Cat } from "@/content/home"

const wrap = "mx-auto w-[min(1120px,100%-32px)]"
const label = "text-[length:var(--text-label)] text-muted-foreground"

function Results({ root }: { root: string }) {
  const [f, setF] = useState<Cat | "all">("all")
  const [all, setAll] = useState(false)
  const matching = home.results.filter((r) => f === "all" || r.cats.includes(f))
  // the first screen of results shows the strongest six; filters always show every match.
  // Every card stays in the HTML (hidden, not removed) so search engines can follow every case study link.
  const collapsed = f === "all" && !all
  return (
    <section id="results" className={`${wrap} scroll-mt-24 py-14 sm:py-16`}>
      <h2 className="text-[length:var(--text-h2)] leading-snug">Results from {home.results.length} engagements, in manufacturing, healthcare and supply chain</h2>
      <div role="group" aria-label="Filter results" className="mt-5 flex flex-wrap gap-2">
        {filters.map((x) => (
          <button key={x.key} type="button" onClick={() => setF(x.key)} aria-pressed={f === x.key}
            className={`pressable min-h-10 rounded-full border px-4 text-[length:var(--text-label)] font-medium transition-colors ${f === x.key ? "border-foreground bg-foreground text-background" : "bg-card text-foreground hover:border-foreground/40"}`}>
            {x.label}
          </button>
        ))}
      </div>
      {filters.map((x) => x.desc && (
        <p key={x.key} hidden={f !== x.key} className="mt-4 max-w-[68ch] text-pretty text-ink-2">{x.desc}</p>
      ))}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {home.results.map((r) => {
          const visible = matching.includes(r) && !(collapsed && matching.indexOf(r) >= 6)
          return (
            <li key={r.kind + r.n} hidden={!visible}><ResultCard r={r} root={root} /></li>
          )
        })}
      </ul>
      {f === "all" && !all && (
        <button type="button" onClick={() => setAll(true)}
          className="pressable mt-6 min-h-11 rounded-full border bg-card px-5 font-semibold hover:border-foreground/40">
          Show all {home.results.length} results
        </button>
      )}
    </section>
  )
}

export function HomePage({ root }: { root: string }) {
  const a = home.approach
  return (
    <Layout root={root} question={home.ctaQuestion} secondary={{ label: "Call 714-501-8437", href: "tel:+17145018437" }}>
      {/* ---------- first screen ---------- */}
      <section className={`${wrap} pt-10 pb-4 sm:pt-14`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div>
            <BlurFade delay={0}>
              <h1 className="text-[length:var(--text-title)] leading-[1.05]">
                {home.h1} <span className="text-primary">{home.h1Accent}</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.06}>
              <p className="mt-5 max-w-[52ch] text-ink-2">{home.lead}</p>
            </BlurFade>
            <BlurFade delay={0.1}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button asChild className="pressable h-12 rounded-full px-6 text-[length:var(--text-body)] font-semibold">
                  <a href={BOOK} target="_blank" rel="noopener">Book a free 30-minute assessment <ArrowRight className="size-4" /></a>
                </Button>
                <Button asChild variant="outline" className="pressable h-12 rounded-full px-6 text-[length:var(--text-body)] font-semibold">
                  <a href="#results">See our work</a>
                </Button>
              </div>
            </BlurFade>
            <BlurFade delay={0.14}>
              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
                {home.credentials.map((c) => (
                  <div key={c.label}>
                    <dt className="font-serif text-[length:var(--text-h2)] leading-none">{c.n}</dt>
                    <dd className={`mt-1.5 ${label}`}>{c.label}</dd>
                  </div>
                ))}
              </dl>
            </BlurFade>
          </div>
          <BlurFade delay={0.08} className="relative">
            <img src={`${root}assets/img/${home.hero.src}`} alt={home.hero.alt} width={1800} height={1200}
              className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <img src={`${root}assets/img/smartsheet-elite-partner.png`} alt="Smartsheet Aligned Elite Solution Partner" width={104} height={104}
              className="absolute -bottom-5 left-5 size-20 rounded-full bg-background p-1.5 shadow-[var(--shadow-card)] sm:size-24" />
          </BlurFade>
        </div>

        {/* proof: one number per story, each links to it */}
        <dl className="mt-14 grid grid-cols-2 border-y lg:grid-cols-4">
          {home.proof.map((p, i) => (
            <div key={p.label} className={`py-5 pr-4 ${i % 2 ? "border-l pl-4" : ""} ${i === 2 ? "lg:border-l lg:pl-4" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""}`}>
              <dt className="sr-only">{p.label}</dt>
              <dd className="font-serif text-[length:var(--text-num)] leading-none tabular whitespace-nowrap">
                {p.prefix}<NumberTicker value={p.value} delay={0.15 + i * 0.05} />{p.suffix}
              </dd>
              <dd className={`mt-2 text-pretty ${label}`}>
                <a href={`${root}${p.href}`} className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground">{p.label}</a>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- how an engagement runs: the approach comes first ---------- */}
      <section id="services" aria-labelledby="how" className="mt-12 scroll-mt-24 border-y bg-card sm:mt-16">
        <div className={`${wrap} py-14 sm:py-16`}>
          <h2 id="how" className="max-w-[22ch] text-[length:var(--text-title)] leading-[1.08]">{a.title}</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {a.steps.map((s, i) => (
              <li key={s.t} className="relative">
                <span className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground font-serif tabular">{i + 1}</span>
                  {i < a.steps.length - 1 && <span aria-hidden className="hidden h-0 flex-1 border-t-2 border-dashed border-primary/70 lg:block" />}
                </span>
                <h3 className="mt-4 font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-pretty text-ink-2">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 grid gap-4 border-t pt-10 md:grid-cols-3">
            {a.services.map((s) => (
              <div key={s.t} className="flex flex-col rounded-xl border bg-background p-5">
                <h3 className="text-[length:var(--text-h2)] leading-snug">{s.t}</h3>
                <p className="mt-2 text-pretty text-ink-2">{s.d}</p>
                <p className={`mt-4 ${label}`}>{s.tags.join(" · ")}</p>
                <a href={s.link.href.startsWith("#") ? s.link.href : `${root}${s.link.href}`}
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 font-semibold text-primary underline-offset-4 hover:underline">
                  {s.link.label} <ArrowRight className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Results root={root} />

      {/* ---------- SmartOps Pro ---------- */}
      <section id="smartops" className="scroll-mt-24 border-y bg-card">
        <div className={`${wrap} grid gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center`}>
          <div>
            <h2 className="text-[length:var(--text-title)] leading-[1.08]">{home.smartops.title}</h2>
            <p className="mt-4 max-w-[52ch] text-ink-2">{home.smartops.lead}</p>
            <ul className="mt-6 grid gap-2.5">
              {home.smartops.modules.map((m) => (
                <li key={m.t} className="grid grid-cols-[96px_1fr] gap-3 border-t pt-2.5"><b className="font-semibold">{m.t}</b><span className="text-ink-2">{m.d}</span></li>
              ))}
            </ul>
            <a href={BOOK} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline">
              Talk to us about SmartOps Pro <ArrowRight className="size-4" />
            </a>
          </div>
          <figure className="overflow-hidden rounded-xl border bg-background shadow-[var(--shadow-card)]">
            <img src={`${root}assets/img/${home.smartops.shot.src}`} alt={home.smartops.shot.alt} width={990} height={640} loading="lazy" className="w-full" />
            <figcaption className={`border-t px-4 py-3 ${label}`}>{home.smartops.shot.caption}</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- what clients say ---------- */}
      <section className={`${wrap} py-14 sm:py-16`}>
        <h2 className="text-[length:var(--text-h2)] leading-snug">Leaders who needed results, not reports</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {home.quotes.map((q) => (
            <figure key={q.who} className="flex flex-col rounded-xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <blockquote className="text-ink-2">“{q.q}”</blockquote>
              <figcaption className="mt-auto pt-5"><b className="font-semibold">{q.who}</b> <span className={label}>· {q.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- about ---------- */}
      <section id="about" className="scroll-mt-24 border-t">
        <div className={`${wrap} grid gap-10 py-14 sm:py-16 md:grid-cols-[220px_minmax(0,1fr)] lg:gap-14`}>
          <figure>
            {/* the photo file has a thin circle drawn into it; zoom it out of view and draw a clean one */}
            <span className="block aspect-square w-full max-w-[220px] overflow-hidden rounded-full ring-1 ring-border">
              <img src={`${root}assets/img/${home.about.photo.src}`} alt={home.about.photo.alt} width={640} height={640} loading="lazy" className="size-full scale-[1.06] object-cover" />
            </span>
            <figcaption className="mt-3"><b className="font-semibold">Michael Ortiz</b><span className={`block ${label}`}>Founder & Principal</span></figcaption>
          </figure>
          <div className="min-w-0">
            <h2 className="max-w-[24ch] text-[length:var(--text-title)] leading-[1.08]">{home.about.title}</h2>
            {home.about.paras.map((p) => <p key={p} className="mt-4 max-w-[58ch] text-pretty text-ink-2">{p}</p>)}
            <ul className="mt-6 grid gap-2">
              {home.about.points.map((p) => <li key={p} className="flex gap-3"><span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-primary" />{p}</li>)}
            </ul>
            <p className={`mt-6 max-w-[58ch] text-pretty ${label}`}>{home.about.name}</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
