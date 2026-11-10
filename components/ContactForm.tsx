"use client";

import { useRef, useState } from "react";
import { contactPage } from "@/lib/content/contact";
import { canSend, sendMessage } from "@/lib/contact";
import { site } from "@/lib/content/site";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

const field =
  "w-full rounded-2xl border-[3px] border-paper/60 bg-transparent px-4 py-3 text-lg text-paper outline-none transition-colors duration-200 placeholder:text-text-secondary focus:border-butter focus:bg-paper/5";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const linkedin = site.socials.find((s) => s.label === "LinkedIn")?.href;
  const ready = canSend();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ready || status === "sending") return;

    const data = new FormData(e.currentTarget);
    // hidden trap field: real people never fill it in
    if (data.get("company")) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const result = await sendMessage({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      if (result === "sent") formRef.current?.reset();
      setStatus(result);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} className="flex flex-col gap-6" onSubmit={onSubmit}>
      <label className="flex flex-col gap-2 text-base font-bold">
        Name
        <input name="name" type="text" required autoComplete="name" className={field} />
      </label>
      <label className="flex flex-col gap-2 text-base font-bold">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="flex flex-col gap-2 text-base font-bold">
        Message
        <textarea name="message" required rows={5} className={`${field} resize-y`} />
      </label>

      <input name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={!ready || status === "sending"}
          className="sticker wiggle tap cursor-pointer bg-butter px-7 text-lg text-ink shadow-[4px_4px_0_0_var(--color-paper)] disabled:cursor-not-allowed disabled:opacity-60"
          style={{ transform: "rotate(-2deg)", ["--r" as string]: "-2deg" }}
        >
          {status === "sending" ? "Sending…" : contactPage.submitLabel}
        </button>

        <p role="status" aria-live="polite" className="text-base text-text-secondary">
          {status === "sent" && <span className="font-bold text-butter">Sent! I&apos;ll get back to you soon.</span>}
          {status === "mailto" && "Opening your mail app…"}
          {status === "error" && (
            <>
              That didn&apos;t go through. Try again, or message me on{" "}
              {linkedin ? (
                <a className="font-bold text-butter underline underline-offset-4" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              ) : (
                "LinkedIn"
              )}
              .
            </>
          )}
          {!ready && status === "idle" && (
            <>
              The form isn&apos;t connected yet. Message me on{" "}
              {linkedin ? (
                <a className="font-bold text-butter underline underline-offset-4" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              ) : (
                "LinkedIn"
              )}{" "}
              instead.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
