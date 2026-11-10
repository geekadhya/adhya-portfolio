import { site } from "@/lib/content/site";

export type ContactPayload = { name: string; email: string; message: string };

/** Formspree (or compatible) endpoint, set in .env.local, e.g. https://formspree.io/f/abcdwxyz */
export const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";

export function canSend() {
  return Boolean(contactEndpoint || site.contact.mail);
}

/**
 * Sends the message. With an endpoint it posts in the background and resolves "sent".
 * Without one it falls back to opening the visitor's mail app (needs site.contact.mail).
 */
export async function sendMessage({ name, email, message }: ContactPayload): Promise<"sent" | "mailto"> {
  if (contactEndpoint) {
    const res = await fetch(contactEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message, _replyto: email, _subject: `Portfolio message from ${name}` }),
    });
    if (!res.ok) throw new Error(`Form service responded ${res.status}`);
    return "sent";
  }

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name} <${email}>`);
  window.location.href = `mailto:${site.contact.mail}?subject=${subject}&body=${body}`;
  return "mailto";
}
