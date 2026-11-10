type Props = {
  items: string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
  /** how many times the list repeats inside one half of the loop */
  repeat?: number;
};

/** Endless text loop. Decorative: pair it with a real heading elsewhere. */
export function Ticker({ items, className = "", duration = 30, reverse = false, repeat = 2 }: Props) {
  const half = (key: string) => (
    <div key={key} className="flex shrink-0 items-center whitespace-pre" aria-hidden="true">
      {Array.from({ length: repeat }).flatMap((_, r) =>
        items.map((item, i) => (
          <span key={`${r}-${i}`} className="flex items-center">
            <span className="pr-[0.45em]">{item}</span>
          </span>
        )),
      )}
    </div>
  );

  return (
    <div aria-hidden="true" className={`overflow-hidden ${className}`}>
      <div className="marquee-track" data-reverse={reverse} style={{ ["--marquee-duration" as string]: `${duration}s` }}>
        {half("a")}
        {half("b")}
      </div>
    </div>
  );
}
