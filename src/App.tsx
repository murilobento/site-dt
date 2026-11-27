import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AboutPage } from './pages/AboutPage';
import { CompliancePage } from './pages/CompliancePage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';

function getInitialRoute(): string {
  const rawHash = window.location.hash;
  if (rawHash && rawHash.startsWith('#/')) {
    return rawHash.slice(1);
  }
  return '/';
}

const ROUTE_TITLES: Record<string, string> = {
  '/': 'DT Construtora e Consultoria — Engenharia e Infraestrutura',
  '/servicos': 'Serviços e Consultoria — DT Construtora e Consultoria',
  '/obras': 'Portfólio de Obras — DT Construtora e Consultoria',
  '/sobre': 'Sobre Nós — DT Construtora e Consultoria',
  '/compliance': 'Compliance e Carreiras — DT Construtora e Consultoria',
  '/contato': 'Contato e Orçamento — DT Construtora e Consultoria',
};

export default function App() {
  const [route, setRoute] = useState<string>(getInitialRoute);
  const [contactDiscipline, setContactDiscipline] = useState<string | undefined>(undefined);

  useEffect(() => {
    const onHashChange = () => {
      const next = getInitialRoute();
      setRoute(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const [basePath, sectionAnchor] = route.split('#');

  useEffect(() => {
    if (basePath.startsWith('/obras/')) {
      document.title = 'Detalhe de Obra — DT Construtora e Consultoria';
    } else {
      document.title =
        ROUTE_TITLES[basePath] ?? 'DT Construtora e Consultoria — Engenharia e Infraestrutura';
    }

    if (sectionAnchor) {
      const timer = window.setTimeout(() => {
        const el = document.getElementById(sectionAnchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [basePath, sectionAnchor]);

  const navigate = useCallback((path: string, options?: { discipline?: string }) => {
    if (options?.discipline) {
      setContactDiscipline(options.discipline);
    } else if (path.startsWith('/contato')) {
      setContactDiscipline(undefined);
    }

    const nextHash = `#${path}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    } else {
      const [, anchor] = path.split('#');
      if (anchor) {
        const el = document.getElementById(anchor);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setRoute(path);
  }, []);

  const renderPage = () => {
    if (basePath === '/servicos') {
      return <ServicesPage onNavigate={navigate} />;
    }
    if (basePath === '/obras') {
      return <PortfolioPage onNavigate={navigate} />;
    }
    if (basePath.startsWith('/obras/')) {
      const slug = basePath.replace('/obras/', '');
      return <ProjectDetailPage slug={slug} onNavigate={navigate} />;
    }
    if (basePath === '/sobre') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (basePath === '/compliance') {
      return <CompliancePage />;
    }
    if (basePath === '/contato') {
      return <ContactPage preselectedDiscipline={contactDiscipline} />;
    }
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-light-surface text-light-on-surface font-body antialiased">
      <Header currentPath={route} onNavigate={navigate} />
      <main id="topo" className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
