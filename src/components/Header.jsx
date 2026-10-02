import { useState } from "react";
import { DATA } from "../data";

const NAV = [
  ["Work", "projects"],
  ["Stack", "stack"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-base font-extrabold">{DATA.name}</a>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-mute transition-colors hover:text-fire">{label}</a>
          ))}
        </nav>

        <button className="text-sm font-semibold text-fire md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line px-5 py-2 md:hidden">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-3 font-medium">{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
