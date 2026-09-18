"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown,
  CircleCheck, Code2, Instagram, Menu, MessageCircle,
  Palette, Play, Plus, Sparkles, Target, X,
} from "lucide-react";
import {
  brandingPlans, faqs, instagram, messages, process as agencyProcess, services, sitePlans,
  socialPlans, whatsapp,
} from "@/data/content";
import {
  AgencyManifesto, BrandingStory, ConnectedJourney, Differentials,
  InstagramShowcase, PortfolioExperience, PortfolioProof, Segments,
  SocialStrategy, WebPillar,
} from "@/components/Expansion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sites", href: "#sites" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const iconMap = {
  social: Instagram,
  ads: Target,
  brand: Palette,
  web: Code2,
  launch: Play,
};

function WaLink({ message, children, className = "", ariaLabel }: {
  message: string; children: React.ReactNode; className?: string; ariaLabel?: string;
}) {
  return <a className={className} href={whatsapp(message)} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>{children}</a>;
}

function Reveal({ children, className = "", delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0.94, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.56, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return <div className="eyebrow"><span className="eyebrow-line" />{number && <span className="eyebrow-number">{number}</span>}{children}</div>;
}

function SectionHead({ eyebrow, title, description, number, centered = false }: {
  eyebrow: string; title: React.ReactNode; description?: string; number?: string; centered?: boolean;
}) {
  return (
    <Reveal className={`section-head ${centered ? "centered" : ""}`}>
      <Eyebrow number={number}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="nav-shell container">
        <a className="logo-wrap" href="#inicio" aria-label="A Sua Publicidade, voltar ao início" onClick={() => setOpen(false)}>
          <Image src={`${basePath}/images/logo-horizontal.png`} width={1214} height={228} alt="A Sua Publicidade" priority />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <WaLink message={messages.project} className="nav-cta">COMEÇAR PROJETO <ArrowUpRight size={16} /></WaLink>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Navegação mobile">
          {navigation.map((item, i) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item.label}<ArrowUpRight size={19} /></a>)}
          <WaLink message={messages.project} className="button button-primary" ariaLabel="Começar projeto pelo WhatsApp">COMEÇAR PROJETO <ArrowUpRight size={18} /></WaLink>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Composição visual de estratégia, design e tecnologia">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="dashboard-card">
        <div className="dashboard-top"><span className="window-dots"><i /><i /><i /></span><span>VISÃO CRIATIVA</span><span className="dashboard-signal"><i /> Em movimento</span></div>
        <div className="dashboard-body">
          <div className="dashboard-sidebar"><span className="side-logo">ASP<span>.</span></span><i /><i /><i /><i /></div>
          <div className="dashboard-main">
            <div className="dash-kicker">ESTRATÉGIA DIGITAL</div>
            <div className="dash-title">Ideias que<br /><em>movem marcas.</em></div>
            <div className="dash-graph" aria-hidden="true">
              <div className="graph-grid" />
              <svg viewBox="0 0 470 146" preserveAspectRatio="none"><defs><linearGradient id="linefill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#08aeef" stopOpacity=".35" /><stop offset="1" stopColor="#08aeef" stopOpacity="0" /></linearGradient></defs><path d="M0 129 C42 128 54 100 92 111 S157 92 190 98 S260 78 295 84 S342 42 385 55 S438 10 470 20 L470 146 L0 146Z" fill="url(#linefill)" /><path d="M0 129 C42 128 54 100 92 111 S157 92 190 98 S260 78 295 84 S342 42 385 55 S438 10 470 20" fill="none" stroke="#38c5ff" strokeWidth="3" /></svg>
            </div>
            <div className="dash-pills"><span>POSICIONAMENTO</span><span>CONEXÃO</span><span>CRESCIMENTO</span></div>
          </div>
        </div>
      </div>
      <div className="floating-card floating-card-top"><span className="floating-icon"><Target size={19} /></span><span><small>CAMPANHAS</small><strong>Direção certa</strong></span><ArrowUpRight size={16} /></div>
      <div className="floating-card floating-card-bottom"><span className="floating-icon cyan"><Sparkles size={20} /></span><span><small>IDENTIDADE</small><strong>Marca memorável</strong></span><CircleCheck size={17} className="icon-check" /></div>
      <div className="hero-chip"><span className="pulse-dot" /> DESIGN + DADOS + RESULTADO</div>
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-grid">
      <div className="hero-glow" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <Reveal><Eyebrow>MARKETING <span className="dot-separator">•</span> DESIGN <span className="dot-separator">•</span> TECNOLOGIA</Eyebrow></Reveal>
          <Reveal delay={0.08}><h1>Da identidade da sua marca à <span className="gradient-text">presença digital completa.</span></h1></Reveal>
          <Reveal delay={0.16}><p>Somos uma agência criativa, digital e tecnológica. Unimos branding, conteúdo, campanhas e desenvolvimento web para construir marcas com presença e comunicação consistente.</p></Reveal>
          <Reveal className="hero-actions" delay={0.24}>
            <WaLink message={messages.project} className="button button-primary">COMEÇAR MEU PROJETO <ArrowUpRight size={18} /></WaLink>
            <a className="button button-ghost" href="#servicos">Conhecer nossos serviços <ArrowDown size={17} /></a>
          </Reveal>
          <Reveal className="hero-proof" delay={0.3}><span className="hero-proof-line" /><span>Estratégia, design, marketing e tecnologia em uma direção.</span></Reveal>
        </div>
        <Reveal className="hero-art" delay={0.16}><HeroVisual /></Reveal>
      </div>
      <div className="hero-bottom container"><span>CRIATIVIDADE QUE SE MOVE COM O SEU NEGÓCIO</span><a href="#portfolio" aria-label="Explorar projetos"><span>EXPLORE</span><ArrowDown size={16} /></a></div>
    </section>
  );
}

function Portfolio() { return <PortfolioExperience />; }

function Services() {
  return (
    <section id="servicos" className="section services-section section-grid">
      <div className="container">
        <SectionHead eyebrow="O QUE FAZEMOS" number="02 /" title={<>Tudo o que sua marca precisa para <span className="gradient-text">crescer no digital.</span></>} description="Estratégia, criatividade, tecnologia e performance trabalhando juntas." />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return <Reveal key={service.title} className={`service-card service-card-${index + 1}`} delay={Math.min(index * 0.055, 0.22)}>
              <div className="service-top"><span className="service-icon"><Icon size={23} strokeWidth={1.7} /></span><span>{service.index} / 05</span></div>
              <div><p className="service-label">{service.title}</p><h3>{service.headline}</h3><p className="service-description">{service.description}</p></div>
              <div className="service-items">{service.items.map(item => <span key={item}>{item}</span>)}</div>
              <WaLink message={`Olá! Vim pelo site e gostaria de saber mais sobre ${service.title.toLowerCase()}.`} className="service-link">Vamos conversar <ArrowUpRight size={17} /></WaLink>
            </Reveal>;
          })}
          <Reveal className="service-card service-cta">
            <div className="service-cta-orb" /><span className="service-cta-label">PRECISA DE ALGO MAIS ESPECÍFICO?</span><h3>Construímos a solução com você.</h3><p>Conte sua ideia. Nós ajudamos a encontrar o melhor caminho.</p>
            <WaLink message={messages.project} className="button button-light">Falar sobre meu projeto <ArrowUpRight size={18} /></WaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ name, short, items, featured, message, button }: {
  name: string; short: string; items: readonly string[]; featured?: boolean; message: string; button: string;
}) {
  return <Reveal className={`plan-card ${featured ? "featured" : ""}`}>
    {featured && <span className="recommended">RECOMENDADO</span>}
    <div className="plan-top"><span>PACOTE</span><h3>{name}</h3><p>{short}</p></div>
    <div className="plan-middle"><span className="plan-caption">O QUE ESTÁ INCLUÍDO</span><ul>{items.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul></div>
    <div className="plan-bottom"><span>Solicite uma proposta</span><WaLink message={message} className={`button ${featured ? "button-primary" : "button-outline"}`}>{button} <ArrowUpRight size={17} /></WaLink></div>
  </Reveal>;
}

function PlansSection({ id, number, eyebrow, title, description, plans, message, button, className = "" }: {
  id: string; number: string; eyebrow: string; title: React.ReactNode; description: string;
  plans: readonly { name: string; short: string; items: readonly string[]; featured?: boolean }[];
  message: string; button: string; className?: string;
}) {
  return <section id={id} className={`section plans-section ${className}`}><div className="container">
    <SectionHead number={number} eyebrow={eyebrow} title={title} description={description} />
    <div className="plan-grid">{plans.map(plan => <PlanCard key={plan.name} {...plan} message={message} button={button} />)}</div>
    <Reveal className="plans-after"><span>Tem dúvidas sobre qual pacote combina com você?</span><WaLink message={message} className="text-link">Vamos encontrar juntos <ArrowRight size={16} /></WaLink></Reveal>
  </div></section>;
}

function Philosophy() {
  return <section className="philosophy-section"><div className="container"><Reveal className="philosophy-inner">
    <Eyebrow>NOSSA FORMA DE PENSAR</Eyebrow>
    <h2>Design bonito chama atenção.<br /><span>Experiência bem construída gera resultado.</span></h2>
    <div className="philosophy-terms"><span>ESTRATÉGIA</span><Plus size={19} /><span>DESIGN</span><Plus size={19} /><span>TECNOLOGIA</span><Plus size={19} /><span>PERFORMANCE</span></div>
  </Reveal></div></section>;
}

function WebPlans() {
  return <section id="sites" className="section web-section section-grid"><div className="container">
    <div className="web-intro"><SectionHead number="05 /" eyebrow="SITES & SISTEMAS" title={<>Seu negócio aberto <span className="gradient-text">24 horas por dia.</span></>} description="Criamos experiências digitais rápidas, modernas e pensadas para transformar visitantes em clientes." /><Reveal className="web-intro-icon"><Code2 size={36} strokeWidth={1.3} /></Reveal></div>
    <div className="web-grid">{sitePlans.map((plan, index) => <Reveal className="web-card" key={plan.name} delay={index * 0.05}>
      <div className="web-card-head"><span>0{index + 1} / DESENVOLVIMENTO WEB</span><ArrowUpRight size={19} /></div>
      <div className="web-card-main"><h3>{plan.name}</h3><p>{plan.description}</p><strong>{plan.price}</strong></div>
      <div className="web-card-details"><span>{plan.label}</span><ul>{plan.items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>{plan.includes.length > 0 && <><span>INCLUI</span><ul>{plan.includes.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul></>}</div>
      <WaLink message={plan.message} className="button button-outline">{plan.button} <ArrowUpRight size={17} /></WaLink>
    </Reveal>)}</div>
    <Reveal className="web-disclaimer"><CircleCheck size={18} /><span>O valor final depende do escopo definido para cada projeto.</span></Reveal>
  </div></section>;
}

function Process() {
  return <section id="processo" className="section process-section"><div className="container">
    <SectionHead number="06 /" eyebrow="COMO TRABALHAMOS" title={<>Um processo claro. <span className="muted-title">Do primeiro contato ao próximo passo.</span></>} />
    <div className="process-list">{agencyProcess.map(step => <Reveal key={step.number} className="process-step"><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.text}</p><span className="process-dot" /></Reveal>)}</div>
  </div></section>;
}

function About() {
  return <section id="sobre" className="section about-section section-grid"><div className="container about-layout">
    <Reveal className="about-visual"><div className="about-art"><div className="about-art-ring" /><div className="about-art-core">ASP<span>.</span></div><span className="about-word about-word-one">ESTRATÉGIA</span><span className="about-word about-word-two">DESIGN</span><span className="about-word about-word-three">TRÁFEGO</span><span className="about-word about-word-four">TECNOLOGIA</span></div><div className="about-art-caption"><span>VISÃO INTEGRADA</span><span>CRIATIVIDADE + DIREÇÃO</span></div></Reveal>
    <div className="about-content"><SectionHead number="07 /" eyebrow="SOBRE A AGÊNCIA" title={<>Muito prazer,<br /><span className="gradient-text">somos a A Sua Publicidade.</span></>} /><Reveal><p>Somos uma agência criativa que conecta estratégia, design, marketing e tecnologia para construir marcas com presença.</p><p>Desenvolvemos identidades visuais, conteúdos, campanhas, sites e experiências digitais pensadas para ajudar empresas a se posicionarem de forma profissional.</p><p>Acreditamos que uma boa comunicação precisa representar o negócio, conectar-se com o público e criar oportunidades.</p><WaLink message={messages.general} className="text-link">Conheça nossa forma de trabalhar <ArrowUpRight size={18} /></WaLink></Reveal></div>
  </div></section>;
}

function Results() { return <PortfolioProof />; }

function InstagramSection() { return <InstagramShowcase />; }

function FinalCTA() {
  return <section id="contato" className="section final-cta-section"><div className="container"><Reveal className="final-cta">
    <div className="final-cta-glow" /><Eyebrow>SEU PRÓXIMO PASSO COMEÇA AQUI.</Eyebrow>
    <h2>Sua empresa pode ser a próxima marca que <span className="gradient-text">todo mundo vai lembrar.</span></h2>
    <p>Conte para nós o que você precisa e vamos criar uma estratégia sob medida para o seu negócio.</p>
    <WaLink message={messages.project} className="button button-primary button-large">COMEÇAR MEU PROJETO <ArrowUpRight size={20} /></WaLink>
    <span className="final-cta-bottom">A SUA PUBLICIDADE <span>✦</span> ESTRATÉGIA QUE DEIXA MARCA</span>
  </Reveal></div></section>;
}

function FAQ() {
  return <section id="faq" className="section faq-section"><div className="container faq-layout">
    <div><SectionHead number="09 /" eyebrow="DÚVIDAS FREQUENTES" title={<>Alguma dúvida?<br /><span className="muted-title">A gente responde.</span></>} /><Reveal><p className="faq-intro">Se quiser conversar sobre o seu projeto, estamos a uma mensagem de distância.</p><WaLink message={messages.general} className="text-link">Falar no WhatsApp <ArrowUpRight size={18} /></WaLink></Reveal></div>
    <div className="faq-list">{faqs.map((faq, index) => <Reveal key={faq.question}><details className="faq-item"><summary><span className="faq-number">0{index + 1}</span><span>{faq.question}</span><ChevronDown size={19} /></summary><p>{faq.answer}</p></details></Reveal>)}</div>
  </div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-top"><div className="footer-brand"><a className="logo-wrap footer-logo" href="#inicio" aria-label="A Sua Publicidade, voltar ao início"><Image src={`${basePath}/images/logo-horizontal.png`} width={1214} height={228} alt="A Sua Publicidade" loading="lazy" /></a><p>Marketing, design e tecnologia para marcas que querem crescer.</p></div>
      <div className="footer-links"><span>NAVEGUE</span><nav aria-label="Navegação do rodapé"><a href="#inicio">Início</a><a href="#servicos">Serviços</a><a href="#portfolio">Portfólio</a><a href="#sites">Sites</a><a href="#sobre">Sobre</a><a href="#contato">Contato</a></nav></div>
      <div className="footer-links"><span>CONTATO</span><WaLink message={messages.general}>+55 61 99892-6801</WaLink><a href={instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} /></a><span className="footer-location">Cidade Ocidental — GO</span></div>
    </div>
    <div className="footer-bottom"><span>© 2026 A Sua Publicidade. Todos os direitos reservados.</span><span>A Sua Publicidade Ltda. · CNPJ: 57.308.953/0001-39</span><a href="#inicio">Voltar ao topo ↑</a></div>
  </div></footer>;
}

function FloatingWhatsApp() {
  return <WaLink message={messages.general} className="whatsapp-float" ariaLabel="Fale com a gente pelo WhatsApp"><span className="whatsapp-tooltip">Fale com a gente</span><MessageCircle size={25} fill="currentColor" strokeWidth={1.4} /></WaLink>;
}

export default function Site() {
  return <><Header /><main><Hero /><AgencyManifesto /><Portfolio /><Segments /><Services /><SocialStrategy /><PlansSection id="redes-sociais" number="03 /" eyebrow="GESTÃO DE REDES SOCIAIS" title={<>Sua marca presente. <span className="muted-title">Sua mensagem no momento certo.</span></>} description="Escolha a frequência ideal para construir presença e relacionamento com seu público." plans={socialPlans} message={messages.social} button="Consultar no WhatsApp" /><BrandingStory /><PlansSection id="identidade-visual" number="04 /" eyebrow="IDENTIDADE VISUAL" title={<>Uma marca com <span className="gradient-text">personalidade própria.</span></>} description="Soluções visuais para sua empresa se apresentar com clareza, consistência e presença." plans={brandingPlans} message={messages.branding} button="Consultar valores" className="branding-section" /><Philosophy /><WebPillar /><WebPlans /><ConnectedJourney /><Process /><About /><Differentials /><Results /><InstagramSection /><FinalCTA /><FAQ /></main><Footer /><FloatingWhatsApp /></>;
}
