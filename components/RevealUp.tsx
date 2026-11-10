"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export type Part = { t: string; c?: string };

type Props = {
  /** Plain text, or an array of pieces so some words can carry their own classes. */
  parts: string | Part[];
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  id?: string;
  delay?: number;
  /** animate on page load instead of on scroll */
  immediate?: boolean;
};

/**
 * Headline reveal: every word slides up out of its own clipped box.
 * We watch the whole heading (not the words) for visibility, because a word that starts
 * hidden inside its clip box is never "in view" and would never animate.
 */
export function RevealUp({ parts, as = "h2", className = "", id, delay = 0, immediate = false }: Props) {
  const list: Part[] = typeof parts === "string" ? [{ t: parts }] : parts;
  const words = list.flatMap((p) => p.t.split(" ").filter(Boolean).map((w) => ({ w, c: p.c })));
  const Tag = as as React.ElementType;

  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const show = immediate || seen;

  return (
    <Tag ref={ref} id={id} className={className}>
      {words.map((word, i) => (
        <span key={`${word.w}-${i}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            data-word
            className={`inline-block ${word.c ?? ""}`}
            initial={{ y: "115%" }}
            animate={{ y: show ? "0%" : "115%" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: delay + i * 0.06 }}
          >
            {word.w}
          </motion.span>
          {i < words.length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </Tag>
  );
}
