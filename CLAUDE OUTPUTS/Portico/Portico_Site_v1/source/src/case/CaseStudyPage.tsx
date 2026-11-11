import { ArrowRight, BarChart3, CheckCircle2, Clock, Layers, ShieldCheck, TrendingDown, TrendingUp, Truck, Users, Wallet } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { Button } from "@/components/ui/button"
import { BOOK, Layout } from "@/site/Layout"
import type { CaseStudy, IconName, Section } from "@/content/types"
import { BlockView, Html } from "./Blocks"

const ICONS: Record<IconName, typeof Clock> = {
  clock: Clock, down: TrendingDown, up: TrendingUp, users: Users, money: Wallet,
  check: CheckCircle2, layers: Layers, shield: ShieldCheck, truck: Truck, chart: BarChart3,
}
const wrap = "mx-auto w-[min(1120px,100%-32px)]"

function DataSection({ s, study, root }: { s: Section; study: CaseStudy; root: string }) {
  const blocks = (list: Section["main"]) => (
    <div className="grid min-w-0 content-start gap-6">{list.map((b, i) => <BlockView key={i} b={b} study={study} root={root} />)}</div>
  )
  return (
    <section className={`${wrap} py-10 sm:py-12`}>
      <h2 className="mb-6 text-[length:var(--text-h2)] leading-snug sm:mb-8">{s.title}</h2>
      {s.side?.length ? (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">{blocks(s.main)}{blocks(s.side)}</div>
      ) : blocks(s.main)}
    </section>
  )
}

export function CaseStudyPage({ study, root }: { study: CaseStudy; root: string }) {
  const a = study.approach
  return (
    <Layout root={root} question={study.ctaQuestion}>
      {/* ---------- first screen: header line, point, ask, numbers, reasons ---------- */}
      <section className={`${wrap} pt-6 pb-4`}>
        <p className="border-b pb-3 text-[length:var(--text-label)] text-muted-foreground">
          <a href={`${root}index.html#results`} className="text-foreground underline decoration-border hover:decoration-foreground">Case study</a>
          {" · "}Portico Group · For {study.audience}
        </p>

        <div className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <BlurFade delay={0}>
              <h1 className="text-[length:var(--text-title)] leading-[1.05]">{study.h1}</h1>
            </BlurFade>
            <BlurFade delay={0.06}>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Button asChild className="pressable h-12 rounded-full px-6 text-[length:var(--text-body)] font-semibold">
                  <a href={BOOK} target="_blank" rel="noopener">Book a free 30-minute assessment <ArrowRight className="size-4" /></a>
                </Button>
                <span className="text-[length:var(--text-label)] text-muted-foreground">With Michael Ortiz. No pitch.</span>
              </div>
            </BlurFade>
            <ul className="mt-8 grid gap-3">
              {study.reasons.map((r, i) => {
                const Icon = ICONS[r.icon] ?? CheckCircle2
                return (
                  <BlurFade key={r.lead} delay={0.12 + i * 0.05}>
                    <li className="flex items-start gap-3">
                      <Icon className="mt-0.5 size-5 shrink-0 text-good" strokeWidth={1.75} aria-hidden />
                      <p className="text-ink-2"><b className="font-semibold text-foreground">{r.lead}</b> <Html html={r.text} /></p>
                    </li>
                  </BlurFade>
                )
              })}
            </ul>
          </div>
          <BlurFade delay={0.1} className="hidden lg:block">
            <img src={`${root}assets/img/${study.hero.src}`} width={1536} height={1024} alt={study.hero.alt}
              className="h-full max-h-[360px] w-full rounded-xl object-cover" />
          </BlurFade>
        </div>

        <dl className="mt-10 grid grid-cols-2 border-y lg:grid-cols-4">
          {study.headline.map((s, i) => (
            <div key={s.label} className={`py-5 pr-4 ${i % 2 ? "border-l pl-4" : ""} ${i === 2 ? "lg:border-l lg:pl-4" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-[length:var(--text-num)] leading-none tabular whitespace-nowrap">
                {s.text ?? <>{s.prefix}<NumberTicker value={s.value} decimalPlaces={s.decimals ?? 0} delay={0.15 + i * 0.05} />{s.suffix}</>}
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
        <div className={`${wrap} py-12 sm:py-16`}>
          <h2 id="approach" className="max-w-[20ch] text-[length:var(--text-title)] leading-[1.08]">
            {a.thesis} <span className="text-primary">{a.accent}</span>
          </h2>

          {a.path && (
            <figure className="mt-10" aria-label={`${a.path.steps.join(", ")}.${a.path.connector ? ` Each link is a ${a.path.connector}.` : ""}`}>
              <figcaption className="text-[length:var(--text-label)] text-muted-foreground"><Html html={a.path.caption} /></figcaption>
              <ol className="mt-5 grid gap-0 sm:grid-flow-col sm:auto-cols-fr">
                {a.path.steps.map((step, i, all) => (
                  <li key={step} className="relative flex items-center gap-3 pb-7 last:pb-0 sm:block sm:pb-0 sm:pr-3">
                    {i < all.length - 1 && (
                      <>
                        <span aria-hidden className="absolute top-9 bottom-0 left-[15px] border-l-2 border-dashed border-primary/70 sm:hidden" />
                        <span aria-hidden className="absolute top-[15px] right-0 left-9 hidden border-t-2 border-dashed border-primary/70 sm:block" />
                        {a.path!.connector && (
                          <>
                            <span className="absolute left-12 top-[38px] text-[length:var(--text-label)] font-medium text-primary sm:hidden">{a.path!.connector}</span>
                            <span className="absolute top-[22px] right-0 left-9 hidden text-center text-[length:var(--text-label)] font-medium text-primary sm:block">{a.path!.connector}</span>
                          </>
                        )}
                      </>
                    )}
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-foreground bg-card font-serif text-[length:var(--text-body)] tabular">{i + 1}</span>
                    <span className="font-medium sm:mt-4 sm:block sm:pr-4">{step}</span>
                  </li>
                ))}
              </ol>
            </figure>
          )}

          <div className={`${a.path ? "mt-12 border-t pt-8" : "mt-8"} grid gap-8 md:grid-cols-2 md:gap-12`}>
            <div className="min-w-0">
              <h3 className="text-[length:var(--text-h2)]">The challenge</h3>
              <p className="mt-3 max-w-[62ch] text-ink-2"><Html html={a.challenge} /></p>
            </div>
            <div className="min-w-0">
              <h3 className="text-[length:var(--text-h2)]">Our approach</h3>
              <p className="mt-3 max-w-[62ch] text-ink-2"><Html html={a.approach} /></p>
            </div>
          </div>
        </div>
      </section>

      {study.sections.map((s) => <DataSection key={s.title} s={s} study={study} root={root} />)}

      {study.closing && (
        <p className={`${wrap} pb-14 font-serif text-[length:var(--text-h2)]`}><Html html={study.closing} /></p>
      )}
    </Layout>
  )
}
