import { motion } from "motion/react";

export default function Experience() {
  const experiences = [
    {
      date: "Anterior",
      title: "Desarrollador Web",
      company: "Walkiria Apps",
      current: false,
      description: [
        "Desarrollo de aplicaciones web mediante WordPress, incluyendo configuración, gestión y despliegue de sitios.",
        "Programación y personalización de plugins en PHP, adaptando funcionalidades a necesidades específicas de cliente.",
        "Diseño y maquetación de elementos web y materiales digitales mediante CSS.",
        "Personalización de plantillas y adaptación de funcionalidades en entornos WordPress.",
        "Colaboración en proyectos digitales con herramientas y entornos modernos."
      ]
    },
    {
      date: "Anterior",
      title: "Mozo de almacén",
      company: "Amazon MAD7",
      current: false,
      description: [
        "Uso de herramientas digitales para el seguimiento de procesos.",
        "Cumplimiento de objetivos de productividad y tiempos de entrega.",
        "Trabajo en equipo y coordinación para la optimización operativa."
      ]
    },
  ];

  const education = [
    {
      title: "Formación Superior en IA aplicada a la empresa",
      institution: "FEDETO + Universidad de Nebrija (27 ECTS)",
      highlight: true,
      details: "Modelos de lenguaje (LLMs), automatización, asistentes virtuales y herramientas low-code/no-code."
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Web",
      institution: "IES Julio Verne (2023-2025)",
      highlight: true,
      details: "HTML, CSS, JavaScript, PHP, bases de datos y lógica de programación."
    },
  ];

  return (
    <section id="experiencia" className="py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
        {/* Experience Column */}
        <div className="space-y-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Experiencia
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative pl-10 border-l border-outline-variant/20"
              >
                <div className={`absolute -left-[7px] top-0 w-3.5 h-3.5 rounded-full ring-4 ring-surface ${exp.current ? 'bg-primary shadow-[0_0_15px_rgba(218,185,255,0.5)]' : 'bg-outline-variant'}`} />
                <span className={`text-xs font-bold uppercase tracking-widest ${exp.current ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {exp.date}
                </span>
                <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                <p className="text-on-surface-variant text-lg mt-1">{exp.company}</p>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-on-surface-variant text-sm flex items-start gap-2 italic">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-16">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold"
          >
            Formación
          </motion.h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl border transition-all duration-300 ${edu.highlight ? 'bg-surface-container border-primary/20 shadow-xl' : 'bg-surface-container-low border-outline-variant/10 hover:border-primary/20'}`}
              >
                <h3 className={`text-xl font-bold ${edu.highlight ? 'text-primary' : 'text-on-surface'}`}>
                  {edu.title}
                </h3>
                <p className="text-on-surface-variant mt-2 font-medium">{edu.institution}</p>
                {edu.details && (
                  <p className="text-on-surface-variant/70 text-sm mt-2 leading-relaxed italic">
                    {edu.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
