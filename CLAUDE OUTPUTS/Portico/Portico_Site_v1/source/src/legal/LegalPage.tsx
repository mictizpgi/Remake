import { Layout } from "@/site/Layout"
import { privacy } from "@/content/privacy"

/** The privacy notice: the live text, exactly as authored, in the site's layout and type. */
export function LegalPage({ root }: { root: string }) {
  return (
    <Layout root={root} question="Ready to see what’s possible?">
      <article className="mx-auto w-[min(600px,100%-32px)] pt-10 pb-16 sm:pt-14">
        <p className="text-[length:var(--text-label)] text-muted-foreground">{privacy.eyebrow}</p>
        <h1 className="mt-4 text-[length:var(--text-title)] leading-[1.05]">{privacy.h1}</h1>
        <div className="legal mt-8" dangerouslySetInnerHTML={{ __html: privacy.body }} />
      </article>
    </Layout>
  )
}
