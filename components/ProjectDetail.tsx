import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/types";
import { nextProject, projectMedia } from "@/lib/content/projects";
import { accents } from "@/lib/accents";
import { RevealUp } from "./RevealUp";
import { Sticker } from "./Sticker";

function LinkButton({ href, children, tone }: { href: string; children: React.ReactNode; tone: "paper" | "ink" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`sticker wiggle tap px-6 text-base ${tone === "paper" ? "bg-paper text-ink" : "bg-ink text-paper"} shadow-[4px_4px_0_0_var(--color-ink)]`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const media = projectMedia[project.slug];
  const a = accents[project.accent];
  const next = nextProject(project.slug);
  const nextAccent = accents[next.accent];
  const { live, repo } = project.links ?? {};

  return (
    <>
      <article className={`relative overflow-hidden border-b-[3px] border-ink px-[var(--gutter)] pb-[clamp(4rem,8vw,7rem)] pt-32 md:pt-40 ${a.bg} ${a.text}`}>
        <div aria-hidden="true" className="dots-ink absolute inset-0 opacity-20" />

        <div className="relative mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div className="flex flex-col gap-8">
            <Sticker tone={a.chipTone} rotate={-3} className="w-fit text-base">{project.year}</Sticker>

            <RevealUp as="h1" immediate parts={project.title.toUpperCase()} className="break-words font-display text-display uppercase" />

            <p className="max-w-[40ch] text-lead font-medium">{project.description}</p>

            <ul className="flex flex-wrap gap-2.5" aria-label="Project type">
              {project.tags.map((t, i) => (
                <li key={t}>
                  <Sticker tone={a.chipTone} rotate={i % 2 ? 2 : -2}>{t}</Sticker>
                </li>
              ))}
            </ul>

            {(live || repo) && (
              <div className="flex flex-wrap gap-3">
                {live && <LinkButton href={live} tone="paper">Live site</LinkButton>}
                {repo && <LinkButton href={repo} tone="ink">Source on GitHub</LinkButton>}
              </div>
            )}
          </div>

          {media && (
            <div className="flex justify-center">
              <Image
                src={media.cover.src}
                width={media.cover.width}
                height={media.cover.height}
                alt={media.cover.alt}
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="h-auto max-h-[70svh] w-auto max-w-full rotate-3 rounded-3xl border-[3px] border-ink bg-paper shadow-[10px_10px_0_0_var(--color-ink)]"
              />
            </div>
          )}
        </div>
      </article>

      {media && media.gallery.length > 0 && (
        <section aria-label="Project gallery" className="bg-ink px-[var(--gutter)] py-16">
          <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2">
            {media.gallery.map((img) => (
              <Image
                key={img.src}
                src={img.src}
                width={img.width}
                height={img.height}
                alt={img.alt}
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="lazy"
                className="h-auto w-full rounded-3xl border-[3px] border-paper/30"
              />
            ))}
          </div>
        </section>
      )}

      {/* big "next up" band */}
      <Link
        href={`/projects/${next.slug}`}
        className={`group block overflow-hidden border-b-[3px] border-ink px-[var(--gutter)] py-[clamp(3rem,7vw,6rem)] ${nextAccent.bg} ${nextAccent.text}`}
      >
        <p className="mb-2 font-hand text-3xl font-semibold">next up</p>
        <p className="flex items-center justify-between gap-6 font-display text-h2 uppercase">
          <span className="break-words">{next.title}</span>
          <span aria-hidden="true" className="shrink-0 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-2">↗</span>
        </p>
      </Link>
    </>
  );
}
