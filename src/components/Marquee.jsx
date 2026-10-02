import { DATA } from "../data";

const SKILLS = Object.values(DATA.stack).flat();

export default function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-line py-6" aria-label="Technologies I use">
      <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[...SKILLS, ...SKILLS].map((s, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="outline-text font-display cursor-default text-4xl font-extrabold sm:text-6xl">{s}</span>
            <span className="size-3 rotate-45 bg-fire" />
          </span>
        ))}
      </div>
    </div>
  );
}
