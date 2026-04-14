import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-20 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-2xl font-bold text-primary tracking-tight">Álvaro Fernández</span>
          <p className="text-on-surface-variant text-sm uppercase tracking-[0.2em] font-medium">
            © {currentYear} Álvaro Fernández Cerezo. Built with Digital Soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
