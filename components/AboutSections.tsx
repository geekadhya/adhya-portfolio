"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { about, approach } from "@/lib/content/about";
import { Note } from "./Note";
import { Reveal } from "./Reveal";
import { RevealUp } from "./RevealUp";
import { Sticker } from "./Sticker";
import { Ticker } from "./Ticker";

export function AboutIntro() {
  return (
    <section className="overflow-hidden bg-ink text-paper">
      {/* scene 1: the big statement */}
      <div className="dots-light relative flex min-h-[72svh] flex-col justify-center px-[var(--gutter)] pb-14 pt-32">
        <div className="mb-8 flex flex-wrap gap-3 text-base">
          <Sticker tone="butter" rotate={-3}>About me</Sticker>
          <Sticker tone="bubblegum" rotate={2}>Hi again</Sticker>
        </div>

        <RevealUp
          as="h1"
          immediate
          parts={[
            { t: "BUILDING WITH" },
            { t: "PURPOSE.", c: "text-tomato" },
            { t: "DESIGNING WITH" },
            { t: "INTENT.", c: "text-butter" },
          ]}
          className="max-w-[16ch] font-display text-display uppercase"
        />

        <p className="mt-10 max-w-xl self-end text-lg leading-relaxed text-[#d6d2e0] md:text-2xl">{about.statement}</p>
      </div>

      {/* scene 2: portrait in front of a loud word */}
      <div className="relative isolate flex h-[72svh] min-h-[520px] items-end justify-center overflow-hidden border-y-[3px] border-ink bg-bubblegum">
        <div aria-hidden="true" className="dots-ink absolute inset-0 opacity-25" />
        <Ticker items={["DESIGN MEETS ENGINEERING"]} duration={34} className="absolute inset-x-0 top-[18%] z-10 font-display text-[clamp(7rem,17vw,18rem)] leading-[0.85] text-ink" />
        <Image
          src={about.portrait.src}
          width={about.portrait.width}
          height={about.portrait.height}
          alt={about.portrait.alt}
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="relative z-20 h-[92%] w-auto max-w-none object-contain object-bottom"
        />
        <div className="absolute bottom-6 left-[var(--gutter)] z-30">
          <Sticker tone="ink" rotate={-3}>Adhya Mittal, developer + designer</Sticker>
        </div>
      </div>

      {/* scene 3: the story */}
      <div className="px-[var(--gutter)] py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <RevealUp
            parts={[{ t: "CURIOUS BY NATURE." }, { t: "BUILT TO CREATE.", c: "text-violet" }]}
            className="font-display text-h2 uppercase"
          />

          <div className="flex flex-col gap-8">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={index * 0.12}>
                <p className="max-w-[52ch] text-lg leading-[1.7] text-[#d6d2e0] md:text-xl">{paragraph}</p>
              </Reveal>
            ))}

            <Link
              href={about.cta.href}
              className="sticker wiggle w-fit bg-butter px-7 py-3 text-base text-ink shadow-[4px_4px_0_0_var(--color-paper)]"
              style={{ transform: "rotate(-2deg)", ["--r" as string]: "-2deg" }}
            >
              {about.cta.label}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Loud butter section: the words drift away from the pointer. */
export function Curious() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const floaters = [
    { word: "curious", x: "56%", y: "10%", rotate: -12, tone: "violet" as const },
    { word: "what if?", x: "76%", y: "24%", rotate: 8, tone: "tomato" as const },
    { word: "build", x: "62%", y: "38%", rotate: -8, tone: "bubblegum" as const },
    { word: "rebuild.", x: "84%", y: "8%", rotate: 6, tone: "paper" as const },
  ];

  return (
    <section
      className="relative isolate overflow-hidden border-y-[3px] border-ink bg-butter px-[var(--gutter)] py-16 text-ink md:py-24"
      onPointerMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({ x: (event.clientX - rect.left) / rect.width - 0.5, y: (event.clientY - rect.top) / rect.height - 0.5 });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div aria-hidden="true" className="dots-ink pointer-events-none absolute inset-0 -z-10 opacity-25" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        {floaters.map((item, index) => (
          <motion.span
            key={item.word}
            className="absolute"
            style={{
              left: item.x,
              top: item.y,
              x: reduce ? 0 : pointer.x * (index % 2 ? -34 : 34),
              y: reduce ? 0 : pointer.y * (index % 2 ? 24 : -24),
            }}
          >
            <Sticker tone={item.tone} rotate={item.rotate} className="text-xl">{item.word}</Sticker>
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <RevealUp
          parts={[{ t: "CURIOUS BY NATURE." }, { t: "A LITTLE OBSESSED.", c: "text-tomato" }]}
          className="max-w-[14ch] font-display text-h2 uppercase"
        />

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:items-end">
          <Reveal>
            <p className="max-w-xl text-xl font-medium leading-relaxed md:text-2xl">
              One idea becomes ten tabs. Ten tabs become a prototype. Suddenly, it&apos;s 2 AM and I&apos;m fixing a detail nobody asked me to fix.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:justify-self-end md:text-right">
            <p className="text-base leading-relaxed">
              Somewhere between logic and imagination,
              <br />I find my favourite problems to solve.
            </p>
            <p className="mt-4 font-hand text-3xl font-bold text-violet">still learning. always building.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Three rows that flood with colour on hover or focus. */
export function Approach() {
  return (
    <section className="overflow-hidden bg-ink px-[var(--gutter)] py-16 text-paper md:py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
        <RevealUp
          parts={[{ t: "NOT JUST HOW IT LOOKS." }, { t: "HOW IT WORKS.", c: "text-bubblegum" }]}
          className="max-w-[16ch] font-display text-h2 uppercase"
        />
        <div className="hidden text-butter md:block">
          <Note rotate={4} arrow="down-left">my approach, roughly</Note>
        </div>
      </div>

      <ul className="border-t-[3px] border-paper">
        {approach.map((item) => (
          <li key={item.title} className="group border-b-[3px] border-paper">
            <div
              tabIndex={0}
              className={`grid gap-4 py-8 transition-[background-color,color,padding] duration-300 focus-visible:outline-offset-[-3px] md:grid-cols-[1fr_1.2fr] md:items-center md:px-4 md:py-12 md:hover:px-8 md:focus-visible:px-8 ${item.hover}`}>
              <h3 className="font-display text-[clamp(2.5rem,6vw,6rem)] uppercase leading-none">{item.title}</h3>
              <p className="max-w-[48ch] text-lg leading-relaxed md:justify-self-end">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
