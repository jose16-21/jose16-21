import { Service, ServiceCategory } from '../domain/entities/Service';

export interface CategoryConfig {
  id: ServiceCategory;
  icon: string;
  label: string;
}

export const categoryConfigs: CategoryConfig[] = [
  { id: 'web-development', icon: 'fa-code', label: 'Web' },
  { id: 'mobile-development', icon: 'fa-mobile-alt', label: 'Móvil' },
  { id: 'devops', icon: 'fa-infinity', label: 'DevOps' },
  { id: 'cloud-architecture', icon: 'fa-cloud', label: 'Cloud' },
  { id: 'consulting', icon: 'fa-lightbulb', label: 'Consultoría' },
  { id: 'training', icon: 'fa-graduation-cap', label: 'Formación' }
];

export const serviceCategories: ServiceCategory[] = categoryConfigs.map(c => c.id);

export const servicesData: Service[] = [
  {
    id: 'mcp-starter',
    title: 'MCP Starter — Tu Primer Servidor MCP',
    shortDescription: 'Tu primer servidor MCP conectado a tus datos, en 2-3 semanas y a precio fijo',
    businessOutcome: 'En menos de un mes tu equipo consulta tus propios sistemas y datos con IA, de forma segura y sin depender de demos: un servidor MCP en producción, conectado a una fuente real de tu negocio, con casos de uso funcionando.',
    targetAudience: 'Empresas que quieren empezar con IA aplicada sobre sus datos reales, con alcance y precio cerrados en lugar de un proyecto abierto por horas.',
    description: 'Paquete de precio fijo para arrancar con IA aplicada: diseño, construyo y despliego tu primer servidor MCP (Model Context Protocol) conectado a una fuente de datos o sistema de tu empresa (base de datos, API interna, CRM, documentos). Incluye definición del caso de uso de mayor impacto, control de accesos, despliegue y capacitación del equipo. Es la versión productizada del trabajo que realizo como Tech Lead integrando IA a productos en producción.',
    category: 'consulting',
    icon: 'fa-rocket',
    features: [
      'Alcance y precio cerrados: sin sorpresas de horas',
      'Un servidor MCP conectado a una fuente de datos real',
      'Caso de uso priorizado por impacto de negocio',
      'Control de accesos y manejo seguro de credenciales',
      'Despliegue en tu infraestructura o cloud',
      'Capacitación del equipo para usarlo y extenderlo',
      'Documentación y entrega de código fuente'
    ],
    technologies: ['MCP', 'Claude', 'Node.js', 'TypeScript', 'Docker', 'OpenAI / LLMs'],
    price: {
      type: 'fixed',
      amount: 3000,
      currency: 'USD',
      period: 'precio fijo por paquete'
    },
    deliveryTime: '2-3 semanas',
    featured: true,
    available: true,
    imageUrl: '/images/devops.png'
  },
  {
    id: 'fractional-tech-lead',
    title: 'Fractional Tech Lead (Retainer Mensual)',
    shortDescription: 'Un Tech Lead senior en tu equipo, sin el costo de una contratación full-time',
    businessOutcome: 'Tu equipo gana dirección técnica continua: decisiones de arquitectura acertadas, código revisado, prioridades claras y menos deuda técnica. Obtienes liderazgo probado en banca y fintech por una fracción del costo de contratarlo a tiempo completo.',
    targetAudience: 'Startups y empresas con equipo de desarrollo propio que necesitan liderazgo técnico senior recurrente, sin abrir una posición full-time.',
    description: 'Acompañamiento mensual como Tech Lead de tu equipo: revisión de arquitectura y código, decisiones técnicas, mentoría de desarrolladores, planificación con negocio y guardia sobre la calidad de lo que sale a producción. Es el rol que he ejercido liderando equipos en banca, fintech y productos SaaS durante más de 10 años, disponible por horas semanales fijas y renovable mes a mes.',
    category: 'consulting',
    icon: 'fa-user-tie',
    features: [
      'Horas semanales fijas de liderazgo técnico',
      'Revisión de arquitectura y decisiones técnicas',
      'Code review y estándares de calidad',
      'Mentoría del equipo de desarrollo',
      'Planificación técnica alineada al negocio',
      'Participación en reuniones clave (planning, demos)',
      'Renovable mes a mes, sin permanencia forzada'
    ],
    technologies: ['Arquitectura', 'Liderazgo técnico', 'Cloud', 'DevOps', 'IA aplicada'],
    price: {
      type: 'fixed',
      amount: 2400,
      currency: 'USD',
      period: 'por mes (retainer)'
    },
    deliveryTime: 'Inicio en 1 semana',
    featured: true,
    available: true,
    imageUrl: '/images/consulting.png'
  },
  {
    id: 'web-app-development',
    title: 'Desarrollo de Aplicaciones Web',
    shortDescription: 'Convierte una idea en un producto web en producción, listo para escalar',
    businessOutcome: 'Lanzas tu producto al mercado con una base técnica sólida que crece contigo: rápida, segura y preparada para sumar usuarios sin reescribir todo a los seis meses.',
    targetAudience: 'Startups y empresas que necesitan un producto digital confiable, y áreas de negocio que quieren digitalizar un proceso.',
    description: 'Diseño y construyo aplicaciones web completas, desde la definición de la arquitectura hasta el despliegue en producción. Aplico Clean Architecture y principios SOLID —los mismos que uso liderando equipos en banca y fintech— para que el producto sea mantenible y escalable, no solo una demo bonita. Stack moderno (React, Vue, Angular, Next.js), integración con APIs y nube, y entrega continua para iterar con seguridad.',
    category: 'web-development',
    icon: 'fa-code',
    features: [
      'Aplicaciones SPA escalables (React, Vue o Angular)',
      'Arquitectura limpia y mantenible (SOLID, capas)',
      'Integración con APIs RESTful',
      'Diseño responsive y mobile-first',
      'Optimización de rendimiento y SEO',
      'Despliegue automatizado CI/CD',
      'Documentación técnica y soporte incluido'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'],
    price: {
      type: 'project',
      amount: 2500,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '4-8 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/web-development.png'
  },
  {
    id: 'mobile-app-development',
    title: 'Desarrollo de Aplicaciones Móviles',
    shortDescription: 'Una sola base de código, presencia en iOS y Android',
    businessOutcome: 'Llegas a tus clientes en su celular con una app de calidad nativa, sin pagar dos desarrollos separados ni esperar el doble de tiempo.',
    targetAudience: 'Negocios que quieren un canal móvil propio: delivery, fintech, servicios y comercios con clientes recurrentes.',
    description: 'Desarrollo aplicaciones móviles multiplataforma con React Native: una experiencia fluida y nativa en iOS y Android desde una única base de código, lo que reduce costo y tiempo de mantenimiento. Tengo experiencia integrando apps con backends en producción (facturación electrónica, couriers, banca) y publicándolas en las tiendas.',
    category: 'mobile-development',
    icon: 'fa-mobile-alt',
    features: [
      'iOS y Android desde una única base de código',
      'React Native multiplataforma',
      'Integración con servicios backend y pagos',
      'Notificaciones push y actualizaciones OTA',
      'Autenticación y seguridad',
      'Publicación en App Store y Google Play',
      'Analytics y monitoreo integrado'
    ],
    technologies: ['React Native', 'Firebase', 'Redux'],
    price: {
      type: 'project',
      amount: 3500,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '6-10 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/mobile-development.png'
  },
  {
    id: 'devops-automation',
    title: 'DevOps y Automatización',
    shortDescription: 'Despliega más rápido, con menos errores y menos noches en vela',
    businessOutcome: 'Tu equipo pasa de despliegues manuales y riesgosos a entregas automáticas, repetibles y monitoreadas. Menos incidentes en producción y problemas detectados antes de que los note el cliente.',
    targetAudience: 'Equipos de desarrollo que despliegan a mano, sufren caídas inesperadas o no tienen visibilidad de qué pasa en producción.',
    description: 'Implemento prácticas DevOps de extremo a extremo: pipelines CI/CD, infraestructura como código y observabilidad. He operado microservicios de alta concurrencia con on-call real (Opsgenie, Prometheus, Grafana, Datadog, CloudWatch), así que la automatización que entrego está pensada para sostener producción, no solo para verse bien en una diapositiva.',
    category: 'devops',
    icon: 'fa-infinity',
    features: [
      'Pipelines CI/CD (GitHub Actions, Azure DevOps, Jenkins)',
      'Infraestructura como código (Terraform, CloudFormation)',
      'Contenedores y Kubernetes con autoscaling (HPA)',
      'Observabilidad: métricas, logs, dashboards y alertas',
      'Gestión segura de secretos y configuraciones',
      'Optimización de costos cloud',
      'Documentación de procesos y traspaso al equipo'
    ],
    technologies: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'Grafana'],
    price: {
      type: 'hourly',
      amount: 80,
      currency: 'USD',
      period: 'por hora'
    },
    deliveryTime: '2-4 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/devops.png'
  },
  {
    id: 'observability-monitoring',
    title: 'Observabilidad y Monitoreo (SRE)',
    shortDescription: 'Entérate de los problemas antes que tu cliente',
    businessOutcome: 'Dejas de enterarte de las caídas por las quejas de los usuarios. Tienes visibilidad en tiempo real de tu plataforma, alertas que avisan a tiempo y datos para decidir dónde invertir. Menos tiempo caído, menos pérdidas.',
    targetAudience: 'Empresas con sistemas en producción que no saben qué pasa hasta que algo falla, o que sufren caídas sin causa clara.',
    description: 'Implemento observabilidad de extremo a extremo —logs, métricas, dashboards y alertas— sobre Grafana, Prometheus, CloudWatch, Datadog, Loki y cAdvisor, con guardias on-call estilo Opsgenie. Es justo lo que he montado en producción para delivery de alta concurrencia (Rappi), integraciones bancarias (Finerio) y plataformas retail, mejorando la detección temprana de fallos. El resultado es operación bajo control, no a ciegas.',
    category: 'devops',
    icon: 'fa-heartbeat',
    features: [
      'Centralización de logs (Loki, CloudWatch, LogDNA)',
      'Métricas de aplicación e infraestructura (Prometheus, cAdvisor)',
      'Dashboards de latencia, tráfico y recursos (Grafana)',
      'Alertas accionables y reducción de ruido',
      'Monitoreo de errores y performance (Datadog, SignalFX)',
      'Definición de SLIs/SLOs y guardias on-call (Opsgenie)',
      'Detección temprana de fallos en integraciones críticas',
      'Capacitación del equipo en la operación'
    ],
    technologies: ['Grafana', 'Prometheus', 'CloudWatch', 'Datadog', 'Loki', 'cAdvisor', 'Opsgenie'],
    price: {
      type: 'project',
      amount: 2800,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '3-5 semanas',
    featured: true,
    available: true,
    imageUrl: '/images/devops.png'
  },
  {
    id: 'cloud-architecture',
    title: 'Arquitectura Cloud',
    shortDescription: 'Una nube que escala con tu negocio sin disparar la factura',
    businessOutcome: 'Tu plataforma soporta picos de demanda sin caerse, cumple con seguridad, y solo pagas por lo que usas. Diseñada para crecer sin rehacerla.',
    targetAudience: 'Empresas que migran de servidores propios a la nube, o que necesitan que su sistema actual aguante más usuarios con alta disponibilidad.',
    description: 'Diseño arquitecturas cloud-native escalables, seguras y eficientes en costo sobre AWS, Azure o GCP. He construido infraestructura multi-AZ con EKS/AKS, autoscaling y RBAC para entornos de banca y fintech, donde la disponibilidad y el cumplimiento no son negociables. Acompaño desde la migración hasta la optimización continua de recursos.',
    category: 'cloud-architecture',
    icon: 'fa-cloud',
    features: [
      'Arquitecturas cloud-native (AWS, Azure, GCP)',
      'Migración de on-premise a la nube',
      'Microservicios y serverless',
      'Alta disponibilidad y disaster recovery',
      'Seguridad, IAM/RBAC y compliance',
      'Auto-scaling y optimización de costos',
      'Diseño multi-cloud cuando aplica'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Serverless', 'Lambda'],
    price: {
      type: 'project',
      amount: 4000,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '4-6 semanas',
    featured: true,
    available: true,
    imageUrl: '/images/cloud-architecture.png'
  },
  {
    id: 'legacy-modernization',
    title: 'Modernización de Sistemas Legacy',
    shortDescription: 'Moderniza tu sistema crítico sin detener la operación',
    businessOutcome: 'Conviertes ese sistema antiguo que nadie quiere tocar en una plataforma mantenible y escalable, migrando por etapas y sin apagar el negocio. Reduces costos de mantenimiento y el riesgo de depender de tecnología obsoleta.',
    targetAudience: 'Empresas con monolitos, sistemas legacy o core bancario difíciles de mantener, que necesitan evolucionar sin un "big bang" arriesgado.',
    description: 'Modernizo sistemas legacy y monolitos hacia arquitecturas de microservicios, con migración por fases para no interrumpir la operación. Tengo experiencia real migrando core bancario y modelos de datos, e integrando plataformas legacy (AS400, Broker, 390) vía servicios web. Aplico Clean Architecture, contenedores y CI/CD para que el sistema resultante sea sostenible y el equipo pueda mantenerlo con confianza.',
    category: 'cloud-architecture',
    icon: 'fa-sync',
    features: [
      'Evaluación del sistema actual y plan de migración por fases',
      'Estrangulamiento gradual del monolito (strangler pattern)',
      'Migración a microservicios y contenedores',
      'Integración con sistemas legacy (AS400, SOAP, WSDL)',
      'Migración y modelado de bases de datos',
      'Pruebas y CI/CD para despliegues seguros',
      'Estrategia de rollback y continuidad operativa',
      'Documentación y traspaso de conocimiento al equipo'
    ],
    technologies: ['.NET Core', 'C#', 'Node.js', 'Docker', 'Kubernetes', 'SQL Server', 'REST / SOAP'],
    price: {
      type: 'project',
      amount: 7500,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '10-16 semanas',
    featured: true,
    available: true,
    imageUrl: '/images/cloud-architecture.png'
  },
  {
    id: 'ai-mcp-integration',
    title: 'Integración de IA y Agentes (MCP)',
    shortDescription: 'Conecta IA a tus sistemas y procesos reales, no a un chatbot genérico',
    businessOutcome: 'Tu equipo automatiza tareas repetitivas y consulta tus propios datos con IA, con agentes conectados de forma segura a tus herramientas internas. Productividad medible sin exponer información sensible.',
    targetAudience: 'Empresas y equipos técnicos que quieren aplicar IA a su flujo de trabajo o producto, más allá de un asistente de chat aislado.',
    description: 'Diseño y despliego servidores MCP (Model Context Protocol), agentes y skills que conectan modelos de IA con tus sistemas, datos y herramientas reales. Es exactamente lo que implemento hoy como Tech Lead: integrar IA al ciclo de desarrollo y a productos en producción (Claude Code, Codex, GitHub Copilot y agentes a medida), con foco en seguridad, control de accesos y resultados concretos, no en demos.',
    category: 'consulting',
    icon: 'fa-robot',
    features: [
      'Servidores MCP a medida conectados a tus sistemas',
      'Agentes y skills para automatizar flujos reales',
      'Integración de IA al ciclo de desarrollo del equipo',
      'Acceso seguro a datos y herramientas internas',
      'Casos de uso priorizados por impacto de negocio',
      'Buenas prácticas de seguridad y control de accesos',
      'Capacitación del equipo en el uso de las herramientas'
    ],
    technologies: ['MCP', 'Claude', 'Node.js', 'TypeScript', 'Python', 'OpenAI / LLMs'],
    price: {
      type: 'hourly',
      amount: 110,
      currency: 'USD',
      period: 'por hora'
    },
    deliveryTime: '3-6 semanas',
    featured: true,
    available: true,
    imageUrl: '/images/devops.png'
  },
  {
    id: 'tech-consulting',
    title: 'Consultoría Tecnológica',
    shortDescription: 'Decisiones técnicas correctas antes de invertir en construir',
    businessOutcome: 'Evitas decisiones tecnológicas costosas: eliges el stack adecuado, detectas riesgos a tiempo y obtienes una hoja de ruta clara que tu equipo (o tus proveedores) pueden ejecutar con confianza.',
    targetAudience: 'Fundadores y gerentes que necesitan una segunda opinión experta, y equipos que quieren auditar o mejorar lo que ya tienen.',
    description: 'Asesoría estratégica en tecnología y arquitectura de software con foco en el negocio. Reviso arquitecturas, audito código, ayudo a elegir el stack, identifico cuellos de botella y mentorizo equipos. Aporto más de 10 años liderando proyectos en producción y equipos multinacionales en Latinoamérica, traduciendo lo técnico a decisiones de negocio claras.',
    category: 'consulting',
    icon: 'fa-lightbulb',
    features: [
      'Auditoría de código y arquitectura',
      'Selección de stack tecnológico',
      'Diagnóstico de rendimiento y escalabilidad',
      'Evaluación de seguridad y riesgos',
      'Mentoría técnica de equipos',
      'Hoja de ruta y planificación priorizada',
      'Recomendaciones estratégicas accionables'
    ],
    technologies: ['Arquitectura', 'Best Practices', 'Cloud', 'Architecture Patterns'],
    price: {
      type: 'hourly',
      amount: 100,
      currency: 'USD',
      period: 'por hora'
    },
    deliveryTime: 'Flexible',
    featured: false,
    available: true,
    imageUrl: '/images/consulting.png'
  },
  {
    id: 'technical-training',
    title: 'Capacitación Técnica',
    shortDescription: 'Sube el nivel de tu equipo con formación práctica y aplicada',
    businessOutcome: 'Tu equipo adopta tecnologías y buenas prácticas modernas más rápido, reduce deuda técnica y gana autonomía. Conocimiento que queda en la empresa, no en un proveedor externo.',
    targetAudience: 'Equipos de desarrollo y empresas que quieren actualizar a su gente en stack moderno, cloud o DevOps.',
    description: 'Workshops y bootcamps personalizados sobre tecnologías modernas, arquitectura, DevOps y metodologías ágiles. Sesiones prácticas hands-on basadas en escenarios reales de producción, no en teoría de manual. Diseño el contenido a la medida del nivel y los objetivos de tu equipo.',
    category: 'training',
    icon: 'fa-graduation-cap',
    features: [
      'Contenido a medida del nivel del equipo',
      'React, Node.js, TypeScript y stack moderno',
      'DevOps y Cloud para desarrolladores',
      'Arquitectura de software y Clean Code',
      'Metodologías ágiles',
      'Sesiones prácticas hands-on',
      'Material didáctico incluido'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'Docker', 'AWS'],
    price: {
      type: 'fixed',
      amount: 1500,
      currency: 'USD',
      period: 'por workshop (2 días)'
    },
    deliveryTime: '2-3 días',
    featured: false,
    available: true,
    imageUrl: '/images/consulting.png'
  },
  {
    id: 'api-development',
    title: 'Desarrollo de APIs',
    shortDescription: 'El motor que conecta tus apps, socios y sistemas',
    businessOutcome: 'Obtienes APIs seguras y bien documentadas que tus apps, integraciones y socios pueden consumir con confianza, listas para escalar sin convertirse en un cuello de botella.',
    targetAudience: 'Productos que necesitan un backend sólido, o empresas que deben exponer/consumir integraciones con terceros (bancos, pagos, couriers).',
    description: 'Construyo APIs REST robustas con Node.js, NestJS, Express o Python. He desarrollado integraciones críticas con bancos y plataformas de pago (Open Banking, facturación SAT, couriers), donde la seguridad, el versionado y la documentación son esenciales. Entrego con autenticación, testing y despliegue en contenedores.',
    category: 'web-development',
    icon: 'fa-plug',
    features: [
      'APIs RESTful con buenas prácticas',
      'Autenticación y autorización (JWT, OAuth)',
      'Documentación automática con Swagger',
      'Versionado, rate limiting y caching',
      'Integraciones con terceros (pagos, banca)',
      'Testing automatizado',
      'Despliegue en contenedores'
    ],
    technologies: ['Node.js', 'NestJS', 'Express', 'PostgreSQL'],
    price: {
      type: 'project',
      amount: 1800,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '3-5 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/web-development.png'
  },
  {
    id: 'open-banking-integration',
    title: 'Integración Bancaria y Open Banking',
    shortDescription: 'Conecta tu producto con los datos financieros de tus usuarios',
    businessOutcome: 'Tu plataforma accede de forma segura a la información bancaria de tus clientes —cuentas, movimientos, productos— para ofrecer scoring, agregación financiera o conciliación, sin que tengas que negociar con cada banco por separado.',
    targetAudience: 'Fintechs, prestamistas, plataformas de pagos y empresas que necesitan datos bancarios de sus usuarios bajo Open Banking / Open Finance.',
    description: 'Diseño e implemento integraciones de Open Banking / Open Finance: agregación de datos financieros, conexión con bancos y consolidación de productos del cliente. He construido en producción crawlers y scrapers financieros, bots de autenticación contra portales bancarios y estrategias anti-bloqueo (rotación de IP, manejo de sesiones) integrando con bancos en Colombia, México y Chile (Bancolombia y otros), con arquitectura hexagonal y observabilidad para sostener integraciones críticas.',
    category: 'web-development',
    icon: 'fa-university',
    features: [
      'Agregación de datos financieros (cuentas, movimientos, tarjetas)',
      'Integración vía APIs de Open Banking / Open Finance',
      'Crawlers y scrapers financieros cuando no hay API',
      'Bots de autenticación segura contra portales bancarios',
      'Estrategias anti-bloqueo (rotación de IP, sesiones)',
      'Arquitectura hexagonal / Clean Architecture',
      'Observabilidad y alertas sobre las integraciones',
      'Cumplimiento y manejo seguro de credenciales'
    ],
    technologies: ['C#', 'Python', 'AWS Lambda', 'Open Banking APIs', 'PostgreSQL', 'Terraform'],
    price: {
      type: 'project',
      amount: 5000,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '6-10 semanas',
    featured: true,
    available: true,
    imageUrl: '/images/web-development.png'
  },
  {
    id: 'e-invoicing-sat',
    title: 'Facturación Electrónica (SAT / e-Factura)',
    shortDescription: 'Factura en regla, integrada directo a tu sistema',
    businessOutcome: 'Tu negocio emite facturas electrónicas válidas ante la SAT directamente desde tu sistema, sin procesos manuales ni portales aparte. Cumples con la normativa y le quitas fricción a cada venta.',
    targetAudience: 'Comercios, distribuidoras y plataformas en Guatemala/LATAM que necesitan emitir factura electrónica integrada a su operación.',
    description: 'Integro facturación electrónica (e-Factura / SAT) directamente en tus aplicaciones web y móviles, automatizando la emisión, anulación y consulta de documentos. Lo he implementado de extremo a extremo para distribuidoras y plataformas retail (Don Julio, Menoo, Shopstart), conectándolo con el flujo de ventas para que facturar sea un paso transparente dentro del proceso, no un trámite separado.',
    category: 'web-development',
    icon: 'fa-file-invoice',
    features: [
      'Emisión, anulación y consulta de documentos electrónicos',
      'Integración con el régimen de la SAT (Guatemala)',
      'Conexión directa con tu flujo de ventas / e-commerce',
      'Certificación con proveedores autorizados',
      'Manejo de contingencias y reintentos',
      'Reportería y respaldo de documentos',
      'APIs reutilizables para web y móvil',
      'Documentación y soporte de puesta en marcha'
    ],
    technologies: ['.NET Core', 'C#', 'Node.js', 'REST API', 'SQL Server', 'Angular / React'],
    price: {
      type: 'project',
      amount: 1500,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '2-4 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/web-development.png'
  },
  {
    id: 'ecommerce-solutions',
    title: 'Soluciones E-commerce',
    shortDescription: 'Vende en línea con una tienda que tú controlas de punta a punta',
    businessOutcome: 'Pones tu catálogo a vender 24/7 con pagos integrados y un panel para gestionar todo sin depender de un técnico. Optimizada para que más visitantes terminen comprando.',
    targetAudience: 'Comercios y marcas que quieren vender en línea con control total de su tienda, inventario y datos.',
    description: 'Desarrollo plataformas e-commerce completas: catálogo, carrito, pasarelas de pago (Stripe, PayPal, MercadoPago), panel de administración y reportes. Con experiencia previa en transformación digital de distribuidoras —incluida facturación electrónica— construyo tiendas pensadas para operar de verdad, no solo para verse bien.',
    category: 'web-development',
    icon: 'fa-shopping-cart',
    features: [
      'Catálogo de productos dinámico',
      'Carrito y checkout optimizados para conversión',
      'Pagos con Stripe, PayPal y MercadoPago',
      'Panel de administración y gestión de inventario',
      'Cupones, descuentos y promociones',
      'Reportes de ventas y analytics',
      'SEO optimizado para productos'
    ],
    technologies: ['Next.js', 'React', 'Stripe', 'PostgreSQL', 'Redis'],
    price: {
      type: 'project',
      amount: 3200,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '6-8 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/web-development.png'
  },
  {
    id: 'cms-strapi-aws',
    title: 'CMS Headless con Strapi en AWS',
    shortDescription: 'Tu equipo publica contenido solo; la infraestructura se encarga del resto',
    businessOutcome: 'Tu área de marketing o contenido publica sin depender de desarrollo, sobre una infraestructura enterprise en AWS que entrega rápido en todo el mundo, escala sola y se mantiene segura.',
    targetAudience: 'Empresas con necesidades serias de contenido (medios, catálogos, sitios corporativos) que requieren rendimiento, seguridad y escalabilidad reales.',
    description: 'Implemento Strapi CMS headless con arquitectura enterprise en AWS: CloudFront como CDN global, contenedores en ECS Fargate, Aurora PostgreSQL Serverless, S3 para media y seguridad gestionada de extremo a extremo. Todo desplegado con Terraform y CI/CD para que sea reproducible y auditable. Una base sólida que separa la gestión de contenido de la complejidad de la infraestructura.',
    category: 'web-development',
    icon: 'fa-server',
    features: [
      'Strapi CMS headless personalizado (API REST)',
      'CloudFront CDN para distribución global',
      'ECS Fargate y Aurora PostgreSQL Serverless',
      'Almacenamiento de media en S3',
      'Autenticación, roles y panel a medida',
      'Seguridad gestionada (WAF, SSL, Secrets Manager)',
      'Auto-scaling, backups y disaster recovery',
      'Infraestructura como código (Terraform) y CI/CD'
    ],
    technologies: [
      'Strapi CMS',
      'Node.js',
      'AWS CloudFront',
      'AWS ECS Fargate',
      'AWS Aurora Serverless',
      'AWS S3',
      'Docker',
      'Terraform'
    ],
    price: {
      type: 'project',
      amount: 5500,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '8-12 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/cloud-architecture.png'
  },
  {
    id: 'iac-multi-cloud-terraform',
    title: 'Infraestructura como Código Multi-Cloud',
    shortDescription: 'Tu infraestructura versionada, reproducible y auditable en cualquier nube',
    businessOutcome: 'Dejas atrás la infraestructura configurada a mano: todo queda en código, se replica en minutos entre entornos y nubes, y cada cambio es revisable y reversible. Menos riesgo, menos dependencia de una sola persona.',
    targetAudience: 'Empresas con infraestructura creciente o multi-cloud que necesitan gobernanza, reproducibilidad y reducir el riesgo operativo.',
    description: 'Implemento infraestructura como código con Terraform para despliegues en AWS, Azure y GCP: módulos reutilizables, gestión de estado remoto, múltiples entornos y CI/CD automatizado. Es la práctica que aplico a diario gestionando infraestructura de producción. El resultado es una base gobernable, segura y documentada que tu equipo puede operar con confianza.',
    category: 'devops',
    icon: 'fa-code-branch',
    features: [
      'Módulos Terraform reutilizables y versionados',
      'Soporte multi-cloud (AWS, Azure, GCP)',
      'Estado remoto y entornos separados (dev/staging/prod)',
      'CI/CD con GitHub Actions, GitLab CI o Azure DevOps',
      'Políticas de seguridad y compliance as code',
      'Clusters Kubernetes gestionados (EKS, AKS, GKE)',
      'Detección de drift y estimación de costos',
      'Migración de infraestructura existente y capacitación'
    ],
    technologies: [
      'Terraform',
      'AWS',
      'Azure',
      'Google Cloud',
      'Kubernetes',
      'GitHub Actions',
      'Helm',
      'Python'
    ],
    price: {
      type: 'project',
      amount: 6800,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '10-14 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/devops.png'
  },
  {
    id: 'hardening-devsecops',
    title: 'Hardening y DevSecOps',
    shortDescription: 'Seguridad integrada a tu pipeline, no un parche al final',
    businessOutcome: 'Tu plataforma y tu proceso de entrega quedan endurecidos: dependencias vigiladas, secretos protegidos, contenedores escaneados y accesos bajo control. La seguridad se valida en cada despliegue, no una vez al año.',
    targetAudience: 'Equipos con sistemas en producción —especialmente banca, fintech y datos sensibles— que quieren integrar seguridad continua a su ciclo de desarrollo.',
    description: 'Endurezco aplicaciones e infraestructura aplicando desarrollo seguro y DevSecOps: análisis de código y dependencias (SAST), escaneo de contenedores, gestión de secretos, IAM/RBAC y buenas prácticas OWASP integradas al pipeline CI/CD. Es la práctica que aplico en entornos bancarios y de fintech, donde la seguridad es requisito de operación, con certificación en desarrollo seguro como respaldo.',
    category: 'consulting',
    icon: 'fa-shield-alt',
    features: [
      'Buenas prácticas OWASP en el ciclo de desarrollo',
      'Análisis de código y dependencias (SAST, SCA)',
      'Escaneo de contenedores e imágenes (Trivy)',
      'Gestión segura de secretos y credenciales',
      'Hardening de IAM/RBAC en cloud y Kubernetes',
      'Security gates integrados al pipeline CI/CD',
      'Plan de remediación priorizado por riesgo',
      'Capacitación del equipo en desarrollo seguro'
    ],
    technologies: [
      'SonarQube',
      'Snyk',
      'Trivy',
      'GitHub Actions',
      'AWS IAM',
      'Kubernetes RBAC',
      'Secrets Manager',
      'Docker'
    ],
    price: {
      type: 'project',
      amount: 2800,
      currency: 'USD',
      period: 'por proyecto'
    },
    deliveryTime: '2-3 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/devops.png'
  },
  {
    id: 'technical-training-advanced',
    title: 'Capacitación Técnica a Medida',
    shortDescription: 'Programa de formación diseñado para los objetivos de tu equipo',
    businessOutcome: 'Tu equipo cierra brechas de conocimiento concretas con un programa hecho a su medida, con ejercicios prácticos y seguimiento, para que lo aprendido se aplique de verdad.',
    targetAudience: 'Empresas que necesitan un plan de formación estructurado y evaluable para su equipo técnico.',
    description: 'Programa de formación personalizado para equipos de desarrollo, con contenido ajustado a sus objetivos, ejercicios prácticos, evaluación de competencias y seguimiento posterior. Pensado para que el aprendizaje se traduzca en mejores prácticas dentro del equipo, no en un curso que se olvida a la semana.',
    category: 'training',
    icon: 'fa-chalkboard-teacher',
    features: [
      'Programa diseñado a medida del equipo',
      'Ejercicios prácticos sobre casos reales',
      'Evaluación de competencias',
      'Material didáctico incluido',
      'Sesiones de Q&A',
      'Certificado de participación',
      'Seguimiento post-capacitación'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'DevOps'],
    price: {
      type: 'project',
      amount: 600,
      currency: 'USD'
    },
    deliveryTime: '1-2 semanas',
    featured: false,
    available: true,
    imageUrl: '/images/consulting.png'
  }
];
