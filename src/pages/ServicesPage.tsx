import {
  CONSULTORIA_SERVICES,
  EDIFICACOES_SERVICES,
  RODOVIARIA_SERVICES,
} from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';

interface ServicesPageProps {
  onNavigate: (path: string, options?: { discipline?: string }) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-light-on-primary py-12 md:py-16 border-b border-light-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-light-secondary-container text-light-on-secondary-container font-label text-label-sm self-start">
            Execução &amp; Consultoria Técnica
          </span>
          <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-4xl">
            Soluções completas em infraestrutura viária, edificações e consultoria
          </h1>
          <p className="font-body text-body-lg text-light-on-primary-container max-w-2xl text-pretty">
            Capacidade técnica multidisciplinar para atender concessionárias de rodovias, órgãos públicos e empresas privadas com rigor normativo e previsibilidade de prazo.
          </p>
        </div>
      </section>

      {/* Bloco 1: Infraestrutura Rodoviária */}
      <section id="rodoviaria" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-section flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-light-outline-variant pb-4">
          <div>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
              Infraestrutura rodoviária e viária
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Execução em campo com sinalização sob tráfego, controle tecnológico próprio e conformidade DNIT/DER.
            </p>
          </div>
          <span className="font-mono text-mono-md text-light-secondary shrink-0">
            Especialidade Principal
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {RODOVIARIA_SERVICES.map((service) => (
            <article
              key={service.id}
              className="h-full flex flex-col justify-between rounded-md border border-light-outline-variant bg-light-surface-container-lowest overflow-hidden"
            >
              {service.image && (
                <div className="aspect-video w-full overflow-hidden bg-light-surface-container">
                  <ResilientImage
                    src={service.image.src}
                    alt={service.image.alt}
                    className="w-full h-full object-cover"
                    fallbackLabel={service.title}
                  />
                </div>
              )}
              <div className="p-5 md:p-6 flex flex-col justify-between gap-4 flex-1">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-light-surface-container-low text-light-primary shrink-0">
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
                  </div>
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
                    <span>Solicitar escopo</span>
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

      {/* Bloco 2: Edificações, Reformas e Obras Civis */}
      <section id="edificacoes" className="bg-light-surface-container-low border-y border-light-outline-variant py-12 md:py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b border-light-outline-variant pb-4">
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
              Edificações, reformas e obras civis
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Construção predial, retrofit institucional e infraestrutura de apoio operacional e industrial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {EDIFICACOES_SERVICES.map((service) => (
              <article
                key={service.id}
                className="h-full flex flex-col justify-between p-6 rounded-md border border-light-outline-variant bg-light-surface-container-lowest gap-4"
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
                    <span>Solicitar orçamento</span>
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

      {/* Bloco 3: Consultoria Técnica */}
      <section id="consultoria" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-section flex flex-col gap-8">
        <div className="flex flex-col gap-2 border-b border-light-outline-variant pb-4">
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
            Consultoria técnica de engenharia
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant">
            Apoio estratégico, fiscalização, projetos executivos e perícia para reduzir riscos contratuais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {CONSULTORIA_SERVICES.map((service) => (
            <article
              key={service.id}
              className="h-full flex flex-col justify-between p-6 rounded-md border border-light-outline-variant bg-light-surface-container-lowest gap-4"
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
                  <span>Agendar consultoria</span>
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Precisa de suporte técnico para licitação ou projeto executivo?"
        description="Nossa equipe de engenharia analisa memoriais, planilhas orçamentárias e cronogramas para estruturar a melhor solução executiva."
        buttonLabel="Enviar escopo técnico"
        onAction={() => onNavigate('/contato')}
      />
    </>
  );
}
