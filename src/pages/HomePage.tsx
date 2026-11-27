import { useState, useRef } from 'react';
import { IMAGES } from '../data/assets';
import {
  CONSULTORIA_SERVICES,
  EDIFICACOES_SERVICES,
  HOME_DIFFERENTIALS,
  HOME_METRICS,
  PROJECTS,
  RODOVIARIA_SERVICES,
  type ServiceCardData,
} from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';

interface HomePageProps {
  onNavigate: (path: string, options?: { discipline?: string }) => void;
}

type HomeTabId = 'rodoviaria' | 'edificacoes' | 'consultoria';

const HOME_TABS: { id: HomeTabId; label: string; items: ServiceCardData[]; colsClass: string }[] = [
  {
    id: 'rodoviaria',
    label: 'Infraestrutura Rodoviária',
    items: RODOVIARIA_SERVICES,
    colsClass: 'grid-cols-1 md:grid-cols-2',
  },
  {
    id: 'edificacoes',
    label: 'Edificações e Reformas',
    items: EDIFICACOES_SERVICES,
    colsClass: 'grid-cols-1 md:grid-cols-3',
  },
  {
    id: 'consultoria',
    label: 'Consultoria Técnica',
    items: CONSULTORIA_SERVICES,
    colsClass: 'grid-cols-1 md:grid-cols-3',
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const [activeTab, setActiveTab] = useState<HomeTabId>('rodoviaria');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const featuredProjects = PROJECTS.filter((p) => p.featuredOnHome);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex: number | null = null;
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % HOME_TABS.length;
    if (e.key === 'ArrowLeft') nextIndex = (index - 1 + HOME_TABS.length) % HOME_TABS.length;
    if (e.key === 'Home') nextIndex = 0;
    if (e.key === 'End') nextIndex = HOME_TABS.length - 1;

    if (nextIndex !== null) {
      e.preventDefault();
      const nextTab = HOME_TABS[nextIndex];
      setActiveTab(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const currentTabConfig = HOME_TABS.find((t) => t.id === activeTab) ?? HOME_TABS[0];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden">
        <ResilientImage
          src={IMAGES.heroHighway.src}
          alt={IMAGES.heroHighway.alt}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col gap-5 md:gap-6">
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance">
              Infraestrutura viária e edificações com rigor técnico
            </h1>

            <p className="font-body text-body-lg text-light-on-primary-container max-w-prose text-pretty">
              Executamos obras rodoviárias, terraplanagem, drenagem, pavimentação, SAUs, PREs, edificações e consultoria técnica para concessionárias, órgãos públicos e empresas.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollToSection('servicos')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-secondary-container text-light-on-secondary-container font-label text-label-lg whitespace-nowrap shrink-0 transition-colors duration-state-change ease-state-change hover:bg-light-secondary hover:text-light-on-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-on-primary cursor-pointer"
              >
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  engineering
                </span>
                <span>Explorar serviços</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/obras')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-light-on-primary-container bg-brand-navy text-light-on-primary font-label text-label-lg whitespace-nowrap shrink-0 transition-colors duration-state-change ease-state-change hover:bg-light-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-on-primary cursor-pointer"
              >
                <span>Ver obras executadas</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas Institucionais */}
      <section className="bg-light-surface-container-lowest border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {HOME_METRICS.map((metric, idx) => (
            <div
              key={metric.value}
              className={`flex flex-col gap-1 ${
                idx > 0 ? 'lg:border-l lg:border-light-outline-variant lg:pl-6' : ''
              }`}
            >
              <span className="font-display text-headline-lg-mobile lg:text-headline-lg text-light-primary tabular-nums">
                {metric.value}
              </span>
              <span className="font-body text-body-md text-light-on-surface-variant">
                {metric.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços e Consultoria (Tabs) */}
      <section id="servicos" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-section flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
              Serviços e consultoria especializada
            </h2>
            <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
              Estrutura técnica completa para atuar desde a concepção e consultoria até a execução integral de obras viárias e prediais.
            </p>
          </div>
          <a
            href="#/servicos"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/servicos');
            }}
            className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>Ver catálogo técnico</span>
            <span className="material-symbols-outlined text-title-md" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          <div
            role="tablist"
            aria-label="Disciplinas de atuação"
            className="flex flex-nowrap sm:flex-wrap overflow-x-auto no-scrollbar items-center gap-2 sm:gap-3 border-b border-light-outline-variant pb-4"
          >
            {HOME_TABS.map((tab, index) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  id={`tab-${tab.id}`}
                  type="button"
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  className={`px-4 md:px-5 py-2.5 rounded font-label text-label-lg whitespace-nowrap shrink-0 transition-colors duration-state-change cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary ${
                    isSelected
                      ? 'bg-light-primary text-light-on-primary'
                      : 'bg-light-surface-container-low text-light-on-surface-variant hover:bg-light-surface-container'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${currentTabConfig.id}`}
            aria-labelledby={`tab-${currentTabConfig.id}`}
            tabIndex={0}
            className={`grid ${currentTabConfig.colsClass} gap-6 items-stretch`}
          >
            {currentTabConfig.items.map((service) => (
              <article
                key={service.id}
                className="h-full flex flex-col justify-between p-5 md:p-6 rounded-md border border-light-outline-variant bg-light-surface-container-lowest gap-4"
              >
                <div className="flex flex-col gap-3">
                  <header className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded bg-light-surface-container-low text-light-primary shrink-0">
                      <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                        {service.icon}
                      </span>
                    </span>
                    <div>
                      <h3 className="font-title text-title-lg text-light-on-surface">
                        {service.title}
                      </h3>
                      <p className="font-label text-label-sm text-light-on-surface-variant">
                        {service.subtitle}
                      </p>
                    </div>
                  </header>
                  <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                    {service.description}
                  </p>
                </div>

                <footer className="pt-3 border-t border-light-outline-variant">
                  <a
                    href="#/contato"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/contato', { discipline: service.disciplineValue });
                    }}
                    className="inline-flex items-center gap-1 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change"
                  >
                    <span>{service.ctaLabel}</span>
                    <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                      arrow_forward
                    </span>
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio de Obras */}
      <section id="obras" className="bg-light-surface-container-low border-y border-light-outline-variant py-12 md:py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2 max-w-2xl">
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
                Obras em destaque
              </h2>
              <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
                Entregas recentes em pavimentação, bases operacionais rodoviárias e edificações institucionais.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-mono-md text-light-on-surface-variant tabular-nums">
                CREA-PR • Acervo Técnico
              </span>
              <a
                href="#/obras"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/obras');
                }}
                className="inline-flex items-center gap-1 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change whitespace-nowrap shrink-0"
              >
                <span>Ver todas as obras</span>
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="h-full flex flex-col rounded-md border border-light-outline-variant bg-light-surface-container-lowest overflow-hidden hover:border-light-primary transition-colors duration-state-change"
              >
                <a
                  href={`#/obras/${project.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/obras/${project.slug}`);
                  }}
                  className="aspect-video w-full overflow-hidden bg-light-surface-container block"
                >
                  <ResilientImage
                    src={project.image.src}
                    alt={project.image.alt}
                    className="w-full h-full object-cover transition-transform duration-surface-enter hover:scale-[1.02]"
                    fallbackLabel={project.title}
                  />
                </a>
                <div className="p-5 md:p-6 flex flex-col justify-between gap-4 flex-1">
                  <div className="flex flex-col gap-3">
                    <header className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          role="status"
                          className="inline-flex items-center px-2.5 py-0.5 rounded-sm bg-light-surface-container text-light-on-surface-variant font-label text-label-sm whitespace-nowrap"
                        >
                          {project.badge}
                        </span>
                        <span className="font-mono text-mono-md text-light-on-surface-variant tabular-nums">
                          {project.metric}
                        </span>
                      </div>
                      <h3 className="font-title text-title-lg text-light-on-surface pt-1">
                        {project.title}
                      </h3>
                    </header>
                    <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                      {project.summary}
                    </p>
                  </div>

                  <footer className="pt-3 border-t border-light-outline-variant flex items-center justify-between">
                    <span className="font-label text-label-sm text-light-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                        location_on
                      </span>
                      {project.location}
                    </span>
                    <a
                      href={`#/obras/${project.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/obras/${project.slug}`);
                      }}
                      className="inline-flex items-center gap-1 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change"
                    >
                      <span>Ver detalhes</span>
                      <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                        arrow_forward
                      </span>
                    </a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais de Engenharia & Consultoria */}
      <section id="engenharia" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-section grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
            Rigor de engenharia do projeto à entrega
          </h2>
          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
            Unimos capacidade executiva em campo e inteligência de consultoria para reduzir riscos contratuais, garantir qualidade tecnológica e cumprir cronogramas.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {HOME_DIFFERENTIALS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-2"
            >
              <span className="material-symbols-outlined text-headline-md text-light-primary" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="font-title text-title-lg text-light-on-surface">{item.title}</h3>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBanner
        title="Precisa de orçamento ou consultoria técnica para sua obra?"
        description="Envie o escopo, edital ou memorial descritivo para nossa equipe de engenharia e receba uma proposta técnica detalhada."
        buttonLabel="Solicitar proposta técnica"
        onAction={() => onNavigate('/contato')}
      />
    </>
  );
}
