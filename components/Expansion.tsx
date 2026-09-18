"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Instagram,
  Layers3, Megaphone, MousePointer2, Palette, PenTool, X,
} from "lucide-react";
import { agencyStats, portfolioCategories, portfolioItems, type PortfolioCategory, type PortfolioItem } from "@/data/portfolio";
import { instagram, messages, whatsapp } from "@/data/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const imagePath = (path: string) => path.startsWith("/") ? `${basePath}${path}` : path;

function Intro({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return <div className="exp-intro"><span className="exp-eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function ProjectVisual({ item, priority = false }: { item: PortfolioItem; priority?: boolean }) {
  return <div className={`exp-project-visual exp-project-${item.visual || "default"}`}>
    {item.image ? <Image src={imagePath(item.image)} alt={`Trabalho de ${item.category.toLowerCase()} para ${item.title}`} fill sizes="(max-width: 700px) 100vw, 50vw" priority={priority} className="exp-project-image" /> :
      <div className="exp-project-editorial" aria-label={`Apresentação editorial do projeto ${item.title}`}>
        <span>PROJETO / {item.segment.toUpperCase()}</span>
        <strong>{item.title}</strong>
      </div>}
  </div>;
}

function ProjectModal({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const focusable = [...(dialogRef.current?.querySelectorAll<HTMLElement>("button, a[href]") || [])];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);
  return <motion.div className="exp-modal-backdrop" role="presentation" onMouseDown={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div ref={dialogRef} className="exp-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onMouseDown={event => event.stopPropagation()} initial={{ opacity: 0, scale: .97, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: .97, y: 15 }} transition={{ duration: .25 }}>
      <button ref={closeRef} className="exp-modal-close" type="button" aria-label="Fechar projeto" onClick={onClose}><X size={21} /></button>
      <ProjectVisual item={item} />
      <div className="exp-modal-copy"><span>{item.category.toUpperCase()} / {item.segment.toUpperCase()}</span><h3 id="project-dialog-title">{item.title}</h3><p>{item.description}</p><a href={whatsapp(messages.portfolio)} target="_blank" rel="noopener noreferrer">Quero conversar sobre um projeto <ArrowUpRight size={17} /></a></div>
    </motion.div>
  </motion.div>;
}

export function AgencyManifesto() {
  const reduced = useReducedMotion();
  return <section className="exp-manifesto"><div className="container exp-manifesto-layout">
    <div><span className="exp-eyebrow"><i />UMA AGÊNCIA CRIATIVA, DIGITAL E TECNOLÓGICA</span><p>Construímos marcas, experiências e estratégias digitais que fazem empresas serem percebidas.</p></div>
    <div className="exp-manifesto-words" aria-label="Estratégia, design, tecnologia e resultado">
      {["ESTRATÉGIA.", "DESIGN.", "TECNOLOGIA.", "RESULTADO."].map((word, index) => <motion.span key={word} initial={reduced ? false : { opacity: .75, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08, duration: .4 }}>{word}</motion.span>)}
    </div>
    <p className="exp-manifesto-foot">Do primeiro contato com sua marca até a conversão, criamos experiências que conectam negócios e pessoas.</p>
  </div></section>;
}

export function PortfolioExperience() {
  const [active, setActive] = useState<PortfolioCategory>("Todos");
  const [selected, setSelected] = useState<PortfolioItem | null>(null);
  const items = active === "Todos" ? portfolioItems : portfolioItems.filter(item => item.categories.includes(active));
  const reduced = useReducedMotion();
  return <section id="portfolio" className="section exp-portfolio"><div className="container">
    <div className="exp-portfolio-head"><Intro eyebrow="NOSSO TRABALHO" title={<>Ideias que saíram da tela <span>e viraram marcas.</span></>} text="Cada projeto é construído para comunicar uma identidade, gerar percepção de valor e aproximar marcas das pessoas certas." /><a className="exp-inline-link" href={instagram} target="_blank" rel="noopener noreferrer">Ver portfólio no Instagram <ArrowUpRight size={17} /></a></div>
    <div className="exp-featured-label"><span>PROJETOS EM DESTAQUE</span><span>01 — 04</span></div>
    <div className="exp-filter-bar" role="group" aria-label="Filtrar projetos por categoria">
      {portfolioCategories.map(category => <button key={category} type="button" aria-pressed={active === category} aria-controls="portfolio-panel" className={active === category ? "active" : ""} onClick={() => setActive(category)}>{category}</button>)}
    </div>
    <div id="portfolio-panel" aria-live="polite" aria-label={`Projetos: ${active}`}>
      <AnimatePresence mode="wait">
        <motion.div key={active} className="exp-project-grid" initial={reduced ? false : { opacity: .85, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .24 }}>
          {items.length > 0 ? items.map((item, index) => <button className={`exp-project-card exp-project-card-${index + 1}`} type="button" key={item.title} onClick={() => setSelected(item)} aria-label={`Ver projeto ${item.title}`}>
            <ProjectVisual item={item} priority={index === 0} />
            <span className="exp-project-overlay"><span><small>{item.category.toUpperCase()} / {item.segment.toUpperCase()}</small>{item.image && <strong>{item.title}</strong>}</span><span className="exp-project-open">Ver projeto <ArrowUpRight size={16} /></span></span>
          </button>) : <div className="exp-portfolio-empty"><span>{active.toUpperCase()}</span><h3>Explore essa frente de trabalho.</h3><p>Para ver publicações dessa categoria, acompanhe o portfólio atualizado no Instagram da agência.</p><a href={instagram} target="_blank" rel="noopener noreferrer">Abrir Instagram <ArrowUpRight size={16} /></a></div>}
        </motion.div>
      </AnimatePresence>
    </div>
    <div className="exp-portfolio-mosaic"><div><span>UMA IDEIA.</span><strong>DEZENAS DE POSSIBILIDADES.</strong></div><p>Identidade, conteúdo, campanhas e experiências digitais fazem parte de uma mesma construção de marca.</p></div>
    <div className="exp-portfolio-cta"><div><span>GOSTOU DO QUE VIU?</span><h3>Agora imagine sua marca aqui.</h3><p>Conte para a gente onde sua empresa está e onde você quer chegar.</p></div><a href={whatsapp(messages.portfolio)} target="_blank" rel="noopener noreferrer" className="button button-primary">QUERO COMEÇAR MEU PROJETO <ArrowUpRight size={18} /></a></div>
  </div>
  <AnimatePresence>{selected && <ProjectModal item={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
  </section>;
}

export function Segments() {
  const segments = ["ADVOCACIA", "SAÚDE", "ESTÉTICA", "BARBEARIA", "ALIMENTAÇÃO", "PROFISSIONAIS", "SERVIÇOS", "TECNOLOGIA", "COMÉRCIO", "EVENTOS", "NEGÓCIOS LOCAIS"];
  return <section className="exp-segments"><div className="container"><Intro eyebrow="VERSATILIDADE COM DIREÇÃO" title={<>Não importa o segmento.<br /><span>Importa como sua marca é percebida.</span></>} /><div className="exp-segment-grid">{segments.map((segment, i) => <span key={segment} className={i % 4 === 0 ? "accent" : ""}>{segment}<span>✦</span></span>)}</div></div></section>;
}

export function SocialStrategy() {
  const capabilities = ["Planejamento visual", "Direção criativa", "Criação de campanhas", "Design de posts", "Stories", "Copywriting", "Calendário editorial", "Identidade das redes", "Gestão das redes"];
  return <section className="section exp-social"><div className="container exp-social-layout"><div><Intro eyebrow="SOCIAL MEDIA ESTRATÉGICO" title={<>Transformamos redes sociais em uma <span>extensão estratégica da sua marca.</span></>} text="A A Sua Publicidade desenvolve a estrutura visual e estratégica de comunicação das redes sociais, mantendo consistência de marca e conteúdo alinhado ao posicionamento do negócio." /><div className="exp-capability-list">{capabilities.map(item => <span key={item}><Check size={15} />{item}</span>)}</div><a className="exp-inline-link" href="#redes-sociais">Conhecer pacotes <ArrowDown size={17} /></a></div><div className="exp-social-stage" aria-label="Composição conceitual de planejamento, direção criativa e conteúdo"><div className="exp-social-sheet sheet-back"><span>01 / PLANEJAMENTO</span><strong>Uma voz para a sua marca.</strong><div className="exp-sheet-lines"><i /><i /><i /></div></div><div className="exp-social-sheet sheet-front"><div className="exp-sheet-top"><span>ESTRATÉGIA DE CONTEÚDO</span><Megaphone size={17} /></div><strong>Presença com<br /><em>propósito.</em></strong><div className="exp-sheet-chips"><span>DIREÇÃO</span><span>CRIAÇÃO</span><span>CONSISTÊNCIA</span></div></div></div></div></section>;
}

export function BrandingStory() {
  const steps = [
    ["01", "ESTRATÉGIA", "Entendimento do negócio, público e posicionamento."],
    ["02", "CONCEITO", "Definição da direção criativa."],
    ["03", "IDENTIDADE", "Logo, cores, tipografia e elementos gráficos."],
    ["04", "APLICAÇÃO", "Construção da identidade nos principais pontos de contato da marca."],
  ];
  return <section className="section exp-branding"><div className="container"><div className="exp-branding-head"><Intro eyebrow="BRANDING & IDENTIDADE VISUAL" title={<>Uma marca não é <span>apenas uma logo.</span></>} text="É a forma como uma empresa é reconhecida, lembrada e percebida." /><Palette size={42} strokeWidth={1.1} /></div><div className="exp-branding-steps">{steps.map(([number, title, copy]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div><a className="exp-inline-link" href="#identidade-visual">Explorar pacotes de identidade visual <ArrowRight size={17} /></a></div></section>;
}

export function WebPillar() {
  const offerings = ["Landing Pages", "Sites Institucionais", "Sites Profissionais", "Blogs", "Portfólios", "Catálogos", "Cardápios Digitais", "Sistemas Personalizados", "Painéis Administrativos"];
  return <section className="section exp-web-pillar"><div className="container exp-web-layout"><div><Intro eyebrow="DESENVOLVIMENTO DIGITAL" title={<>Não criamos apenas sites.<br /><span>Criamos experiências digitais.</span></>} text="Desenvolvemos páginas rápidas, modernas e estratégicas para empresas que querem transformar sua presença digital em oportunidades." /><div className="exp-web-offerings">{offerings.map(item => <span key={item}><ArrowUpRight size={13} />{item}</span>)}</div><a className="exp-inline-link" href="#sites">Ver soluções e valores <ArrowRight size={17} /></a></div><div className="exp-web-stage" aria-label="Composição conceitual de telas para desktop e celular"><div className="exp-web-browser"><div className="exp-browser-bar"><i /><i /><i /><span>experiência digital</span></div><div className="exp-browser-content"><small>DESIGN + TECNOLOGIA</small><strong>Seu negócio<br />em movimento.</strong><span className="exp-browser-button">CONHECER MAIS <ArrowUpRight size={13} /></span></div></div><div className="exp-web-phone"><div className="exp-phone-notch" /><small>ASP / DIGITAL</small><strong>Uma presença que acompanha seu cliente.</strong><div><i /><i /><i /></div></div></div></div></section>;
}

export function ConnectedJourney() {
  const steps = [["01", "IDENTIDADE", Palette], ["02", "POSICIONAMENTO", Layers3], ["03", "CONTEÚDO", PenTool], ["04", "TRÁFEGO", Megaphone], ["05", "SITE", Code2], ["06", "CONVERSÃO", MousePointer2]] as const;
  return <section className="section exp-journey"><div className="container"><Intro eyebrow="DO DESIGN AO DIGITAL" title={<>Uma estratégia conectada <span>do início ao fim.</span></>} /><div className="exp-journey-grid">{steps.map(([number, label, Icon], index) => <div key={number} className="exp-journey-step"><span>{number}</span><Icon size={24} strokeWidth={1.4} /><strong>{label}</strong>{index < steps.length - 1 && <ArrowRight size={17} className="exp-journey-arrow" />}</div>)}</div></div></section>;
}

export function Differentials() {
  const values = [
    ["01", "Estratégia personalizada", "Cada negócio possui necessidades diferentes. O projeto é pensado a partir da realidade da empresa."],
    ["02", "Design com propósito", "Estética e comunicação trabalhando juntas para fortalecer a percepção da marca."],
    ["03", "Soluções completas", "Do branding ao site, diferentes etapas da presença digital podem ser desenvolvidas dentro da mesma estratégia."],
    ["04", "Proximidade", "Comunicação direta durante a construção dos projetos."],
  ];
  return <section className="section exp-differentials"><div className="container"><Intro eyebrow="POR QUE A SUA PUBLICIDADE?" title={<>Criatividade com método.<br /><span>Parceria com direção.</span></>} /><div className="exp-differential-grid">{values.map(([number, title, copy]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>;
}

export function PortfolioProof() {
  return <section id="resultados" className="section exp-proof"><div className="container"><div className="exp-proof-top"><Intro eyebrow="PROJETOS / PERCEPÇÃO DE MARCA" title={<>Quem não é visto, <span>não é lembrado.</span></>} text="Marcas de diferentes contextos já fizeram parte do portfólio da A Sua Publicidade." /><a href="#portfolio" className="exp-inline-link">Rever projetos <ArrowUpRight size={17} /></a></div><div className="exp-proof-names">{portfolioItems.map(item => <span key={item.title}>{item.title}</span>)}</div>{agencyStats.length > 0 && <div className="exp-stats">{agencyStats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>}</div></section>;
}

export function InstagramShowcase() {
  const withImages = portfolioItems.filter(item => item.image);
  return <section className="section exp-instagram"><div className="container exp-instagram-layout"><div><Intro eyebrow="O QUE ESTAMOS CRIANDO" title={<>O trabalho continua <span>fora desta página.</span></>} text="Acompanhe projetos, identidades, campanhas e conteúdos desenvolvidos pela A Sua Publicidade." /><a href={instagram} target="_blank" rel="noopener noreferrer" className="button button-outline">VER MAIS NO INSTAGRAM <ArrowUpRight size={18} /></a><span className="exp-instagram-handle"><Instagram size={17} /> @asuapublicidade</span></div>{withImages.length > 0 ? <div className="exp-instagram-feed">{withImages.slice(0, 4).map(item => <div key={item.title}><Image src={imagePath(item.image)} alt={`Projeto ${item.title}`} fill sizes="(max-width: 700px) 50vw, 220px" /></div>)}</div> : <div className="exp-instagram-panel"><Instagram size={34} strokeWidth={1.4} /><span>PORTFÓLIO EM MOVIMENTO</span><strong>@asuapublicidade</strong><small>Projetos, campanhas e conteúdo em um só lugar.</small></div>}</div></section>;
}
