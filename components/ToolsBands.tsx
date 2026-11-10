import { tools } from "@/lib/content/home";
import { Ticker } from "./Ticker";

/** Two crossing tape strips between sections. Purely decorative; the list is repeated for screen readers. */
export function ToolsBands() {
  return (
    <section aria-label="Tools and disciplines" className="relative overflow-hidden bg-ink py-[clamp(2.5rem,5vw,4rem)]">
      <p className="sr-only">Tools and disciplines: {tools.join(", ")}</p>

      <div className="relative -mx-6 rotate-[-2.2deg] border-y-[3px] border-ink bg-tomato py-3 text-ink">
        <Ticker items={tools.map((t) => t.toUpperCase())} duration={46} repeat={2} className="font-display text-[clamp(2rem,5vw,4.25rem)] leading-none" />
      </div>
      <div className="relative -mx-6 -mt-3 rotate-[1.8deg] border-y-[3px] border-ink bg-violet py-3 text-butter">
        <Ticker items={[...tools].reverse().map((t) => t.toUpperCase())} duration={54} reverse repeat={2} className="font-display text-[clamp(2rem,5vw,4.25rem)] leading-none" />
      </div>
    </section>
  );
}
