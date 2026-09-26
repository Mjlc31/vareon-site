import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { StatCounter } from './StatCounter';
import { LEADERSHIP_PROFILE, TRACK_RECORD_METRICS } from '../data/agencyData';
import { Quote, CheckCircle, ArrowRight, TrendingUp, Sparkles, Radio } from 'lucide-react';

interface TrackRecordSectionProps {
  onOpenModal: () => void;
}

export const TrackRecordSection: React.FC<TrackRecordSectionProps> = ({ onOpenModal }) => {
  const photoSrc = '/nicholas-stage.jpg';

  return (
    <section 
      id="track-record" 
      className="py-24 sm:py-32 bg-black relative border-b border-white/5 overflow-hidden font-sans"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-4">
              <span>04 // TRACK RECORD & QUEM SOMOS</span>
            </div>
            <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl text-white tracking-tighter">
              Precisão Comprovada em Escala Real
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Metodologia validada na prática por líderes que constroem audiências massivas e faturamento sustentável de alto ticket.
          </p>
        </div>

        {/* Harmonious 3-Column Executive Grid (Triptych Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* COLUMN 1: CLEAN 16:9 VERTICAL PHOTO (Sem textos ou badges por cima da imagem) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="md:col-span-6 lg:col-span-4 flex flex-col"
          >
            <div className="w-full max-w-[340px] md:max-w-none mx-auto flex-1 flex flex-col">
              <div 
                className="relative w-full aspect-[9/16] rounded-2xl border border-white/10 overflow-hidden bg-zinc-950 group shadow-2xl transition-all duration-300 hover:border-white/25 flex-1"
                style={{ aspectRatio: '9/16' }}
                aria-label="Foto de Nicholas Morizono no palco"
              >
                {/* Top ambient spotlight */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-transparent pointer-events-none z-10" />

                {/* 16:9 Vertical Photo Display with Perfect Headroom */}
                <img
                  src={photoSrc}
                  alt="Nicholas Morizono em palestra executiva"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  style={{ objectPosition: 'center 12%' }}
                />

                {/* Subtle bottom edge softening without blocking speaker */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* COLUMN 2: LEADERSHIP PROFILE, PHILOSOPHY & EXECUTIVE CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              {/* Header Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                  <span>LIDERANÇA ESTRATÉGICA</span>
                </div>

                <h3 className="font-semibold text-2xl sm:text-3xl text-white tracking-tight mb-1">
                  {LEADERSHIP_PROFILE.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-blue-400">
                  {LEADERSHIP_PROFILE.role}
                </p>
              </div>

              {/* Bio Paragraph */}
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {LEADERSHIP_PROFILE.bio}
              </p>

              {/* Direct Quote Card */}
              <div className="p-5 rounded-xl bg-zinc-900/60 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
                <Quote className="w-4 h-4 text-zinc-500 mb-2.5" />
                <p className="text-xs sm:text-sm text-zinc-200 italic font-medium leading-relaxed">
                  "{LEADERSHIP_PROFILE.quote}"
                </p>
              </div>

              {/* Credentials Checklist */}
              <div className="space-y-2.5 pt-1">
                {LEADERSHIP_PROFILE.credentials.map((cred, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <CheckCircle className="w-4 h-4 text-blue-400/80 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="leading-snug">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="w-full inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white text-black font-medium text-sm transition-all hover:bg-zinc-200 cursor-pointer shadow-lg shadow-white/5 hover:scale-[1.01]"
              >
                <span>Conversar com a Diretoria</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* COLUMN 3: HARD METRICS & AUDITED TRACK RECORD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
            className="md:col-span-12 lg:col-span-4 flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1 px-1">
              <span>Métricas Consolidadas</span>
              <span className="text-blue-400 flex items-center gap-1">
                <Radio className="w-3 h-3 animate-pulse" />
                Dados Auditados
              </span>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
              {TRACK_RECORD_METRICS.map((metric, idx) => (
                <div 
                  key={idx}
                  className="group relative rounded-xl bg-zinc-900/40 border border-white/5 p-5 sm:p-6 transition-all duration-300 hover:border-white/15 hover:bg-zinc-900/70 flex flex-col justify-between"
                  id={`track-record-stat-${idx}`}
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                    <span className="text-xs font-medium text-zinc-500">
                      MÉTRICA 0{idx + 1}
                    </span>
                    <div className="p-1 rounded bg-zinc-800/50 border border-white/5 group-hover:border-white/10 transition-colors">
                      <TrendingUp className="w-3 h-3 text-zinc-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mb-2">
                    <StatCounter 
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      duration={1.8 + idx * 0.2}
                      className="tabular-nums font-semibold text-3xl sm:text-4xl text-white tracking-tight"
                    />
                  </div>

                  <h4 className="font-semibold text-xs sm:text-sm text-white tracking-tight mb-1">
                    {metric.label}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-snug">
                    {metric.sublabel}
                  </p>
                </div>
              ))}
            </div>

            {/* Institutional Endorsement Box */}
            <div className="p-4 rounded-xl border border-white/5 bg-gradient-to-b from-zinc-900/30 to-black text-xs text-zinc-400 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-300 font-medium text-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Auditoria & Governança de Resultados</span>
              </div>
              <p className="text-xs leading-relaxed text-zinc-400">
                Todos os números apresentados refletem dados consolidados e auditados de operações sob o método proprietário Vareon.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
