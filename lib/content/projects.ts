import type { ImageAsset, Project } from "./types";

/*
 * LINKS: add `links: { live: "https://…", repo: "https://github.com/geekadhya/…" }`
 * to any project. A button only shows up for the fields you fill in.
 */
export const projects: Project[] = [
  {
    slug: "sentinel",
    year: "2026",
    title: "SENTINEL",
    description:
      "Investigating trust and security in Retrieval-Augmented Generation systems. SENTINEL focuses on threats such as prompt injection and knowledge-base poisoning, alongside the challenge of detecting unsupported or hallucinated answers.",
    tags: ["AI Security", "RAG", "Research"],
    accent: "violet",
  },
  {
    slug: "envirovista",
    year: "2024",
    title: "EnviroVista",
    description:
      "A national-level hackathon project exploring greenwashing by examining environmental claims against supporting evidence to help identify potentially misleading sustainability messaging.",
    tags: ["Greenwashing", "Sustainability", "Hackathon"],
    accent: "butter",
  },
  {
    slug: "mimi",
    year: "2026",
    title: "MIMI",
    description:
      "A personalized makeup assistant designed to make beauty routines easier to understand and follow. MIMI connects user preferences and makeup collections with tailored product suggestions and step-by-step routines. Currently in development.",
    tags: ["Next.js", "Supabase", "UI/UX"],
    accent: "bubblegum",
  },
  {
    slug: "bharat-voice",
    year: "2023",
    title: "Bharat Voice",
    description:
      "A voice-to-text and text-to-voice project focused on regional Indian languages, exploring more accessible ways for people to communicate with technology through speech and text.",
    tags: ["Speech Technology", "Accessibility", "Indian Languages"],
    accent: "tomato",
  },
];

export const featuredProjects = projects;

export const workIndexTitle = "Selected Work";

const cover = (filename: string, width: number, height: number, alt: string): ImageAsset => ({
  src: `/images/projects/${filename}`,
  width,
  height,
  alt,
});

export const projectMedia: Record<string, { cover: ImageAsset; gallery: ImageAsset[] }> = {
  sentinel: {
    cover: cover("sentinal.jpeg", 736, 981, "SENTINEL AI security and threat detection project visual"),
    gallery: [],
  },
  envirovista: {
    cover: cover("envirovista.jpeg", 412, 805, "EnviroVista environmental evidence and sustainability visual"),
    gallery: [],
  },
  mimi: {
    cover: cover("mimi.jpeg", 736, 920, "MIMI personalized makeup assistant and beauty technology visual"),
    gallery: [],
  },
  "bharat-voice": {
    cover: cover("vtt.jpeg", 675, 1200, "Bharat Voice speech technology and regional Indian languages visual"),
    gallery: [],
  },
};

export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
