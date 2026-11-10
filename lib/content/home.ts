import type { ImageAsset, ProcessStep, ServiceGroup } from "./types";

export const hero = {
  name: "Adhya Mittal",
  roles: ["Software Developer", "UI/UX Designer"],
  portrait: {
    src: "/images/adhya-hero.png",
    width: 660,
    height: 851,
    alt: "Adhya Mittal in a black jacket and turtleneck",
  } satisfies ImageAsset,
};

export type IntroTone = "butter" | "tomato" | "bubblegum" | "violet";

export const intro = {
  // each segment is split into words; a tone makes those words light up in colour
  leadSegments: [
    { text: "I like to" },
    { text: "understand", tone: "butter" as IntroTone, serif: true },
    { text: "how things work. Then figure out how to make them" },
    { text: "better.", tone: "tomato" as IntroTone, scribble: true },
  ],
  body: "Somewhere between logic and imagination, I explore ideas through code and design, building digital experiences that are thoughtful, functional, and made for real people.",
  cta: {
    label: "See what I've built",
    href: "/#recent-projects-headline",
  },
};

export const services = {
  title: "What I Bring",
  groups: [
    {
      title: "Software Development",
      description:
        "Turning ideas into working applications, with a focus on functionality, maintainable code, and solving the problem beneath the surface.",
      items: [
        "Frontend Development",
        "React & Next.js",
        "JavaScript & TypeScript",
        "Responsive Web Interfaces",
        "Database-Driven Applications",
      ],
    },
    {
      title: "UI/UX & Product Design",
      description:
        "Thinking beyond how a screen looks: exploring user needs, simplifying interactions, and shaping digital experiences around how people actually use them.",
      items: [
        "User Interface Design",
        "User Flows & Wireframes",
        "Prototyping",
        "Visual Hierarchy",
        "Interaction Design",
      ],
    },
    {
      title: "Prototyping & Problem Solving",
      description:
        "Exploring ideas through practical experiments, connecting design decisions with technical constraints, and refining concepts into usable products.",
      items: [
        "Product Concept Development",
        "Technical Research",
        "Iterative Development",
        "Interface Refinement",
      ],
    },
  ] satisfies ServiceGroup[],
};

export const projectsSection = {
  title: "Projects",
  headlineId: "recent-projects-headline",
};

export const process = {
  title: "How I Work",
  note: "(on a good day. it gets messy)",
  steps: [
    {
      title: "Understand",
      text: "Start with the problem, the people experiencing it, and what a meaningful solution should accomplish.",
    },
    {
      title: "Explore",
      text: "Question assumptions, map out possibilities, and work through ideas before committing to a solution.",
    },
    {
      title: "Build",
      text: "Bring the strongest direction to life through thoughtful interfaces, practical implementation, and iteration.",
    },
    {
      title: "Refine",
      text: "Test what works, identify what doesn't, and improve the details that make an experience feel complete.",
    },
  ] satisfies ProcessStep[],
};

export const tools = [
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "UI/UX Design",
  "Software Engineering",
  "React",
  "Supabase",
  "Creative Development",
  "C++",
  "AI-ML",
];
