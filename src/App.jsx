import Effects from "./components/Effects";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen antialiased">
      <Effects />
      <Header />
      <main id="top" className="relative z-10 mx-auto max-w-6xl px-5">
        <Hero />
      </main>
      <Marquee />
      <main className="relative z-10 mx-auto max-w-6xl px-5">
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
