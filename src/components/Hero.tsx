import { motion } from "motion/react";
import { Link, Code, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-primary-container/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 pl-0 lg:pl-8"
        >
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-bold uppercase tracking-[0.2em] text-sm block mb-4"
            >
              Full Stack Developer
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter">
              Álvaro <br />
              <span className="text-gradient">Fernández</span>
            </h1>
          </div>

          <p className="text-on-surface-variant text-xl max-w-lg leading-relaxed">
            Desarrollador Full Stack Junior apasionado por la creación de soluciones digitales escalables y elegantes. Basado en Villaluenga de la Sagra (Toledo).
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "#DAB9FF", color: "#141317" }}
                className="p-3 bg-surface-container-high rounded-full text-primary transition-all"
                href="#"
              >
                <Link size={20} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: "#DAB9FF", color: "#141317" }}
                className="p-3 bg-surface-container-high rounded-full text-primary transition-all"
                href="#"
              >
                <Code size={20} />
              </motion.a>
            </div>
            
            <div className="flex items-center gap-2 text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
              <MapPin size={16} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider">Toledo, ES</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent rounded-[3rem] blur-2xl -z-10" />
              <div className="w-full h-full rounded-[3rem] overflow-hidden border border-outline-variant/20 shadow-2xl group relative bg-surface-container-high">
                <img
                  src="/profile.jpg"
                  alt="Álvaro Fernández"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop";
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
