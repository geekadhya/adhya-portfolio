"use client";

import { useState } from "react";
import { services } from "@/lib/content/home";
import { Note } from "./Note";
import { RevealUp } from "./RevealUp";

type Panel = { bg: string; text: string; chip: string; glyph: string; tilt: number[] };

const panels: Panel[] = [
  { bg: "bg-violet", text: "text-paper", chip: "bg-butter text-ink", glyph: "{ }", tilt: [-3, 2, -1.5, 3, -2] },
  { bg: "bg-tomato", text: "text-ink", chip: "bg-paper text-ink", glyph: "Aa", tilt: [2, -3, 1.5, -2, 3] },
  { bg: "bg-bubblegum", text: "text-ink", chip: "bg-ink text-paper", glyph: "?!", tilt: [-2, 3, -3, 2, -1] },
];

const ease = "cubic-bezier(0.7,0,0.2,1)";

export function Services() {
  const groups = services.groups;
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="services-title" className="relative overflow-hidden bg-paper px-[var(--gutter)] py-[clamp(3rem,6vw,5.5rem)] text-ink">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-12">
        <RevealUp id="services-title" parts={services.title.toUpperCase()} className="font-display text-h2 uppercase" />
        <div className="hidden text-violet md:block">
          <Note rotate={4} arrow="down-left">hover a card, they open</Note>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:h-[min(76svh,46rem)] md:flex-row md:gap-3">
        {groups.map((group, i) => {
          const p = panels[i % panels.length];
          const open = active === i;
          return (
            <article
              key={group.title}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{ transitionTimingFunction: ease }}
              className={`relative isolate overflow-hidden rounded-[2rem] border-[3px] border-ink p-6 transition-[flex] duration-700 md:cursor-pointer md:p-8 ${p.bg} ${p.text} ${
                open ? "md:flex-[4]" : "md:flex-[1]"
              }`}
            >
              {/* giant glyph, bottom-right */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-4 -z-10 select-none font-display text-[clamp(10rem,22vw,22rem)] leading-none opacity-20"
              >
                {p.glyph}
              </span>

              {/* collapsed label (desktop only) */}
              <h3
                aria-hidden="true"
                className={`absolute left-6 top-6 hidden origin-top-left font-display text-4xl uppercase transition-opacity duration-300 [writing-mode:vertical-rl] md:block lg:text-5xl ${
                  open ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                }`}
              >
                {group.title}
              </h3>

              {/* full content */}
              <div className={`flex h-full flex-col gap-6 transition-opacity duration-500 md:w-[min(32rem,52vw)] ${open ? "md:opacity-100 md:delay-300" : "md:opacity-0"}`}>
                <h3 className="font-display text-[clamp(2.6rem,5vw,5rem)] uppercase leading-[0.9]">{group.title}</h3>
                <p className="max-w-[40ch] text-base font-medium leading-relaxed md:text-lg">{group.description}</p>

                <ul className="mt-auto flex flex-wrap gap-2.5 pt-2">
                  {group.items.map((item, k) => (
                    <li
                      key={item}
                      className={`sticker wiggle text-sm md:text-base ${p.chip}`}
                      style={{ transform: `rotate(${p.tilt[k % p.tilt.length]}deg)`, ["--r" as string]: `${p.tilt[k % p.tilt.length]}deg` }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          );
        })}
      </div>
    </section>
  );
}
