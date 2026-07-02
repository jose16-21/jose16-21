import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './presentation/pages/HomePage.tsx';
import { AnimationManager } from './infrastructure/services/AnimationManager';
import ErrorBoundary from './presentation/components/ErrorBoundary';

const ServiceDetailPage = lazy(() => import('./presentation/pages/ServiceDetailPage.tsx'));
const ProjectDetailPage = lazy(() => import('./presentation/pages/ProjectDetailPage.tsx'));

const RouteLoadError: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-xl font-semibold text-dark">{t('common.loadError')}</p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:-translate-y-0.5 transition-all"
      >
        {t('nav.home')}
      </Link>
    </div>
  );
};

function App() {
  useEffect(() => {
    const animationManager = new AnimationManager();
    return () => {
      animationManager.resetAnimations();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/servicios/:id"
          element={
            <ErrorBoundary fallback={<RouteLoadError />}>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                </div>
              }>
                <ServiceDetailPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/proyectos/:slug"
          element={
            <ErrorBoundary fallback={<RouteLoadError />}>
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                </div>
              }>
                <ProjectDetailPage />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
