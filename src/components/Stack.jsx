import Section from "./Section";
import { DATA } from "../data";

export default function Stack() {
  return (
    <Section id="stack" title="My toolbox">
      <div>
        {Object.entries(DATA.stack).map(([group, items]) => (
          <div key={group} className="grid gap-4 border-t border-line py-6 md:grid-cols-[200px_1fr]">
            <h3 className="font-display text-lg font-extrabold text-fire">{group}</h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((i) => (
                <li key={i} className="cursor-default rounded-full border border-line px-5 py-2.5 font-medium transition-colors hover:border-fire hover:bg-fire hover:text-black">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
