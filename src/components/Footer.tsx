import React from 'react';
import { VareonLogo } from './VareonLogo';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/5 relative overflow-hidden text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Thesis */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <div className="cursor-pointer inline-block" onClick={scrollToTop}>
              <VareonLogo size={36} showWordmark={true} />
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Consultoria estratégica de alta escala. Transformamos serviços commoditizados em categorias proprietárias através de posicionamento de elite, autoridade orgânica e tração previsível.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
              <span>OPERAÇÃO RESTRITA A 2 CLIENTES / TRIMESTRE</span>
            </div>
          </div>

          {/* Col 2: Navigation Hub */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
              ARQUITETURA
            </span>
            <a 
              href="#pilares" 
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Os 4 Pilares da Vareon
            </a>
            <a 
              href="#metodo" 
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              O Método (5 Fases)
            </a>
            <a 
              href="#vantagens" 
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Diferenciais & Valor
            </a>
            <a 
              href="#track-record" 
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Track Record
            </a>
          </div>

          {/* Col 3: Direct Action & Compliance */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
              ATENDIMENTO EXECUTIVO
            </span>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Solicite uma análise prévia de posicionamento antes de abrir sua próxima vaga comercial.
            </p>
            <button
              onClick={onOpenModal}
              className="h-10 px-4 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-white font-medium text-sm border border-white/5 transition-all flex items-center justify-between group shadow-sm cursor-pointer"
            >
              <span>Agendar Sessão Estratégica</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="pt-2 text-xs font-medium text-zinc-400 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contato@vareon.com.br</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-medium">
          <div className="flex items-center gap-3 lowercase tracking-wider">
            <span>growth</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToTop} 
              className="hover:text-white transition-colors flex items-center gap-1 uppercase cursor-pointer"
            >
              <span>Voltar ao Topo</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
