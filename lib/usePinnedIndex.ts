"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

/**
 * For a pinned section n × 100svh tall: scroll progress through it picks the active item.
 * goTo(i) scrolls to the middle of item i's slice (used by keyboard-reachable buttons).
 */
export function usePinnedIndex<T extends HTMLElement>(n: number) {
  const ref = useRef<T>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const pick = (p: number) => Math.min(n - 1, Math.max(0, Math.floor(p * n)));

  useMotionValueEvent(scrollYProgress, "change", (p) => setIndex(pick(p)));
  useEffect(() => setIndex(pick(scrollYProgress.get())), []); // eslint-disable-line react-hooks/exhaustive-deps

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const range = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (range * (i + 0.5)) / n, behavior: "smooth" });
  };

  return { ref, index, goTo, scrollYProgress };
}
