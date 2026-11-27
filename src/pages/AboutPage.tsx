import { IMAGES } from '../data/assets';
import { ABOUT_TIMELINE } from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';
import { CtaBanner } from '../components/CtaBanner';

interface AboutPageProps {
  onNavigate: (path: string, options?: { discipline?: string }) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      {/* Hero Institucional */}
      <section className="bg-brand-navy text-light-on-primary py-12 md:py-16 border-b border-light-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-sm bg-light-secondary-container text-light-on-secondary-container font-label text-label-sm self-start">
              História &amp; Engenharia
            </span>
            <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance">
              Engenharia sólida construída em campo
            </h1>
            <p className="font-body text-body-lg text-light-on-primary-container max-w-prose text-pretty">
              A DT Construtora e Consultoria une experiência executiva em infraestrutura rodoviária e edificações com governança técnica transparente e cumprimento rigoroso de prazos.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-md border border-light-on-primary-container/30 bg-light-primary">
              <ResilientImage
                src={IMAGES.equipeEngenharia.src}
                alt={IMAGES.equipeEngenharia.alt}
                className="w-full h-full object-cover"
                fallbackLabel="DT Construtora — Engenharia em Campo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos + Missão/Visão/Valores */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-section grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7 flex flex-col gap-5">
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
            Capacidade executiva e inteligência técnica
          </h2>
          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
            Com sede em Curitiba (PR) e atuação em todo o território nacional, estruturamos nossas frentes de trabalho para atender concessionárias de rodovias, órgãos públicos e iniciativa privada com o mesmo padrão de qualidade tecnológica.
          </p>
          <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
            Nosso corpo técnico multidisciplinar acompanha cada contrato desde a análise de edital e projeto executivo até o as-built final, assegurando rastreabilidade de ensaios, segurança viária sob tráfego e medições auditáveis.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-2">
            <div className="flex items-center gap-2 text-light-primary">
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                flag
              </span>
              <h3 className="font-title text-title-lg text-light-on-surface">Missão</h3>
            </div>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Executar obras de infraestrutura e edificações com rigor normativo, segurança operacional e previsibilidade de prazo e custo.
            </p>
          </div>

          <div className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-2">
            <div className="flex items-center gap-2 text-light-primary">
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                visibility
              </span>
              <h3 className="font-title text-title-lg text-light-on-surface">Visão</h3>
            </div>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Ser referência nacional entre concessionárias e contratantes públicos como parceira confiável para contratos críticos de infraestrutura.
            </p>
          </div>

          <div className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-2">
            <div className="flex items-center gap-2 text-light-primary">
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                verified_user
              </span>
              <h3 className="font-title text-title-lg text-light-on-surface">Valores</h3>
            </div>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Ética contratual, segurança do trabalho e viária inegociáveis, controle tecnológico rastreado e transparência nas medições.
            </p>
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section id="historia" className="bg-light-surface-container-low border-y border-light-outline-variant py-12 md:py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
              Nossa trajetória
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Evolução contínua de capacidade técnica, equipamentos e acervo certificado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {ABOUT_TIMELINE.map((milestone) => (
              <div
                key={milestone.year}
                className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-2"
              >
                <span className="font-mono text-headline-md text-light-secondary font-semibold tabular-nums">
                  {milestone.year}
                </span>
                <h3 className="font-title text-title-lg text-light-on-surface">
                  {milestone.title}
                </h3>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações & Governança */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-section flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-7xl">
          <div className="flex flex-col gap-2 max-w-2xl">
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
              Qualidade, normas e governança
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Processos auditáveis em campo e conformidade integral às exigências técnicas do setor.
            </p>
          </div>
          <a
            href="#/compliance"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/compliance');
            }}
            className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>Ver Compliance e Carreiras</span>
            <span className="material-symbols-outlined text-title-md" aria-hidden="true">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-md border border-light-outline-variant bg-light-surface-container-lowest flex flex-col gap-3">
            <span className="material-symbols-outlined text-headline-md text-light-primary" aria-hidden="true">
              science
            </span>
            <h3 className="font-title text-title-lg text-light-on-surface">
              Controle Tecnológico Próprio
            </h3>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Ensaios de compactação de solo, CBR, granulometria, teor de betume e resistência de concreto rastreados por lote.
            </p>
          </div>

          <div className="p-6 rounded-md border border-light-outline-variant bg-light-surface-container-lowest flex flex-col gap-3">
            <span className="material-symbols-outlined text-headline-md text-light-primary" aria-hidden="true">
              policy
            </span>
            <h3 className="font-title text-title-lg text-light-on-surface">
              Normas DNIT, DER e ABNT
            </h3>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Execução estritamente alinhada às especificações de serviço do DNIT, DER-PR, normas ABNT e código de obras.
            </p>
          </div>

          <div className="p-6 rounded-md border border-light-outline-variant bg-light-surface-container-lowest flex flex-col gap-3">
            <span className="material-symbols-outlined text-headline-md text-light-primary" aria-hidden="true">
              shield
            </span>
            <h3 className="font-title text-title-lg text-light-on-surface">
              Segurança Viária e Compliance
            </h3>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Protocolos ativos de NRs, sinalização de obras sob tráfego, gestão ambiental e ética contratual auditada.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Quer conhecer nossa capacidade técnica para seu próximo contrato?"
        description="Fale diretamente com nossos engenheiros responsáveis e solicite nosso portfólio documental completo."
        buttonLabel="Entrar em contato"
        onAction={() => onNavigate('/contato')}
        secondaryLink={{
          label: 'Compliance e Carreiras',
          onClick: () => onNavigate('/compliance'),
        }}
      />
    </>
  );
}
