import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contacto" className="max-w-7xl mx-auto px-6 md:px-12 py-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative bg-surface-container-highest p-12 md:p-24 rounded-[4rem] text-center overflow-hidden border border-outline-variant/10 shadow-2xl"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-container/20 blur-[120px] rounded-full" />

        <div className="relative z-10 space-y-10">
          <h2 className="text-5xl md:text-8xl font-bold leading-tight tracking-tighter">
            ¿Hablamos de tu <br /> 
            <span className="text-gradient">próximo proyecto?</span>
          </h2>
          
          <p className="text-on-surface-variant max-w-2xl mx-auto text-xl leading-relaxed">
            Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme para cualquier consulta o propuesta.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <motion.a 
              href="mailto:alvaroferndezcerezo13@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-12 py-5 rounded-full text-xl shadow-2xl"
            >
              Enviar Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/áfc"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: "var(--color-primary)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-surface px-12 py-5 rounded-full text-xl font-bold border border-outline-variant/30 transition-all"
            >
              Ver LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
