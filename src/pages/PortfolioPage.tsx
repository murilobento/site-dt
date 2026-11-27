import { useState } from 'react';
import {
  PORTFOLIO_FILTERS,
  PROJECTS,
  type PortfolioFilterId,
} from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';

interface PortfolioPageProps {
  onNavigate: (path: string, options?: { discipline?: string }) => void;
}

export function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<PortfolioFilterId>('all');

  const visibleProjects =
    selectedFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedFilter);

  const countLabel =
    visibleProjects.length === 1
      ? '1 obra exibida'
      : `${visibleProjects.length} obras exibidas`;

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-light-on-primary py-12 md:py-16 border-b border-light-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-light-secondary-container text-light-on-secondary-container font-label text-label-sm self-start">
            Acervo Técnico • CREA-PR
          </span>
          <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-4xl">
            Portfólio de obras executadas
          </h1>
          <p className="font-body text-body-lg text-light-on-primary-container max-w-2xl text-pretty">
            Obras entregues em rodovias concedidas, infraestrutura urbana, SAUs, PREs e edificações corporativas em todo o país.
          </p>
        </div>
      </section>

      {/* Filtros + Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-light-outline-variant pb-4">
          <div
            role="tablist"
            aria-label="Filtrar obras por categoria"
            className="flex flex-nowrap sm:flex-wrap overflow-x-auto no-scrollbar items-center gap-2 sm:gap-3"
          >
            {PORTFOLIO_FILTERS.map((filter) => {
              const active = selectedFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded font-label text-label-lg whitespace-nowrap shrink-0 transition-colors duration-state-change cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary ${
                    active
                      ? 'bg-light-primary text-light-on-primary'
                      : 'bg-light-surface-container-low text-light-on-surface-variant hover:bg-light-surface-container'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          <span className="font-mono text-mono-md text-light-on-surface-variant tabular-nums shrink-0">
            {countLabel}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {visibleProjects.map((project) => (
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
                    <h2 className="font-title text-title-lg text-light-on-surface pt-1">
                      {project.title}
                    </h2>
                  </header>
                  <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                    {project.summary}
                  </p>
                </div>

                <footer className="pt-3 border-t border-light-outline-variant flex items-center justify-between gap-2">
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
                    className="inline-flex items-center gap-1 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change whitespace-nowrap shrink-0"
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
      </section>

      <CtaBanner
        title="Solicite nossas Certidões de Acervo Técnico (CATs)"
        description="Disponibilizamos atestados técnicos, memoriais de cálculo e referências contratuais para processos de habilitação e licitações."
        buttonLabel="Solicitar acervo e proposta"
        buttonIcon="description"
        onAction={() => onNavigate('/contato')}
      />
    </>
  );
}
