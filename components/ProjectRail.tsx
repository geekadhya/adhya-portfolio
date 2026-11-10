"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Project } from "@/lib/content/types";
import { projectsSection } from "@/lib/content/home";
import { Note } from "./Note";
import { ProjectPoster } from "./ProjectPoster";
import { RevealUp } from "./RevealUp";

/**
 * Desktop: the section pins to the screen and vertical scrolling drives the posters sideways.
 * The section is exactly as tall as the distance it has to travel, so it never feels too long or too short.
 */
export function ProjectRail({ projects }: { projects: Project[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => setDist(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ height: dist ? `calc(100svh + ${Math.round(dist * 0.55)}px)` : "220svh" }} className="relative">
      <div className="sticky top-0 flex h-svh flex-col justify-center gap-6 overflow-hidden pt-16">
        <div className="flex items-end justify-between gap-6 px-[var(--gutter)]">
          <RevealUp
            parts={projectsSection.title.toUpperCase()}
            className="font-display text-[clamp(3rem,6vw,6.5rem)] uppercase leading-[0.9]"
          />
          <div className="mb-1 text-butter">
            <Note rotate={-3}>keep scrolling, there&apos;s more →</Note>
          </div>
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-8 pl-[var(--gutter)] pr-[10vw] pb-3 pt-2">
          {projects.map((project, i) => (
            <ProjectPoster key={project.slug} project={project} index={i} variant="rail" />
          ))}
        </motion.div>

        <div aria-hidden="true" className="mx-[var(--gutter)] h-2 overflow-hidden rounded-full border-2 border-paper/40">
          <motion.div style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }} className="h-full bg-butter" />
        </div>
      </div>
    </div>
  );
}
