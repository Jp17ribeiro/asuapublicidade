export const phone = "5561998926801";
export const instagram = "https://www.instagram.com/asuapublicidade/";
export const whatsapp = (message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export const messages = {
  general: "Olá! Vim pelo site da A Sua Publicidade e gostaria de conhecer melhor os serviços.",
  project: "Olá! Vim pelo site da A Sua Publicidade e quero começar um novo projeto.",
  social: "Olá! Vim pelo site e gostaria de consultar os valores dos pacotes de gestão de redes sociais.",
  branding: "Olá! Gostaria de consultar os valores dos pacotes de identidade visual da A Sua Publicidade.",
  portfolio: "Olá! Vi o portfólio da A Sua Publicidade no site e gostaria de conversar sobre um projeto para minha empresa.",
};

export const services = [
  {
    index: "01",
    title: "Gestão de redes sociais",
    headline: "Redes sociais como extensão da sua marca.",
    description: "Planejamento visual, conteúdo estratégico e gestão alinhados ao posicionamento do seu negócio.",
    items: ["Planejamento visual", "Direção criativa", "Campanhas", "Design de posts", "Stories", "Copywriting", "Calendário editorial", "Identidade das redes", "Gestão das redes"],
    icon: "social",
  },
  {
    index: "02",
    title: "Tráfego pago",
    headline: "Seus anúncios na frente das pessoas certas.",
    description: "Estratégias de aquisição de clientes por meio de campanhas planejadas e otimizadas.",
    items: ["Meta Ads", "Instagram Ads", "Facebook Ads", "Google Ads", "Estratégia de campanhas", "Otimização de anúncios", "Análise de resultados"],
    icon: "ads",
  },
  {
    index: "03",
    title: "Identidade visual",
    headline: "Uma marca para reconhecer de longe.",
    description: "Sua empresa precisa ser reconhecida antes mesmo que o cliente leia o nome.",
    items: ["Logotipo", "Paleta de cores", "Tipografia", "Manual visual", "Aplicações", "Social media kit", "Mockups"],
    icon: "brand",
  },
  {
    index: "04",
    title: "Sites & landing pages",
    headline: "Uma presença digital que trabalha por você.",
    description: "Sites modernos desenvolvidos para transformar visitantes em oportunidades de negócio.",
    items: ["Landing pages", "Sites institucionais", "Catálogos digitais", "Cardápios online", "Portfólios", "Blogs", "Sistemas personalizados", "Integrações", "Automação"],
    icon: "web",
  },
  {
    index: "05",
    title: "Coprodução & lançamentos",
    headline: "Da ideia ao mercado, com direção.",
    description: "Estratégia completa para tirar um produto digital do papel e colocá-lo no mercado.",
    items: ["Planejamento", "Branding", "Landing page", "Criativos", "Campanhas", "Estrutura de vendas"],
    icon: "launch",
  },
] as const;

const socialCommon = [
  "Stories",
  "Facebook e Instagram",
  "Arte bio do Instagram",
  "Criação de textos para postagens",
  "Planejamento e cronograma mensal",
];

export const socialPlans = [
  { name: "Básico", short: "Para começar com consistência.", items: ["Até 3 posts (artes) por semana", ...socialCommon] },
  { name: "Pro", short: "Para uma presença mais ativa.", featured: true, items: ["Até 5 posts (artes) por semana", ...socialCommon, "Gestão das redes"] },
  { name: "Super", short: "Para comunicar com mais frequência.", items: ["Até 7 posts (artes) por semana", ...socialCommon, "Gestão das redes"] },
] as const;

export const brandingPlans = [
  { name: "Básico", short: "A essência visual da sua marca.", items: ["Logotipo", "Fontes", "Paleta de cores", "Arte para bio do Instagram", "2 variações de cores da logo"] },
  { name: "Pro", short: "Identidade pronta para se apresentar.", featured: true, items: ["Logotipo", "Fontes", "Paleta de cores", "Arte para cartão de visitas", "2 modelos de artes para redes sociais", "Arte para bio do Instagram", "2 variações de cores da logo"] },
  { name: "Super", short: "Uma marca presente em cada detalhe.", items: ["Logotipo", "Fontes", "Paleta de cores", "Arte para cartão de visitas", "Apresentação animada", "3 modelos de artes para redes sociais", "Mockups", "Arte para bio do Instagram", "2 variações de cores da logo"] },
] as const;

// Todos os valores de desenvolvimento web ficam nesta estrutura.
export const sitePlans = [
  {
    name: "Landing Page",
    price: "A partir de R$ 699",
    description: "Uma página focada em uma ação: apresentar, captar e converter.",
    label: "Ideal para",
    items: ["Campanhas", "Serviços", "Profissionais", "Lançamentos", "Captação de leads"],
    includes: ["Página responsiva", "Design personalizado", "WhatsApp", "Formulário", "SEO básico", "Animações", "Publicação"],
    button: "Quero uma Landing Page",
    message: "Olá! Quero uma Landing Page e gostaria de solicitar uma proposta.",
  },
  {
    name: "Site Institucional",
    price: "A partir de R$ 1.290",
    description: "Uma apresentação completa e profissional para sua empresa.",
    label: "Inclui",
    items: ["Home", "Sobre", "Serviços", "Contato", "Até 5 páginas", "Design personalizado", "Versão mobile", "WhatsApp", "SEO", "Formulário"],
    includes: [],
    button: "Solicitar orçamento",
    message: "Olá! Gostaria de solicitar um orçamento para um Site Institucional.",
  },
  {
    name: "Site Profissional",
    price: "A partir de R$ 1.890",
    description: "Para projetos que precisam de estrutura mais completa.",
    label: "Pode incluir",
    items: ["Múltiplas páginas", "Blog/notícias", "Painel administrativo", "Integrações", "Formulários", "Banco de dados", "Animações avançadas", "SEO", "Arquitetura personalizada"],
    includes: [],
    button: "Solicitar projeto",
    message: "Olá! Gostaria de conversar sobre um Site Profissional.",
  },
  {
    name: "Sistema Personalizado",
    price: "Sob consulta",
    description: "Tecnologia desenhada para a operação do seu negócio.",
    label: "Exemplos",
    items: ["Painel administrativo", "CRM", "Sistema interno", "Catálogo online", "Cardápio digital", "Área do cliente", "Plataforma personalizada", "Integrações", "Automações"],
    includes: [],
    button: "Falar sobre meu projeto",
    message: "Olá! Gostaria de conversar sobre um sistema personalizado.",
  },
] as const;

export const process = [
  { number: "01", title: "Entendemos", text: "Conhecemos sua empresa, seu público e seus objetivos." },
  { number: "02", title: "Planejamos", text: "Criamos a estratégia e definimos o caminho do projeto." },
  { number: "03", title: "Criamos", text: "Transformamos estratégia em design, conteúdo e tecnologia." },
  { number: "04", title: "Publicamos", text: "Colocamos o projeto no ar." },
  { number: "05", title: "Otimizamos", text: "Analisamos os resultados e buscamos novas oportunidades." },
] as const;

export const faqs = [
  { question: "Vocês atendem empresas de qualquer cidade?", answer: "Sim. Atendemos empresas e profissionais de diferentes cidades com reuniões e acompanhamento online." },
  { question: "Quanto tempo leva para desenvolver um site?", answer: "O prazo depende do escopo e dos materiais do projeto. Definimos o cronograma após entender o que você precisa." },
  { question: "Os valores dos pacotes são mensais?", answer: "Os pacotes de redes sociais são serviços recorrentes. Para identidade visual e desenvolvimento web, enviamos uma proposta de acordo com o projeto." },
  { question: "Vocês também fazem anúncios?", answer: "Sim. Planejamos, criamos e otimizamos campanhas de tráfego pago em plataformas como Meta e Google." },
  { question: "É possível contratar apenas identidade visual?", answer: "Sim. Você pode contratar identidade visual separadamente. Vamos indicar o pacote mais adequado para a sua marca." },
  { question: "Vocês desenvolvem sistemas personalizados?", answer: "Sim. Desenvolvemos soluções de acordo com as necessidades de cada negócio. Escopo, prazo e orçamento são definidos após análise." },
  { question: "Como solicito um orçamento?", answer: "Clique em um dos botões de WhatsApp e conte um pouco sobre seu negócio e o que precisa. Nossa equipe continua a conversa por lá." },
] as const;
