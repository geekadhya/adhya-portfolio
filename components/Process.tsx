"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { process } from "@/lib/content/home";
import { Note } from "./Note";
import { RevealUp } from "./RevealUp";

const rows = [
  { bg: "bg-tomato", text: "text-ink", noteTilt: -2 },
  { bg: "bg-butter", text: "text-ink", noteTilt: 2 },
  { bg: "bg-bubblegum", text: "text-ink", noteTilt: -1.5 },
  { bg: "bg-violet", text: "text-paper", noteTilt: 2.5 },
];

function Band({ step, index }: { step: { title: string; text: string }; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  const row = rows[index % rows.length];
  const leftward = index % 2 === 0;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], leftward ? ["0%", "-28%"] : ["-28%", "0%"]);

  const word = step.title.toUpperCase();

  return (
    <li
      ref={ref}
      className={`group relative isolate flex h-[clamp(11rem,24vw,18rem)] items-center overflow-hidden border-t-[3px] border-ink last:border-b-[3px] ${row.bg} ${row.text}`}
    >
      {/* the step name, huge, drifting with scroll; outlines itself on hover */}
      <motion.div aria-hidden="true" style={{ x: reduce ? 0 : x }} className="absolute left-0 flex w-max select-none items-center whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, k) => (
          <span key={k} className="flex items-center pr-[4vw]">
            <span className="font-display text-[clamp(6rem,17vw,15rem)] leading-none transition-colors duration-300 group-hover:text-transparent group-hover:[-webkit-text-stroke:3px_currentColor]">
              {word}
            </span>
          </span>
        ))}
      </motion.div>

      {/* the explanation, as a sticky note stuck on top */}
      <div className="relative z-10 ml-auto mr-[var(--gutter)] flex max-w-[min(26rem,62vw)] items-start gap-3" style={{ transform: `rotate(${row.noteTilt}deg)` }}>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2.5px] border-ink bg-ink font-display text-xl text-paper" aria-hidden="true">
          {index + 1}
        </span>
        <div className="rounded-2xl border-[2.5px] border-ink bg-paper p-4 text-ink shadow-[5px_5px_0_0_var(--color-ink)]">
          <h3 className="font-serif text-2xl italic leading-none md:text-3xl">{step.title}</h3>
          <p className="mt-2 text-sm leading-snug md:text-base">{step.text}</p>
        </div>
      </div>
    </li>
  );
}

export function Process() {
  return (
    <section aria-labelledby="process-title" className="bg-ink pt-[clamp(3rem,6vw,5.5rem)] text-paper">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 px-[var(--gutter)] md:mb-12">
        <RevealUp id="process-title" parts={process.title.toUpperCase()} className="font-display text-h2 uppercase" />
        <div className="text-bubblegum">
          <Note rotate={-3}>{process.note}</Note>
        </div>
      </div>

      <ol>
        {process.steps.map((step, i) => (
          <Band key={step.title} step={step} index={i} />
        ))}
      </ol>
    </section>
  );
}
