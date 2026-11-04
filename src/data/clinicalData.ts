import { ClinicalArea, Testimonial, FAQItem } from '../types';

export const CLINICAL_AREAS: ClinicalArea[] = [
  {
    id: 'avaliacao-neuropsicologica',
    title: 'Avaliação Neuropsicológica Completa',
    badge: 'Especialidade de Destaque',
    category: 'neuro',
    shortDesc: 'Investigação profunda das funções cognitivas, memória, atenção, linguagem e raciocínio para diagnósticos precisos e laudos periciais.',
    fullDesc: 'A avaliação neuropsicológica é uma investigação minuciosa que mapeia o funcionamento do cérebro e seu reflexo no comportamento e na cognição. Com testes padronizados validados pelo CFP, é fundamental para o diagnóstico de TDAH, Transtorno do Espectro Autista (TEA) em adultos, queixas de esquecimento, sequelas neurológicas e declínio cognitivo.',
    symptoms: [
      'Lapsos de memória frequentes no trabalho ou estudos',
      'Dificuldade severa de manter a concentração e foco contínuo',
      'Desorganização persistente e procrastinação paralisante',
      'Necessidade de laudo para concursos, médicos ou psiquiatras'
    ],
    benefits: [
      'Mapeamento completo do perfil cognitivo e potencial intelectual',
      'Laudo técnico detalhado com orientações práticas para a vida diária',
      'Direcionamento assertivo para psiquiatras, neurologistas e terapeutas',
      'Plano individualizado de reabilitação neurocognitiva'
    ],
    icon: 'Brain'
  },
  {
    id: 'ansiedade-panico',
    title: 'Ansiedade Generalizada & Síndrome do Pânico',
    badge: 'Tratamento Baseado em Evidências',
    category: 'emocional',
    shortDesc: 'Cessação de crises de pânico, controle do medo paralisante e reestruturação de pensamentos catastróficos com a Terapia Cognitivo-Comportamental.',
    fullDesc: 'A ansiedade quando disfuncional aprisiona o corpo em estado de alerta perpétuo. Unimos técnicas comprovadas da TCC à psicoeducação neurobiológica para você compreender o circuito do medo, modular sua resposta fisiológica e retomar o controle da sua rotina com tranquilidade.',
    symptoms: [
      'Taquicardia, falta de ar, aperto no peito e tremores repentinos',
      'Preocupação excessiva e pensamentos catastróficos ininterruptos',
      'Tensão muscular constante e sensação iminente de perigo',
      'Insônia decorrente de mente acelerada no fim do dia'
    ],
    benefits: [
      'Alívio gradual das crises com técnicas de regulação neurovegetativa',
      'Reestruturação cognitiva de crenças de desamparo e vulnerabilidade',
      'Recuperação da confiança para viajar, dirigir e participar de eventos',
      'Aumento da resiliência frente a situações imprevistas'
    ],
    icon: 'Activity'
  },
  {
    id: 'depressao-humor',
    title: 'Depressão & Regulação do Humor',
    badge: 'Acolhimento Sensível',
    category: 'emocional',
    shortDesc: 'Resgate da vitalidade, superação da apatia emocional e reconstrução do sentido de vida através de ativação comportamental estruturada.',
    fullDesc: 'A depressão não é fraqueza ou falta de vontade; é uma condição neuroafetiva que drena a energia e a esperança. Em nosso espaço acolhedor, traçamos passos graduais para restabelecer os circuitos de recompensa, resgatar o autocuidado e reconstruir laços significativos.',
    symptoms: [
      'Tristeza profunda persistente ou vazio emocional contínuo',
      'Perda de interesse nas atividades que antes traziam prazer (anedonia)',
      'Fadiga crônica, lentidão mental e sensação de sobrecarga',
      'Sentimento paralisante de culpa, inutilidade ou desesperança'
    ],
    benefits: [
      'Ativação comportamental gradual e realista com metas gentis',
      'Ressignificação de narrativas internas de autocrítica severa',
      'Reconexão com propósito, autonomia e prazer genuíno',
      'Fortalecimento de redes de apoio socioemocional'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'terapia-casal',
    title: 'Terapia de Casal & Relações Afetivas',
    badge: 'Mediação Empática',
    category: 'relacoes',
    shortDesc: 'Mediação segura para romper ciclos destrutivos de discussão, restaurar a intimidade e alinhar projetos conjuntos de vida.',
    fullDesc: 'Relacionamentos saudáveis exigem comunicação consciente e maturidade afetiva. A psicoterapia de casal cria uma arena neutra e segura onde ambos os parceiros são verdadeiramente ouvidos, superando ressentimentos acumulados e restabelecendo o afeto e a cumplicidade.',
    symptoms: [
      'Discussões recorrentes sobre os mesmos tópicos sem resolução',
      'Distanciamento afetivo, ausência de carinho e quebra de intimidade',
      'Dificuldade de perdoar mágoas passadas ou quebras de confiança',
      'Divergências acentuadas na criação dos filhos ou finanças'
    ],
    benefits: [
      'Desenvolvimento de comunicação assertiva e não-violenta',
      'Mapeamento dos gatilhos emocionais individuais e conjugais',
      'Reconstrução de acordos claros, respeitosos e sustentáveis',
      'Clareza para tomar decisões importantes sobre o futuro a dois'
    ],
    icon: 'HeartHandshake'
  },
  {
    id: 'tdah-adultos',
    title: 'TDAH & Funções Executivas em Adultos',
    badge: 'Alta Performance com Saúde',
    category: 'neuro',
    shortDesc: 'Estratégias práticas de neuropsicologia para dominar a procrastinação, organizar o tempo e canalizar seu potencial.',
    fullDesc: 'O TDAH no adulto costuma ser acompanhado de anos de frustração e cobrança excessiva. Nosso foco é fornecer estratégias neuropsicológicas práticas de gerenciamento de tempo, regulação atencional e higiene executiva, transformando o modo como você trabalha e vive.',
    symptoms: [
      'Início constante de projetos sem conseguir concluí-los',
      'Dificuldade crônica em estimar o tempo e cumprir prazos',
      'Perda recorrente de objetos, compromissos e tarefas simples',
      'Impulsividade verbal ou hiperfoco desregulado'
    ],
    benefits: [
      'Construção de um sistema personalizado de organização e rotina',
      'Treino de autorregulação inibitória e manejo da impulsividade',
      'Redução da sobrecarga mental e do desgaste emocional diário',
      'Harmonização entre produtividade e qualidade de vida'
    ],
    icon: 'Compass'
  },
  {
    id: 'burnout-trabalho',
    title: 'Burnout & Esgotamento Ocupacional',
    badge: 'Recuperação Vital',
    category: 'emocional',
    shortDesc: 'Desaceleração terapêutica, imposição de limites saudáveis no trabalho e restabelecimento da saúde física e psicológica.',
    fullDesc: 'O esgotamento profissional atinge profissionais dedicados que ultrapassaram repetidamente seus limites biológicos. Auxiliamos no processo de recuperação da vitalidade, estabelecimento de fronteiras firmes com a carreira e prevenção de recidivas.',
    symptoms: [
      'Exaustão física e emocional extrema que não passa com descanso',
      'Cinismo, irritabilidade e desapego em relação às tarefas profissionais',
      'Queda acentuada no rendimento acompanhada de sentimento de incompetência',
      'Sintomas somáticos como enxaquecas, gastrites e dores tensionais'
    ],
    benefits: [
      'Pausa consciente e reparação do sistema neuroendócrino',
      'Revisão da relação com trabalho, produtividade e perfeccionismo',
      'Desenvolvimento de assertividade para dizer "não" sem culpa',
      'Resgate da vida pessoal, lazer e descanso restaurador'
    ],
    icon: 'ShieldCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    initials: 'M. C.',
    name: 'Mariana C.',
    age: '34 anos',
    area: 'Ansiedade e Pânico',
    modality: 'Presencial (Belém)',
    highlight: 'Voltei a respirar sem medo e recuperei minha autonomia.',
    content: 'Cheguei ao consultório da Natalia após três idas à emergência acreditando que estava infartando. O acolhimento dela foi o primeiro divisor de águas: me explicou a ciência do que meu cérebro estava vivendo e me ensinou a desarmar cada gatilho. Hoje vivo em paz e voltei a dirigir e viajar.'
  },
  {
    id: '2',
    initials: 'R. F.',
    name: 'Rodrigo F.',
    age: '29 anos',
    area: 'Avaliação Neuropsicológica & TDAH',
    modality: 'Presencial (Belém)',
    highlight: 'O laudo neuropsicológico foi o mapa que faltava para a minha vida.',
    content: 'Passei a infância e o início da vida adulta achando que eu era apenas preguiçoso e desatento. A avaliação com a Dra. Natalia foi extremamente minuciosa, científica e acolhedora. O laudo explicou com clareza clínica o meu TDAH. As sessões seguintes de reabilitação cognitiva transformaram minha carreira.'
  },
  {
    id: '3',
    initials: 'J. & L.',
    name: 'Juliana & Lucas',
    age: '38 e 41 anos',
    area: 'Terapia de Casal',
    modality: 'Online',
    highlight: 'Nosso casamento renasceu através de uma comunicação madura e sem agressão.',
    content: 'Estávamos à beira do divórcio após 12 anos juntos. A abordagem da Natalia foi cirúrgica: neutra, empática e focada na raiz dos nossos ressentimentos. Aprendemos a nos escutar de verdade sem armas em punho. Foi o melhor investimento que fizemos pela nossa família.'
  },
  {
    id: '4',
    initials: 'A. P.',
    name: 'Ana Paula S.',
    age: '42 anos',
    area: 'Burnout & Depressão',
    modality: 'Online',
    highlight: 'A terapia online foi tão acolhedora e profunda quanto um abraço seguro.',
    content: 'Moro no interior e não tinha acesso a profissionais com essa formação em neurociência. As sessões online com a Natalia foram meu porto seguro durante uma crise devastadora de esgotamento profissional. A clareza e a dedicação dela me salvaram.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Consultas',
    question: 'Como funciona a primeira sessão de psicoterapia?',
    answer: 'A primeira sessão é um momento dedicado à escuta acolhedora da sua história, das suas dores e dos objetivos que deseja alcançar. Não há julgamentos. Juntos, compreendemos o motivo da sua busca e traçamos uma proposta de trabalho terapêutico personalizada e transparente, esclarecendo todas as suas dúvidas sobre o processo.'
  },
  {
    id: 'faq-2',
    category: 'Modalidade',
    question: 'A terapia online possui a mesma eficácia da consulta presencial?',
    answer: 'Sim, comprovadamente. Diversos estudos internacionais de neurociência e psicologia clínica atestam que a psicoterapia online via videoconferência segura possui eficácia equivalente ao atendimento presencial. O atendimento é regulamentado pela Resolução CFP nº 11/2018 e oferece total sigilo, conforto e flexibilidade de horários, sem necessidade de deslocamento.'
  },
  {
    id: 'faq-3',
    category: 'Neuropsicologia',
    question: 'O que é a Avaliação Neuropsicológica e quantas sessões são necessárias?',
    answer: 'A Avaliação Neuropsicológica é uma investigação aprofundada das funções cerebrais e cognitivas através de entrevistas clínicas e baterias de testes psicométricos validados. O processo costuma durar de 4 a 7 sessões, incluindo anamnese detalhada, testagem e a sessão final de devolução com entrega de laudo técnico completo e compreensível.'
  },
  {
    id: 'faq-4',
    category: 'Financeiro',
    question: 'Você atende por planos de saúde ou emite recibo para reembolso?',
    answer: 'Os atendimentos são particulares para garantir tempo de sessão estendido, dedicação exclusiva e estudo de caso individualizado. Fornecemos nota fiscal detalhada e recibo profissional de acordo com as normas da Receita Federal e do CFP, permitindo que você solicite o reembolso integral ou parcial junto ao seu plano de saúde (Bradesco, SulAmérica, Unimed, Amil, Petrobrás, entre outros).'
  },
  {
    id: 'faq-5',
    category: 'Duração',
    question: 'Qual a duração de cada sessão e qual a frequência recomendada?',
    answer: 'Cada sessão de psicoterapia tem duração de 50 minutos. A frequência recomendada no início do tratamento é semanal, permitindo continuidade e fortalecimento do vínculo terapêutico. Conforme a evolução e conquista de autonomia emocional, os encontros passam a ser quinzenais até a alta clínica.'
  },
  {
    id: 'faq-6',
    category: 'Sigilo',
    question: 'Como é garantido o sigilo ético e a confidencialidade?',
    answer: 'O sigilo profissional é um dever ético inegociável regido pelo Código de Ética Profissional do Psicólogo (Artigo 9º). Todas as informações compartilhadas em consulta, seja presencial ou online em ambiente criptografado, são estritamente confidenciais e protegidas por lei.'
  }
];

export const CONTACT_INFO = {
  name: 'Natalia Belmonte',
  crp: 'CRP 10/06482',
  title: 'Neuropsicóloga & Psicóloga Clínica',
  phone: '(91) 98264-4888',
  phoneRaw: '5591982644888',
  address: 'Tv. Angustura - Pedreira, Belém - PA, 68447-000',
  city: 'Belém - Pará',
  hours: 'Segunda a Sexta: 08:00 às 20:00 • Sábados: 08:00 às 13:00',
  email: 'contato@nataliabelmonte.com.br'
};
