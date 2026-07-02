export interface Project {
  id: number;
  /** Slug único usado en la URL indexable /proyectos/:slug */
  slug: string;
  title: string;
  company: string;
  country: string;
  countryFlag: string;
  period: string;
  description: string;
  /** Resultado de negocio del proyecto, en términos de impacto (enfoque gerencial). */
  outcome?: string;
  achievements: string[];
  technologies: string[];
  icon: string;
  url?: string;
  imageUrl?: string;
  delay: number;
}

export interface ProjectsData {
  projects: Project[];
}
