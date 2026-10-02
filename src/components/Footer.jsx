import { DATA } from "../data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-8 text-center text-sm text-mute">
      © {new Date().getFullYear()} {DATA.name}. Built with React and Tailwind CSS.
    </footer>
  );
}
