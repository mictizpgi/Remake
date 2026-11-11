import { useEffect, useLayoutEffect, useRef, type ComponentPropsWithoutRef } from "react"
import { animate, useInView, useMotionValue, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  // Reduced motion: show the final number, no count.
  const reduce = useReducedMotion()
  const fmt = (n: number) =>
    Intl.NumberFormat("en-US", { minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces }).format(n)
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  // Emil: a fixed-duration strong ease-out lands exactly on the value; the old spring crawled for seconds
  const springValue = motionValue
  const isInView = useInView(ref, { once: true, margin: "0px" })
  // Count only numbers that are on screen when the page opens (one entrance moment, per Emil);
  // numbers further down keep their real value at rest instead of waiting at 0.
  const counts = useRef(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (reduce || !counts.current) return
    if (isInView) {
      timer = setTimeout(() => {
        animate(motionValue, direction === "down" ? startValue : value, { duration: 1.2, ease: [0.23, 1, 0.32, 1] })
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [motionValue, isInView, delay, value, direction, startValue, reduce])

  // Pre-rendered HTML carries the real number (for search engines and no-JS readers);
  // after hydration, reset to the start value before paint so the count-up can run.
  useLayoutEffect(() => {
    const el = ref.current
    if (reduce || !el) return
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight && r.bottom > 0) {
      counts.current = true
      el.textContent = fmt(direction === "down" ? value : startValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)))
        }
      }),
    [springValue, decimalPlaces]
  )

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums",
        className
      )}
      {...props}
    >
      {fmt(value)}
    </span>
  )
}
