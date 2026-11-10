import localFont from "next/font/local";

// Body copy
export const sans = localFont({
  src: "./fonts/InterTight-Variable.woff2",
  weight: "100 900",
  variable: "--font-inter-tight",
  display: "swap",
});

// Poster-style headlines
export const display = localFont({
  src: "./fonts/Anton-400.woff2",
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

// The soft, slightly fancy voice
export const serif = localFont({
  src: [
    { path: "./fonts/InstrumentSerif-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/InstrumentSerif-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

// Margin scribbles
export const hand = localFont({
  src: "./fonts/Caveat-Variable.woff2",
  weight: "400 700",
  variable: "--font-caveat",
  display: "swap",
});
