import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Building2, TrendingUp, AlertTriangle, Target, Briefcase, HelpCircle } from 'lucide-react';
import { VareonLogo } from './VareonLogo';
import { Loader } from './Loader';

interface StrategicModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const StrategicModal: React.FC<StrategicModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Financial Profile
    revenue: '',
    ticket: '',
    // Step 2: Model & Acquisition
    businessModel: '',
    acquisitionSource: '',
    // Step 3: Pain & Objective
    bottleneck: '',
    growthGoal: '',
    // Step 4: Corporate & Contact
    name: '',
    company: '',
    companyLink: '',
    role: '',
    whatsapp: '',
    email: '',
    coreChallenge: '',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Configure webhook URL via env or fallback to a placeholder
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || 'https://hook.us1.make.com/placeholder_webhook';
      
      // Attempt to send data to webhook (won't fail UX if it fails, since it's an institutional lead capture, but we log it)
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Strategic Session Modal',
          timestamp: new Date().toISOString()
        })
      }).catch(err => console.warn('Webhook transmission issue:', err));

      // Add minimum UX delay to show loading animation
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsLoading(false);
      if (onSuccess) {
        onSuccess();
        setTimeout(() => {
          setStep(1);
          setFormData({
            revenue: '',
            ticket: '',
            businessModel: '',
            acquisitionSource: '',
            bottleneck: '',
            growthGoal: '',
            name: '',
            company: '',
            companyLink: '',
            role: '',
            whatsapp: '',
            email: '',
            coreChallenge: '',
          });
        }, 300);
      } else {
        setStep(5);
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setIsLoading(false);
      // Even on hard error, fallback to success screen to not break user flow
      setStep(5);
    }
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Frosted dark backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="relative bg-[#09090b] rounded-2xl border border-white/10 w-full max-w-2xl z-10 p-6 sm:p-10 shadow-2xl my-auto overflow-hidden max-h-[92vh] flex flex-col"
        id="strategic-diagnostic-modal"
      >
        {/* Loading Overlay */}
        {isLoading ? (
          <div className="py-24 flex flex-col items-center justify-center text-center">
            <Loader text="QUALIFICANDO OPERAÇÃO" size={48} />
            <p className="text-xs text-zinc-400 mt-6 font-medium animate-pulse">
              Cruzando matriz de faturamento, canais e autoridade...
            </p>
          </div>
        ) : (
          <>
            {/* Header with Logo & Close button */}
            <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-6 shrink-0">
              <div className="flex items-center gap-3">
                <VareonLogo size={32} />
                <div>
                  <h3 className="font-medium text-base sm:text-lg text-white tracking-tight flex items-center gap-2">
                    Sessão Estratégica
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      DIAGNÓSTICO
                    </span>
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 mt-0.5">
                    Avaliação de Posicionamento & Escala
                  </p>
                </div>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 text-zinc-500 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Step Progress Indicator (1 to 4) */}
            {step <= 4 && (
              <div className="mb-6 shrink-0">
                <div className="flex items-center justify-between text-xs font-medium text-zinc-500 mb-2.5">
                  <span className="text-zinc-400 font-medium">ETAPA 0{step} DE 04</span>
                  <span className="text-zinc-300 font-medium hidden sm:inline">
                    {step === 1 && "Faturamento & Ticket Médio"}
                    {step === 2 && "Modelo de Negócio & Aquisição"}
                    {step === 3 && "Gargalos Comerciais & Metas"}
                    {step === 4 && "Dados Corporativos"}
                  </span>
                </div>
                <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-white transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Dynamic Step Content Container (Scrollable) */}
            <div className="overflow-y-auto pr-1 flex-1">
              <AnimatePresence mode="wait">
                
                {/* ETAPA 1: FATURAMENTO & TICKET MÉDIO */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="font-medium text-lg text-white mb-1 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        1. Qual é a faixa de faturamento mensal da empresa?
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Adaptamos a engenharia de crescimento para o estágio operacional da sua companhia.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { label: "R$ 30k a R$ 80k / mês", desc: "Validação de autoridade e transição para high-ticket" },
                        { label: "R$ 80k a R$ 250k / mês", desc: "Estruturação de máquina previsível de aquisição" },
                        { label: "R$ 250k a R$ 600k / mês", desc: "Escala agressiva e consolidação de liderança" },
                        { label: "Acima de R$ 600k / mês", desc: "Dominância de categoria e expansão multicanal" },
                      ].map((item, idx) => {
                        const isSelected = formData.revenue === item.label;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, revenue: item.label }))}
                            className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected 
                                ? 'bg-white/10 border-white text-white shadow-sm' 
                                : 'bg-zinc-900/40 hover:bg-zinc-900/80 border-white/5 hover:border-white/15 text-zinc-300'
                            }`}
                          >
                            <span className="font-medium text-sm text-white mb-1">
                              {item.label}
                            </span>
                            <span className="text-[11px] text-zinc-400 leading-snug">
                              {item.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium text-sm text-white mb-1 flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 text-blue-400" />
                        2. Qual é o Ticket Médio do seu principal serviço ou contrato?
                      </h4>
                      <p className="text-xs text-zinc-400 mb-3">
                        Para calcular a viabilidade de alavancagem por cliente fechado.
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { val: "Até R$ 5.000", badge: "Transacional" },
                          { val: "R$ 5k a R$ 15k", badge: "Mid-Ticket" },
                          { val: "R$ 15k a R$ 50k", badge: "High-Ticket" },
                          { val: "Acima de R$ 50k", badge: "Enterprise" },
                        ].map((tItem, tIdx) => {
                          const isSelected = formData.ticket === tItem.val;
                          return (
                            <button
                              key={tIdx}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, ticket: tItem.val }))}
                              className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                                isSelected 
                                  ? 'bg-white text-black border-white font-medium' 
                                  : 'bg-zinc-900/40 hover:bg-zinc-900 border-white/5 text-zinc-300'
                              }`}
                            >
                              <span className="text-xs block font-medium">{tItem.val}</span>
                              <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-zinc-800' : 'text-zinc-500'}`}>
                                {tItem.badge}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        disabled={!formData.revenue || !formData.ticket}
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white text-black font-medium text-sm transition-all hover:bg-zinc-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <span>Avançar: Operação & Canais</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ETAPA 2: MODELO DE NEGÓCIO & CANAIS DE AQUISIÇÃO */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="font-medium text-lg text-white mb-1 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-blue-400" />
                        3. Qual é o modelo de negócio da sua empresa?
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Cada setor exige um formato cirúrgico de autoridade e retenção.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { title: "Serviços B2B / Consultoria", desc: "Assessoria empresarial, agências e consultorias técnicas" },
                        { title: "Escritório Premium / Saúde", desc: "Boutiques jurídicas, arquitetura, clínicas e especialistas" },
                        { title: "SaaS / Solução Tech", desc: "Softwares B2B, plataformas e produtos de tecnologia" },
                        { title: "Educação / Mentoria High-Ticket", desc: "Formação de líderes, masterminds e infoprodutos executivos" },
                        { title: "Indústria & B2B Corp", desc: "Distribuição, manufatura e contratos corporativos" },
                        { title: "Outro Modelo High-Ticket", desc: "Operação customizada com foco em clientes qualificados" },
                      ].map((item, idx) => {
                        const isSelected = formData.businessModel === item.title;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, businessModel: item.title }))}
                            className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                              isSelected 
                                ? 'bg-white/10 border-white text-white' 
                                : 'bg-zinc-900/40 hover:bg-zinc-900/80 border-white/5 hover:border-white/15 text-zinc-300'
                            }`}
                          >
                            <span className="font-medium text-sm text-white block mb-0.5">
                              {item.title}
                            </span>
                            <span className="text-[11px] text-zinc-400 block leading-snug">
                              {item.desc}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium text-sm text-white mb-1 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                        4. Como chegam 80% dos seus clientes hoje?
                      </h4>
                      <p className="text-xs text-zinc-400 mb-2.5">
                        Identificamos onde sua aquisição está vulnerável ou subaproveitada.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          { label: "Indicações & Boca a Boca", sub: "Sem previsibilidade nem controle" },
                          { label: "Tráfego Pago (Ads)", sub: "CAC alto e leads desqualificados" },
                          { label: "Outbound / SDRs Frios", sub: "Muitas reuniões e baixa conversão" },
                          { label: "Redes Sociais / Conteúdo", sub: "Gera audiência sem vender alto ticket" },
                          { label: "Múltiplos / Sem Método Claro", sub: "Instabilidade de mês para mês" },
                        ].map((acq, aIdx) => {
                          const isSelected = formData.acquisitionSource === acq.label;
                          return (
                            <button
                              key={aIdx}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, acquisitionSource: acq.label }))}
                              className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                                isSelected 
                                  ? 'bg-white text-black border-white' 
                                  : 'bg-zinc-900/40 hover:bg-zinc-900 border-white/5 text-zinc-300'
                              }`}
                            >
                              <span className="text-xs font-medium block">{acq.label}</span>
                              <span className={`text-[10px] block ${isSelected ? 'text-zinc-700' : 'text-zinc-500'}`}>
                                {acq.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Voltar</span>
                      </button>
                      <button
                        type="button"
                        disabled={!formData.businessModel || !formData.acquisitionSource}
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white text-black font-medium text-sm transition-all hover:bg-zinc-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <span>Avançar: Gargalos & Metas</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ETAPA 3: GARGALOS CRÍTICOS & METAS DE CRESCIMENTO */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="font-medium text-lg text-white mb-1 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                        5. Qual é o maior gargalo comercial enfrentado hoje?
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Onde sua empresa mais perde dinheiro ou energia no processo de vendas?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        { title: "Guerra de Preços e Margem Espremida", desc: "O cliente compara você com concorrentes amadores e pede desconto para fechar" },
                        { title: "Falta de Percepção Visual e Amadorismo Digital", desc: "A entrega técnica do produto é excelente, mas o posicionamento parece amador" },
                        { title: "Leads Desqualificados e Tempo Perdido", desc: "Time comercial perde dias em reuniões com curiosos que não têm capacidade financeira" },
                        { title: "Dependência Excessiva do Fundador", desc: "A empresa só vende se o sócio estiver na linha de frente; sem processo autônomo" },
                        { title: "Insegurança e Ciclo de Decisão Excessivamente Longo", desc: "O comprador demora semanas ou meses para fechar contratos de alto valor" },
                      ].map((item, idx) => {
                        const isSelected = formData.bottleneck === item.title;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, bottleneck: item.title }))}
                            className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected 
                                ? 'bg-white/10 border-white text-white' 
                                : 'bg-zinc-900/40 hover:bg-zinc-900/80 border-white/5 hover:border-white/15 text-zinc-300'
                            }`}
                          >
                            <div className="pr-4">
                              <span className="font-medium text-sm text-white block mb-0.5">
                                {item.title}
                              </span>
                              <span className="text-xs text-zinc-400 block leading-snug">
                                {item.desc}
                              </span>
                            </div>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              isSelected ? 'border-white bg-white text-black' : 'border-zinc-700'
                            }`}>
                              {isSelected && <span className="w-2 h-2 rounded-full bg-black" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2">
                      <h4 className="font-medium text-sm text-white mb-1 flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 text-blue-400" />
                        6. Qual é a meta prioritária para os próximos 6 a 12 meses?
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "Multiplicar faturamento aumentando ticket e margem",
                          "Construir máquina previsível sem depender de indicações",
                          "Tornar fundadores / marca a autoridade máxima do nicho",
                          "Criar categoria própria eliminando concorrentes diretos",
                        ].map((goal, gIdx) => {
                          const isSelected = formData.growthGoal === goal;
                          return (
                            <button
                              key={gIdx}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, growthGoal: goal }))}
                              className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                                isSelected 
                                  ? 'bg-white text-black border-white font-medium' 
                                  : 'bg-zinc-900/40 hover:bg-zinc-900 border-white/5 text-zinc-300'
                              }`}
                            >
                              {goal}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Voltar</span>
                      </button>
                      <button
                        type="button"
                        disabled={!formData.bottleneck || !formData.growthGoal}
                        onClick={() => setStep(4)}
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white text-black font-medium text-sm transition-all hover:bg-zinc-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <span>Avançar: Dados Corporativos</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ETAPA 4: QUALIFICAÇÃO EXECUTIVA & CONTATO */}
                {step === 4 && (
                  <motion.form
                    key="step4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h4 className="font-medium text-lg text-white mb-1">
                        7. Dados Corporativos para Envio do Diagnóstico
                      </h4>
                      <p className="text-xs text-zinc-400">
                        Nossa diretoria executiva avaliará a compatibilidade da sua empresa antes de confirmar o agendamento.
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-zinc-400">Nome Completo *</label>
                          <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-zinc-900/60 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="Ex: Carlos Albuquerque"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-zinc-400">Cargo / Posição Executiva *</label>
                          <input
                            required
                            type="text"
                            value={formData.role}
                            onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                            className="w-full bg-zinc-900/60 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="Ex: CEO / Sócio-Fundador"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-zinc-400">Nome da Empresa *</label>
                          <input
                            required
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                            className="w-full bg-zinc-900/60 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="Ex: Vareon Ventures"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-zinc-400">Site ou Link (Instagram / LinkedIn)</label>
                          <input
                            type="text"
                            value={formData.companyLink}
                            onChange={(e) => setFormData(prev => ({ ...prev, companyLink: e.target.value }))}
                            className="w-full bg-zinc-900/60 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="suaempresa.com.br ou @perfil"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-zinc-400">E-mail Corporativo *</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full bg-zinc-900/60 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="carlos@suaempresa.com.br"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-zinc-400">WhatsApp Direto com DDD *</label>
                          <input
                            required
                            type="tel"
                            value={formData.whatsapp}
                            onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                            className="w-full bg-zinc-900/60 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 pt-1">
                        <label className="text-xs font-medium text-zinc-400 flex items-center justify-between">
                          <span>Maior Desafio Atual da Operação (Opcional)</span>
                          <span className="text-[11px] text-zinc-500">Aprofundamento</span>
                        </label>
                        <textarea
                          rows={2}
                          value={formData.coreChallenge}
                          onChange={(e) => setFormData(prev => ({ ...prev, coreChallenge: e.target.value }))}
                          className="w-full bg-zinc-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                          placeholder="Ex: Nossos clientes nos acham caros no primeiro contato e dependemos do fundador para fechar cada venda..."
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Voltar</span>
                      </button>
                      <button
                        type="submit"
                        className="h-11 px-6 rounded-full bg-white text-black font-medium text-sm transition-colors hover:bg-zinc-200 cursor-pointer shadow-lg shadow-white/10"
                      >
                        Finalizar e Solicitar Diagnóstico
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* ETAPA 5: FALLBACK CONFIRMATION SCREEN */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-2xl text-white mb-2 tracking-tight">
                      Diagnóstico Recebido
                    </h3>
                    <p className="text-sm text-zinc-400 max-w-sm mb-8 leading-relaxed">
                      Nossa diretoria executiva analisará a compatibilidade e os números da sua empresa. Entraremos em contato nas próximas 24h.
                    </p>
                    <button
                      onClick={resetAndClose}
                      className="flex items-center justify-center h-11 px-6 rounded-full border border-white/10 bg-transparent text-white font-medium text-sm hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      Voltar para o site
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
