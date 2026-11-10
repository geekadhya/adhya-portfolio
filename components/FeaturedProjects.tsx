import { featuredProjects } from "@/lib/content/projects";
import { projectsSection } from "@/lib/content/home";
import { ProjectPoster } from "./ProjectPoster";
import { ProjectRail } from "./ProjectRail";
import { RevealUp } from "./RevealUp";

export function FeaturedProjects() {
  return (
    <section id={projectsSection.headlineId} aria-label="Selected projects" className="dots-light relative bg-ink text-paper">
      {/* desktop: pinned horizontal scroller */}
      <div className="hidden md:block">
        <ProjectRail projects={featuredProjects} />
      </div>

      {/* mobile: plain vertical list, no pinning */}
      <div className="flex flex-col gap-12 px-[var(--gutter)] py-20 md:hidden">
        <RevealUp parts={projectsSection.title.toUpperCase()} className="font-display text-h2 uppercase" />
        {featuredProjects.map((project, i) => (
          <ProjectPoster key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
