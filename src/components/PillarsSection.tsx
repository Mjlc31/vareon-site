import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, Eye, TrendingUp, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PILLARS_DATA } from '../data/agencyData';

interface PillarsSectionProps {
  onOpenModal: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate smooth horizontal translation across the 4 pillars + final CTA card
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-64%']);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'posicionamento':
        return <Compass className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'organico':
        return <Eye className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'pago':
        return <TrendingUp className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'design':
        return <Sparkles className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      default:
        return <Compass className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
    }
  };

  return (
    <section 
      id="pilares" 
      ref={containerRef}
      className="relative bg-black border-b border-white/5 h-[260vh]"
    >
      {/* Sticky Fullscreen Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-10 py-6">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12 relative z-10">
          
          {/* Compact Refined Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-white/5 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 text-xs text-zinc-400 mb-4">
                <span>01 // OS 4 PILARES DA VAREON</span>
              </div>
              <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl text-white tracking-tighter">
                Infraestrutura de Alto Valor
              </h2>
            </div>
            
            <div className="flex items-center gap-6">
              <p className="hidden md:block max-w-xs text-sm text-zinc-400 leading-relaxed">
                Role para navegar horizontalmente pela infraestrutura.
              </p>
              
              {/* Scroll progress bar indicator */}
              <div className="w-32 h-1 rounded-full bg-white/5 overflow-hidden hidden sm:block">
                <motion.div 
                  className="h-full bg-white"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Motion Gallery */}
        <div className="w-full overflow-visible relative z-10 pl-4 sm:pl-8 md:pl-16 lg:pl-28">
          <motion.div 
            className="flex gap-6 will-change-transform"
            style={{ x }}
          >
            {PILLARS_DATA.map((pillar) => (
              <div
                key={pillar.id}
                className="w-[320px] sm:w-[380px] md:w-[440px] shrink-0 rounded-2xl bg-zinc-900/50 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 border border-white/5 relative overflow-hidden group"
                id={`pillar-card-${pillar.id}`}
              >
                {/* Background Number Watermark */}
                <div className="absolute top-4 right-6 text-7xl font-bold text-white/5 select-none pointer-events-none transition-colors">
                  {pillar.number}
                </div>

                {/* Top Meta Area */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-800/50 border border-white/5">
                        {getPillarIcon(pillar.id)}
                      </div>
                    </div>
                    <span className="text-xs font-medium text-zinc-500">
                      PILAR // {pillar.number}
                    </span>
                  </div>

                  {/* Pillar Titles */}
                  <h3 className="font-semibold text-2xl text-white tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                    {pillar.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-6 border-t border-white/5 relative z-10">
                  <ul className="space-y-4">
                    {pillar.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="leading-tight">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Strategic Diagnostic Final Card */}
            <div 
              className="w-[320px] sm:w-[380px] md:w-[440px] shrink-0 rounded-2xl bg-zinc-900/50 p-8 sm:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden group border border-white/5 shadow-xl"
            >
              <h3 className="font-semibold text-2xl sm:text-3xl text-white tracking-tight mb-4">
                Pronto para instalar essa infraestrutura?
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-sm mx-auto">
                Agende sua Sessão Estratégica gratuita. Vamos mapear os gargalos da sua operação.
              </p>
              
              <button
                onClick={onOpenModal}
                className="group/btn inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white text-black font-medium text-sm transition-colors hover:bg-zinc-200 cursor-pointer w-full"
              >
                <span>Agendar Sessão</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" strokeWidth={2} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
