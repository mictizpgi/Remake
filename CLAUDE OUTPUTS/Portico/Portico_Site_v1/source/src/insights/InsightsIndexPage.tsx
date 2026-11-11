import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Layout } from "@/site/Layout"
import { Html } from "@/case/Blocks"
import { articles, insightsIndex } from "@/content/insights"

const wrap = "mx-auto w-[min(1120px,100%-32px)]"
const label = "text-[length:var(--text-label)] text-muted-foreground"

export function InsightsIndexPage({ root }: { root: string }) {
  const [lead, ...rest] = articles
  return (
    <Layout root={root} question={insightsIndex.ctaQuestion} ctaText={insightsIndex.ctaText} secondary={{ label: "See the results", href: `${root}index.html#results` }}>
      <section className={`${wrap} pt-10 pb-14 sm:pt-14 sm:pb-16`}>
        <BlurFade delay={0}>
          <h1 className="max-w-[18ch] text-[length:var(--text-title)] leading-[1.05]">{insightsIndex.h1}</h1>
        </BlurFade>
        <BlurFade delay={0.06}>
          <p className="mt-5 max-w-[56ch] text-ink-2">{insightsIndex.lead}</p>
        </BlurFade>

        {/* newest article leads, larger, with its image; the rest follow as cards */}
        <a href={`${root}insights/${lead.slug}.html`} className="group mt-10 grid overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-card)] transition-colors hover:border-primary/60 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {lead.image && <img src={`${root}assets/img/${lead.image.src}`} alt={lead.image.alt} width={1536} height={1024} className="aspect-[3/2] size-full object-cover md:aspect-auto" />}
          <span className="flex flex-col p-6 sm:p-8">
            <span className={label}>{lead.category} · {lead.dateline.split(" · ")[1]}</span>
            <span className="mt-3 font-serif text-[length:var(--text-h2)] leading-snug"><Html html={lead.h1} /></span>
            <span className="mt-3 text-ink-2"><Html html={lead.lead} /></span>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-semibold text-primary">Read the article <ArrowUpRight aria-hidden className="size-4" /></span>
          </span>
        </a>

        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((a) => (
            <li key={a.slug}>
              <a href={`${root}insights/${a.slug}.html`} className="group flex h-full flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/60">
                <span className={`flex items-center justify-between gap-3 ${label}`}>{a.category} · {a.dateline.split(" · ")[1]}<ArrowUpRight aria-hidden className="size-5 text-muted-foreground transition-colors group-hover:text-primary" /></span>
                <span className="mt-3 font-serif text-[length:var(--text-h2)] leading-snug"><Html html={a.h1} /></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
