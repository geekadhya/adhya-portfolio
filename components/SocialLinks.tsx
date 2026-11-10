import { site } from "@/lib/content/site";
import { socialIcons } from "./Icons";

type Props = { direction?: "col" | "row"; className?: string };

export function SocialLinks({ direction = "col", className = "" }: Props) {
  return (
    <ul className={`flex ${direction === "col" ? "flex-col" : "flex-row flex-wrap gap-x-6"} ${className}`}>
      {site.socials.map((s) => {
        const Icon = socialIcons[s.label];
        return (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tap gap-3 text-lg font-semibold underline decoration-2 underline-offset-4 decoration-transparent transition-[text-decoration-color] duration-200 hover:decoration-current"
            >
              {Icon && <Icon />}
              {s.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
