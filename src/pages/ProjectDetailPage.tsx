import { PROJECTS, type ProjectItem } from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (path: string, options?: { discipline?: string }) => void;
}

function getDisciplineFromCategory(category: ProjectItem['category']): string {
  switch (category) {
    case 'saupre':
      return 'SAU / PRE rodoviário';
    case 'edificacoes':
      return 'Edificação / reforma predial';
    default:
      return 'Obra rodoviária / pavimentação';
  }
}

export function ProjectDetailPage({ slug, onNavigate }: ProjectDetailPageProps) {
  const project = PROJECTS.find((p) => p.slug === slug) ?? PROJECTS[0];
  const discipline = getDisciplineFromCategory(project.category);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light-surface-container-low border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
          <a
            href="#/obras"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/obras');
            }}
            className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change"
          >
            <span className="material-symbols-outlined text-title-md" aria-hidden="true">
              arrow_back
            </span>
            <span>Voltar ao portfólio de obras</span>
          </a>
          <span className="font-mono text-mono-md text-light-on-surface-variant hidden sm:inline">
            {project.contractCode}
          </span>
        </div>
      </div>

      {/* Cabeçalho da Obra */}
      <section className="bg-brand-navy text-light-on-primary py-10 md:py-12 border-b border-light-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm bg-light-secondary-container text-light-on-secondary-container font-label text-label-sm">
              {project.badge}
            </span>
            <span className="font-mono text-mono-md text-light-on-primary-container">
              {project.contractCode}
            </span>
          </div>
          <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance">
            {project.title}
          </h1>
          <p className="font-body text-body-lg text-light-on-primary-container max-w-3xl text-pretty">
            {project.heroCaption}
          </p>
        </div>
      </section>

      {/* Ficha Técnica Strip */}
      <section className="bg-light-surface-container-lowest border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-label text-label-sm text-light-on-surface-variant uppercase">
              {project.extensionLabel}
            </span>
            <span className="font-title text-title-lg text-light-primary tabular-nums">
              {project.extensionValue}
            </span>
          </div>
          <div className="flex flex-col gap-1 lg:border-l lg:border-light-outline-variant lg:pl-6">
            <span className="font-label text-label-sm text-light-on-surface-variant uppercase">
              Localização
            </span>
            <span className="font-title text-title-lg text-light-primary">{project.location}</span>
          </div>
          <div className="flex flex-col gap-1 lg:border-l lg:border-light-outline-variant lg:pl-6">
            <span className="font-label text-label-sm text-light-on-surface-variant uppercase">
              Ano / Status
            </span>
            <span className="font-title text-title-lg text-light-primary tabular-nums">
              {project.statusYear}
            </span>
          </div>
          <div className="flex flex-col gap-1 lg:border-l lg:border-light-outline-variant lg:pl-6">
            <span className="font-label text-label-sm text-light-on-surface-variant uppercase">
              {project.normLabel}
            </span>
            <span className="font-title text-title-lg text-light-primary">{project.normValue}</span>
          </div>
        </div>
      </section>

      {/* Imagem Principal + Escopo */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12 flex flex-col gap-10">
        <div className="aspect-video w-full overflow-hidden rounded-md border border-light-outline-variant bg-light-surface-container">
          <ResilientImage
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover"
            fallbackLabel={project.title}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline text-headline-md text-light-on-surface">
                O desafio técnico
              </h2>
              <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
                {project.challenge}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-headline text-headline-md text-light-on-surface">
                Solução executada
              </h2>
              <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
                {project.solution}
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-4">
            <h3 className="font-title text-title-lg text-light-on-surface border-b border-light-outline-variant pb-3">
              Quantitativos executados
            </h3>
            <dl className="flex flex-col divide-y divide-light-outline-variant font-body text-body-md">
              {project.quantitativos.map((item) => (
                <div key={item.label} className="py-2.5 flex items-center justify-between gap-4">
                  <dt className="text-light-on-surface-variant">{item.label}</dt>
                  <dd className="font-mono text-mono-md text-light-primary font-semibold tabular-nums text-right">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <button
              type="button"
              onClick={() => onNavigate('/contato', { discipline })}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>Solicitar escopo similar</span>
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                arrow_forward
              </span>
            </button>
          </aside>
        </div>
      </section>

      {/* Etapas da Execução */}
      <section className="bg-light-surface-container-low border-t border-light-outline-variant py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-6">
          <h2 className="font-headline text-headline-md text-light-on-surface">
            Etapas da execução
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.etapas.map((etapa) => (
              <div
                key={etapa.step}
                className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-2"
              >
                <span className="font-mono text-mono-md text-light-secondary">{etapa.step}</span>
                <h3 className="font-title text-title-lg text-light-on-surface">{etapa.title}</h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-10 md:pt-12">
        <CtaBanner
          title="Tem uma obra com escopo semelhante?"
          description="Envie o memorial descritivo ou edital para nossa equipe técnica elaborar um orçamento detalhado."
          buttonLabel="Solicitar proposta técnica"
          onAction={() => onNavigate('/contato', { discipline })}
        />
      </div>
    </>
  );
}
