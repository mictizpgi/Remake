// Magic UI blur-fade, rebuilt in CSS so the page can be pre-rendered:
// the motion version writes opacity:0 into server HTML, which leaves text invisible until JS runs.
// Same look (6px blur, 6px rise, fade), strong ease-out; at rest the content is always visible.
import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BlurFadeProps {
  children: ReactNode
  className?: string
  delay?: number // seconds, like the original
  // accepted for API compatibility with the Magic UI component; motion is set in CSS
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  transition?: unknown
}

export function BlurFade({ children, className, delay = 0 }: BlurFadeProps) {
  return (
    <div className={cn("blur-fade", className)} style={{ "--bf-delay": `${0.04 + delay}s` } as CSSProperties}>
      {children}
    </div>
  )
}
