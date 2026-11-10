"use client";

import { useEffect } from "react";
import { projects, workIndexTitle } from "@/lib/content/projects";
import { Note } from "./Note";
import { ProjectPoster } from "./ProjectPoster";
import { RevealUp } from "./RevealUp";
import { Sticker } from "./Sticker";

export function ProjectsIndex() {
  useEffect(() => {
  if (window.location.hash === "#github-cta") {
    const timer = setTimeout(() => {
      document.getElementById("github-cta")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);

    return () => clearTimeout(timer);
  }
}, []);
  return (
    <section
      aria-labelledby="work-index-title"
      className="dots-light relative overflow-hidden bg-ink px-[var(--gutter)] pb-[clamp(5rem,10vw,9rem)] pt-32 md:pt-40"
    >
      <div className="mb-14 flex flex-wrap items-end gap-x-8 gap-y-4 md:mb-20">
        <RevealUp
          id="work-index-title"
          as="h1"
          immediate
          parts={workIndexTitle.toUpperCase()}
          className="font-display text-display uppercase text-butter"
        />

        <div className="flex flex-col items-start gap-5 pb-3">
          <Sticker tone="bubblegum" rotate={-4} className="text-base">
            {projects.length} projects so far
          </Sticker>
          <div className="text-paper">
            <Note rotate={3}>click one, it opens up</Note>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1500px] flex-col gap-14 md:gap-20">
        {projects.map((project, i) => (
          <ProjectPoster
            key={project.slug}
            project={project}
            index={i}
          />
        ))}
      </div>

      {/* GitHub CTA */}
      <div id="github-cta" className="mt-24 flex justify-center scroll-mt-8">
        <a
          href="https://github.com/geekadhya?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 rounded-full border border-paper/30 px-8 py-4 font-medium uppercase tracking-wider text-paper transition-all duration-300 hover:border-paper hover:bg-paper hover:text-ink"
        >
          See More on GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}

