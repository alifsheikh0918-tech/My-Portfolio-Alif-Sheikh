import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { DATA } from "../data";

export default function Projects() {
  return (
    <Section id="projects" title="Selected work">
      <div className="grid gap-5 md:grid-cols-2">
        {DATA.projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}
