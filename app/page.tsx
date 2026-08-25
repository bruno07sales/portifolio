"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  { id: "01", category: "backend", title: "API de gerenciamento de usuários", tech: "JavaScript · Node.js · Express · PostgreSQL · Redis · 2026", href: "https://bruno07sales.github.io/users_api/", tone: "bg-accent", art: "api" },
  { id: "02", category: "dados", title: "Otimização de rotas com grafos", tech: "JavaScript (ES6+) · Leaflet.js · OpenStreetMap · A* · Dijkstra · Haversine · 2026", href: "https://bruno07sales.github.io/rotas_grafos/", tone: "bg-yellow", art: "routes" },
  { id: "03", category: "mobile", title: "Inclusa — aplicativo de acessibilidade", tech: "Mobile · Arquitetura · Desafio Liga Jovem Sebrae · 2024", href: "https://sway.cloud.microsoft/nBmxQh5G47ZWrUuR", tone: "bg-[#30342f] text-paper", art: "inclusa" },
] as const;

const filters = [{ key: "all", label: "Todos", count: "03" }, { key: "backend", label: "Back-end", count: "01" }, { key: "dados", label: "Dados", count: "01" }, { key: "mobile", label: "Mobile", count: "01" }] as const;
const heading = "display font-medium leading-[.95] tracking-[-3px]";
const eyebrow = "mb-6 text-[10px] font-bold uppercase tracking-[1.5px] text-muted";
const arrow = "grid size-8 shrink-0 place-items-center rounded-full border border-line text-sm transition hover:border-accent hover:bg-accent";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const savedDark = localStorage.getItem("portfolio-theme") === "dark";
    const syncTheme = window.requestAnimationFrame(() => setDark(savedDark));
    document.body.classList.toggle("dark-theme", savedDark);

    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)), { rootMargin: "-35% 0px -60%" });
    document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
    return () => { window.cancelAnimationFrame(syncTheme); revealObserver.disconnect(); sectionObserver.disconnect(); };
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle("dark-theme", next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  }

  return <>
    <header className="mx-auto flex h-[92px] w-[min(1280px,calc(100%_-_80px))] items-center justify-between border-b border-line max-[760px]:h-[72px] max-[760px]:w-[min(calc(100%_-_40px),560px)]">
      <a className="display text-2xl font-bold tracking-[-1px]" href="#inicio" aria-label="Bruno A. Sales, início">BS<span className="text-accent">.</span></a>
      <nav className="flex gap-[34px] text-[13px] text-muted max-[760px]:hidden" aria-label="Navegação principal">
        {["inicio", "projetos", "sobre", "contato"].map((item) => <a key={item} className={`capitalize transition hover:text-ink ${activeSection === item ? "text-ink" : ""}`} href={`#${item}`}>{item === "inicio" ? "Início" : item}</a>)}
      </nav>
      <div className="flex items-center gap-6 max-[760px]:gap-[13px]">
        <button className="grid size-[34px] place-items-center rounded-full border border-line bg-transparent text-[17px] text-ink" onClick={toggleTheme} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"} title="Alternar tema">◐</button>
        <a className="text-[13px] font-bold max-[760px]:text-[11px]" href="#contato">Fale comigo <span className="ml-[5px] text-accent">↗</span></a>
      </div>
    </header>

    <main>
      <section className="section-shell relative grid min-h-[650px] grid-cols-[1fr_430px] items-center gap-[10%] py-[92px] max-[760px]:flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-12 max-[760px]:py-[72px] max-[760px]:pb-[100px]" id="inicio">
        <div className="reveal">
          <p className={eyebrow}><span className="mr-2 inline-block size-[7px] rounded-full bg-accent" /> Desenvolvedor back-end · Brasília, DF</p>
          <h1 className={`${heading} mb-8 text-[clamp(54px,7vw,92px)] max-[760px]:tracking-[-2px]`}>Software que<br/><em className="not-italic text-accent">resolve</em><br/>problemas reais.</h1>
          <p className="max-w-[410px] text-[15px] leading-[1.65] text-muted">Sou Bruno, desenvolvedor back-end com base em Engenharia de Software. Construo APIs, automações e sistemas escaláveis usando Python, Java e dados.</p>
          <div className="mt-10 flex items-center gap-7"><a className="inline-flex items-center gap-7 bg-ink px-[21px] py-4 text-xs font-bold text-paper transition hover:bg-accent hover:text-ink" href="#projetos">Ver projetos <span>↓</span></a><a className="border-b border-ink pb-[5px] text-xs font-bold" href="#sobre">Sobre mim <span className="ml-[5px] text-accent">↗</span></a></div>
        </div>
        <div className="reveal reveal-delay relative h-[470px] max-[760px]:h-[390px]">
          <div className="absolute inset-y-0 right-0 left-[12%] rotate-[4deg] border border-accent" />
          <div className="absolute top-[70px] left-0 z-10 bg-accent px-[11px] py-2 text-[10px]">01 / 04</div>
          <Image className="absolute top-[15px] right-0 h-[88%] w-[88%] object-cover saturate-75" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85" alt="Placa de circuito e componentes de tecnologia" width={1000} height={700} priority />
          <div className="absolute bottom-4 left-0 z-20 flex flex-col gap-[5px] bg-card px-[18px] py-[15px]"><strong className="display text-sm">Engenharia com propósito</strong><span className="text-[10px] text-muted">APIs · Dados · Automação</span></div>
        </div>
        <div className="absolute bottom-[26px] left-0 text-[10px] uppercase tracking-[1px] text-muted max-[760px]:bottom-[18px]">Role para explorar <span className="pl-2 text-accent">↓</span></div>
      </section>

      <section className="section-shell py-[130px] pb-[150px] max-[760px]:py-[90px] max-[760px]:pb-[100px]" id="projetos">
        <SectionHeading eyebrowText="Projetos selecionados" title={<>Soluções que<br/><em>geram impacto.</em></>} intro="Aplicações, APIs e automações desenvolvidas com foco em arquitetura, desempenho e valor para quem usa." />
        <div className="reveal mb-[34px] flex gap-6 overflow-x-auto border-b border-line">
          {filters.map((item) => <button key={item.key} onClick={() => setFilter(item.key)} className={`border-0 bg-transparent pb-[14px] text-xs whitespace-nowrap ${filter === item.key ? "border-b-2 border-accent text-ink" : "text-muted"}`}>{item.label} <sup className="pl-1 text-[9px]">{item.count}</sup></button>)}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-[60px] max-[760px]:block">
          {projects.filter((project) => filter === "all" || project.category === filter).map((project, index) => <article key={project.id} className={`min-w-0 max-[760px]:mb-12 ${index === 0 && filter === "all" ? "col-span-full" : ""}`}>
            <div className={`relative grid h-[340px] place-items-center overflow-hidden max-[760px]:h-[300px] ${index === 0 && filter === "all" ? "h-[420px]" : ""} ${project.tone}`}><span className="absolute top-[18px] left-5 text-[11px]">{project.id}</span><ProjectArt type={project.art} /></div>
            <div className="flex justify-between pt-[17px]"><div><h3 className="display mb-[7px] text-lg font-medium">{project.title}</h3><p className="m-0 text-[11px] text-muted">{project.tech}</p></div><a className={arrow} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto ${project.title}`}>↗</a></div>
          </article>)}
        </div>
        <p className="mt-20 mb-0 text-center text-[11px] text-muted">Também desenvolvi sistemas com Python, Flask, FastAPI e C#.</p>
      </section>

      <section className="section-shell border-t border-line py-[110px] pb-[140px] max-[760px]:py-20 max-[760px]:pb-[100px]" id="jogos">
        <SectionHeading eyebrowText="Experimentos interativos" title={<>Projetos para<br/><em>jogar e explorar.</em></>} intro="Uma pequena amostra dos meus projetos publicados na web, combinando lógica, interface e interação." />
        <div className="grid grid-cols-2 gap-6 max-[760px]:block">
          <GameCard href="https://bruno07sales.github.io/Pong/" className="bg-[#1d2924] text-[#f4f1eb]" label="JOGO 01 · JAVASCRIPT" title="Pong" description="Clássico arcade · Jogue no navegador"><div className="pong-court relative my-[15px] h-[200px] border border-[rgba(244,241,235,.35)] max-[760px]:h-[175px]"><span className="absolute top-[72px] left-[17px] h-[53px] w-2 bg-accent"/><span className="absolute top-[102px] left-[57%] size-[14px] rotate-45 bg-yellow"/><span className="absolute top-[72px] right-[17px] h-[53px] w-2 bg-[#f4f1eb]"/></div></GameCard>
          <GameCard href="https://bruno07sales.github.io/Campo-Minado-Dengue/" className="bg-[#d9e35e] text-[#20211f]" label="JOGO 02 · LÓGICA" title="Campo Minado Dengue" description="Jogo educativo · Explore com cuidado"><div className="my-[15px] flex h-[200px] rotate-[-2deg] flex-col items-center justify-center border border-[rgba(32,33,31,.3)] max-[760px]:h-[175px]"><span className="text-[44px] leading-none text-accent">☣</span><strong className="display mt-3 text-[39px] leading-[.78] font-bold tracking-[-3px]">CAMPO<br/>MINADO</strong><small className="mt-4 text-[10px] tracking-[4px]">DENGUE</small></div></GameCard>
        </div>
      </section>

      <section className="section-shell grid grid-cols-[190px_1fr_260px] items-center gap-[70px] border-y border-line py-[120px] max-[760px]:block max-[760px]:py-[90px]" id="sobre">
        <div className="grid size-[150px] rotate-[-12deg] place-items-center rounded-full border border-accent text-center text-[26px] text-accent max-[760px]:mb-[55px]">✦<br/><span className="text-[10px] leading-[1.3] tracking-[1px]">CÓDIGO<br/>COM<br/>IMPACTO</span></div>
        <div className="reveal"><p className={eyebrow}>Um pouco sobre mim</p><h2 className={`${heading} mb-[27px] text-[clamp(42px,5vw,67px)]`}>Curioso por natureza,<br/><em>construtor por escolha.</em></h2><p className="mb-7 max-w-[420px] text-sm leading-[1.6] text-muted">Minha base combina Engenharia de Software, visão de negócios e prática em back-end, automação e análise de dados. Gosto de transformar desafios complexos em sistemas confiáveis.</p><a className="border-b border-ink pb-[5px] text-xs font-bold" href="#contato">Conheça meu trabalho <span className="ml-[5px] text-accent">↗</span></a></div>
        <div className="reveal reveal-delay grid gap-7 border-l border-line pl-8 max-[760px]:mt-[55px] max-[760px]:grid-cols-3 max-[760px]:gap-[10px] max-[760px]:border-t max-[760px]:border-l-0 max-[760px]:px-0 max-[760px]:pt-[25px]">{[["03","linguagens", "principais"],["20h","economizadas", "por semana"],["01","prêmio de", "impacto social"]].map(([value, first, second]) => <div className="flex items-center gap-5 max-[760px]:block" key={value}><strong className="display text-[42px] font-medium text-accent max-[760px]:mb-2 max-[760px]:block max-[760px]:text-[35px]">{value}</strong><span className="text-[11px] leading-[1.3] text-muted">{first}<br/>{second}</span></div>)}</div>
      </section>

      <section className="section-shell py-[150px] max-[760px]:py-[100px]" id="contato"><div className="reveal"><p className={eyebrow}>Vamos conversar?</p><h2 className={`${heading} mb-[27px] text-[clamp(42px,5vw,67px)]`}>Boas ideias<br/><em>começam aqui.</em></h2><p className="max-w-[500px] text-sm leading-[1.6] text-muted">Estou disponível para oportunidades remotas ou híbridas em Brasília e para projetos que precisem de uma base técnica sólida.</p><div className="mt-[70px] text-xs"><a className="font-bold text-accent" href="https://www.linkedin.com/in/bruno07sales/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></section>
    </main>

    <footer className="section-shell flex min-h-[110px] items-center justify-between gap-5 border-t border-line max-[760px]:flex-wrap max-[760px]:py-6"><a className="display text-2xl font-bold" href="#inicio">BS<span className="text-accent">.</span></a><p className="m-0 text-[11px] text-muted max-[760px]:order-3 max-[760px]:basis-full">Construído com código, dados e curiosidade.</p><a className="text-[11px] max-[760px]:ml-auto" href="https://www.linkedin.com/in/bruno07sales/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><p className="m-0 ml-auto text-[11px] text-muted max-[760px]:ml-0">© 2026 Bruno A. Sales</p></footer>
  </>;
}

function SectionHeading({ eyebrowText, title, intro }: { eyebrowText: string; title: React.ReactNode; intro: string }) {
  return <div className="reveal mb-[60px] flex items-end justify-between max-[760px]:mb-[45px] max-[760px]:block"><div><p className={eyebrow}>{eyebrowText}</p><h2 className={`${heading} m-0 text-[clamp(42px,5vw,67px)] [&_em]:not-italic [&_em]:text-accent`}>{title}</h2></div><p className="mb-1 w-[270px] text-[13px] leading-[1.6] text-muted max-[760px]:mt-6 max-[760px]:w-auto">{intro}</p></div>;
}

function ProjectArt({ type }: { type: string }) {
  if (type === "api") return <div className="flex h-[210px] w-[270px] rotate-[-5deg] flex-col justify-between bg-[#f4f1eb] p-7 text-ink shadow-[18px_18px_0_rgba(32,33,31,.12)]"><span className="display text-xl font-bold">Node.js API</span><strong className="display text-[32px] leading-[.9] font-medium tracking-[-1.5px]">Build with<br/>confidence.</strong><small className="self-end text-lg">↗</small></div>;
  if (type === "routes") return <div className="display text-[90px] font-bold tracking-[-10px]">A<span className="text-accent">*</span></div>;
  return <div className="display rotate-[-10deg] text-[52px] leading-[.78] font-bold tracking-[-4px]">INCLUSA<br/><i className="not-italic text-accent">&</i> ACESSO</div>;
}

function GameCard({ href, className, label, title, description, children }: { href: string; className: string; label: string; title: string; description: string; children: React.ReactNode }) {
  return <a className={`reveal flex min-h-[390px] flex-col justify-between overflow-hidden p-[22px] transition hover:-translate-y-[7px] max-[760px]:mb-6 max-[760px]:min-h-[350px] ${className}`} href={href} target="_blank" rel="noopener noreferrer"><span className="text-[10px] font-bold tracking-[1.2px]">{label}</span>{children}<div className="flex items-end justify-between"><div><h3 className="display mb-[7px] text-xl font-medium">{title}</h3><p className="m-0 text-[11px] opacity-65">{description}</p></div><span className={`${arrow} border-current`}>↗</span></div></a>;
}
