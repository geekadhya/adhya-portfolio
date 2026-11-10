import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Process } from "@/components/Process";
import { ReachOut } from "@/components/ReachOut";
import { Services } from "@/components/Services";
import { ToolsBands } from "@/components/ToolsBands";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <FeaturedProjects />
      <Process />
      <ToolsBands />
      <ReachOut />
    </>
  );
}
