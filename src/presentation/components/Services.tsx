import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Service, ServiceCategory } from '../../domain/entities/Service';
import { ServiceRepositoryImpl } from '../../infrastructure/repositories/ServiceRepositoryImpl';
import { GetServicesUseCase } from '../../domain/use-cases/GetServicesUseCase';
import { FaTh, FaChevronLeft, FaChevronRight, FaStar, FaCheck, FaClock, FaInfoCircle, FaPaperPlane, FaInbox, FaChevronRight as FaArrow } from 'react-icons/fa';
import { faIconMap } from '../utils/faIconMap';
import { CategoryConfig } from '../../domain/repositories/ServiceRepository';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState<Service[]>([]);
  const [categoryConfigs, setCategoryConfigs] = useState<CategoryConfig[]>([]);
  const [filter, setFilter] = useState<ServiceCategory | 'all'>('all');
  const [loading, setLoading] = useState(true);

  const serviceRepository = new ServiceRepositoryImpl();
  const getServicesUseCase = new GetServicesUseCase(serviceRepository);

  const loadServices = async (category: ServiceCategory | 'all') => {
    setLoading(true);
    try {
      const fetchedServices = category === 'all'
        ? await getServicesUseCase.execute()
        : await getServicesUseCase.execute(category);
      setServices(fetchedServices);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const configs = await getServicesUseCase.executeGetCategoryConfigs();
      setCategoryConfigs(configs);
    } catch (error) {
      console.error('Error loading categories:', error);
    }
  };

  useEffect(() => {
    loadCategories();
    loadServices(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // Con filtro "all": tarjetas completas solo para los servicios insignia;
  // el resto se lista compacto en "Otros servicios".
  const cardServices = filter === 'all' ? services.filter((s) => s.featured) : services;
  const otherServices = filter === 'all' ? services.filter((s) => !s.featured) : [];

  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">{t('services.title')}</h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Categorías con scroll horizontal en móvil */}
        <div className="mb-12 relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 pb-2 px-4 md:px-0 md:justify-center min-w-max md:min-w-0 md:flex-wrap">
              <button
                className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-all text-sm flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${filter === 'all'
                    ? 'bg-gradient-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-dark hover:bg-gray-200'
                  }`}
                onClick={() => setFilter('all')}
              >
                <FaTh className="text-xs" />
                <span className="hidden sm:inline">{t('services.categories.all')}</span>
              </button>

              {categoryConfigs.map((config) => (
                <button
                  key={config.id}
                  className={`px-3 md:px-4 py-2 rounded-lg font-medium transition-all text-sm flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${filter === config.id
                      ? 'bg-gradient-primary text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-dark hover:bg-gray-200'
                    }`}
                  onClick={() => setFilter(config.id)}
                  title={config.label}
                >
                  { (() => { const I = faIconMap[config.icon]; return I ? <I className="text-xs" /> : null; })() }
                  <span className="hidden sm:inline">{config.label}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Indicador de scroll en móvil */}
          <div className="md:hidden text-center mt-2">
            <span className="text-xs text-gray-medium">
              <FaChevronLeft className="mr-1" />
              {t('services.swipeMore')}
              <FaChevronRight className="ml-1" />
            </span>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="relative">
            {/* Grid normal en desktop, scroll horizontal en móvil */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 flex md:flex-none overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 md:px-0 scrollbar-hide">
              {cardServices.map(service => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-200 transition-all relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 snap-center flex-shrink-0 w-[85vw] md:w-auto"
                >
                  {/* Header con imagen - Más compacto en móvil */}
                  <div className="relative h-24 md:h-32 w-full overflow-hidden group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gray-900">
                      {service.imageUrl && (
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="w-full h-full object-cover opacity-80"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                    <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-between z-10">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg">
                        { (() => { const I = faIconMap[service.icon]; return I ? <I className="text-xl md:text-2xl text-white" /> : null; })() }
                      </div>

                      {service.featured && (
                        <div className="bg-accent/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                          <FaStar className="text-[10px]" />
                          {t('services.popular')}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contenido - Más compacto en móvil */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-dark mb-2 line-clamp-2 min-h-[2.5rem] md:min-h-[3.5rem]">
                      {service.title}
                    </h3>
                    <p className="text-gray-medium text-xs md:text-sm mb-4 md:mb-5 line-clamp-2 min-h-[2rem] md:min-h-[2.5rem]">
                      {service.shortDescription}
                    </p>

                    {/* Features - Solo las primeras 3 */}
                    <ul className="list-none mb-4 md:mb-6 space-y-1.5 md:space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-xs md:text-sm text-gray-dark"
                        >
                          <FaCheck className="text-success mt-0.5 md:mt-1 text-xs flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Precio y tiempo - Container con hover overlay */}
                    <div className="relative h-14 md:h-16">
                      {/* Precio normal - siempre visible */}
                      <div className="absolute inset-0 bg-gray-50 rounded-xl p-2 md:p-3 border border-gray-100 transition-opacity md:group-hover:opacity-0">
                        <div className="flex items-center justify-between h-full">
                          <div>
                            <div className="text-lg md:text-xl font-bold text-primary leading-tight">
                              ${service.price.amount.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-medium">
                              {service.price.currency}
                            </div>
                          </div>
                          {service.deliveryTime && (
                            <div className="flex items-center gap-1 md:gap-1.5 text-gray-medium text-xs bg-white px-1.5 md:px-2 py-1 rounded-lg border border-gray-200">
                              <FaClock className="text-xs" />
                              <span className="hidden sm:inline">{service.deliveryTime}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Botones de acción - aparecen en hover (solo desktop) */}
                      <div className="hidden md:flex absolute inset-0 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <Link
                          to={`/servicios/${service.id}`}
                          className="flex-1 flex items-center justify-center bg-white text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary hover:text-white transition-colors text-xs"
                        >
                          {t('services.details')}
                        </Link>
                        <Link
                          to={`/?service=${service.id}#contacto`}
                          className="flex-1 flex items-center justify-center gap-1 bg-gradient-primary text-white font-semibold rounded-lg text-xs"
                        >
                          <FaPaperPlane className="text-[10px]" />
                          {t('services.requestProposal')}
                        </Link>
                      </div>
                    </div>

                    {/* Botones de acción móvil - siempre visibles */}
                    <div className="md:hidden flex gap-2 mt-3">
                      <Link
                        to={`/servicios/${service.id}`}
                        className="flex-1 inline-flex items-center justify-center bg-white text-primary font-semibold rounded-lg border-2 border-primary py-2 text-xs"
                      >
                        <FaInfoCircle className="mr-1" />
                        {t('services.details')}
                      </Link>
                      <Link
                        to={`/?service=${service.id}#contacto`}
                        className="flex-1 inline-flex items-center justify-center bg-gradient-primary text-white font-semibold rounded-lg py-2 text-xs"
                      >
                        <FaPaperPlane className="mr-1" />
                        {t('services.requestProposal')}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicador de scroll en móvil */}
            {!loading && cardServices.length > 0 && (
              <div className="md:hidden flex justify-center gap-1 mt-4">
                {cardServices.map((_, index) => (
                  <div
                    key={index}
                    className="w-2 h-2 rounded-full bg-gray-300"
                  ></div>
                ))}
              </div>
            )}

            {/* Otros servicios — listado compacto con enlace a su página */}
            {otherServices.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold text-dark mb-4 text-center">{t('services.otherServices')}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-0">
                  {otherServices.map((service) => (
                    <li key={service.id}>
                      <Link
                        to={`/servicios/${service.id}`}
                        className="group/other flex items-center justify-between gap-3 bg-gray-50 hover:bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all p-4 h-full"
                      >
                        <div className="min-w-0">
                          <span className="font-semibold text-dark text-sm block group-hover/other:text-primary transition-colors">{service.title}</span>
                          <span className="text-xs text-gray-medium line-clamp-1">{service.shortDescription}</span>
                        </div>
                        <FaArrow className="text-gray-300 group-hover/other:text-primary text-xs flex-shrink-0 transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        {!loading && services.length === 0 && (
          <div className="text-center py-12">
            <FaInbox className="text-6xl text-gray-light mb-4" />
            <p className="text-xl text-gray-medium">{t('services.noServices')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
