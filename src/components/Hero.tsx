import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Target } from 'lucide-react';
import { HERO_DATA } from '../data/agencyData';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section 
      className="relative min-h-[90vh] flex flex-col justify-center pt-40 pb-24 bg-black border-b border-white/5 overflow-hidden"
      id="hero-section"
    >
      {/* Background Architectural Grid Lines with Premium Radial Fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />
      
      {/* Subtle Blue Top Glow */}
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      {/* Main Typographic Focus Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center relative z-10 my-auto">
        
        {/* Strategic Apple-Style Frosted Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 text-xs text-zinc-400 mb-8"
        >
          <Target className="w-3.5 h-3.5" strokeWidth={1.5} />
          <span>Consultoria de Elite em Crescimento</span>
        </motion.div>

        {/* Proportioned Central Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="w-full"
        >
          <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter text-white max-w-4xl mx-auto text-balance">
            Todo mês, o seu melhor cliente paga mais caro para o seu concorrente.
          </h1>
        </motion.div>

        {/* High-Impact Sub-headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-xl mx-auto"
        >
          <p className="text-base text-zinc-400 leading-relaxed font-normal">
            Ele procurou o que você vende. Estava com o cartão na mão. E foi embora sem saber que você existe, porque a concorrência chegou primeiro.
          </p>
        </motion.div>

        {/* Primary High-Conversion CTA Group */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 w-full"
        >
          <button
            onClick={onOpenModal}
            className="group h-11 px-6 rounded-full bg-white text-black hover:bg-zinc-200 font-medium text-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
            id="hero-primary-cta"
          >
            <span>Assumir o Controle do Mercado</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
