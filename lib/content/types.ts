export type ImageAsset = { src: string; width: number; height: number; alt: string };

export type Accent = "violet" | "butter" | "bubblegum" | "tomato";

export type Project = {
  slug: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  /** which poster colour this project owns, everywhere it shows up */
  accent: Accent;
  /** buttons on the project page; leave a field out and its button disappears */
  links?: { live?: string; repo?: string };
};

export type ServiceGroup = { title: string; description: string; items: string[] };

export type ProcessStep = { title: string; text: string };
