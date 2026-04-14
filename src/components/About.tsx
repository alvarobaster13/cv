import { motion } from "motion/react";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-1/3"
        >
          <h2 className="text-4xl md:text-5xl font-bold sticky top-32">Sobre mí</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:w-2/3 space-y-12"
        >
          <p className="text-2xl md:text-3xl font-medium text-on-surface leading-tight">
            Perfil tecnológico junior con base en desarrollo y manejo de diferentes lenguajes y herramientas digitales. Formación técnica complementada con conocimientos en Inteligencia Artificial aplicada a la empresa, orientados a la automatización de procesos y optimización de tareas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-outline-variant/10">
            <div className="space-y-4">
              <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Objetivo</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Busco desarrollarme profesionalmente en entornos digitales donde pueda aportar valor desde el inicio y evolucionar hacia perfiles más especializados en desarrollo e IA.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Actitud</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg">
                Destaco por mi actitud proactiva, capacidad de aprendizaje continuo y adaptación a entornos tecnológicos en constante evolución.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
