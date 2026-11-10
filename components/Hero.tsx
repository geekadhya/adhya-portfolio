"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { hero } from "@/lib/content/home";
import { Badge } from "./Badge";
import { Note } from "./Note";
import { SocialLinks } from "./SocialLinks";
import { Sticker } from "./Sticker";
import { Ticker } from "./Ticker";

const pop = (delay: number) => ({
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring" as const, stiffness: 240, damping: 14, delay },
});

/**
 * Layers, back to front: butter canvas, halftone dots, tomato sun, giant name (looping),
 * portrait (cut-out, so the name slides behind her), stickers + notes on top.
 */
export function Hero() {
  const { portrait } = hero;

  return (
    <section aria-labelledby="hero-title" className="relative isolate h-svh min-h-170 overflow-hidden bg-butter text-ink">
      <h1 id="hero-title" className="sr-only">{hero.name}</h1>
      <h2 className="sr-only">{hero.roles.join(" and ")}</h2>

      <div aria-hidden="true" className="dots-ink absolute inset-0 opacity-25" />

      <motion.div
        aria-hidden="true"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 14, delay: 0.1 }}
        className="absolute left-1/2 top-[50%] z-0 aspect-square w-[min(86vw,66svh)] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-ink bg-tomato"
      />

      <Ticker
        items={[hero.name.toUpperCase()]}
        duration={38}
        className="absolute inset-x-0 top-[21%] z-10 font-display text-mega text-ink"
      />

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
        className="absolute bottom-0 left-1/2 z-20 h-[92%] -translate-x-1/2"
      >
        <Image
          src={portrait.src}
          width={portrait.width}
          height={portrait.height}
          alt={portrait.alt}
          priority
          sizes="(min-width: 768px) 55vw, 120vw"
          className="h-full w-auto max-w-none object-contain object-bottom"
        />
      </motion.div>

      {/* stickers */}
      <motion.div {...pop(0.7)} className="absolute left-[4%] top-[17%] z-30 text-base sm:text-xl md:left-[8%] md:text-2xl">
        <Sticker tone="bubblegum" rotate={-7}>Software Developer</Sticker>
      </motion.div>
      <motion.div {...pop(0.85)} className="absolute right-[4%] top-[34%] z-30 text-base sm:text-xl md:right-[8%] md:text-2xl">
        <Sticker tone="violet" rotate={5}>UI/UX Designer</Sticker>
      </motion.div>
      <motion.div {...pop(1)} className="absolute left-[10%] top-[44%] z-30 hidden text-lg md:block">
        <Sticker tone="paper" rotate={4}>CS Engineering student</Sticker>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-[26%] right-[6%] z-30 hidden text-ink md:block lg:right-[12%]"
      >
        <Note rotate={6} arrow="down-left">hi, I&apos;m Adhya!</Note>
      </motion.div>

      {/* bottom row */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between gap-6 px-(--gutter) pb-6">
        <div className="rounded-2xl border-[2.5px] border-ink bg-paper px-4 py-1 shadow-[4px_4px_0_0_var(--color-ink)]">
          <SocialLinks />
        </div>
        <a
  href="#about"
  className="group flex items-center gap-4 border-[2.5px] border-ink bg-butter px-5 py-3 text-ink shadow-[4px_4px_0_0_var(--color-ink)] animate-[float_3s_ease-in-out_infinite] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
>
  <span className="text-[10px] font-bold uppercase tracking-[0.25em]">
    Scroll to explore
  </span>

  <span className="text-xl transition-transform duration-300 group-hover:translate-y-1">
    ↓
  </span>
</a>
      </div>
    </section>
  );
}
