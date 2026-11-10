import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content/site";
import { SocialLinks } from "./SocialLinks";
import { Sticker } from "./Sticker";
import { Ticker } from "./Ticker";

/** Mail / phone, only for the fields that are filled in. */
export function ContactDetails({ className = "" }: { className?: string }) {
  const { mail, phone } = site.contact;
  if (!mail && !phone) return null;
  return (
    <address className={`flex flex-col gap-1 text-lg font-medium not-italic ${className}`}>
      {mail && (
        <p>
          Mail:{" "}
          <a className="underline underline-offset-4" href={`mailto:${mail}`}>{mail}</a>
        </p>
      )}
      {phone && (
        <p>
          Phone:{" "}
          <a className="underline underline-offset-4" href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
        </p>
      )}
    </address>
  );
}

/** Footer: violet canvas, the heading loops behind the portrait, same cut-out trick as the hero. */
export function ReachOut() {
  const { contact } = site;
  return (
    <footer className="relative isolate h-svh min-h-[680px] overflow-hidden border-t-[3px] border-ink bg-violet text-paper">
      <h2 className="sr-only">{contact.heading}</h2>
      <div aria-hidden="true" className="dots-light absolute inset-0 opacity-70" />

      <Ticker
        items={[contact.heading.toUpperCase()]}
        duration={40}
        reverse
        className="absolute inset-x-0 top-[20%] z-10 font-display text-mega text-butter"
      />

      <Image
        src={contact.image.src}
        width={contact.image.width}
        height={contact.image.height}
        alt={contact.image.alt}
        sizes="(min-width: 768px) 55vw, 120vw"
        className="absolute bottom-0 left-1/2 z-20 h-[88%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
      />

      <div className="absolute left-1/2 top-[56%] z-30 -translate-x-1/2 text-xl md:text-2xl">
        <Link
          href="/contact"
          className="sticker wiggle bg-butter px-7 py-3 text-ink shadow-[5px_5px_0_0_var(--color-ink)]"
          style={{ transform: "rotate(-3deg)", ["--r" as string]: "-3deg" }}
        >
          Say hi
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col gap-4 px-[var(--gutter)] pb-6">
        <ContactDetails />
        <div className="flex items-end justify-between gap-6">
          <div className="rounded-2xl border-[2.5px] border-ink bg-paper px-4 py-1 text-ink shadow-[4px_4px_0_0_var(--color-ink)]">
            <SocialLinks direction="row" />
          </div>
          <a href="#go-top-trigger" className="sticker wiggle tap bg-tomato px-5 text-ink" style={{ transform: "rotate(2deg)", ["--r" as string]: "2deg" }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
