import { motion } from "motion/react";
import { Star, AlertTriangle, Lightbulb, Zap } from "lucide-react";

export default function DAFO() {
  const items = [
    {
      title: "Fortalezas",
      icon: <Star size={24} fill="currentColor" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary",
      points: [
        "Actitud proactiva y compromiso",
        "Capacidad de aprendizaje continuo",
        "Base sólida en desarrollo Full Stack",
      ],
    },
    {
      title: "Debilidades",
      icon: <AlertTriangle size={24} fill="currentColor" />,
      color: "text-on-surface-variant",
      bgColor: "bg-on-surface-variant/10",
      borderColor: "border-outline-variant",
      points: [
        "Perfil tecnológico junior",
        "Experiencia en IA en curso",
        "Evolución hacia perfiles especializados",
      ],
    },
    {
      title: "Oportunidades",
      icon: <Lightbulb size={24} fill="currentColor" />,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
      points: [
        "Automatización de procesos con IA",
        "Entornos digitales en evolución",
        "Especialización en desarrollo e IA",
      ],
    },
    {
      title: "Amenazas",
      icon: <Zap size={24} fill="currentColor" />,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/30",
      points: [
        "Mercado tecnológico muy volátil",
        "Necesidad de actualización constante",
        "Alta demanda de perfiles senior",
      ],
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Análisis DAFO
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-on-surface-variant mt-4 text-lg"
          >
            Visión estratégica de mi perfil profesional
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-surface-container-low p-6 md:p-8 rounded-[2rem] border-t-4 ${item.borderColor} space-y-6 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              <div className="flex items-center gap-3">
                <div className={`${item.bgColor} ${item.color} p-3 rounded-xl flex-shrink-0`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg uppercase tracking-wider leading-tight">{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-on-surface-variant leading-relaxed text-sm md:text-base">
                    <span className={item.color}>•</span>
                    <span className="break-words">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
