import { useEffect, useRef } from "react";

// Mouse er pichone glow + upore scroll progress bar
export default function Effects() {
  const glow = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glow.current) return;
      glow.current.style.opacity = 1;
      glow.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };
    const scroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <div ref={bar} className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-fire" style={{ transform: "scaleX(0)" }} />
      <div
        ref={glow}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 size-[600px] rounded-full opacity-0 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,.16), transparent 65%)" }}
      />
    </>
  );
}
