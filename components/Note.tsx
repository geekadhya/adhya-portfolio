/** Handwritten margin note with an optional scribbled arrow. */
export function Note({
  children,
  rotate = -4,
  arrow,
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  /** direction the arrow points, drawn after the text */
  arrow?: "down-left" | "down-right" | "right" | "up";
  className?: string;
}) {
  const arrowPaths: Record<string, { d: string; rot: number }> = {
    "down-left": { d: "M44 6 C40 24 22 34 6 38 M6 38 l10 -2 M6 38 l4 -9", rot: 0 },
    "down-right": { d: "M4 6 C8 24 26 34 42 38 M42 38 l-10 -2 M42 38 l-4 -9", rot: 0 },
    right: { d: "M2 20 C16 8 32 8 46 18 M46 18 l-9 -1 M46 18 l-3 -9", rot: 0 },
    up: { d: "M24 40 C20 26 28 14 24 4 M24 4 l-6 8 M24 4 l7 7", rot: 0 },
  };
  const a = arrow ? arrowPaths[arrow] : null;

  return (
    <span className={`inline-flex flex-col font-hand text-2xl font-semibold leading-none md:text-3xl ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <span>{children}</span>
      {a && (
        <svg viewBox="0 0 48 44" aria-hidden="true" className="mt-1 h-10 w-12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d={a.d} />
        </svg>
      )}
    </span>
  );
}
