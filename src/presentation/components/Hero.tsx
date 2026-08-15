import React from 'react';
import { useTranslation } from 'react-i18next';

import { FaPaperPlane, FaBriefcase, FaCheckCircle, FaEnvelope, FaLinkedinIn, FaGithub, FaWhatsapp, FaChevronDown } from 'react-icons/fa';

import { whatsappLabel, whatsappUrl } from '../../data/contact';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden" id="inicio">

      {/* Fondo ejecutivo minimalista */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradiente sutil */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        
        {/* Líneas decorativas sutiles */}
        <div className="absolute top-1/4 right-[20%] w-px h-32 bg-gradient-to-b from-transparent via-secondary/20 to-transparent"></div>
        <div className="absolute bottom-1/4 right-[15%] w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
        
        {/* Círculo decorativo */}
        <div className="absolute top-1/3 right-[10%] w-64 h-64 border border-secondary/10 rounded-full"></div>
        <div className="absolute top-1/3 right-[10%] w-48 h-48 border border-primary/10 rounded-full translate-x-8 translate-y-8"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna izquierda - Contenido principal */}
          <div className="text-center lg:text-left">
            {/* Badge de disponibilidad */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-8 border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t('hero.available')}
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              {t('hero.title')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
                {t('hero.titleHighlight')}
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            {/* Stats rápidos */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">+10</div>
                <div className="text-sm text-slate-500">{t('hero.stats.experience')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">+50</div>
                <div className="text-sm text-slate-500">{t('hero.stats.projects')}</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-slate-500">{t('hero.stats.countries')}</div>
              </div>
            </div>

            {/* Botones CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaPaperPlane className="text-sm" />
                {t('hero.cta.startProject')}
              </a>
              <a
                href="#portafolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaBriefcase className="text-sm" />
                {t('hero.cta.viewWork')}
              </a>
            </div>
          </div>

          {/* Columna derecha - Card profesional */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              {/* Card principal */}
              <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-8 border border-slate-100 w-80">
                {/* Avatar/Iniciales */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <span className="text-white text-2xl font-bold">JJH</span>
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">Juan José Hernández</h3>
                <p className="text-secondary font-medium mb-4">Senior Software Engineer</p>
                
                {/* Especialidades */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <FaCheckCircle className="text-emerald-500" />
                    <span>{t('hero.specialties.architecture')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <FaCheckCircle className="text-emerald-500" />
                    <span>{t('hero.specialties.devops')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <FaCheckCircle className="text-emerald-500" />
                    <span>{t('hero.specialties.leadership')}</span>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="flex gap-3 pt-4 border-t border-slate-100">
                  <a
                    href="mailto:ju16jo@gmail.com"
                    aria-label="Email"
                    className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-500"
                  >
                    <FaEnvelope aria-hidden="true" className="text-sm" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juan-jose-hernandez-gt/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center hover:bg-[#0077B5] hover:text-white transition-all text-slate-500"
                  >
                    <FaLinkedinIn aria-hidden="true" className="text-sm" />
                  </a>
                  <a
                    href="https://github.com/jose16-21"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all text-slate-500"
                  >
                    <FaGithub aria-hidden="true" className="text-sm" />
                  </a>
                  <a
                    href={whatsappUrl(t('contact.whatsappPrefill'))}
                    aria-label={`WhatsApp: ${whatsappLabel}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-slate-500"
                  >
                    <FaWhatsapp aria-hidden="true" className="text-sm" />
                  </a>
                </div>
              </div>

              {/* Decoración flotante */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll - más sutil */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <a href="#servicios" className="flex flex-col items-center gap-1 text-slate-400 hover:text-primary transition-colors">
          <span className="text-xs font-medium tracking-wider uppercase">{t('hero.explore')}</span>
          <FaChevronDown className="text-sm animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
