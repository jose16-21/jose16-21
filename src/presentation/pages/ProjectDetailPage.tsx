import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation.tsx';
import Footer from '../components/Footer.tsx';
import { projectsData } from '../../data/projects';
import { faIconMap } from '../utils/faIconMap';
import { usePageSeo, breadcrumbJsonLd, SITE_URL } from '../utils/seo';
import {
  FaCheck, FaLayerGroup, FaBullseye, FaChevronRight, FaExternalLinkAlt, FaPaperPlane, FaTrophy
} from 'react-icons/fa';

const ProjectDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const related = project
    ? projectsData.projects.filter((p) => p.slug !== project.slug).slice(0, 3)
    : [];

  usePageSeo({
    title: project
      ? `${project.title} — ${project.company} | Juan José Hernández`
      : 'Proyecto no encontrado',
    description: project ? project.description.slice(0, 300) : '',
    path: `/proyectos/${slug}`,
    image: project?.imageUrl,
    jsonLd: project
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CreativeWork',
              '@id': `${SITE_URL}/proyectos/${project.slug}#project`,
              name: project.title,
              description: project.description,
              url: `${SITE_URL}/proyectos/${project.slug}`,
              image: project.imageUrl ? `${SITE_URL}${project.imageUrl}` : undefined,
              creator: { '@id': `${SITE_URL}/#person` },
              sourceOrganization: { '@type': 'Organization', name: project.company },
              locationCreated: { '@type': 'Place', name: project.country },
              temporalCoverage: project.period,
              keywords: project.technologies.join(', ')
            },
            breadcrumbJsonLd([
              { name: 'Inicio', path: '/' },
              { name: 'Portafolio', path: '/#portafolio' },
              { name: project.title, path: `/proyectos/${project.slug}` }
            ])
          ]
        }
      : undefined
  });

  if (!project) return <Navigate to="/" replace />;

  const Icon = faIconMap[project.icon];

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="pt-16">
        <header className="relative bg-gray-900 overflow-hidden">
          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40"></div>
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
            <nav aria-label="breadcrumb" className="mb-6 text-sm text-gray-300 flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-white underline-offset-2 hover:underline">{t('nav.home')}</Link>
              <FaChevronRight aria-hidden="true" className="text-[10px]" />
              <Link to="/#portafolio" className="hover:text-white underline-offset-2 hover:underline">{t('nav.portfolio')}</Link>
              <FaChevronRight aria-hidden="true" className="text-[10px]" />
              <span className="text-white font-medium">{project.title}</span>
            </nav>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 flex-shrink-0">
                {Icon && <Icon className="text-3xl text-white" />}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{project.title}</h1>
                <p className="text-primary-foreground text-gray-300 font-medium">
                  {project.company} · {project.countryFlag} {project.country} · {project.period}
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            {project.outcome && (
              <section className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                  <FaBullseye /> {t('serviceDetail.businessOutcome')}
                </h2>
                <p className="text-gray-dark leading-relaxed">{project.outcome}</p>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold text-dark mb-3">{t('serviceDetail.description')}</h2>
              <p className="text-gray-dark leading-relaxed">{project.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2">
                <FaTrophy className="text-secondary" /> {t('portfolio.achievements')}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-dark bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <FaCheck className="text-success mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2">
                <FaLayerGroup className="text-accent" /> {t('serviceDetail.technologies')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-4">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-primary/20 shadow-lg lg:sticky lg:top-24 space-y-3">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-primary font-semibold rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaExternalLinkAlt /> {t('portfolio.viewProject')}
                </a>
              )}
              <Link
                to="/#contacto"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FaPaperPlane /> {t('serviceDetail.contactNow')}
              </Link>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="max-w-5xl mx-auto px-6 md:px-8 pb-16">
            <h2 className="text-xl font-bold text-dark mb-4">{t('portfolio.title')}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/proyectos/${p.slug}`}
                    className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-primary/50 hover:shadow-lg transition-all h-full"
                  >
                    <span className="font-semibold text-dark block mb-1">{p.title}</span>
                    <span className="text-sm text-gray-medium line-clamp-2">{p.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
