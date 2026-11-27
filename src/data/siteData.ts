import { IMAGES } from './assets';

export type RoutePath =
  | '/'
  | '/servicos'
  | '/obras'
  | '/sobre'
  | '/compliance'
  | '/contato'
  | `/obras/${string}`;

export interface ServiceCardData {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  disciplineValue: string;
  image?: { src: string; alt: string };
}

export interface ProjectQuantitativo {
  label: string;
  value: string;
}

export interface ProjectEtapa {
  step: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  slug: string;
  category: 'rodoviaria' | 'saupre' | 'edificacoes';
  badge: string;
  metric: string;
  title: string;
  summary: string;
  location: string;
  contractCode: string;
  extensionLabel: string;
  extensionValue: string;
  statusYear: string;
  normLabel: string;
  normValue: string;
  image: { src: string; alt: string };
  heroCaption: string;
  challenge: string;
  solution: string;
  quantitativos: ProjectQuantitativo[];
  etapas: ProjectEtapa[];
  featuredOnHome?: boolean;
}

export interface OpenPosition {
  id: string;
  title: string;
  code: string;
  location: string;
  areaValue: string;
  description: string;
}

export const HOME_METRICS = [
  {
    value: '+340 km',
    description: 'Pavimentação, drenagem e revitalização viária',
  },
  {
    value: '18+',
    description: 'SAUs e PREs implantados em rodovias concedidas',
  },
  {
    value: '92.000 m²',
    description: 'Edificações prediais, reformas e obras civis',
  },
  {
    value: '100%',
    description: 'Conformidade técnica DNIT, DER e normas ABNT',
  },
] as const;

export const RODOVIARIA_SERVICES: ServiceCardData[] = [
  {
    id: 'pavimentacao',
    icon: 'add_road',
    title: 'Pavimentação e Obras Rodoviárias',
    subtitle: 'CBUQ • Fresagem • Restauração',
    description:
      'Execução de implantação, duplicação, recapeamento asfáltico, reciclagem de pavimento e sinalização viária em rodovias e vias urbanas.',
    ctaLabel: 'Solicitar escopo',
    disciplineValue: 'Obra rodoviária / pavimentação',
    image: IMAGES.obraPaving,
  },
  {
    id: 'terraplanagem',
    icon: 'landscape',
    title: 'Terraplanagem e Contenções',
    subtitle: 'Solo • Compactação • Taludes',
    description:
      'Cortes, aterros compactados com controle tecnológico, estabilização de subleito, platôs industriais e obras de contenção geotécnica.',
    ctaLabel: 'Solicitar escopo',
    disciplineValue: 'Terraplanagem e drenagens',
    image: IMAGES.obraTerraplanagem,
  },
  {
    id: 'drenagens',
    icon: 'water_drop',
    title: 'Drenagens Profundas e Superficiais',
    subtitle: 'Galerias • Bueiros • Dissipadores',
    description:
      'Implantação de redes de macro e microdrenagem, bueiros tubulares e celulares, canaletas, descidas d’água e proteção contra erosão.',
    ctaLabel: 'Solicitar escopo',
    disciplineValue: 'Terraplanagem e drenagens',
    image: IMAGES.obraDrenagem,
  },
  {
    id: 'saus-pres',
    icon: 'local_shipping',
    title: 'SAUs e PREs Rodoviários',
    subtitle: 'Bases Operacionais • Postos',
    description:
      'Construção integral de Serviços de Atendimento ao Usuário (SAUs) e Postos Rodoviários Estaduais (PREs), incluindo acessos e utilidades.',
    ctaLabel: 'Solicitar escopo',
    disciplineValue: 'SAU / PRE rodoviário',
    image: IMAGES.obraSau,
  },
];

export const EDIFICACOES_SERVICES: ServiceCardData[] = [
  {
    id: 'edificacoes-prediais',
    icon: 'apartment',
    title: 'Edificações Prediais',
    subtitle: 'Corporativo • Institucional',
    description:
      'Construção de edifícios comerciais, sedes administrativas, galpões operacionais e unidades públicas com entrega chave na mão.',
    ctaLabel: 'Solicitar escopo',
    disciplineValue: 'Edificação / reforma predial',
  },
  {
    id: 'reformas',
    icon: 'construction',
    title: 'Reformas e Revitalizações',
    subtitle: 'Retrofit • Adequação',
    description:
      'Revitalização de fachadas, espaços públicos, acessibilidade NBR 9050, reforço estrutural e modernização de instalações.',
    ctaLabel: 'Solicitar escopo',
    disciplineValue: 'Edificação / reforma predial',
  },
  {
    id: 'obras-gerais',
    icon: 'foundation',
    title: 'Obras em Geral',
    subtitle: 'Infraestrutura Urbana',
    description:
      'Pátios logísticos, estacionamentos pesados, fundações, pavimentação intertravada e infraestrutura de apoio industrial.',
    ctaLabel: 'Solicitar escopo',
    disciplineValue: 'Edificação / reforma predial',
  },
];

export const CONSULTORIA_SERVICES: ServiceCardData[] = [
  {
    id: 'gerenciamento',
    icon: 'fact_check',
    title: 'Gerenciamento e Fiscalização',
    subtitle: 'ATO • Medições • Controle',
    description:
      'Acompanhamento físico-financeiro de contratos, auditoria de medições, controle tecnológico de campo e gestão de prazos.',
    ctaLabel: 'Agendar consultoria',
    disciplineValue: 'Consultoria / projeto / laudo',
  },
  {
    id: 'projetos-orcamentacao',
    icon: 'architecture',
    title: 'Projetos e Orçamentação',
    subtitle: 'SICRO • SINAPI • Executivo',
    description:
      'Elaboração de projetos executivos viários e prediais, compatibilização BIM e orçamentos referenciais SICRO/SINAPI.',
    ctaLabel: 'Agendar consultoria',
    disciplineValue: 'Consultoria / projeto / laudo',
  },
  {
    id: 'laudos-pareceres',
    icon: 'assignment',
    title: 'Laudos e Pareceres Técnicos',
    subtitle: 'Vistorias • Patologias',
    description:
      'Diagnóstico de patologias em pavimentos e estruturas, vistorias cautelares, as-built e suporte técnico para editais.',
    ctaLabel: 'Agendar consultoria',
    disciplineValue: 'Consultoria / projeto / laudo',
  },
];

export const HOME_DIFFERENTIALS = [
  {
    icon: 'verified',
    title: 'Controle tecnológico próprio',
    description: 'Ensaios de compactação, granulometria e ligantes asfálticos rastreados por lote.',
  },
  {
    icon: 'health_and_safety',
    title: 'Segurança viária e NRs',
    description: 'Sinalização de obra em rodovia sob tráfego e conformidade integral às normas regulamentadoras.',
  },
  {
    icon: 'schedule',
    title: 'Planejamento executivo',
    description: 'Cronogramas físico-financeiros transparentes com medições auditáveis.',
  },
  {
    icon: 'handshake',
    title: 'Atendimento público e privado',
    description: 'Experiência em contratos com concessionárias, prefeituras, órgãos estaduais e indústria.',
  },
] as const;

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'corredor-logistico-pr-323',
    category: 'rodoviaria',
    badge: 'Pavimentação',
    metric: '28 km',
    title: 'Corredor Logístico PR-323',
    summary:
      'Fresagem, recomposição em CBUQ, drenagem profunda e dispositivos de retorno em trecho de alto tráfego pesado.',
    location: 'Maringá — PR',
    contractCode: 'Contrato PR-323 • Lote 02',
    extensionLabel: 'Extensão',
    extensionValue: '28,0 km',
    statusYear: 'Concluída • 2025',
    normLabel: 'Norma / Órgão',
    normValue: 'DNIT / DER-PR',
    image: IMAGES.obraPaving,
    heroCaption:
      'Restauração estrutural de pavimento flexível, implantação de terceira faixa, drenagem profunda e sinalização horizontal/vertical em trecho rodoviário sob tráfego intenso.',
    challenge:
      'O corredor rodoviário apresentava trincamento severo por fadiga, afundamento em trilha de roda e pontos críticos de saturação do subleito devido a deficiências no sistema de drenagem subsuperficial, exigindo intervenção integral sem interrupção do escoamento agrícola regional.',
    solution:
      'Implantamos plano de desvio operacional em faixas alternadas com sinalização noturna conforme manual do DNIT. Executamos fresagem profunda de 8 cm a 12 cm, reciclagem de base com adição de cimento em segmentos críticos, recomposição em Concreto Betuminoso Usinado a Quente (CBUQ) modificado por polímero e instalação de 4,2 km de drenos profundos longitudinais.',
    quantitativos: [
      { label: 'CBUQ aplicado (Faixa C)', value: '42.600 t' },
      { label: 'Fresagem descontínua', value: '196.000 m²' },
      { label: 'Drenos profundos', value: '4.200 m' },
      { label: 'Sinalização horizontal', value: '56.000 m' },
      { label: 'Prazo executado', value: '11 meses' },
    ],
    etapas: [
      {
        step: 'ETAPA 01',
        title: 'Mobilização e controle de tráfego',
        description:
          'Instalação de canteiro industrial, sinalização de obra diurna/noturna e levantamento deflectométrico FWD.',
      },
      {
        step: 'ETAPA 02',
        title: 'Drenagem e recomposição estrutural',
        description:
          'Execução de drenos profundos, fresagem, reciclagem de base com controle de compactação e imprimação.',
      },
      {
        step: 'ETAPA 03',
        title: 'Revestimento CBUQ e entrega',
        description:
          'Aplicação de capa asfáltica, ensaios de aderência e rugosidade (IRI), sinalização termoplástica e as-built.',
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: 'duplicacao-e-drenagem-br-116',
    category: 'rodoviaria',
    badge: 'Terraplanagem e Drenagem',
    metric: '14,5 km',
    title: 'Duplicação e Drenagem BR-116',
    summary:
      'Terraplanagem pesada, implantação de bueiros celulares e galerias de águas pluviais em trecho metropolitano.',
    location: 'Curitiba — PR',
    contractCode: 'Contrato BR-116 • Trecho Sul',
    extensionLabel: 'Extensão',
    extensionValue: '14,5 km',
    statusYear: 'Concluída • 2025',
    normLabel: 'Norma / Órgão',
    normValue: 'DNIT ES 108/2009',
    image: IMAGES.obraDrenagem,
    heroCaption:
      'Execução de terraplanagem pesada, estabilização de taludes, galerias celulares em concreto armado e dispositivos de micro e macrodrenagem em eixo metropolitano.',
    challenge:
      'Trecho sujeito a alagamentos sazonais e deslizamentos de talude em área urbana adensada, com interferências de redes de utilidades e elevado fluxo de veículos de carga.',
    solution:
      'Realizamos remanejamento coordenado de interferências, escavação em material de 1ª e 2ª categorias com reaproveitamento geotécnico, implantação de bueiros celulares duplos pré-moldados e execução de dissipadores de energia em gabião.',
    quantitativos: [
      { label: 'Movimentação de terra', value: '310.000 m³' },
      { label: 'Bueiros celulares', value: '1.850 m' },
      { label: 'Canaletas revestidas', value: '18.400 m' },
      { label: 'Concreto estrutural FCK 30', value: '6.400 m³' },
      { label: 'Prazo executado', value: '14 meses' },
    ],
    etapas: [
      {
        step: 'ETAPA 01',
        title: 'Sondagem e drenagem provisória',
        description:
          'Mapeamento geotécnico, cadastro de interferências subterrâneas e desvio provisório de talvegues.',
      },
      {
        step: 'ETAPA 02',
        title: 'Macrodrenagem e terraplanagem',
        description:
          'Assentamento de galerias celulares, execução de aterros compactados em camadas e ensaios de Proctor.',
      },
      {
        step: 'ETAPA 03',
        title: 'Contenções e dispositivos finais',
        description:
          'Implantação de descidas d’água, dissipadores, hidrossemeadura de taludes e entrega técnica.',
      },
    ],
  },
  {
    slug: 'sau-e-base-operacional-sul',
    category: 'saupre',
    badge: 'SAUs e PREs',
    metric: '1.450 m²',
    title: 'SAU e Base Operacional Sul',
    summary:
      'Edificação completa de atendimento ao usuário, cobertura metálica, pátio de viaturas, drenagem e pistas de acesso.',
    location: 'Ponta Grossa — PR',
    contractCode: 'Contrato SAU-04 • Eixo Sul',
    extensionLabel: 'Área Construída',
    extensionValue: '1.450 m²',
    statusYear: 'Concluída • 2024',
    normLabel: 'Norma / Órgão',
    normValue: 'ANTT / ABNT NBR 9050',
    image: IMAGES.obraSau,
    heroCaption:
      'Construção integral de Serviço de Atendimento ao Usuário (SAU) e Base Operacional de concessionária, contemplando pistas de aceleração/desaceleração, cobertura metálica e infraestrutura predial.',
    challenge:
      'Implantação em faixa de domínio restrita com prazo contratual rígido para início de operação de pedágio e exigência integral de acessibilidade, autonomia energética e tratamento de efluentes.',
    solution:
      'Adotamos sistema construtivo híbrido com estrutura metálica pré-fabricada e fechamentos termoacústicos, executando simultaneamente o platô de terraplanagem, o pavimento rígido para viaturas pesadas e as redes hidrossanitárias e de dados.',
    quantitativos: [
      { label: 'Área edificada coberta', value: '1.450 m²' },
      { label: 'Pátio e pistas de acesso', value: '6.800 m²' },
      { label: 'Estrutura metálica', value: '48 t' },
      { label: 'Estação de tratamento ETE', value: '1 unidade' },
      { label: 'Prazo executado', value: '7 meses' },
    ],
    etapas: [
      {
        step: 'ETAPA 01',
        title: 'Terraplanagem e fundações',
        description:
          'Conformação do platô rodoviário, drenagem periférica e execução de estacas e blocos de fundação.',
      },
      {
        step: 'ETAPA 02',
        title: 'Superestrutura e cobertura',
        description:
          'Montagem da estrutura metálica, alvenaria de vedação, instalações elétricas, climatização e rede lógica.',
      },
      {
        step: 'ETAPA 03',
        title: 'Pistas de acesso e comissionamento',
        description:
          'Pavimentação das alças de acesso, sinalização viária, testes de gerador/ETE e entrega operacional.',
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: 'pre-e-balanca-rodoviaria',
    category: 'saupre',
    badge: 'SAUs e PREs',
    metric: '980 m²',
    title: 'PRE e Balança Rodoviária',
    summary:
      'Implantação de posto rodoviário estadual, pátio de pesagem em pavimento rígido e infraestrutura de segurança.',
    location: 'Cascavel — PR',
    contractCode: 'Contrato PRE-12 • Oeste',
    extensionLabel: 'Área Construída',
    extensionValue: '980 m²',
    statusYear: 'Concluída • 2024',
    normLabel: 'Norma / Órgão',
    normValue: 'DER-PR / INMETRO',
    image: IMAGES.obraPre,
    heroCaption:
      'Construção de Posto Rodoviário Estadual (PRE) com bloco operacional blindado, pista seletiva de pesagem em pavimento rígido de concreto e pátio de retenção.',
    challenge:
      'Executar pista de pesagem com tolerância milimétrica de planicidade exigida para homologação metrológica da balança dinâmica e estática, mantendo desvio seguro na rodovia.',
    solution:
      'Projetamos e executamos fosso técnico da balança com concreto de alta resistência inicial, lajes em pavimento rígido com barras de transferência e edificação operacional com controle de acesso e iluminação LED viária.',
    quantitativos: [
      { label: 'Edificação operacional', value: '980 m²' },
      { label: 'Pavimento rígido de pesagem', value: '3.900 m²' },
      { label: 'Iluminação viária LED', value: '42 postes' },
      { label: 'Fosso metrológico', value: '2 unidades' },
      { label: 'Prazo executado', value: '8 meses' },
    ],
    etapas: [
      {
        step: 'ETAPA 01',
        title: 'Infraestrutura e fosso técnico',
        description:
          'Drenagem profunda de proteção, sub-base cimentada e concretagem do fosso de pesagem.',
      },
      {
        step: 'ETAPA 02',
        title: 'Edificação e pavimento rígido',
        description:
          'Construção da sede policial rodoviária e concretagem das pistas com acabamento controlado.',
      },
      {
        step: 'ETAPA 03',
        title: 'Sistemas e aferição metrológica',
        description:
          'Instalação de CFTV, pórticos de sinalização luminosa, aferição INMETRO e entrega ao DER-PR.',
      },
    ],
  },
  {
    slug: 'centro-administrativo-regional',
    category: 'edificacoes',
    badge: 'Edificações',
    metric: '4.200 m²',
    title: 'Centro Administrativo Regional',
    summary:
      'Revitalização estrutural, retrofit de fachada, adequação predial de incêndio e climatização com obra em operação.',
    location: 'Curitiba — PR',
    contractCode: 'Contrato ED-09 • Sede Regional',
    extensionLabel: 'Área Revitalizada',
    extensionValue: '4.200 m²',
    statusYear: 'Concluída • 2024',
    normLabel: 'Norma / Órgão',
    normValue: 'ABNT NBR 15575 / CBMPR',
    image: IMAGES.obraEdificacao,
    heroCaption:
      'Retrofit completo de edificação corporativa e institucional em operação, com reforço estrutural, fachada ventilada, sistema de climatização VRF e prevenção contra incêndio.',
    challenge:
      'Modernizar integralmente cinco pavimentos administrativos sem paralisar os atendimentos públicos e equipes internas, garantindo segurança, controle de ruído e conformidade ao novo código de incêndio.',
    solution:
      'Estruturamos cronograma por alas e turnos noturnos com isolamento acústico e barreiras sanitárias. Executamos reforço em fibra de carbono, substituição de prumadas elétricas e hidráulicas e aprovação integral de PPCI.',
    quantitativos: [
      { label: 'Área total revitalizada', value: '4.200 m²' },
      { label: 'Fachada ventilada ACM/vidro', value: '1.680 m²' },
      { label: 'Capacidade de climatização', value: '140 TR' },
      { label: 'Rotas acessíveis NBR 9050', value: '100% adequadas' },
      { label: 'Prazo executado', value: '9 meses' },
    ],
    etapas: [
      {
        step: 'ETAPA 01',
        title: 'Diagnóstico e compartimentação',
        description:
          'Vistoria estrutural, mapeamento de instalações existentes e isolamento físico por pavimento.',
      },
      {
        step: 'ETAPA 02',
        title: 'Reforço e sistemas prediais',
        description:
          'Recuperação estrutural, novas redes de dados, elétrica estabilizada, hidrantes e sistema VRF.',
      },
      {
        step: 'ETAPA 03',
        title: 'Retrofit de fachada e certificação',
        description:
          'Instalação de brises e fachada ventilada, acabamentos corporativos, testes e obtenção do AVCB.',
      },
    ],
    featuredOnHome: true,
  },
  {
    slug: 'terminal-logistico-campo-largo',
    category: 'edificacoes',
    badge: 'Edificações',
    metric: '12.800 m²',
    title: 'Terminal Logístico Campo Largo',
    summary:
      'Execução de pátio de manobras, fundações, pavimentação pesada intertravada e infraestrutura de apoio operacional.',
    location: 'Campo Largo — PR',
    contractCode: 'Contrato IND-18 • Pátio Logístico',
    extensionLabel: 'Área Implantada',
    extensionValue: '12.800 m²',
    statusYear: 'Concluída • 2025',
    normLabel: 'Norma / Órgão',
    normValue: 'ABNT NBR 6118 / DNIT',
    image: IMAGES.obraTerraplanagem,
    heroCaption:
      'Implantação de pátio logístico de alta carga por eixo, abrangendo terraplanagem compensada, rede de drenagem pluvial, piso intertravado de alta resistência e docas operacionais.',
    challenge:
      'Terreno com presença de solos moles superficiais e necessidade de suportar cargas concentradas de empilhadeiras de grande porte e carretas bitrem em ciclos contínuos.',
    solution:
      'Realizamos remoção e substituição de solo mole com rachão e geogrelha, execução de base em brita graduada tratada com cimento (BGTC) e assentamento mecanizado de blocos intertravados de 10 cm com 50 MPa.',
    quantitativos: [
      { label: 'Pátio intertravado 50 MPa', value: '12.800 m²' },
      { label: 'Base cimentada (BGTC)', value: '2.560 m³' },
      { label: 'Rede pluvial e caixas separadoras', value: '940 m' },
      { label: 'Docas niveladoras', value: '14 posições' },
      { label: 'Prazo executado', value: '6 meses' },
    ],
    etapas: [
      {
        step: 'ETAPA 01',
        title: 'Estabilização geotécnica',
        description:
          'Escavação de solo mole, enrocamento drenante e conformação do subleito com controle de CBR.',
      },
      {
        step: 'ETAPA 02',
        title: 'Base cimentada e utilidades',
        description:
          'Execução de BGTC, galerias de drenagem, caixa separadora de água e óleo e eletrodutos.',
      },
      {
        step: 'ETAPA 03',
        title: 'Pavimento intertravado e docas',
        description:
          'Assentamento mecanizado de piso intertravado, pintura de faixas de manobra e entrega industrial.',
      },
    ],
  },
];

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'Todas' },
  { id: 'rodoviaria', label: 'Rodoviária e Drenagem' },
  { id: 'saupre', label: 'SAUs e PREs' },
  { id: 'edificacoes', label: 'Edificações e Reformas' },
] as const;

export type PortfolioFilterId = (typeof PORTFOLIO_FILTERS)[number]['id'];

export const ABOUT_TIMELINE = [
  {
    year: '2014',
    title: 'Fundação e consultoria',
    description:
      'Início das operações em Curitiba prestando consultoria, fiscalização técnica e orçamentação de obras rodoviárias.',
  },
  {
    year: '2017',
    title: 'Expansão para obras civis',
    description:
      'Estruturação de equipes próprias de terraplanagem, drenagem profunda e reformas prediais corporativas.',
  },
  {
    year: '2021',
    title: 'SAUs, PREs e concessões',
    description:
      'Consolidação na entrega de bases operacionais rodoviárias (SAUs e PREs) e restauração asfáltica sob tráfego.',
  },
  {
    year: '2025',
    title: 'Acervo +340 km e Brasil',
    description:
      'Laboratório de controle tecnológico próprio e atuação multirregional com conformidade integral DNIT, DER e ABNT.',
  },
] as const;

export const COMPLIANCE_PILLARS = [
  {
    icon: 'gavel',
    title: 'Ética e Governança Corporativa',
    description:
      'Código de Conduta rígido aplicado a colaboradores, fornecedores e parceiros em contratações públicas e privadas.',
    bullets: [
      'Conformidade integral à Lei Anticorrupção (12.846/2013)',
      'Due diligence técnica e fiscal de subcontratados',
      'Transparência em medições e aditivos contratuais',
    ],
  },
  {
    icon: 'health_and_safety',
    title: 'Segurança do Trabalho e Rodoviária',
    description:
      'Operações em faixa de domínio sob tráfego com protocolos preventivos certificados e meta de acidente zero.',
    bullets: [
      'Treinamentos ativos em NR-10, NR-18, NR-35 e sinalização viária',
      'DDS diário auditado em todas as frentes de serviço',
      'Plano de Atendimento a Emergências (PAE) em campo',
    ],
  },
  {
    icon: 'eco',
    title: 'Gestão Ambiental de Obra',
    description:
      'Prevenção de passivos ambientais em terraplanagem, usinagem, bota-fora e intervenção próxima a cursos d’água.',
    bullets: [
      'Rastreabilidade de resíduos da construção (PGRCC)',
      'Controle de carreamento de sólidos e drenagem provisória',
      'Licenciamento e condicionantes monitorados por obra',
    ],
  },
] as const;

export const OPEN_POSITIONS: OpenPosition[] = [
  {
    id: 'vaga-eng-rodoviario',
    title: 'Engenheiro Civil Residente (Rodoviária)',
    code: 'CREA Ativo • Tempo Integral',
    location: 'Paraná e Santa Catarina',
    areaValue: 'Engenharia Rodoviária / Pavimentação',
    description:
      'Gestão técnica e físico-financeira de frentes de pavimentação CBUQ, terraplanagem e drenagem.',
  },
  {
    id: 'vaga-tec-seguranca',
    title: 'Técnico em Segurança do Trabalho (TST)',
    code: 'Registro MTE • Obra Viária',
    location: 'Região Metropolitana de Curitiba',
    areaValue: 'Segurança do Trabalho / SSMA',
    description:
      'Implementação de PGR, inspeções em faixa de domínio rodoviária e treinamentos das NRs aplicáveis.',
  },
  {
    id: 'vaga-mestre-obras',
    title: 'Mestre de Obras / Encarregado de Drenagem',
    code: 'Experiência Comprovada • Edificações / Civil',
    location: 'Curitiba e Interior do PR',
    areaValue: 'Edificações / Obras Civis',
    description:
      'Coordenação de equipes de campo em SAUs, edificações prediais, formas, ferragem e drenagens.',
  },
];

export const DISCIPLINE_OPTIONS = [
  'Obra rodoviária / pavimentação',
  'Terraplanagem e drenagens',
  'SAU / PRE rodoviário',
  'Edificação / reforma predial',
  'Consultoria / projeto / laudo',
] as const;
