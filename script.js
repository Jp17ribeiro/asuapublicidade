const services = [
  ["📱", "Gestão de Redes Sociais", "Conteúdo estratégico, calendário editorial e presença constante para sua marca ser lembrada."],
  ["🎯", "Gestão de Tráfego Pago", "Campanhas inteligentes para atrair clientes certos e melhorar o retorno sobre investimento."],
  ["🎨", "Criação de Identidade Visual", "Marcas memoráveis, consistentes e preparadas para vender em todos os canais."],
  ["💻", "Criação de Sites", "Sites rápidos, responsivos e otimizados para transformar visitantes em oportunidades."],
  ["🚀", "Landing Pages", "Páginas persuasivas para campanhas, lançamentos, eventos e captação de leads."],
  ["📈", "Coprodução de Lançamentos", "Estratégia, criativos, funil, tráfego e acompanhamento para lançamentos digitais."],
  ["🧭", "Consultoria em Marketing", "Diagnóstico e direcionamento prático para empresas que precisam crescer com clareza."],
  ["✨", "Branding", "Posicionamento, narrativa e personalidade para sua marca ocupar um lugar único."],
  ["🤖", "Automação para WhatsApp", "Fluxos de atendimento, qualificação e follow-up para acelerar conversas comerciais."]
];

const projects = [
  ["Rebranding Premium", "Identidade Visual", "+73% de lembrança de marca"],
  ["Landing Page de Alta Conversão", "Sites", "+218% em leads qualificados"],
  ["Escala em Tráfego Pago", "Tráfego Pago", "3.8x de ROAS médio"],
  ["Social Media Estratégico", "Social Media", "+420% de alcance"],
  ["Site Institucional B2B", "Sites", "+64% de tempo na página"],
  ["Campanha de Lançamento", "Tráfego Pago", "+510% em leads"]
];

const testimonials = [
  ["MC", "Mariana Costa", "Clínica Vitta", "A equipe organizou nosso posicionamento e transformou as redes em um canal real de vendas."],
  ["RN", "Rafael Nunes", "Nunes Engenharia", "O site ficou impecável e as campanhas trouxeram pedidos de orçamento na primeira semana."],
  ["BR", "Bianca Rocha", "Studio Rocha", "Finalmente temos uma marca consistente, conteúdos bonitos e uma estratégia que faz sentido."]
];

const faqs = [
  ["Quanto custa?", "O investimento depende do escopo, canais e objetivos. Após o diagnóstico, montamos uma proposta personalizada."],
  ["Quanto tempo demora?", "Projetos de identidade, sites e campanhas variam conforme a complexidade. Sempre trabalhamos com cronograma claro."],
  ["Vocês trabalham com pequenas empresas?", "Sim. Criamos planos sob medida para empresas locais, marcas em crescimento e negócios mais estruturados."],
  ["Como funciona o tráfego pago?", "Planejamos campanhas, criativos, público, verba e otimizações contínuas para melhorar custo por resultado."],
  ["Posso contratar apenas um serviço?", "Pode. Também conectamos serviços quando isso aumenta a performance da estratégia."]
];

const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const menuButton = document.querySelector("#menuButton");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector("#serviceGrid").innerHTML = services
  .map(
    ([icon, title, text]) => `
      <article class="service-card reveal">
        <span class="service-icon">${icon}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `
  )
  .join("");

const portfolioGrid = document.querySelector("#portfolioGrid");
const modal = document.querySelector("#projectModal");
const modalTitle = document.querySelector("#modalTitle");
const modalCategory = document.querySelector("#modalCategory");
const modalText = document.querySelector("#modalText");

function renderProjects(filter = "Todos") {
  portfolioGrid.innerHTML = projects
    .filter((project) => filter === "Todos" || project[1] === filter)
    .map(
      ([title, category, metric]) => `
        <article class="project-card reveal" data-title="${title}" data-category="${category}" data-metric="${metric}">
          <small>${category}</small>
          <h3>${title}</h3>
          <p>${metric}</p>
        </article>
      `
    )
    .join("");

  portfolioGrid.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.dataset.title;
      modalCategory.textContent = card.dataset.category;
      modalText.textContent = `${card.dataset.metric}. Projeto demonstrativo para apresentar direção criativa, estratégia, campanhas e resultados.`;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  observeReveals();
}

renderProjects();

document.querySelectorAll(".filters button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

document.querySelector("#closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

const testimonialBox = document.querySelector("#testimonial");
let testimonialIndex = 0;

function renderTestimonial() {
  const [initials, name, company, text] = testimonials[testimonialIndex];
  testimonialBox.innerHTML = `
    <div class="testimonial-avatar">${initials}</div>
    <div class="stars">★★★★★</div>
    <p>"${text}"</p>
    <h3>${name}</h3>
    <span>${company}</span>
  `;
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
}

renderTestimonial();
setInterval(renderTestimonial, 4200);

document.querySelector("#faqList").innerHTML = faqs
  .map(
    ([question, answer], index) => `
      <div class="faq-item ${index === 0 ? "open" : ""}">
        <button class="faq-question" type="button">
          ${question}
          <span>+</span>
        </button>
        <p class="faq-answer">${answer}</p>
      </div>
    `
  )
  .join("");

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("open");
  });
});

function observeReveals() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
    revealObserver.observe(element);
  });
}

observeReveals();

const numberObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const number = entry.target;
      const finalValue = Number(number.dataset.count);
      const suffix = finalValue === 300 || finalValue === 95 ? "%" : finalValue === 5 ? " anos" : "";
      const prefix = "+";
      let current = 0;
      const step = Math.max(1, Math.ceil(finalValue / 80));
      const timer = setInterval(() => {
        current += step;
        if (current >= finalValue) {
          current = finalValue;
          clearInterval(timer);
        }
        number.textContent = `${prefix}${current}${suffix}`;
      }, 18);
      numberObserver.unobserve(number);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll("[data-count]").forEach((number) => numberObserver.observe(number));

const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate");
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".bar").forEach((bar) => barObserver.observe(bar));

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const text = `Olá, sou ${form.get("nome")} da empresa ${form.get("empresa") || "não informada"}. Telefone: ${form.get("telefone")}. Email: ${form.get("email")}. Mensagem: ${form.get("mensagem")}`;
  document.querySelector("#formMessage").textContent = "Mensagem preparada. Abrindo WhatsApp...";
  window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(text)}`, "_blank");
});

const canvas = document.querySelector("#particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = Array.from({ length: Math.min(70, Math.floor(window.innerWidth / 18)) }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.5,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.58)";
  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}

resizeCanvas();
drawParticles();
window.addEventListener("resize", resizeCanvas);
