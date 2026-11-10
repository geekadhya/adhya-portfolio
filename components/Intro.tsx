"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { intro, type IntroTone } from "@/lib/content/home";
import { Note } from "./Note";
import { Reveal } from "./Reveal";
import { Sticker } from "./Sticker";

type Word = { w: string; tone?: IntroTone; serif?: boolean; scribble?: boolean };

const toneClass: Record<IntroTone, string> = {
  butter: "text-butter",
  tomato: "text-tomato",
  bubblegum: "text-bubblegum",
  violet: "text-[#9b7dff]",
};

function ScrollWord({ word, i, n, progress, still }: { word: Word; i: number; n: number; progress: MotionValue<number>; still: boolean }) {
  const start = i / n;
  const end = Math.min((i + 1) / n, 1);
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  const style = [
    word.tone ? toneClass[word.tone] : "",
    word.serif ? "font-serif italic font-normal tracking-normal" : "",
    word.scribble ? "scribble" : "",
  ].join(" ");

  return (
    <motion.span data-word className={style} style={{ opacity: still ? 1 : opacity }}>
      {word.w}{" "}
    </motion.span>
  );
}

export function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });

  const words: Word[] = intro.leadSegments.flatMap((seg) =>
    seg.text
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ w, tone: "tone" in seg ? seg.tone : undefined, serif: "serif" in seg ? seg.serif : undefined, scribble: "scribble" in seg ? seg.scribble : undefined })),
  );

  return (
    <section aria-label="Introduction" className="relative isolate overflow-hidden bg-[#17151c] px-[var(--gutter)]">
      <div aria-hidden="true" className="dots-light absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_30%_20%,black,transparent_70%)]" />


      <div className="mx-auto max-w-[1600px] py-[clamp(4rem,8vw,8rem)]">
        <div className="mb-10 flex flex-wrap items-center gap-3 text-sm sm:text-base">
          <Sticker tone="butter" rotate={-3}>Code</Sticker>
          <Sticker tone="bubblegum" rotate={2}>Design</Sticker>
          <Sticker tone="tomato" rotate={-1.5}>Organised chaos</Sticker>
        </div>

        <p ref={ref} className="max-w-[1350px] text-[clamp(2.75rem,7.6vw,8.5rem)] font-semibold leading-[0.96] tracking-[-0.045em]">
          {words.map((word, i) => (
            <ScrollWord key={`${word.w}-${i}`} word={word} i={i} n={words.length} progress={scrollYProgress} still={!!reduce} />
          ))}
        </p>

        <div className="mt-[clamp(2.5rem,6vw,5rem)] grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-6">
          <div className="hidden text-bubblegum md:col-span-4 md:block">
            <Note rotate={-5} arrow="right">yes, both halves of the brain. it gets loud in here.</Note>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="max-w-[46ch] text-[clamp(1.1rem,1.5vw,1.45rem)] leading-[1.55] text-[#d6d2e0]">{intro.body}</p>
            </Reveal>

            <Link
              href={intro.cta.href}
              className="sticker wiggle mt-10 bg-butter px-6 py-3 text-base text-ink shadow-[4px_4px_0_0_var(--color-paper)]"
              style={{ transform: "rotate(-1.5deg)", ["--r" as string]: "-1.5deg" }}
            >
              {intro.cta.label}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
