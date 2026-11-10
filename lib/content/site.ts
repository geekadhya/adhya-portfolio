export const site = {
  brand: "© Adhya Mittal",
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/adhya-mittal" },
    { label: "GitHub", href: "https://github.com/geekadhya" },
  ],
  contact: {
    heading: "Let's Build Something",
    // Fill these in and they appear in the footer + contact page. Empty = hidden.
    mail: "" as string,
    phone: "" as string,
    image: {
      src: "/images/adhya-hero.png",
      width: 660,
      height: 851,
      alt: "Portrait of Adhya Mittal",
    },
  },
  description:
    "Adhya Mittal — software developer and UI/UX designer building thoughtful, slightly chaotic digital experiences.",
} as const;
