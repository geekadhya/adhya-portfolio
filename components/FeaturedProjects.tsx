
import Link from "next/link";
import { featuredProjects } from "@/lib/content/projects";
import { projectsSection } from "@/lib/content/home";
import { ProjectPoster } from "./ProjectPoster";
import { ProjectRail } from "./ProjectRail";
import { RevealUp } from "./RevealUp";

export function FeaturedProjects() {
  return (
    <section
      id={projectsSection.headlineId}
      aria-label="Selected projects"
      className="dots-light relative bg-ink text-paper"
    >
      {/* desktop: pinned horizontal scroller */}
      <div className="hidden md:block">
        <ProjectRail projects={featuredProjects} />
      </div>

      {/* mobile: plain vertical list, no pinning */}
      <div className="flex flex-col gap-12 px-(--gutter) py-20 md:hidden">
        <RevealUp
          parts={projectsSection.title.toUpperCase()}
          className="font-display text-h2 uppercase"
        />
        {featuredProjects.map((project, i) => (
          <ProjectPoster key={project.slug} project={project} index={i} />
        ))}
      </div>

      {/* More projects button */}
      <div className="flex justify-center px-(--gutter) pb-20">
        <Link
          href="/projects#github-cta"
          className="group inline-flex items-center gap-4 rounded-full border border-paper/30 px-8 py-4 font-medium uppercase tracking-wider text-paper transition-all duration-300 hover:border-paper hover:bg-paper hover:text-ink"
        >
          More Projects
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
}
