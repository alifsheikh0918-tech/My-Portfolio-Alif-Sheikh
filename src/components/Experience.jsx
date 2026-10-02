import Section from "./Section";
import { DATA } from "../data";

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <div>
        {DATA.experience.map((e) => (
          <div key={e.title} className="group grid gap-2 border-t border-line py-7 md:grid-cols-[200px_1fr]">
            <p className="text-mute">{e.when}</p>
            <div className="transition-transform duration-300 group-hover:translate-x-3">
              <h3 className="font-display text-xl font-extrabold transition-colors group-hover:text-fire">{e.title}</h3>
              <p className="mt-1 font-medium">{e.where}</p>
              <p className="mt-2 max-w-xl text-mute">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
