import type { ImageAsset, Project } from "./types";

/*
 * LINKS: add `links: { live: "https://…", repo: "https://github.com/geekadhya/…" }`
 * to any project. A button only shows up for the fields you fill in.
 */
export const projects: Project[] = [
  {
  slug: "f1-telemetry-analyzer",
  year: "2026",
  title: "F1 Telemetry",
  description:
    "A telemetry analysis tool for Formula 1 racing, designed to help teams and enthusiasts explore race data, compare driver performance, and visualize telemetry.",
  tags: ["Python", "Streamlit", "Pandas", "OpenF1 API"],
  accent: "violet",
  links: {
    repo: "https://github.com/geekadhya/f1-telemetry-analyzer",
  },
},
  {
    slug: "mimi",
    year: "2026",
    title: "MIMI",
    description:
      "A personalized makeup assistant designed to make beauty routines easier to understand and follow. MIMI connects user preferences and makeup collections with tailored product suggestions and step-by-step routines. Currently in development.",
    tags: ["Next.js", "Supabase", "UI/UX"],
    accent: "butter",
    links: {
  repo: "https://github.com/geekadhya/mimi",
   },
  },
  {
    slug: "envirovista",
    year: "2024",
    title: "EnviroVista",
    description:
      "A national-level hackathon project exploring greenwashing by examining environmental claims against supporting evidence to help identify potentially misleading sustainability messaging.",
    tags: ["Greenwashing", "Sustainability", "Hackathon"],
    accent: "bubblegum",
    links: {
  repo: "https://github.com/geekadhya/envirovista.git",
   },
  },
  {
    slug: "sentinal",
    year: "2026",
    title: "Sentinal",
    description:
      "An AI-powered security and threat detection system designed to monitor and analyze potential risks in real-time, providing proactive alerts and insights to enhance safety and security measures.",
    tags: ["AI", "Security", "Threat Detection"],
    accent: "tomato",
    links: {
  repo: "YOUR_SENTINEL_GITHUB_REPOSITORY_URL",
   },
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
  "f1-telemetry-analyzer": {
    cover: cover("f1-telemetry-analyzer.jpeg", 736, 981, "F1 Telemetry Analyzer project visual"),
    gallery: [],
  },

  mimi: {
    cover: cover("mimi.jpeg", 736, 920, "MIMI personalized makeup assistant and beauty technology visual"),
    gallery: [],
  },
  envirovista: {
    cover: cover("envirovista.jpeg", 412, 805, "EnviroVista environmental evidence and sustainability visual"),
    gallery: [],
  },
  "sentinal": {
    cover: cover("sentinal.jpeg", 736, 981, "Sentinal AI security and threat detection project visual"),
    gallery: [],
  },
};

export function nextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
