import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/10"
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-primary tracking-tight cursor-pointer"
        >
          Álvaro Fernández
        </motion.span>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05, color: "#DAB9FF" }}
              className="text-on-surface-variant font-medium tracking-tight transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gradient px-6 py-2 rounded-xl text-sm"
          >
            Curriculum
          </motion.button>
        </div>

        <button className="md:hidden text-primary">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
