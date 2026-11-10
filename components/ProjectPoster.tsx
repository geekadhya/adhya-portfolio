import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/types";
import { projectMedia } from "@/lib/content/projects";
import { accents } from "@/lib/accents";
import { Sticker } from "./Sticker";

const tilt = ["-rotate-1", "rotate-[0.8deg]", "-rotate-[0.6deg]", "rotate-1"];
const imgTilt = ["rotate-[4deg]", "-rotate-[3deg]", "rotate-[2.5deg]", "-rotate-[4deg]"];
const imgTiltRest = "group-hover:rotate-0 group-hover:scale-[1.04]";

type Props = {
  project: Project;
  index: number;
  /** "rail" = fixed-size card for the horizontal scroller, "stack" = fluid card for lists */
  variant?: "rail" | "stack";
};

/**
 * One project = one poster in its own colour. The whole card is a single link to the case study.
 * No custom cursor, no scroll-jacking inside the card: hover just straightens it up.
 */
export function ProjectPoster({ project, index, variant = "stack" }: Props) {
  const a = accents[project.accent];
  const media = projectMedia[project.slug];
  const rail = variant === "rail";

  return (
    <Link
      href={`/projects/${project.slug}`}
      aria-label={`${project.title} (${project.year}) – open case study`}
      className={`group relative flex shrink-0 flex-col overflow-hidden rounded-[2rem] border-[3px] border-ink shadow-[8px_8px_0_0_var(--color-paper)] transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-2 hover:rotate-0 md:flex-row ${a.bg} ${a.text} ${tilt[index % tilt.length]} ${
        rail ? "md:h-[var(--card-h)] md:w-[min(74vw,980px)]" : "w-full"
      }`}
    >
      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between gap-8 p-6 md:p-10">
        <div className="flex flex-col gap-5">
          <span className={`sticker w-fit text-sm ${a.chip}`} style={{ transform: "rotate(-3deg)" }}>
            {project.year}
          </span>
          <h3 className="break-words font-display text-[clamp(3.25rem,7vw,8rem)] uppercase leading-[0.86]">{project.title}</h3>
          <p className="max-w-[36ch] overflow-hidden text-base font-medium leading-relaxed [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5] md:text-lg">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2" aria-label="Project type">
            {project.tags.map((tag) => (
              <li key={tag}>
                <Sticker tone={a.chipTone} className="text-xs">{tag}</Sticker>
              </li>
            ))}
          </ul>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-ink bg-paper text-2xl text-ink transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
            ↗
          </span>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-6 md:w-[42%] md:p-8">
        {media && (
          <Image
            src={media.cover.src}
            width={media.cover.width}
            height={media.cover.height}
            alt={media.cover.alt}
            sizes="(min-width: 768px) 30vw, 80vw"
            className={`h-auto w-auto max-w-full rounded-2xl border-[3px] border-ink bg-paper shadow-[6px_6px_0_0_var(--color-ink)] transition-transform duration-500 ease-[var(--ease-out-expo)] ${
              rail ? "max-h-[22rem] md:max-h-[calc(var(--card-h)-5rem)]" : "max-h-[24rem] md:max-h-[32rem]"
            } ${imgTilt[index % imgTilt.length]} ${imgTiltRest}`}
          />
        )}
      </div>
    </Link>
  );
}
