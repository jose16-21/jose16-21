import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GetProjectsUseCase } from '../../domain/use-cases/GetProjectsUseCase';
import { ProjectRepositoryImpl } from '../../infrastructure/repositories/ProjectRepositoryImpl';
import { Project } from '../../domain/entities/Project';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { faIconMap } from '../utils/faIconMap';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const repository = new ProjectRepositoryImpl();
        const useCase = new GetProjectsUseCase(repository);
        const data = await useCase.execute();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white" id="portafolio">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-gray-medium">{t('common.loading')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white" id="portafolio">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">{t('portfolio.title')}</h2>
          <p className="text-lg text-gray-medium max-w-2xl mx-auto">{t('portfolio.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md border border-gray-lighter overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary group"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              {/* Header con imagen o gradiente */}
              <div className="relative h-48 overflow-hidden">
                {project.imageUrl ? (
                  <>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      { (() => { const I = faIconMap[project.icon]; return I ? <I className="text-4xl text-white" /> : null; })() }
                    </div>
                  </div>
                )}

                {/* Badge de bandera en la esquina */}
                <div className="absolute top-3 right-3 text-3xl drop-shadow-lg" title={project.country}>
                  {project.countryFlag}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-dark flex-1">
                    <Link to={`/proyectos/${project.slug}`} className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:text-dark transition-colors"
                      title={t('portfolio.viewProject')}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
                <p className="text-sm text-primary font-semibold mb-1">{project.company}</p>
                <p className="text-xs text-gray-500 mb-3">{project.period}</p>
                <p className="text-sm text-gray-medium mb-3 line-clamp-3">{project.description}</p>
                {project.outcome && (
                  <p className="text-sm text-dark font-medium mb-4 bg-primary/5 border-l-2 border-primary pl-3 py-1.5 rounded-r">
                    {project.outcome}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-xs rounded-full transition-colors">{tech}</span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">+{project.technologies.length - 5}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
