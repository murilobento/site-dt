import { useEffect, useState } from 'react';
import { DISCIPLINE_OPTIONS } from '../data/siteData';

interface ContactPageProps {
  preselectedDiscipline?: string;
}

export function ContactPage({ preselectedDiscipline }: ContactPageProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [discipline, setDiscipline] = useState<string>(
    preselectedDiscipline && DISCIPLINE_OPTIONS.includes(preselectedDiscipline as (typeof DISCIPLINE_OPTIONS)[number])
      ? preselectedDiscipline
      : DISCIPLINE_OPTIONS[0],
  );
  const [city, setCity] = useState('');
  const [scope, setScope] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (
      preselectedDiscipline &&
      DISCIPLINE_OPTIONS.includes(preselectedDiscipline as (typeof DISCIPLINE_OPTIONS)[number])
    ) {
      setDiscipline(preselectedDiscipline);
    }
  }, [preselectedDiscipline]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !company.trim() || !email.trim() || !phone.trim() || !scope.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setCity('');
    setScope('');
    setSubmitted(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-light-on-primary py-12 md:py-16 border-b border-light-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-light-secondary-container text-light-on-secondary-container font-label text-label-sm self-start">
            Atendimento Técnico • Orçamentos e Editais
          </span>
          <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-4xl">
            Solicite proposta técnica ou agende consultoria
          </h1>
          <p className="font-body text-body-lg text-light-on-primary-container max-w-2xl text-pretty">
            Compartilhe o escopo do empreendimento, localização ou número do edital. Nossa equipe de engenharia responde em até 1 dia útil.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section id="formulario" className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Formulário */}
        <div className="lg:col-span-7 p-6 md:p-8 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline text-headline-md text-light-on-surface">
              Dados da solicitação
            </h2>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Preencha os campos obrigatórios para direcionarmos ao coordenador da disciplina.
            </p>
          </div>

          <form id="quote-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nome" className="font-label text-label-lg text-light-on-surface">
                  Nome completo *
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex.: Ricardo Almeida"
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="empresa" className="font-label text-label-lg text-light-on-surface">
                  Empresa / Órgão *
                </label>
                <input
                  id="empresa"
                  name="empresa"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Concessionária, prefeitura ou empresa"
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-label text-label-lg text-light-on-surface">
                  E-mail corporativo *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contato@empresa.com.br"
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="telefone" className="font-label text-label-lg text-light-on-surface">
                  Telefone / WhatsApp *
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(41) 99999-0000"
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="disciplina" className="font-label text-label-lg text-light-on-surface">
                  Disciplina principal *
                </label>
                <select
                  id="disciplina"
                  name="disciplina"
                  required
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                >
                  {DISCIPLINE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cidade" className="font-label text-label-lg text-light-on-surface">
                  Cidade / UF da obra
                </label>
                <input
                  id="cidade"
                  name="cidade"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex.: Maringá — PR"
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="escopo" className="font-label text-label-lg text-light-on-surface">
                Escopo resumido, prazo ou número do edital *
              </label>
              <textarea
                id="escopo"
                name="escopo"
                rows={4}
                required
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder="Descreva extensão aproximada, área em m², tipo de intervenção ou link/código do memorial."
                className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <span className="font-label text-label-sm text-light-on-surface-variant">
                * Campos obrigatórios
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  send
                </span>
                <span>Enviar solicitação técnica</span>
              </button>
            </div>

            {submitted && (
              <div
                id="form-success"
                role="status"
                className="p-4 rounded border border-light-primary bg-light-surface-container-low text-light-primary font-body text-body-md flex items-start justify-between gap-3"
              >
                <div>
                  Solicitação registrada para <strong>{discipline}</strong>. Nossa equipe de engenharia retornará para <strong>{email}</strong> em até 1 dia útil.
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="font-label text-label-sm underline shrink-0 cursor-pointer"
                >
                  Novo envio
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Canais Diretos */}
        <aside className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-4">
            <h3 className="font-title text-title-lg text-light-on-surface">
              Canais Diretos de Engenharia
            </h3>
            <div className="flex flex-col gap-3 font-body text-body-md">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-title-lg text-light-primary shrink-0" aria-hidden="true">
                  call
                </span>
                <div>
                  <span className="font-label text-label-sm text-light-on-surface-variant block">
                    Telefone Comercial &amp; Orçamentos
                  </span>
                  <a
                    href="tel:+554130428800"
                    className="font-mono text-mono-md text-light-primary hover:text-light-secondary tabular-nums"
                  >
                    (41) 3042-8800
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-title-lg text-light-primary shrink-0" aria-hidden="true">
                  mail
                </span>
                <div>
                  <span className="font-label text-label-sm text-light-on-surface-variant block">
                    E-mail Técnico &amp; Editais
                  </span>
                  <a
                    href="mailto:engenharia@dtconstrutora.com.br"
                    className="font-mono text-mono-md text-light-primary hover:text-light-secondary break-all"
                  >
                    engenharia@dtconstrutora.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-title-lg text-light-primary shrink-0" aria-hidden="true">
                  schedule
                </span>
                <div>
                  <span className="font-label text-label-sm text-light-on-surface-variant block">
                    Horário de Atendimento
                  </span>
                  <span className="text-light-on-surface">Segunda a sexta • 08h às 18h</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-3">
            <h3 className="font-title text-title-lg text-light-on-surface">Sede Operacional</h3>
            <p className="font-body text-body-md text-light-on-surface-variant">
              Curitiba — Paraná
              <br />
              Atendimento e mobilização em rodovias, concessionárias e municípios em todo o Brasil.
            </p>
            <div className="pt-2 border-t border-light-outline-variant font-mono text-mono-md text-light-secondary">
              Registro CREA-PR • Acervo Técnico Ativo
            </div>
          </div>

          <div className="p-6 rounded-md bg-light-primary-container text-light-on-primary-container flex flex-col gap-3">
            <h3 className="font-title text-title-lg text-light-on-primary">
              Atendimento a Editais e Licitações
            </h3>
            <p className="font-body text-body-md text-light-on-primary-container text-pretty">
              Disponibilizamos Certidões de Acervo Técnico (CATs), balanços patrimoniais e atestados técnicos para processos de concorrência pública e privada.
            </p>
            <ul className="flex flex-col gap-1.5 font-body text-body-md text-light-on-primary-container">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-title-md text-light-secondary-container" aria-hidden="true">
                  check_circle
                </span>
                <span>Orçamentação SICRO / SINAPI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-title-md text-light-secondary-container" aria-hidden="true">
                  check_circle
                </span>
                <span>Cronogramas físico-financeiros auditáveis</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
