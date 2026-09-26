import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ArrowRight, CheckCircle2, Clock, Zap } from 'lucide-react';
import { ROADMAP_STEPS } from '../data/agencyData';

interface MethodTimelineProps {
  onOpenModal: () => void;
}

export const MethodTimeline: React.FC<MethodTimelineProps> = ({ onOpenModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = ROADMAP_STEPS[activeStepIndex];

  return (
    <section 
      id="metodo" 
      className="py-32 bg-black relative border-b border-white/5 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 text-xs text-zinc-400 mb-6">
            <span>02 // ROADMAP DE EXECUÇÃO CIRÚRGICA</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl text-white tracking-tighter">
              O Método Vareon
            </h2>
            <p className="max-w-sm text-sm text-zinc-400 leading-relaxed">
              5 etapas cronológicas para transformar serviços comoditizados em potências de faturamento previsível.
            </p>
          </div>
        </div>

        {/* Dual Pane Layout: Interactive Steps List (Left) + Detailed Deliverables Dossier (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Stages Navigation */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2">
              Selecione a fase
            </div>
            {ROADMAP_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative text-left p-5 rounded-2xl transition-all duration-300 border w-full flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-zinc-900/80 border-white/10 text-white'
                      : 'bg-transparent border-transparent text-zinc-500 hover:bg-zinc-900/30 hover:text-zinc-300'
                  }`}
                  id={`method-step-btn-${step.step}`}
                >
                  <div className="flex items-center gap-4">
                    <span 
                      className={`text-lg font-medium transition-colors ${
                        isActive ? 'text-zinc-300' : 'text-zinc-700 group-hover:text-zinc-500'
                      }`}
                    >
                      {step.step}.
                    </span>
                    <div>
                      <h4 className="font-medium text-base tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-1 truncate max-w-[200px]">
                        {step.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-600 hidden sm:inline">
                      {step.duration}
                    </span>
                    <div 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive ? 'bg-white' : 'bg-transparent'
                      }`} 
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Stage Inspector */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative rounded-3xl bg-zinc-900/50 border border-white/5 p-8 sm:p-10 overflow-hidden"
                id="method-stage-detail"
              >
                {/* Background Watermark Number */}
                <div 
                  className="absolute right-6 bottom-4 font-bold text-[120px] text-white/5 select-none pointer-events-none leading-none"
                  aria-hidden="true"
                >
                  {activeStep.step}
                </div>

                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-xs font-medium text-zinc-300">
                      FASE {activeStep.step} / 05
                    </span>
                    <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-600" />
                      {activeStep.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-white">
                    <Zap className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{activeStep.impactMetric}</span>
                  </div>
                </div>

                {/* Main Content of Stage */}
                <div className="relative z-10">
                  <h3 className="font-semibold text-2xl sm:text-3xl text-white tracking-tight mb-2">
                    {activeStep.step}. {activeStep.title}
                  </h3>
                  <h4 className="text-sm text-zinc-400 font-medium mb-6">
                    {activeStep.tagline}
                  </h4>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                    {activeStep.description}
                  </p>

                  {/* Entregáveis da Fase */}
                  <div className="pt-6 border-t border-white/5">
                    <h5 className="text-xs font-medium text-zinc-300 mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-zinc-500" />
                      <span>Entregáveis e Protocolos Desta Fase:</span>
                    </h5>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {activeStep.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-sm text-zinc-400 leading-tight">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex justify-end">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors cursor-pointer"
              >
                <span>Agendar Sessão sobre o Método</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
