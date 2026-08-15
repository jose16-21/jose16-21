import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheck, FaCopy } from 'react-icons/fa';
import { ClipboardUtils } from '../../utils';
import { CONTACT, whatsappLabel, whatsappUrl } from '../../data/contact';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    const success = await ClipboardUtils.copyToClipboard(text);
    if (success) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const footerSections = [
    {
      titleKey: 'footer.services',
      links: [
        { textKey: 'footer.links.webDev', href: '#servicios' },
        { textKey: 'footer.links.mobileApps', href: '#servicios' },
        { textKey: 'footer.links.consulting', href: '#servicios' },
        { textKey: 'footer.links.database', href: '#servicios' }
      ]
    },
    {
      titleKey: 'footer.technologies',
      links: [
        { textKey: 'footer.links.reactAngular', href: '#tecnologias' },
        { textKey: 'footer.links.nodePython', href: '#tecnologias' },
        { textKey: 'footer.links.awsCloud', href: '#tecnologias' },
        { textKey: 'footer.links.databases', href: '#tecnologias' }
      ]
    },
    {
      titleKey: 'footer.contact',
      links: [
        { icon: <FaEnvelope />, text: CONTACT.email, href: `mailto:${CONTACT.email}`, copyable: true },
        { icon: <FaWhatsapp />, text: whatsappLabel, href: whatsappUrl(), copyable: false },
        { icon: <FaMapMarkerAlt />, text: 'Guatemala', href: null, copyable: false }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-white py-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4 text-xl font-bold">Juan José Hernández</h3>
            <p className="text-gray-light mb-4 font-light leading-relaxed">{t('footer.description')}</p>
            <div className="flex gap-4 mt-4">
              <a href="mailto:ju16jo@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center transition-all hover:bg-secondary hover:text-white">
                <FaEnvelope />
                <span className="sr-only">Email: ju16jo@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/juan-jose-hernandez-gt/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center transition-all hover:bg-secondary hover:text-white">
                <FaLinkedin />
                <span className="sr-only">LinkedIn: Juan José Hernández</span>
              </a>
              <a href="https://github.com/jose16-21" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center transition-all hover:bg-secondary hover:text-white">
                <FaGithub />
                <span className="sr-only">GitHub: jose16-21</span>
              </a>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h4 className="text-white mb-4 font-semibold">{t(section.titleKey)}</h4>
              <ul className="list-none">
                {section.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    {'icon' in link ? (
                      <div className="flex items-center gap-2 justify-between group">
                        {link.href ? (
                          <a
                            href={link.href}
                            {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="flex items-center gap-2 transition-colors hover:text-secondary font-light no-underline"
                          >
                            {link.icon} {link.text}
                          </a>
                        ) : (
                          <span className="flex items-center gap-2 transition-colors font-light">
                            {link.icon} {link.text}
                          </span>
                        )}
                        {link.copyable && (
                          <button
                            className="bg-primary-light text-gray-light border-none rounded px-2 py-1 cursor-pointer transition-all flex items-center justify-center w-7 h-7 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-secondary hover:text-white active:scale-95"
                            onClick={() => copyToClipboard(link.text, `${section.titleKey}-${index}`)}
                            title={`${t('common.copied').replace('!', '')} ${link.text}`}
                          >
                            {copiedField === `${section.titleKey}-${index}` ? (
                              <FaCheck className="text-xs" />
                            ) : (
                              <FaCopy className="text-xs" />
                            )}
                          </button>
                        )}
                      </div>
                    ) : (
                      <a href={link.href} className="text-gray-light no-underline transition-colors hover:text-secondary font-light">{t((link as { textKey: string }).textKey)}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-light pt-8 text-center">
          <p className="text-gray-light m-0 font-light">&copy; 2024 Juan José Hernández. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
