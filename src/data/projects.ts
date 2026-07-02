import { ProjectsData } from '../domain/entities/Project';

export const projectsData: ProjectsData = {
  projects: [
    {
      id: 1,
      slug: 'sistema-gestion-empresarial-don-julio',
      title: 'Sistema de Gestión Empresarial',
      company: 'Distribuidora Don Julio S.A. y Distribuidora Anabel S.A.',
      country: 'Guatemala',
      countryFlag: '🇬🇹',
      period: '2019 - 2025',
      description: 'Transformación digital de extremo a extremo para dos distribuidoras: aplicativo web y móvil para administración y ventas, con facturación electrónica integrada a la SAT e infraestructura propia en AWS.',
      outcome: 'Digitalizó la operación de ventas y la facturación ante la SAT, reemplazando procesos manuales por una plataforma unificada que el negocio opera desde 2019.',
      achievements: [
        'Desarrollo de arquitectura Micro frontend con Angular',
        'Aplicación móvil híbrida con Ionic Framework',
        'Infraestructura en AWS (EC2, Route 53, RDS)',
        'Orquestador Kubernetes con Docker'
      ],
      technologies: [
        'Angular 10',
        'Ionic',
        'Node.js',
        'Express.js',
        'Kubernetes',
        'Docker',
        'AWS',
        'MySQL',
        'SQL Server',
        'Jenkins'
      ],
      icon: 'fa-store',
      imageUrl: '/images/project-don-julio.png',
      delay: 0
    },
    {
      id: 2,
      slug: 'plataforma-ecommerce-multi-cliente-quickcomm',
      title: 'Plataforma Multi-Cliente',
      company: 'QuickComm Company',
      country: 'Perú',
      countryFlag: '🇵🇪',
      period: '2022 - 2024',
      url: 'https://www.linkedin.com/company/gravitymarketplace/',
      description: 'Plataforma multi-cliente para marcas en Perú y Argentina (Dyner Club, Shopstart, Vía Compras), con arquitectura de microservicios escalable, integración a couriers y mensajería event-driven.',
      outcome: 'Permitió operar varias marcas de e-commerce sobre una misma plataforma, con despachos integrados a couriers y facturación electrónica automatizada.',
      achievements: [
        'Integración con sistemas de Courier (Envíame, Urbano)',
        'Implementación de factura electrónica',
        'IaC con Terraform en Azure',
        'Configuración de Apache Kafka'
      ],
      technologies: [
        '.NET Core',
        'C#',
        'SQL Server',
        'Docker',
        'Azure',
        'Terraform',
        'Apache Kafka',
        'Microservicios'
      ],
      icon: 'fa-project-diagram',
      imageUrl: '/images/project-gravity.png',
      delay: 100
    },
    {
      id: 3,
      slug: 'gestion-facturacion-electronica-menoo',
      title: 'App de Gestión y Facturación Electrónica',
      company: 'Menoo App',
      country: 'Uruguay',
      countryFlag: '🇺🇾',
      period: '2021 - 2022',
      url: 'https://www.linkedin.com/company/menoouy/',
      description: 'Aplicativo SPA y móvil para gestión administrativa, panel de super admin y factura electrónica, sobre infraestructura AWS con CI/CD y control de calidad de código.',
      outcome: 'Centralizó la gestión administrativa y la facturación en una sola herramienta, con despliegues continuos y control de calidad de código automatizado.',
      achievements: [
        'SPA con Ionic Angular',
        'Infraestructura en AWS (EC2, ELB, Route 53)',
        'CI/CD con Jenkins y GitHub Actions',
        'Integración con Firebase'
      ],
      technologies: [
        'Angular',
        'Ionic',
        '.NET Core',
        'C#',
        'AWS',
        'SQL Server',
        'Firebase',
        'Jenkins',
        'SonarQube'
      ],
      icon: 'fa-mobile-alt',
      imageUrl: '/images/project-menoo.png',
      delay: 200
    },
    {
      id: 4,
      slug: 'sistemas-financieros-creditos-banrural',
      title: 'Sistemas Financieros',
      company: 'Technology Center',
      country: 'Guatemala',
      countryFlag: '🇬🇹',
      period: '2021 - 2022',
      url: 'https://www.tsc.com.gt/',
      description: 'Aplicativos financieros para gestión de créditos con integración a la banca virtual de Banrural, construidos con arquitectura limpia en Angular y .NET Core.',
      outcome: 'Conectó la gestión de créditos directamente con la banca virtual de Banrural, sobre una arquitectura limpia pensada para mantenerse y escalar.',
      achievements: [
        'SPA con arquitectura limpia en Angular 12',
        'REST API con Clean Architecture',
        'Integración con Web Services SOAP/REST',
        'Cosmos DB y SQL Server'
      ],
      technologies: [
        'Angular 12',
        'TypeScript',
        '.NET Core',
        'C#',
        'Cosmos DB',
        'SQL Server',
        'Azure DevOps',
        'Clean Architecture'
      ],
      icon: 'fa-university',
      imageUrl: '/images/project-tsc.png',
      delay: 300
    },
    {
      id: 5,
      slug: 'ventanilla-unica-virtual-villa-nueva',
      title: 'Ventanilla Única Virtual',
      company: 'USAID / Municipalidad Villa Nueva',
      country: 'Guatemala',
      countryFlag: '🇬🇹',
      period: '2021',
      url: 'https://www.villanueva.gob.gt/ventanilla-unica-municipal/',
      description: 'Ventanilla única virtual para trámites municipales, desarrollada para la Municipalidad de Villa Nueva con apoyo de USAID, integrada a sistemas legados vía servicios web SOAP.',
      outcome: 'Habilitó a los ciudadanos a realizar trámites municipales en línea, reduciendo gestiones presenciales mediante integración con los sistemas existentes.',
      achievements: [
        'Desarrollo e integración con servicios SOAP',
        'Frontend con Angular',
        'Backend con .NET Core',
        'Gestión de trámites digitales'
      ],
      technologies: [
        '.NET Core',
        'C#',
        'Angular',
        'SQL Server',
        'SOAP',
        'JavaScript',
        'TypeScript'
      ],
      icon: 'fa-city',
      imageUrl: '/images/project-villanueva.png',
      delay: 400
    }
  ]
};
