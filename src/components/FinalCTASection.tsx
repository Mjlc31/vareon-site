import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VareonLogo } from './VareonLogo';

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenModal }) => {
  return (
    <section 
      id="cta-final" 
      className="py-32 relative overflow-hidden bg-black border-b border-white/5"
    >
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 bg-grid-dense opacity-30 pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Brand Monogram */}
        <div className="mb-10">
          <VareonLogo size={46} />
        </div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-medium text-3xl md:text-5xl text-white tracking-tighter leading-[1.1] max-w-2xl text-balance"
        >
          Quantos clientes você vai perder este mês por falta de estrutura?
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 text-base text-zinc-400 max-w-xl leading-relaxed font-normal"
        >
          Agende uma Sessão Estratégica. Saia com um diagnóstico e um plano para os próximos 30 dias.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 w-full sm:w-auto"
        >
          <button
            onClick={onOpenModal}
            className="group w-full sm:w-auto h-11 px-6 rounded-full bg-white text-black font-medium text-sm transition-colors hover:bg-zinc-200 inline-flex items-center justify-center gap-2 cursor-pointer"
            id="final-cta-button"
          >
            <span>Solicitar Diagnóstico Gratuito</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
          </button>
        </motion.div>

        {/* Diagnostic Session Guarantees */}
        <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-left text-sm text-zinc-400">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
            <span>Sessão confidencial</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
            <span>Raio-X de faturamento</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-white/5">
            <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0" />
            <span>Sem compromisso</span>
          </div>
        </div>

      </div>
    </section>
  );
};
