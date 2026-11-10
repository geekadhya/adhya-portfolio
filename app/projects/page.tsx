import type { Metadata } from "next";
import { ProjectsIndex } from "@/components/ProjectsIndex";
import { ReachOut } from "@/components/ReachOut";
import { ToolsBands } from "@/components/ToolsBands";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <ProjectsIndex />
      <ToolsBands />
      <ReachOut />
    </>
  );
}
