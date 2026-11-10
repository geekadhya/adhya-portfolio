import type { Metadata } from "next";
import { AboutIntro, Approach, Curious } from "@/components/AboutSections";
import { ReachOut } from "@/components/ReachOut";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <Curious />
      <Approach />
      <ReachOut />
    </>
  );
}
