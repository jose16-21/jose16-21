import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation.tsx';
import Footer from '../components/Footer.tsx';
import { servicesData } from '../../data/services';
import { faIconMap } from '../utils/faIconMap';
import { usePageSeo, breadcrumbJsonLd, SITE_URL } from '../utils/seo';
import {
  FaStar, FaInfoCircle, FaCheckDouble, FaCheck, FaLayerGroup, FaClock,
  FaPaperPlane, FaCheckCircle, FaTimesCircle, FaBullseye, FaChevronRight
} from 'react-icons/fa';

const ServiceDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const related = service
    ? servicesData.filter((s) => s.category === service.category && s.id !== service.id).slice(0, 3)
    : [];

  usePageSeo({
    title: service
      ? `${service.title} | Juan José Hernández — Tech Lead & Senior Software Engineer`
      : 'Servicio no encontrado',
    description: service ? `${service.shortDescription}. ${service.businessOutcome ?? ''}`.slice(0, 300) : '',
    path: `/servicios/${id}`,
    image: service?.imageUrl,
    jsonLd: service
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `${SITE_URL}/servicios/${service.id}#service`,
              name: service.title,
              description: service.description,
              serviceType: service.category,
              url: `${SITE_URL}/servicios/${service.id}`,
              image: service.imageUrl ? `${SITE_URL}${service.imageUrl}` : undefined,
              areaServed: 'LATAM',
              availableLanguage: ['es', 'en'],
              provider: { '@id': `${SITE_URL}/#person` },
              offers: {
                '@type': 'Offer',
                price: service.price.amount,
                priceCurrency: service.price.currency,
                availability: service.available
                  ? 'https://schema.org/InStock'
                  : 'https://schema.org/OutOfStock'
              }
            },
            breadcrumbJsonLd([
              { name: 'Inicio', path: '/' },
              { name: 'Servicios', path: '/#servicios' },
              { name: service.title, path: `/servicios/${service.id}` }
            ])
          ]
        }
      : undefined
  });

  if (!service) return <Navigate to="/" replace />;

  const Icon = faIconMap[service.icon];

  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero del servicio */}
        <header className="relative bg-gray-900 overflow-hidden">
          {service.imageUrl && (
            <img
              src={service.imageUrl}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40"></div>
          <div className="relative max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="mb-6 text-sm text-gray-300 flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-white underline-offset-2 hover:underline">{t('nav.home')}</Link>
              <FaChevronRight aria-hidden="true" className="text-[10px]" />
              <Link to="/#servicios" className="hover:text-white underline-offset-2 hover:underline">{t('nav.services')}</Link>
              <FaChevronRight aria-hidden="true" className="text-[10px]" />
              <span className="text-white font-medium">{service.title}</span>
            </nav>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 flex-shrink-0">
                {Icon && <Icon className="text-3xl text-white" />}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-2.5 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {service.category.replace('-', ' ')}
                  </span>
                  {service.featured && (
                    <span className="px-2.5 py-1 bg-accent/90 text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                      <FaStar className="text-[10px]" /> {t('services.popular')}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{service.title}</h1>
                <p className="text-gray-300 text-base md:text-lg max-w-2xl">{service.shortDescription}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido */}
        <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-8">
            {service.businessOutcome && (
              <section className="bg-primary/5 border border-primary/15 rounded-xl p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                  <FaBullseye /> {t('serviceDetail.businessOutcome')}
                </h2>
                <p className="text-gray-dark leading-relaxed">{service.businessOutcome}</p>
                {service.targetAudience && (
                  <p className="text-sm text-gray-medium mt-3">
                    <span className="font-semibold text-dark">{t('serviceDetail.audience')} </span>
                    {service.targetAudience}
                  </p>
                )}
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold text-dark mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-primary" /> {t('serviceDetail.description')}
              </h2>
              <p className="text-gray-dark leading-relaxed">{service.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2">
                <FaCheckDouble className="text-secondary" /> {t('serviceDetail.features')}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-dark bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <FaCheck className="text-success mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-dark mb-4 flex items-center gap-2">
                <FaLayerGroup className="text-accent" /> {t('serviceDetail.technologies')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-primary/20 shadow-lg lg:sticky lg:top-24">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ${service.price.amount.toLocaleString()}
                </div>
                <div className="text-sm text-gray-medium mt-1">
                  {service.price.currency} {service.price.period}
                </div>
              </div>
              {service.deliveryTime && (
                <div className="flex items-center justify-center gap-2 text-gray-dark text-sm bg-white p-3 rounded-lg border border-gray-200 mb-4">
                  <FaClock className="text-primary" />
                  <span className="font-medium">{t('serviceDetail.delivery')} {service.deliveryTime}</span>
                </div>
              )}
              <Link
                to={`/?service=${service.id}#contacto`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FaPaperPlane /> {t('services.requestProposal')}
              </Link>
              <div className={`mt-4 p-3 rounded-xl border-2 ${service.available ? 'bg-success/10 border-success/30' : 'bg-gray-100 border-gray-300'}`}>
                <div className="flex items-center gap-2 justify-center text-sm">
                  {service.available ? <FaCheckCircle className="text-success" /> : <FaTimesCircle className="text-gray-500" />}
                  <span className={`font-semibold ${service.available ? 'text-success' : 'text-gray-500'}`}>
                    {service.available ? t('serviceDetail.available') : t('serviceDetail.unavailable')}
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Servicios relacionados (enlazado interno) */}
        {related.length > 0 && (
          <div className="max-w-5xl mx-auto px-6 md:px-8 pb-16">
            <h2 className="text-xl font-bold text-dark mb-4">{t('services.title')}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/servicios/${s.id}`}
                    className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-primary/50 hover:shadow-lg transition-all h-full"
                  >
                    <span className="font-semibold text-dark block mb-1">{s.title}</span>
                    <span className="text-sm text-gray-medium line-clamp-2">{s.shortDescription}</span>
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

export default ServiceDetailPage;
