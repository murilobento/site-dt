import { useState, useRef } from 'react';
import { IMAGES } from '../data/assets';
import { COMPLIANCE_PILLARS, OPEN_POSITIONS, type OpenPosition } from '../data/siteData';
import { ResilientImage } from '../components/ResilientImage';

export function CompliancePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Engenharia Rodoviária / Pavimentação');
  const [resume, setResume] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSelectPosition = (position: OpenPosition) => {
    setArea(position.areaValue);
    setSubmitted(false);
    nameInputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !resume.trim()) {
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setResume('');
    setSubmitted(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-light-on-primary py-12 md:py-16 border-b border-light-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col gap-4">
          <span className="inline-flex items-center px-3 py-1 rounded-sm bg-light-secondary-container text-light-on-secondary-container font-label text-label-sm self-start">
            Integridade &amp; Pessoas
          </span>
          <h1 className="font-display text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-4xl">
            Compliance, segurança e carreiras
          </h1>
          <p className="font-body text-body-lg text-light-on-primary-container max-w-2xl text-pretty">
            Nosso compromisso com governança transparente, saúde e segurança do trabalho (SSMA) e valorização dos profissionais que executam nossa engenharia em campo.
          </p>
        </div>
      </section>

      {/* Pilares de Compliance & SSMA */}
      <section id="compliance" className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-section flex flex-col gap-8">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
            Programa de integridade e SSMA
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant">
            Diretrizes obrigatórias em todas as obras rodoviárias, bases operacionais e canteiros prediais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {COMPLIANCE_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="p-6 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-3"
            >
              <span className="material-symbols-outlined text-headline-md text-light-primary" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3 className="font-title text-title-lg text-light-on-surface">{pillar.title}</h3>
              <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                {pillar.description}
              </p>
              <ul className="mt-2 flex flex-col gap-1.5 font-body text-body-md text-light-on-surface-variant">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-title-md text-light-secondary shrink-0 mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Trabalhe Conosco / Carreiras */}
      <section id="carreiras" className="bg-light-surface-container-low border-t border-light-outline-variant py-12 md:py-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface">
                Trabalhe conosco
              </h2>
              <p className="font-body text-body-lg text-light-on-surface-variant text-pretty">
                Buscamos engenheiros civis, encarregados de pavimentação e drenagem, técnicos de segurança e especialistas em orçamento e controle tecnológico.
              </p>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-md border border-light-outline-variant bg-light-surface-container">
              <ResilientImage
                src={IMAGES.equipeEngenharia.src}
                alt={IMAGES.equipeEngenharia.alt}
                className="w-full h-full object-cover"
                fallbackLabel="Equipe Técnica DT Construtora"
              />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-title text-title-lg text-light-on-surface">
                Posições frequentemente demandadas
              </h3>
              <div className="flex flex-col gap-3">
                {OPEN_POSITIONS.map((pos) => (
                  <button
                    key={pos.id}
                    type="button"
                    onClick={() => handleSelectPosition(pos)}
                    className="text-left p-4 rounded-md bg-light-surface-container-lowest border border-light-outline-variant hover:border-light-primary transition-colors duration-state-change flex flex-col gap-1 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-title text-title-md text-light-on-surface">
                        {pos.title}
                      </span>
                      <span className="font-mono text-mono-md text-light-secondary">
                        {pos.code}
                      </span>
                    </div>
                    <p className="font-body text-body-md text-light-on-surface-variant">
                      {pos.description}
                    </p>
                    <span className="font-label text-label-sm text-light-primary mt-1 inline-flex items-center gap-1">
                      <span>Selecionar esta vaga no formulário</span>
                      <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                        arrow_forward
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Formulário de Candidatura */}
          <div className="lg:col-span-6 p-6 md:p-8 rounded-md bg-light-surface-container-lowest border border-light-outline-variant flex flex-col gap-6">
            <div>
              <h3 className="font-headline text-headline-md text-light-on-surface">
                Banco de talentos e candidaturas
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Cadastre seu perfil técnico para oportunidades em obras ou escritórios de engenharia.
              </p>
            </div>

            <form id="career-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-nome" className="font-label text-label-lg text-light-on-surface">
                  Nome completo *
                </label>
                <input
                  ref={nameInputRef}
                  id="c-nome"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-email" className="font-label text-label-lg text-light-on-surface">
                    E-mail *
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="voce@email.com"
                    className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-tel" className="font-label text-label-lg text-light-on-surface">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    id="c-tel"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(41) 99999-0000"
                    className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-area" className="font-label text-label-lg text-light-on-surface">
                  Área de interesse *
                </label>
                <select
                  id="c-area"
                  required
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                >
                  <option value="Engenharia Rodoviária / Pavimentação">
                    Engenharia Rodoviária / Pavimentação
                  </option>
                  <option value="Edificações / Obras Civis">Edificações / Obras Civis</option>
                  <option value="Consultoria / Orçamentação / Projetos">
                    Consultoria / Orçamentação / Projetos
                  </option>
                  <option value="Segurança do Trabalho / SSMA">Segurança do Trabalho / SSMA</option>
                  <option value="Laboratório / Controle Tecnológico">
                    Laboratório / Controle Tecnológico
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="c-resumo" className="font-label text-label-lg text-light-on-surface">
                  Resumo de experiência / Link para currículo *
                </label>
                <textarea
                  id="c-resumo"
                  rows={4}
                  required
                  value={resume}
                  onChange={(e) => setResume(e.target.value)}
                  placeholder="Informe registro profissional (CREA/CRT/MTE), obras relevantes e disponibilidade para viagens."
                  className="px-4 py-2.5 rounded border border-light-outline bg-light-surface-container-lowest text-light-on-surface font-body text-body-md focus:border-light-primary focus:ring-2 focus:ring-light-primary/20 outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  person_add
                </span>
                <span>Enviar candidatura</span>
              </button>

              {submitted && (
                <div
                  id="career-success"
                  role="status"
                  className="p-4 rounded border border-light-primary bg-light-surface-container-low text-light-primary font-body text-body-md flex items-start justify-between gap-3"
                >
                  <div>
                    Candidatura recebida para <strong>{area}</strong>. Nosso setor de Gente e Gestão analisará seu perfil para futuras mobilizações de obra.
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="font-label text-label-sm underline shrink-0 cursor-pointer"
                  >
                    Nova inscrição
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
