import React from 'react';
import { motion } from 'motion/react';
import { SALES_ARGUMENTS } from '../data/agencyData';
import { Shield, Filter, Award, Sparkles, LineChart, CheckSquare } from 'lucide-react';

export const SalesArgumentSection: React.FC = () => {
  const getArgumentIcon = (id: string) => {
    switch (id) {
      case 'autoridade':
        return <Shield className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'filtro':
        return <Filter className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'diferenciacao':
        return <Award className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'confianca':
        return <Sparkles className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'crescimento':
        return <LineChart className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      case 'vendas':
        return <CheckSquare className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
      default:
        return <Shield className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />;
    }
  };

  return (
    <section 
      id="vantagens" 
      className="py-32 bg-black relative border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-zinc-900/50 text-xs text-zinc-400 mb-6">
            <span>03 // O ARGUMENTO DE VENDAS</span>
          </div>
          <h2 className="font-medium text-2xl md:text-4xl text-white tracking-tighter leading-[1.15]">
            Pare de competir por preço. <br className="hidden sm:inline" />
            Torne-se a escolha óbvia.
          </h2>
          <p className="mt-6 text-sm text-zinc-400 max-w-xl mx-auto">
            Quando o seu posicionamento e a sua presença digital operam no nível mais alto do mercado, o cliente não pede desconto: ele agradece por você ter agenda.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALES_ARGUMENTS.map((arg, idx) => (
            <motion.div
              key={arg.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: idx * 0.08, ease: 'easeOut' }}
              className="group rounded-2xl bg-zinc-900/50 border border-white/5 p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
              id={`argument-block-${arg.id}`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                  <div className="p-3 rounded-lg bg-zinc-800/50 border border-white/5">
                    {getArgumentIcon(arg.id)}
                  </div>
                  <span className="text-xs font-semibold text-zinc-500 tracking-wider">
                    ARG // {arg.number}
                  </span>
                </div>

                <h3 className="font-semibold text-lg text-white tracking-tight mb-3">
                  {arg.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                  {arg.description}
                </p>
              </div>

              {/* Bottom Impact Metric Tag */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-medium">
                <span className="text-zinc-500">RESULTADO:</span>
                <span className="text-zinc-300">{arg.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
