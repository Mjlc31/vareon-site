import { PillarItem, RoadmapStep, ValueArgument, TrackMetric } from '../types';

export const HERO_DATA = {
  ticker: "OPERAÇÃO DE CRESCIMENTO PREVISÍVEL • HIGH-TICKET POSITIONING • Q3/Q4 AUDITS ATIVOS",
  badge: "CONSULTORIA DE ELITE EM CRESCIMENTO & POSICIONAMENTO",
  headlineLine1: "Todo mês, o seu melhor cliente",
  headlineLine2: "paga mais caro para o",
  headlineLine3: "seu concorrente.",
  subheadline: "Ele procurou o que você vende. Estava com o cartão na mão. E foi embora sem saber que você existe, porque a concorrência chegou primeiro.",
  ctaPrimary: "Assumir o Controle do Mercado",
  ctaSecondary: "Ver Metodologia de 5 Fases",
  availabilityText: "Vagas estritas: Selecionando apenas 2 novas operações para o trimestre.",
  marketStats: [
    { label: "Média de Aumento no LTV", val: "+148%" },
    { label: "Redução de CAC com Posicionamento", val: "-42%" },
    { label: "Taxa de Fechamento High-Ticket", val: "3.4x" },
    { label: "Receita sob Gestão de Estratégia", val: "R$ 45M+" }
  ]
};

export const PILLARS_DATA: PillarItem[] = [
  {
    id: "posicionamento",
    number: "01",
    tag: "FUNDAÇÃO ESTRATÉGICA",
    title: "Posicionamento",
    subtitle: "O fim da briga por preço",
    description: "Empresas sem posicionamento claro são forçadas a competir pelo menor preço e justificar cada centavo. Construímos uma tese de mercado proprietária que transforma o seu serviço em uma categoria única — onde a comparação simplesmente deixa de existir.",
    bullets: [
      "Definição da Proposta Única de Valor (UVP) inegociável",
      "Matriz de Comunicação Anticomoditização para executivos",
      "Estratégia de ancoragem de alto valor perceptível",
      "Blindagem contra concorrentes de baixo custo"
    ]
  },
  {
    id: "organico",
    number: "02",
    tag: "CRESCIMENTO COMPOSTO",
    title: "Tráfego Orgânico",
    subtitle: "Audiência que converte",
    description: "Visualizações vazias não pagam contas. Desenvolvemos uma máquina de conteúdo de alta densidade intelectual que atrai tomadores de decisão qualificados, estabelece autoridade imediata e gera demanda ativa sem queimar verba em leilão de mídia.",
    bullets: [
      "Engenharia de Conteúdo de Alta Retenção e Conversão",
      "Distribuição multicanal orientada a tomadores de decisão",
      "Sistemas de nutrição de leads de alta temperatura",
      "Mais de 200M de visualizações comprovadas em portfólio"
    ]
  },
  {
    id: "pago",
    number: "03",
    tag: "ESCALABILIDADE MATEMÁTICA",
    title: "Aquisição Paga",
    subtitle: "Previsibilidade e escala",
    description: "Tráfego pago não é loteria: é uma equação de retorno sobre investimento. Projetamos funis de aquisição de alto volume com segmentações cirúrgicas e criativos agressivos, garantindo fluxo ininterrupto de reuniões comerciais qualificadas na sua agenda.",
    bullets: [
      "Funis de Qualificação Pré-Venda sem atrito operacional",
      "Otimização algorítmica orientada a ROAS e LTV",
      "Testes sistemáticos de criativos com viés de autoridade",
      "Dashboard em tempo real de CAC, ROAS e Taxa de Fechamento"
    ]
  },
  {
    id: "design",
    number: "04",
    tag: "PERCEPÇÃO DE LUXO E CONFIANÇA",
    title: "Design de Autoridade",
    subtitle: "O visual que justifica o preço",
    description: "Se o seu produto custa 5 ou 6 dígitos, ele não pode parecer genérico. Concebemos uma direção de arte brutalista e corporativa que comunica poder, rigor técnico e sofisticação em cada ponto de contato digital antes mesmo da primeira palavra ser dita.",
    bullets: [
      "Design System exclusivo de alto impacto visual e zero clichês",
      "Landing pages ultra-otimizadas com taxa de conversão superior a 18%",
      "Identidade visual corporativa com precisão geométrica",
      "Experiência do usuário (UX) fluida e focada em fechamento"
    ]
  }
];

export const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    tagline: "Auditoria Cirúrgica de Vulnerabilidades",
    description: "Mapeamento minucioso do seu mercado, concorrência direta e gargalos invisíveis no seu funil atual. Identificamos onde você está deixando dinheiro na mesa e onde seus concorrentes estão capturando seus clientes ideais.",
    deliverables: [
      "Relatório de Fuga de Clientes & Perda de Oportunidades",
      "Raio-X de Posicionamento vs Concorrentes Diretos",
      "Mapeamento de CAC Real e Capacidade de Absorção"
    ],
    duration: "Semana 01",
    impactMetric: "100% de clareza sobre o gargalo central"
  },
  {
    step: "02",
    title: "Posicionamento",
    tagline: "Engenharia da Oferta Irrecusável",
    description: "Reestruturação completa da sua narrativa comercial e proposta de valor. Definimos a tese que estabelece sua empresa como a autoridade inquestionável do seu nicho, eliminando o atrito da negociação de preço.",
    deliverables: [
      "Tese Central de Mercado & Documento de Posicionamento",
      "Estrutura da Nova Oferta de Alto Valor",
      "Roteiro de Comunicação para Vendas Consultivas"
    ],
    duration: "Semanas 02–03",
    impactMetric: "Aumento de até 3x na percepção de valor"
  },
  {
    step: "03",
    title: "Autoridade",
    tagline: "Construção de Domínio Intelectual",
    description: "Implementação da estratégia de conteúdo orgânico e autoridade digital com foco em tomadores de decisão. Seu nome e sua empresa passam a ser a referência natural e incontestável do setor.",
    deliverables: [
      "Plano Diretor de Conteúdo de Alta Densidade",
      "Formatos Proprietários de Atração de Executivos",
      "Setup de Canais Estratégicos e Narrativa de Marca"
    ],
    duration: "Semanas 03–04",
    impactMetric: "Geração de demanda ativa e qualificada"
  },
  {
    step: "04",
    title: "Estrutura",
    tagline: "Máquina de Aquisição & Conversão",
    description: "Desenvolvimento e deploy da infraestrutura de alta conversão: landing pages brutalistas de alta performance, rastreamento analítico avançado, integrações de CRM e campanhas de mídia paga.",
    deliverables: [
      "Landing Pages de Elite com UX de Alta Conversão",
      "Campanhas de Aquisição Paga nos Principais Leilões",
      "Automação de Qualificação e Triagem de Leads"
    ],
    duration: "Semanas 04–06",
    impactMetric: "Funil ativo com leads prontos para comprar"
  },
  {
    step: "05",
    title: "Escala",
    tagline: "Otimização Matemática Contínua",
    description: "Ajustes baseados em dados reais de conversão, otimização contínua de taxa de fechamento e expansão agressiva de investimento com retorno previsível e seguro.",
    deliverables: [
      "Comitê Estratégico Quinzenal de Crescimento",
      "Ajustes de LTV, Esteira de Produtos e Upsell",
      "Escalação Sistemática de Verba com ROAS Controlado"
    ],
    duration: "Contínuo (Meses 2–12)",
    impactMetric: "Crescimento composto mês a mês"
  }
];

export const SALES_ARGUMENTS: ValueArgument[] = [
  {
    id: "autoridade",
    number: "01",
    title: "Autoridade Imediata",
    description: "O cliente entra na sua reunião já sabendo quem você é, respeitando seu trabalho e pronto para ouvir suas condições — não o contrário.",
    metric: "Zero concessões de preço"
  },
  {
    id: "filtro",
    number: "02",
    title: "Filtro de Curiosos",
    description: "Seu time comercial para de perder horas com leads desqualificados que não têm orçamento. Apenas quem tem capacidade financeira avança.",
    metric: "87% dos leads com poder decisório"
  },
  {
    id: "diferenciacao",
    number: "03",
    title: "Diferenciação Absoluta",
    description: "Você sai do mar de empresas genéricas que prometem as mesmas coisas. Criamos uma categoria na qual você joga sozinho.",
    metric: "Fim das comparações com concorrentes"
  },
  {
    id: "confianca",
    number: "04",
    title: "Confiança Visual",
    description: "Design com precisão técnica e sofisticação de alto nível que elimina qualquer insegurança do comprador sobre a entrega do seu serviço.",
    metric: "Apresentação corporativa de elite"
  },
  {
    id: "crescimento",
    number: "05",
    title: "Crescimento Previsível",
    description: "Uma esteira de aquisição que você controla com números, previsões claras de faturamento e sem depender de indicações aleatórias.",
    metric: "Fluxo comercial constante e escalável"
  },
  {
    id: "vendas",
    number: "06",
    title: "Vendas sem Atrito",
    description: "A venda acontece antes mesmo da chamada. O cliente já entendeu o valor, já viu os resultados e só precisa saber como começar.",
    metric: "Ciclo de fechamento 50% mais rápido"
  }
];

export const TRACK_RECORD_METRICS: TrackMetric[] = [
  {
    value: 200,
    suffix: "M+",
    label: "Views Geradas",
    sublabel: "Audiência qualificada consumindo conteúdo estratégico multicanal"
  },
  {
    value: 1,
    suffix: "M+",
    label: "Seguidores Construídos",
    sublabel: "Comunidades engajadas de tomadores de decisão e executivos"
  },
  {
    value: 1,
    prefix: "R$ ",
    suffix: "M+",
    label: "Receita Gerada via Orgânico",
    sublabel: "Vendas diretas de alto ticket sem custo de aquisição em anúncios"
  }
];

export const LEADERSHIP_PROFILE = {
  name: "Nicholas Morizono",
  role: "Head de Growth Orgânico & Estratégia de Conteúdo",
  badge: "AUTHORITY SPECIALIST",
  bio: "Especialista em construir autoridades digitais inquestionáveis e máquinas orgânicas de aquisição. Responsável por estratégias de conteúdo e posicionamento que já ultrapassaram a marca de 200 milhões de visualizações e geraram milhões de reais em contratos de alto ticket.",
  quote: "O maior erro de um empresário é achar que bom serviço se vende sozinho. Se o mercado não percebe a sua superioridade em 5 segundos, você está perdendo o cliente para quem sabe se posicionar.",
  credentials: [
    "Mais de 200 milhões de visualizações geradas organicamente",
    "Gestão e desenvolvimento de marcas que somam +1M de seguidores",
    "Engenharia de conteúdo focada em conversão de alto valor",
    "Framework proprietário de retenção e autoridade intelectual"
  ]
};
