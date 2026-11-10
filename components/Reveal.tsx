"use client";

import { motion } from "motion/react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Small fade-up for body copy. Use sparingly. */
export function Reveal({ children, delay = 0, y = 24, className }: Props) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
