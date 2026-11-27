import { useState } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const NAV_ITEMS = [
  { label: 'Serviços', path: '/servicos' },
  { label: 'Obras', path: '/obras' },
  { label: 'Consultoria', path: '/servicos#consultoria' },
  { label: 'Sobre Nós', path: '/sobre' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Contato', path: '/contato' },
] as const;

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const isNavItemActive = (itemPath: string) => {
    const cleanCurrent = currentPath.split('#')[0];
    if (itemPath === '/servicos#consultoria') {
      return currentPath === '/servicos#consultoria';
    }
    if (itemPath === '/servicos') {
      return cleanCurrent === '/servicos' && currentPath !== '/servicos#consultoria';
    }
    if (itemPath === '/obras') {
      return cleanCurrent === '/obras' || cleanCurrent.startsWith('/obras/');
    }
    return cleanCurrent === itemPath;
  };

  return (
    <header className="sticky top-0 z-30 bg-light-surface-container-lowest border-b border-light-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4 md:gap-6">
        <a
          href="#/"
          onClick={(e) => handleLinkClick(e, '/')}
          aria-label="DT Construtora e Consultoria — Página inicial"
          className="flex items-center gap-3 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
        >
          <img
            src="/logo-dt.svg"
            alt="DT Construtora e Consultoria"
            className="h-9 md:h-12 w-auto"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active = isNavItemActive(item.path);
            return (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => handleLinkClick(e, item.path)}
                aria-current={active ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 font-label text-label-lg transition-colors duration-state-change focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light-primary ${
                  active
                    ? 'text-light-primary border-b-2 border-accent pb-1'
                    : 'text-light-on-surface-variant hover:text-light-primary'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#/contato"
            onClick={(e) => handleLinkClick(e, '/contato')}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 rounded bg-light-primary text-light-on-primary font-label text-label-lg whitespace-nowrap shrink-0 transition-colors duration-state-change ease-state-change hover:bg-light-primary-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span>Solicitar proposta</span>
          </a>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded border border-light-outline-variant text-light-primary hover:bg-light-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
          >
            <span className="material-symbols-outlined text-headline-md" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Menu móvel"
          className="lg:hidden bg-light-surface-container-lowest border-t border-light-outline-variant px-4 py-4 flex flex-col gap-2"
        >
          <a
            href="#/"
            onClick={(e) => handleLinkClick(e, '/')}
            className={`px-3 py-2.5 rounded font-label text-label-lg ${
              currentPath === '/'
                ? 'bg-light-surface-container-low text-light-primary'
                : 'text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary'
            }`}
          >
            Início
          </a>
          {NAV_ITEMS.map((item) => {
            const active = isNavItemActive(item.path);
            return (
              <a
                key={item.path}
                href={`#${item.path}`}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`px-3 py-2.5 rounded font-label text-label-lg ${
                  active
                    ? 'bg-light-surface-container-low text-light-primary'
                    : 'text-light-on-surface-variant hover:bg-light-surface-container-low hover:text-light-primary'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#/contato"
            onClick={(e) => handleLinkClick(e, '/contato')}
            className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded bg-light-primary text-light-on-primary font-label text-label-lg"
          >
            <span>Solicitar proposta</span>
          </a>
        </nav>
      )}
    </header>
  );
}
