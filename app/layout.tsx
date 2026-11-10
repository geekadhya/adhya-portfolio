import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/content/site";
import { display, hand, sans, serif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Adhya Mittal: Portfolio", template: "%s — Adhya Mittal" },
  description: site.description,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${serif.variable} ${hand.variable}`}>
      <body>
        {/* Entrance animations start hidden; without JS, show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}[data-word]{transform:none!important}`}</style>
        </noscript>
        <span id="go-top-trigger" className="absolute left-0 top-0 h-px w-px" aria-hidden="true" />
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
