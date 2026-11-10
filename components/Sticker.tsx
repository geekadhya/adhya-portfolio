import type { CSSProperties } from "react";

const tones = {
  butter: "bg-butter text-ink",
  tomato: "bg-tomato text-ink",
  violet: "bg-violet text-paper",
  bubblegum: "bg-bubblegum text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
} as const;

export type Tone = keyof typeof tones;

type Props = {
  children: React.ReactNode;
  tone?: Tone;
  rotate?: number;
  className?: string;
};

/** A pill with a hard outline and offset shadow, slightly crooked on purpose. */
export function Sticker({ children, tone = "butter", rotate = 0, className = "" }: Props) {
  return (
    <span
      className={`sticker wiggle ${tones[tone]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ["--r" as string]: `${rotate}deg` } as CSSProperties}
    >
      {children}
    </span>
  );
}
