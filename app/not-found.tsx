import Link from "next/link";

export default function NotFound() {
  return (
    <section className="dots-light flex min-h-svh flex-col items-start justify-center gap-8 bg-tomato px-[var(--gutter)] py-32 text-ink">
      <h1 className="font-display text-mega uppercase">404</h1>
      <p className="font-hand text-4xl font-bold">this page wandered off.</p>
      <Link href="/" className="sticker wiggle tap bg-ink px-7 text-lg text-paper shadow-[4px_4px_0_0_var(--color-paper)]" style={{ transform: "rotate(-2deg)", ["--r" as string]: "-2deg" }}>
        Take me home
      </Link>
    </section>
  );
}
