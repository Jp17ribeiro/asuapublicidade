export const portfolioCategories = [
  "Todos",
  "Identidade visual",
  "Social media",
  "Sites",
  "Campanhas",
  "Design",
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export type PortfolioItem = {
  title: string;
  category: Exclude<PortfolioCategory, "Todos">;
  categories: readonly Exclude<PortfolioCategory, "Todos">[];
  image: string;
  description: string;
  segment: string;
  visual?: "fernando" | "darth" | "rogerio" | "markos";
};

// Adicione caminhos de imagens reais em /public/images/portfolio quando os arquivos originais estiverem disponíveis.
// Não atribua uma categoria ou um resultado que não tenha sido confirmado no material da agência.
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Fernando Borges Advocacia",
    category: "Identidade visual",
    categories: ["Identidade visual", "Design"],
    image: "",
    description: "Identidade visual desenvolvida para comunicar autoridade, confiança e posicionamento profissional.",
    segment: "Advocacia",
    visual: "fernando",
  },
  {
    title: "Darth Driver",
    category: "Identidade visual",
    categories: ["Identidade visual", "Design"],
    image: "",
    description: "Projeto de identidade visual apresentado no portfólio da A Sua Publicidade.",
    segment: "Serviços",
    visual: "darth",
  },
  {
    title: "Rogério Rodrigues Personal Trainer",
    category: "Identidade visual",
    categories: ["Identidade visual", "Design"],
    image: "",
    description: "Projeto de identidade visual apresentado no portfólio da A Sua Publicidade.",
    segment: "Profissionais",
    visual: "rogerio",
  },
  {
    title: "Studio Markos Barber",
    category: "Identidade visual",
    categories: ["Identidade visual", "Design"],
    image: "",
    description: "Projeto de identidade visual apresentado no portfólio da A Sua Publicidade.",
    segment: "Barbearia",
    visual: "markos",
  },
];

export type AgencyStat = { label: string; value: string };
// Preencha somente com números verificados: projetos desenvolvidos, marcas atendidas,
// segmentos atendidos e anos de atuação.
export const agencyStats: AgencyStat[] = [];
