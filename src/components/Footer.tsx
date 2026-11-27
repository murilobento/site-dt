interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-light-primary text-light-on-primary border-t border-light-primary-container">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5 flex flex-col gap-4">
          <a
            href="#/"
            onClick={(e) => handleNav(e, '/')}
            aria-label="DT Construtora e Consultoria — Página inicial"
            className="self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-on-primary"
          >
            <img
              src="/logo-dt.svg"
              alt="DT Construtora e Consultoria"
              className="h-10 md:h-12 w-auto brightness-0 invert"
            />
          </a>
          <p className="font-body text-body-md text-light-on-primary-container max-w-sm text-pretty">
            Construtora e consultoria especializada em infraestrutura rodoviária, terraplanagem, drenagem, SAUs, PREs, edificações e reformas.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-3">
          <h3 className="font-title text-title-md text-light-on-primary">Atuação &amp; Institucional</h3>
          <ul className="flex flex-col gap-2 font-body text-body-md text-light-on-primary-container">
            <li>
              <a
                href="#/servicos#rodoviaria"
                onClick={(e) => handleNav(e, '/servicos#rodoviaria')}
                className="hover:text-light-on-primary transition-colors duration-state-change"
              >
                Obras Rodoviárias e Pavimentação
              </a>
            </li>
            <li>
              <a
                href="#/servicos#edificacoes"
                onClick={(e) => handleNav(e, '/servicos#edificacoes')}
                className="hover:text-light-on-primary transition-colors duration-state-change"
              >
                SAUs, PREs e Edificações
              </a>
            </li>
            <li>
              <a
                href="#/servicos#consultoria"
                onClick={(e) => handleNav(e, '/servicos#consultoria')}
                className="hover:text-light-on-primary transition-colors duration-state-change"
              >
                Consultoria e Projetos
              </a>
            </li>
            <li>
              <a
                href="#/obras"
                onClick={(e) => handleNav(e, '/obras')}
                className="hover:text-light-on-primary transition-colors duration-state-change"
              >
                Portfólio de Obras
              </a>
            </li>
            <li>
              <a
                href="#/sobre"
                onClick={(e) => handleNav(e, '/sobre')}
                className="hover:text-light-on-primary transition-colors duration-state-change"
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#/compliance"
                onClick={(e) => handleNav(e, '/compliance')}
                className="hover:text-light-on-primary transition-colors duration-state-change"
              >
                Compliance e Carreiras
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 flex flex-col gap-3">
          <h3 className="font-title text-title-md text-light-on-primary">Contato Institucional</h3>
          <p className="font-body text-body-md text-light-on-primary-container">
            Curitiba — PR • Atendimento em todo o Brasil
          </p>
          <a
            href="mailto:engenharia@dtconstrutora.com.br"
            className="font-mono text-mono-md text-light-on-primary-container hover:text-light-on-primary transition-colors duration-state-change tabular-nums self-start"
          >
            engenharia@dtconstrutora.com.br
          </a>
          <a
            href="tel:+554130428800"
            className="font-mono text-mono-md text-light-on-primary-container hover:text-light-on-primary transition-colors duration-state-change tabular-nums self-start"
          >
            (41) 3042-8800
          </a>
        </div>
      </div>

      <div className="border-t border-light-primary-container">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 font-label text-label-sm text-light-on-primary-container">
          <span>© 2026 DT Construtora e Consultoria. Todos os direitos reservados.</span>
          <span>Engenharia Civil &amp; Infraestrutura</span>
        </div>
      </div>
    </footer>
  );
}
