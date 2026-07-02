import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Navigation from '../components/Navigation.tsx';
import Hero from '../components/Hero.tsx';
import Services from '../components/Services.tsx';
import Technologies from '../components/Technologies.tsx';
import Portfolio from '../components/Portfolio.tsx';
import Experience from '../components/Experience.tsx';
import Clients from '../components/Clients.tsx';
import Contact from '../components/Contact.tsx';
import Footer from '../components/Footer.tsx';
import { useDocumentTitle } from '../../application/hooks/useDocumentTitle';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('meta.titleHome'));
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll<Element>('[data-aos]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-aos-delay');
            if (delay) (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
      <Technologies />
      <Portfolio />
      <Experience />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
