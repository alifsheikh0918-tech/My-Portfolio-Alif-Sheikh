import { useEffect, useRef, useState } from "react";

// Scroll korle niche theke slide hoye ashe
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, { threshold: 0.1 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${on ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}
