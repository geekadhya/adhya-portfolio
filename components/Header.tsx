"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "motion/react";
import { site } from "@/lib/content/site";

export function Header() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* reading progress */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
        className="fixed inset-x-0 top-0 z-[70] h-1.5 bg-tomato"
      />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-[60] flex items-start justify-between gap-4 px-[var(--gutter)] pt-4">
        <Link
          href="/"
          className="pointer-events-auto sticker wiggle bg-paper text-ink text-sm sm:text-base"
          style={{ transform: "rotate(-2deg)", ["--r" as string]: "-2deg" }}
        >
          {site.brand}
        </Link>

        <nav aria-label="Primary" className="pointer-events-auto">
          <ul className="flex items-center gap-1 rounded-full border-[2.5px] border-ink bg-ink p-1 shadow-[3px_3px_0_0_var(--color-butter)]">
            {site.nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`tap rounded-full px-3 text-sm font-bold transition-colors duration-200 sm:px-4 sm:text-base ${
                      active ? "bg-tomato text-ink" : "text-paper hover:bg-paper hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
