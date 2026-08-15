/**
 * Punto único de configuración del canal de contacto por WhatsApp.
 *
 * El sitio ya no publica el número de teléfono como dato de contacto: el único
 * canal de mensajería visible es el enlace de WhatsApp.
 *
 * Sobre `useHandle`
 * -----------------
 * WhatsApp permite iniciar conversación por nombre de usuario en lugar de por
 * número (`https://wa.me/<usuario>`, que el redirector oficial resuelve como
 * `type=username`). El handle `@jjhernandezgt` ya está reservado, pero la
 * función se activa por país en oleadas y Guatemala todavía no está habilitada:
 * al abrir el enlace desde otro teléfono, WhatsApp responde
 * "El nombre de usuario jjhernandezgt no está en WhatsApp".
 *
 * Por eso el enlace todavía apunta al número. Cuando la oleada llegue a GT,
 * validar el enlace desde un teléfono que NO tenga el número agendado y, si
 * abre el chat, poner `useHandle: true`. Ese único cambio actualiza el enlace y
 * el texto visible en Hero, Contact y Footer.
 *
 * Nota: `index.html` (JSON-LD y bloque `<noscript>`) es estático y no lee este
 * archivo; hay que actualizarlo a mano en el mismo commit.
 */

export const CONTACT = {
  email: 'ju16jo@gmail.com',
  /** Nombre de usuario de WhatsApp, sin `@`. */
  whatsappHandle: 'jjhernandezgt',
  /** Número en formato internacional, sin `+` ni separadores. */
  whatsappPhone: '50231322197',
  /** `true` cuando el username ya resuelva para terceros. Ver comentario superior. */
  useHandle: false
} as const;

/**
 * Texto visible del canal. Mientras el username no resuelva no se publica,
 * para no exponer un handle que da error si alguien lo busca a mano.
 */
export const whatsappLabel = CONTACT.useHandle ? `@${CONTACT.whatsappHandle}` : 'WhatsApp';

/**
 * Construye el enlace click-to-chat.
 * @param text Mensaje precargado opcional (se codifica para la URL).
 */
export function whatsappUrl(text?: string): string {
  const target = CONTACT.useHandle ? CONTACT.whatsappHandle : CONTACT.whatsappPhone;
  const base = `https://wa.me/${target}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
