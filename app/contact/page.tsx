import type { Metadata } from "next";
import { ContactDetails } from "@/components/ReachOut";
import { ContactForm } from "@/components/ContactForm";
import { Note } from "@/components/Note";
import { RevealUp } from "@/components/RevealUp";
import { SocialLinks } from "@/components/SocialLinks";
import { Sticker } from "@/components/Sticker";
import { contactPage } from "@/lib/content/contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="dots-light relative min-h-svh overflow-hidden bg-ink px-[var(--gutter)] pb-[clamp(5rem,10vw,9rem)] pt-32 md:pt-40">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-14">
        <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
          <RevealUp as="h1" immediate parts={contactPage.title.toUpperCase()} className="font-display text-display uppercase text-tomato" />
          <div className="pb-3">
            <Sticker tone="butter" rotate={-4} className="text-base">replies fast. usually.</Sticker>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-8">
            <h2 className="max-w-[16ch] font-serif text-[clamp(2.25rem,4.5vw,4.5rem)] italic leading-[1.02]">{contactPage.lead}</h2>
            <div className="text-bubblegum">
              <Note rotate={-3} arrow="right">no idea is too weird</Note>
            </div>
            <ContactDetails />
            <SocialLinks direction="row" />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
