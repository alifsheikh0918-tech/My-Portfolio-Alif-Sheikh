import { useState } from "react";
import Section from "./Section";
import { DATA } from "../data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${DATA.email}`;
    }
  };

  return (
    <Section id="contact" title="Let's work together">
      <p className="max-w-lg text-lg text-mute">Have a project or a role in mind? Write to me and I will reply within a day.</p>
      <a
        href={`mailto:${DATA.email}`}
        className="outline-text font-display mt-8 block break-all text-3xl font-extrabold sm:text-5xl md:text-6xl"
      >
        {DATA.email}
      </a>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button onClick={copyEmail} className="rounded-full bg-fire px-6 py-3 font-semibold text-black transition-transform hover:scale-105">
          {copied ? "Copied" : "Copy email"}
        </button>
        {DATA.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-fire hover:text-fire">
            {s.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
