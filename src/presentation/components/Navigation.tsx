import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { FaPaperPlane } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      // Mostrar logo después de pasar la sección Hero (aproximadamente 600px)
      setShowLogo(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Si estamos en la página del carrito, navegar a home con hash
    if (location.pathname !== '/') {
      navigate(`/${sectionId}`);
    } else {
      // Ya estamos en home, solo hacer scroll
      const element = document.querySelector(sectionId);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav aria-label={t('nav.ariaLabel')} className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
      ? 'bg-white shadow-lg border-gray-200'
      : 'bg-white/90 backdrop-blur-sm border-gray-100'
      }`} id="navbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className={`flex items-center gap-2 cursor-pointer group transition-all duration-300 ${showLogo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-sm">JJH</span>
            </div>
          </Link>

          {/* Menú móvil desplegable */}
          <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto`}>
            <ul className="list-none flex flex-col p-4 gap-2">
              <li><a href="#inicio" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2.5 px-3 rounded-lg hover:bg-gray-lighter" onClick={(e) => handleNavClick(e, '#inicio')}>{t('nav.home')}</a></li>
              <li><a href="#servicios" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2.5 px-3 rounded-lg hover:bg-gray-lighter" onClick={(e) => handleNavClick(e, '#servicios')}>{t('nav.services')}</a></li>
              <li><a href="#tecnologias" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2.5 px-3 rounded-lg hover:bg-gray-lighter" onClick={(e) => handleNavClick(e, '#tecnologias')}>{t('nav.technologies')}</a></li>
              <li><a href="#portafolio" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2.5 px-3 rounded-lg hover:bg-gray-lighter" onClick={(e) => handleNavClick(e, '#portafolio')}>{t('nav.portfolio')}</a></li>
              <li><a href="#experiencia" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2.5 px-3 rounded-lg hover:bg-gray-lighter" onClick={(e) => handleNavClick(e, '#experiencia')}>{t('nav.experience')}</a></li>
              <li><a href="#contacto" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2.5 px-3 rounded-lg hover:bg-gray-lighter" onClick={(e) => handleNavClick(e, '#contacto')}>{t('nav.contact')}</a></li>
            </ul>

            <div className="flex items-center justify-center p-4 border-t border-gray-200">
              <LanguageSelector />
            </div>
          </div>

          {/* Menú desktop */}
          <ul className="hidden lg:flex list-none gap-6">
            <li><a href="#inicio" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2" onClick={(e) => handleNavClick(e, '#inicio')}>{t('nav.home')}</a></li>
            <li><a href="#servicios" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2" onClick={(e) => handleNavClick(e, '#servicios')}>{t('nav.services')}</a></li>
            <li><a href="#tecnologias" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2" onClick={(e) => handleNavClick(e, '#tecnologias')}>{t('nav.technologies')}</a></li>
            <li><a href="#portafolio" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2" onClick={(e) => handleNavClick(e, '#portafolio')}>{t('nav.portfolio')}</a></li>
            <li><a href="#experiencia" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2" onClick={(e) => handleNavClick(e, '#experiencia')}>{t('nav.experience')}</a></li>
            <li><a href="#contacto" className="text-gray-dark font-medium hover:text-primary transition-colors block py-2" onClick={(e) => handleNavClick(e, '#contacto')}>{t('nav.contact')}</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>

            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, '#contacto')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-lg transition-all"
            >
              <FaPaperPlane className="text-xs" aria-hidden="true" />
              {t('services.requestProposal')}
            </a>

            <button
              aria-label={t('nav.toggleMenu')}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="lg:hidden flex flex-col gap-1 w-8 h-8 items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-5 h-0.5 bg-gray-dark transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-dark transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-gray-dark transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
