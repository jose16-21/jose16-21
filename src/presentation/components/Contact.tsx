import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaCheck, FaCopy, FaSpinner, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { ClipboardUtils } from '../../utils';
import { servicesData } from '../../data/services';
import { ServiceCategory } from '../../domain/entities/Service';

/** Mapea la categoría del servicio a las opciones del select del formulario. */
const categoryToOption: Record<ServiceCategory, string> = {
  'web-development': 'web',
  'mobile-development': 'mobile',
  'consulting': 'consultoria',
  'devops': 'devops',
  'cloud-architecture': 'devops',
  'training': 'capacitacion'
};

declare global {
  interface Window {
    grecaptcha: {
      render: (container: HTMLElement, parameters: any) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
      ready: (callback: () => void) => void;
    };
  }
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    presupuesto: '',
    servicio: '',
    mensaje: ''
  });

  // Precarga desde "Solicitar propuesta" (?service=<id>): selecciona el servicio
  // y redacta el mensaje inicial con el nombre del servicio elegido.
  useEffect(() => {
    const serviceId = new URLSearchParams(location.search).get('service');
    if (!serviceId) return;
    const service = servicesData.find((s) => s.id === serviceId);
    if (!service) return;
    setFormData((prev) => ({
      ...prev,
      servicio: categoryToOption[service.category] ?? 'consultoria',
      mensaje: prev.mensaje || t('contact.form.proposalMessage', { service: service.title })
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  const [recaptchaError, setRecaptchaError] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render && recaptchaRef.current) {
        if (widgetIdRef.current === null) {
          try {
            // Usamos la variable de entorno o un fallback directo para asegurar que funcione en producción
            // incluso si las variables de entorno no se cargaron correctamente en el build.
            const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6Lc02yMsAAAAAN3HEqAElxirU4O8cr-bGlPLw816';
            
            if (!siteKey) {
              console.error("Recaptcha Site Key no encontrada");
              return;
            }

            widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
              'sitekey': siteKey,
              'callback': () => setRecaptchaError(false)
            });
          } catch (e) {
            console.error("Error rendering recaptcha", e);
          }
        }
      }
    };

    const checkGrecaptcha = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        clearInterval(checkGrecaptcha);
        loadRecaptcha();
      }
    }, 500);

    return () => clearInterval(checkGrecaptcha);
  }, []);

  const copyToClipboard = async (text: string, field: string) => {
    const success = await ClipboardUtils.copyToClipboard(text);
    if (success) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validar reCAPTCHA
    if (window.grecaptcha && widgetIdRef.current !== null) {
      const response = window.grecaptcha.getResponse(widgetIdRef.current);
      if (!response) {
        setRecaptchaError(true);
        return;
      }
      setRecaptchaError(false);
    } else if (window.grecaptcha) {
       // Fallback si widgetId es null pero grecaptcha existe (caso raro)
       setRecaptchaError(true);
       return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Usar el proxy configurado en vite.config.ts para desarrollo
      // En producción, esto debería apuntar a la URL real si el backend permite CORS
      const apiUrl = import.meta.env.DEV ? '/api/send-email' : 'https://api.smartdevs.com.gt/send-email';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          template: "ContactFormTemplateV2",
          template_data: {
            nombre: formData.nombre,
            email: formData.email,
            empresa: formData.empresa,
            presupuesto: formData.presupuesto,
            servicio: formData.servicio,
            descripcion: formData.mensaje
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        empresa: '',
        presupuesto: '',
        servicio: '',
        mensaje: ''
      });
      
      // Reset recaptcha if exists
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
      }

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      titleKey: 'contact.info.email',
      value: 'ju16jo@gmail.com'
    },
    {
      icon: FaPhone,
      titleKey: 'contact.info.phone',
      value: '+502 3132-2197'
    },
    {
      icon: FaMapMarkerAlt,
      titleKey: 'contact.info.location',
      value: 'Guatemala'
    },
    {
      icon: FaClock,
      titleKey: 'contact.info.availability',
      valueKey: 'contact.info.schedule'
    }
  ];

  return (
    <section className="py-24 bg-white" id="contacto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">{t('contact.title')}</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">{t('contact.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <div className="space-y-6" data-aos="fade-up">
            {contactInfo.map((item) => (
              <div key={item.titleKey} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-sm text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900">{t(item.titleKey)}</h4>
                  {(item.titleKey === 'contact.info.email' || item.titleKey === 'contact.info.phone') ? (
                    <div className="flex items-center gap-2 relative group">
                      <p className="text-sm text-gray-600 m-0 cursor-pointer transition-colors hover:text-primary">{item.value}</p>
                      <button
                        className="bg-primary text-white border-none rounded p-1.5 cursor-pointer transition-all flex items-center justify-center w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-secondary hover:scale-110 active:scale-95"
                        onClick={() => copyToClipboard(item.value!, item.titleKey)}
                        title={`${t('common.copied').replace('!', '')} ${t(item.titleKey).toLowerCase()}`}
                      >
                        {copiedField === item.titleKey ? (
                          <FaCheck className="text-xs" />
                        ) : (
                          <FaCopy className="text-xs" />
                        )}
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-600 m-0">{item.valueKey ? t(item.valueKey) : item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100" data-aos="fade-up" data-aos-delay={100}>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="nombre" className="block mb-1.5 text-sm font-medium text-gray-700">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1.5 text-sm font-medium text-gray-700">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="empresa" className="block mb-1.5 text-sm font-medium text-gray-700">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label htmlFor="presupuesto" className="block mb-1.5 text-sm font-medium text-gray-700">{t('contact.form.budget')}</label>
                  <select
                    id="presupuesto"
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  >
                    <option value="">{t('contact.form.budgetPlaceholder')}</option>
                    <option value="500-2000">$500 - $2,000 USD</option>
                    <option value="2000-5000">$2,000 - $5,000 USD</option>
                    <option value="5000-10000">$5,000 - $10,000 USD</option>
                    <option value="10000+">$10,000+ USD</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="servicio" className="block mb-1.5 text-sm font-medium text-gray-700">{t('contact.form.service')}</label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                >
                  <option value="">{t('contact.form.servicePlaceholder')}</option>
                  <option value="web">{t('contact.serviceOptions.web')}</option>
                  <option value="mobile">{t('contact.serviceOptions.mobile')}</option>
                  <option value="consultoria">{t('contact.serviceOptions.consulting')}</option>
                  <option value="database">{t('contact.serviceOptions.database')}</option>
                  <option value="devops">{t('contact.serviceOptions.devops')}</option>
                  <option value="capacitacion">{t('contact.serviceOptions.training')}</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block mb-1.5 text-sm font-medium text-gray-700">{t('contact.form.message')}</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm transition-all bg-white resize-y min-h-[100px] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                ></textarea>
              </div>
              <div className="mb-4">
                <div ref={recaptchaRef}></div>
                {recaptchaError && (
                  <div id="recaptcha-error" className="text-error text-xs mt-1.5 flex items-center gap-1.5 before:content-['⚠️'] before:text-sm">
                    {t('contact.form.recaptchaError')}
                  </div>
                )}
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-primary text-white text-sm font-medium rounded-lg shadow-md transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-lg'}`}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-xs" />
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" />
                    {t('contact.form.submit')}
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200 flex items-center gap-2 animate-fade-in">
                  <FaCheckCircle />
                  {t('contact.form.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200 flex items-center gap-2 animate-fade-in">
                  <FaExclamationCircle />
                  {t('contact.form.error')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
