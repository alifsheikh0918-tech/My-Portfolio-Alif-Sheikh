import { useRef } from "react";

// Mouse er shathe tilt hoy ar glow ghore
export default function ProjectCard({ project, featured }) {
  const ref = useRef(null);
  const { title, text, tags, live, code, image } = project;

  const move = (e) => {
    const el = ref.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg)`;
    }
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const leave = () => { ref.current.style.transform = ""; };

  return (
    <article
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`flex flex-col rounded-3xl border border-line p-5 transition-[transform,border-color] duration-200 hover:border-fire ${featured ? "md:col-span-2" : ""}`}
      style={{ background: "radial-gradient(420px circle at var(--mx,50%) var(--my,0%), rgba(59,130,246,.18), transparent 60%), var(--color-card)" }}
    >
      <div className={`overflow-hidden rounded-2xl border border-line bg-base ${featured ? "h-56 md:h-72" : "h-44"}`}>
        {image ? (
          <img src={image} alt={`${title} preview`} loading="lazy" className="size-full object-cover object-top" />
        ) : (
          <div className="space-y-3 p-5">
            <div className="h-3 w-2/5 rounded-full bg-line" />
            <div className="h-3 w-3/5 rounded-full bg-line/60" />
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-1 flex-col px-1">
        <h3 className="font-display text-xl font-extrabold">{title}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-mute">{text}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
          {tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1">{t}</li>
          ))}
        </ul>
        <div className="mt-5 flex gap-6 text-sm font-semibold text-fire">
          <a href={live} className="underline-offset-4 hover:underline">Live demo</a>
          <a href={code} className="underline-offset-4 hover:underline">Source code</a>
        </div>
      </div>
    </article>
  );
}
