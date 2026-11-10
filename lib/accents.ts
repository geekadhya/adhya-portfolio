import type { Accent } from "@/lib/content/types";

/** Class strings are written out in full so Tailwind can see them. */
export const accents: Record<Accent, { bg: string; text: string; chip: string; chipTone: "butter" | "ink" | "paper" | "tomato" }> = {
  violet:    { bg: "bg-violet",    text: "text-paper", chip: "bg-butter text-ink", chipTone: "butter" },
  butter:    { bg: "bg-butter",    text: "text-ink",   chip: "bg-ink text-butter", chipTone: "ink" },
  bubblegum: { bg: "bg-bubblegum", text: "text-ink",   chip: "bg-paper text-ink",  chipTone: "paper" },
  tomato:    { bg: "bg-tomato",    text: "text-ink",   chip: "bg-ink text-paper",  chipTone: "ink" },
};
