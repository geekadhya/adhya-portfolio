import { projects, workIndexTitle } from "@/lib/content/projects";
import { Note } from "./Note";
import { ProjectPoster } from "./ProjectPoster";
import { RevealUp } from "./RevealUp";
import { Sticker } from "./Sticker";

export function ProjectsIndex() {
  return (
    <section aria-labelledby="work-index-title" className="dots-light relative overflow-hidden bg-ink px-[var(--gutter)] pb-[clamp(5rem,10vw,9rem)] pt-32 md:pt-40">
      <div className="mb-14 flex flex-wrap items-end gap-x-8 gap-y-4 md:mb-20">
        <RevealUp id="work-index-title" as="h1" immediate parts={workIndexTitle.toUpperCase()} className="font-display text-display uppercase text-butter" />
        <div className="flex flex-col items-start gap-5 pb-3">
          <Sticker tone="bubblegum" rotate={-4} className="text-base">{projects.length} projects so far</Sticker>
          <div className="text-paper">
            <Note rotate={3}>click one, it opens up</Note>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1500px] flex-col gap-14 md:gap-20">
        {projects.map((project, i) => (
          <ProjectPoster key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
