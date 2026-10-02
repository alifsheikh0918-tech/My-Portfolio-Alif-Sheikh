import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-24">
      <Reveal>
        <h2 className="font-display mb-10 flex items-center gap-4 text-2xl font-extrabold sm:text-4xl">
          <span className="h-1 w-10 bg-fire" />
          {title}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
