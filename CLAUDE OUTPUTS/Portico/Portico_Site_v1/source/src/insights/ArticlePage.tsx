import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { Layout } from "@/site/Layout"
import { Html } from "@/case/Blocks"
import type { Article, ArticleBlock } from "@/content/insights"

// ~70–75 characters per line at 16px, the comfortable range for long reading
const narrow = "mx-auto w-[min(600px,100%-32px)]"
const label = "text-[length:var(--text-label)] text-muted-foreground"

/** Headshot: the photo file has a thin circle drawn into it, so zoom it out of view and draw a clean one. */
export function Headshot({ root, size }: { root: string; size: number }) {
  return (
    <span className="block shrink-0 overflow-hidden rounded-full ring-1 ring-border" style={{ width: size, height: size }}>
      <img src={`${root}assets/img/michael-ortiz.jpg`} alt="" width={size} height={size} className="size-full scale-[1.06] object-cover" />
    </span>
  )
}

function Bullet() {
  return <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rotate-45 bg-primary" />
}

function BlockView({ b, root }: { b: ArticleBlock; root: string }) {
  switch (b.type) {
    case "p": return <p className="text-ink-2"><Html html={b.html} /></p>
    case "h2": return <h2 className="pt-6 text-[length:var(--text-h2)] leading-snug"><Html html={b.text} /></h2>
    case "list":
      return <ul className="grid gap-2.5 text-ink-2">{b.items.map((i) => <li key={i} className="flex gap-3"><Bullet /><span><Html html={i} /></span></li>)}</ul>
    case "steps":
      return (
        <ol className="grid gap-3">
          {b.items.map((i, n) => (
            <li key={i} className="grid grid-cols-[32px_1fr] gap-3 rounded-xl border bg-card p-4 shadow-[var(--shadow-card)]">
              <span className="flex size-8 items-center justify-center rounded-full border-2 border-foreground font-serif tabular">{n + 1}</span>
              <span className="pt-1 text-ink-2"><Html html={i} /></span>
            </li>
          ))}
        </ol>
      )
    case "callout":
      return <p className="border-y py-5 font-serif text-[length:var(--text-h2)] leading-snug"><Html html={b.html} /></p>
    case "bars":
      return (
        <figure className="rounded-xl border bg-card p-5 shadow-[var(--shadow-card)]" aria-label={b.caption}>
          <p className={label}><Html html={b.caption} /></p>
          {b.rows.map((r) => (
            <div key={r.label} className="mt-4 grid grid-cols-[minmax(70px,110px)_1fr_auto] items-center gap-3 max-sm:grid-cols-[1fr_auto]">
              <span className="text-[length:var(--text-label)]"><Html html={r.label} /></span>
              <div className="h-3 overflow-hidden rounded-full bg-muted max-sm:col-span-2 max-sm:row-start-2">
                <div className={`h-full rounded-full ${r.highlight ? "bg-primary" : "bg-chart-3"}`} style={{ width: `${Math.max(2, Math.min(100, r.width))}%` }} />
              </div>
              <b className="text-right font-semibold whitespace-nowrap tabular"><Html html={r.display} /></b>
            </div>
          ))}
          {b.note && <figcaption className={`mt-4 border-t pt-3 ${label}`}><Html html={b.note} /></figcaption>}
        </figure>
      )
    case "image":
      return <ArticleImage root={root} img={b} />
  }
}

function ArticleImage({ root, img }: { root: string; img: NonNullable<Article["image"]> }) {
  return (
    <figure className="overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-card)]">
      {img.label && <p className={`border-b px-4 py-2.5 ${label}`}>{img.label}</p>}
      <img src={`${root}assets/img/${img.src}`} alt={img.alt} className="w-full" />
      {img.caption && <figcaption className={`border-t px-4 py-3 ${label}`}>{img.caption}</figcaption>}
    </figure>
  )
}

export function ArticlePage({ a, root }: { a: Article; root: string }) {
  return (
    <Layout root={root} question={a.ctaQuestion} secondary={{ label: "More insights", href: `${root}insights/` }}>
      <article>
        <header className={`${narrow} pt-8 sm:pt-12`}>
          <p className={label}>
            <a href={`${root}insights/`} className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">Insights</a> · {a.category}
          </p>
          <BlurFade delay={0}>
            <h1 className="mt-5 text-[length:var(--text-title)] leading-[1.08]"><Html html={a.h1} /></h1>
          </BlurFade>
          <BlurFade delay={0.06}>
            <p className="mt-5 text-ink-2"><Html html={a.lead} /></p>
          </BlurFade>
          <div className="mt-6 flex items-center gap-3">
            <Headshot root={root} size={44} />
            <p className={label}><span className="font-semibold text-foreground">Michael Ortiz</span>, Founder & Principal, Portico Group<br />{a.dateline}</p>
          </div>
        </header>

        {a.image && <div className={`${narrow} mt-8`}><ArticleImage root={root} img={a.image} /></div>}

        <div className={`${narrow} mt-10 grid gap-5 pb-6`}>
          <aside className="rounded-xl border bg-card p-5 shadow-[var(--shadow-card)]" aria-labelledby="takeaways">
            <h2 id="takeaways" className="font-semibold">Key takeaways</h2>
            <ul className="mt-3 grid gap-2.5 text-ink-2">{a.takeaways.map((t) => <li key={t} className="flex gap-3"><Bullet /><span><Html html={t} /></span></li>)}</ul>
          </aside>

          {a.body.map((b, i) => <BlockView key={i} b={b} root={root} />)}

          {a.faq && a.faq.length > 0 && (
            <section aria-labelledby="faq" className="pt-6">
              <h2 id="faq" className="text-[length:var(--text-h2)] leading-snug">{a.faqTitle ?? "Common questions"}</h2>
              <div className="mt-4 divide-y rounded-xl border bg-card shadow-[var(--shadow-card)]">
                {a.faq.map((f) => (
                  <details key={f.q} className="group px-5">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                      <Html html={f.q} />
                      <ChevronDown aria-hidden className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <p className="pb-5 text-ink-2"><Html html={f.a} /></p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {a.related && (
            <a href={`${root}${a.related.href}`} className="group mt-6 flex flex-col rounded-xl border bg-card p-5 shadow-[var(--shadow-card)] transition-colors hover:border-primary/60">
              <span className={`flex items-center justify-between gap-3 ${label}`}><Html html={a.related.tag} /><ArrowUpRight aria-hidden className="size-5 text-muted-foreground transition-colors group-hover:text-primary" /></span>
              <span className="mt-2 font-serif text-[length:var(--text-h2)] leading-snug"><Html html={a.related.title} /></span>
              <span className="mt-1.5 text-ink-2"><Html html={a.related.text} /></span>
              <span className="mt-3 inline-flex items-center gap-1.5 font-semibold text-primary">Read the case study <ArrowRight className="size-4" /></span>
            </a>
          )}

          <aside className="mt-6 flex gap-4 border-t pt-6" aria-label="About the author">
            <Headshot root={root} size={64} />
            <div>
              <p className="font-semibold">Michael Ortiz</p>
              <p className="mt-1 text-ink-2">Founder and Principal of Portico Group. 25+ years in operations across manufacturing, healthcare, and distribution. Smartsheet Aligned Elite Solution Partner. Bilingual, English and Spanish.</p>
              <a href="https://www.linkedin.com/in/ortizmichael" target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-1.5 font-semibold text-primary underline-offset-4 hover:underline">Connect on LinkedIn <ArrowRight className="size-4" /></a>
            </div>
          </aside>
        </div>
      </article>
    </Layout>
  )
}
