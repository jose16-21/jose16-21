import { ExperienceData } from '../domain/entities/Experience';

export const experiencesData: ExperienceData = {
  timeline: [
    {
      id: 1,
      period: 'Jun 2026 - Presente',
      title: 'Tech Lead & Arquitecto de Soluciones',
      company: 'dX Latam',
      country: 'Guatemala',
      countryFlag: '🇬🇹',
      remote: true,
      companyUrl: 'https://dxlatam.com/',
      companyLogo: 'https://dxlatam.com/favicon.ico',
      description: 'Lidero la ejecución técnica de proyectos estratégicos: arquitecturas de software, integraciones empresariales y soluciones cloud escalables. Actúo como referente técnico entre negocio, gestión de proyectos y equipos de desarrollo, e impulso la adopción de IA aplicada al desarrollo mediante agentes inteligentes y flujos asistidos por modelos de lenguaje.',
      skills: [
        'Arquitectura de soluciones',
        'Integraciones empresariales',
        'IA aplicada · agentes y LLMs',
        'Oracle HCM · Eloqua',
        'TypeScript',
        'Cloud & DevOps',
        'Estimaciones y análisis técnico'
      ],
      delay: 0
    },
    {
      id: 2,
      period: 'Oct 2023 - May 2026',
      title: 'Tech Lead',
      company: 'Capital Valley Tech',
      country: 'Guatemala',
      countryFlag: '🇬🇹',
      remote: true,
      companyUrl: 'https://www.capitalvalleytech.com/',
      companyLogo: 'https://www.capitalvalleytech.com/favicon.ico',
      description: 'Lideré el desarrollo end-to-end de un ATS (Applicant Tracking System) y un equipo de 5 desarrolladores. Diseñé la infraestructura sobre AWS EKS (multi-AZ, HPA, autoscaling, IAM/RBAC) con IaC en Terraform y CI/CD en GitHub Actions y Azure DevOps. Integré IA al ciclo de desarrollo, diseñando servidores MCP, agentes y skills.',
      skills: [
        'AWS EKS (multi-AZ, HPA)',
        'Terraform / IaC',
        'IA aplicada · MCP, agentes y skills',
        'Liderazgo de equipo',
        'Microservices',
        'Node.js',
        'TypeScript',
        'CI/CD Pipelines',
        'System Design'
      ],
      delay: 100
    },
    {
      id: 3,
      period: '2022 - 2023',
      title: 'Sr. Full Stack Developer',
      company: 'Finerio Connect',
      country: 'México',
      countryFlag: '🇲🇽',
      remote: true,
      companyUrl: 'https://www.finerioconnect.com/',
      companyLogo: 'https://www.finerioconnect.com/favicon.ico',
      description: 'Open Banking / Open Finance: crawlers y scrapers financieros en C# y AWS Lambda (Python) con integración a bancos de Colombia, México y Chile. Apliqué arquitectura hexagonal y Clean Architecture, con observabilidad sobre Loki y Datadog para sostener procesos críticos.',
      skills: [
        'Open Banking / Open Finance',
        'Serverless · AWS Lambda',
        'Python',
        'Hexagonal / Clean Architecture',
        'Observabilidad (Loki, Datadog)',
        'Fintech',
        'Web Scraping'
      ],
      delay: 200
    },
    {
      id: 4,
      period: '2021 - 2022',
      title: 'Sr. Backend Developer',
      company: 'Rappi',
      country: 'Colombia',
      countryFlag: '🇨🇴',
      remote: true,
      companyUrl: 'https://www.rappi.com/',
      companyLogo: 'https://www.rappi.com/favicon.ico',
      description: 'Microservicios de alta concurrencia en AdonisJS/TypeScript con arquitectura event-driven sobre Apache Kafka. Observabilidad con cAdvisor, Prometheus y Grafana, y soporte on-call con Opsgenie para mantener la operación de delivery en producción.',
      skills: [
        'High Concurrency',
        'Event-driven · Apache Kafka',
        'AdonisJS / TypeScript',
        'Observabilidad (Prometheus, Grafana)',
        'On-call (Opsgenie)',
        'Docker',
        'Redis'
      ],
      delay: 300
    },
    {
      id: 5,
      period: '2019 - 2021',
      title: 'Analista Programador',
      company: 'Business Development Group',
      country: 'Guatemala',
      countryFlag: '🇬🇹',
      remote: false,
      companyUrl: 'https://bdgsa.net/',
      companyLogo: 'https://bdgsa.net/favicon.ico',
      description: 'Modernización de sistemas bancarios core. Migración a arquitecturas de microservicios y optimización de APIs REST para el sector financiero.',
      skills: [
        '.NET Core',
        'C#',
        'SQL Server',
        'REST APIs',
        'Azure DevOps',
        'Banking Systems'
      ],
      delay: 400
    },
    {
      id: 6,
      period: '2014 - 2018',
      title: 'Analista Programador',
      company: 'E-Solutions S.A.',
      country: 'Guatemala',
      countryFlag: '🇬🇹',
      remote: false,
      companyUrl: 'https://www.e-solutions.com.gt/',
      companyLogo: 'https://www.e-solutions.com.gt/favicon.ico',
      description: 'Ingeniería de software para sector financiero. Desarrollo full-stack de productos corporativos y optimización de bases de datos transaccionales.',
      skills: [
        'Full Stack .NET',
        'SQL Optimization',
        'N-Tier Architecture',
        'Financial Software',
        'SOAP/REST'
      ],
      delay: 500
    }
  ],
  achievements: [
    {
      icon: 'fa-certificate',
      title: 'Certificaciones & Formación',
      description: 'Scrum Fundamental Certified, Certified Secure Development, Business Intelligence (UVG). Ingeniero en Sistemas (UMG).'
    },
    {
      icon: 'fa-cloud',
      title: 'Expertise Cloud & DevOps',
      description: 'Especialización en AWS (EKS, EC2, Lambda, S3, RDS), Docker, Kubernetes, Terraform y observabilidad (Grafana, Prometheus, CloudWatch, Datadog).'
    },
    {
      icon: 'fa-robot',
      title: 'IA aplicada al desarrollo',
      description: 'Diseño y despliegue de servidores MCP, agentes y skills; integración de IA al ciclo de desarrollo con Claude Code, Codex y GitHub Copilot.'
    },
    {
      icon: 'fa-university',
      title: 'Banca & Fintech',
      description: '10+ años en banca y fintech: Open Banking, integración con bancos (Bancolombia, BAC, Banrural) y facturación electrónica (SAT).'
    }
  ],
  devopsTools: [
    { name: 'AWS', icon: 'SiAmazon', color: '#FF9900' },
    { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'SiKubernetes', color: '#326CE5' },
    { name: 'Terraform', icon: 'SiTerraform', color: '#7B42BC' },
    { name: 'Jenkins', icon: 'SiJenkins', color: '#D24939' },
    { name: 'GitLab', icon: 'SiGitlab', color: '#FC6D26' }
  ]
};
