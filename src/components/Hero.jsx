import { useEffect, useState } from "react";
import { DATA } from "../data";

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % DATA.words.length), 2200);
    return () => clearInterval(t);
  }, []);
  return <span key={i} className="swap text-fire">{DATA.words[i]}</span>;
}

function Badge() {
  const initials = DATA.name.split(" ").map((w) => w[0]).join("");
  const ring = `${DATA.status} · ${DATA.status} · `;
  return (
    <div className="relative hidden size-40 shrink-0 text-mute md:block lg:size-48">
      <svg viewBox="0 0 200 200" className="spin-slow absolute inset-0 size-full" aria-hidden="true">
        <defs>
          <path id="ring" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
        </defs>
        <text fill="currentColor" fontSize="12" textLength="505" lengthAdjust="spacing">
          <textPath href="#ring">{ring}</textPath>
        </text>
      </svg>
      {DATA.photo ? (
        <img src={DATA.photo} alt={DATA.name} className="absolute inset-[24%] size-[52%] rounded-full object-cover" />
      ) : (
        <div className="font-display absolute inset-[24%] grid place-items-center rounded-full bg-fire text-2xl font-extrabold text-black">{initials}</div>
      )}
    </div>
  );
}

export default function Hero() {
  let n = 0;
  return (
    <section className="pb-10 pt-14 md:pt-24">
      <p className="mb-6 flex items-center gap-2 text-sm text-mute">
        <span className="size-2 rounded-full bg-fire" />
        {DATA.role}, {DATA.location}
      </p>

      <div className="flex items-end justify-between gap-8">
        <h1
          className="font-display text-[clamp(2.6rem,11vw,8.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight"
          aria-label={DATA.name}
        >
          {DATA.name.split(" ").map((w, wi) => (
            <span key={wi} className="block overflow-hidden pb-1" aria-hidden="true">
              {[...w].map((ch, i) => (
                <span key={i} className="letter" style={{ animationDelay: `${n++ * 60}ms` }}>{ch}</span>
              ))}
            </span>
          ))}
        </h1>
        <Badge />
      </div>

      <p className="font-display mt-10 text-xl font-semibold sm:text-3xl">
        I build <RotatingWord />
      </p>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">{DATA.intro}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="rounded-full bg-fire px-7 py-3.5 font-semibold text-black transition-transform hover:scale-105">See my work</a>
        <a href={DATA.cv} className="rounded-full border border-line px-7 py-3.5 font-semibold transition-colors hover:border-fire hover:text-fire">Download CV</a>
      </div>
    </section>
  );
}
