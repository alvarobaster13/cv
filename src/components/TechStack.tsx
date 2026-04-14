import { motion } from "motion/react";
import { 
  FileCode, 
  Palette, 
  Braces, 
  Database, 
  Server, 
  Layout, 
  Terminal, 
  Monitor, 
  Table, 
  Plus,
  Globe,
  Cpu
} from "lucide-react";

export default function TechStack() {
  const skills = [
    { name: "HTML", icon: <Globe size={24} /> },
    { name: "CSS", icon: <Palette size={24} /> },
    { name: "JS", icon: <Braces size={24} /> },
    { name: "PHP", icon: <Server size={24} /> },
    { name: "SQL", icon: <Database size={24} /> },
    { name: "NodeJS", icon: <Cpu size={24} /> },
    { name: "Symfony", icon: <Terminal size={24} /> },
    { name: "WordPress", icon: <Layout size={24} /> },
    { name: "IA/LLMs", icon: <Cpu size={24} />, special: true },
    { name: "Low-Code", icon: <Plus size={24} /> },
    { name: "CMS", icon: <Layout size={24} /> },
    { name: "English", icon: <Globe size={24} /> },
  ];

  return (
    <section id="habilidades" className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold"
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant text-lg"
          >
            Herramientas y tecnologías que domino
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                y: -8, 
                backgroundColor: "var(--color-primary-container)",
                color: "var(--color-on-surface)" 
              }}
              className={`group p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 transition-all duration-300 cursor-default ${
                skill.special 
                  ? "border-2 border-dashed border-primary/30 bg-transparent" 
                  : "bg-surface-container-high border border-outline-variant/10"
              }`}
            >
              <div className="text-primary group-hover:text-white transition-colors scale-125">
                {skill.icon}
              </div>
              <span className="font-bold text-sm tracking-widest uppercase">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
