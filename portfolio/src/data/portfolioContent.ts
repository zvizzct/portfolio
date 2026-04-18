export type Locale = 'en' | 'es'

export interface PortfolioLink {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export interface PortfolioSection {
  id: string
  title: string
  kicker: string
}

export interface CapabilityItem {
  title: string
  detail: string
}

export interface ExperienceItemData {
  kind: string
  title: string
  organization: string
  period: string
  description: string
}

export interface ProjectItem {
  label: string
  title: string
  summary: string
  role: string
  stack: string
  contribution: string
  impact: string
  links?: PortfolioLink[]
}

export interface PortfolioContent {
  seo: {
    title: string
    description: string
  }
  layout: {
    skipLinkLabel: string
  }
  header: {
    meta: string
  }
  hero: {
    title: string
    note: string
    lede: string
    support: string
    links: PortfolioLink[]
  }
  sections: {
    capabilities: PortfolioSection
    experience: PortfolioSection
    projects: PortfolioSection
    education: PortfolioSection
    about: PortfolioSection
  }
  projectLabels: {
    role: string
    stack: string
    contribution: string
    impact: string
  }
  capabilities: CapabilityItem[]
  experience: ExperienceItemData[]
  projects: ProjectItem[]
  studies: ExperienceItemData[]
  about: {
    paragraphs: string[]
  }
  contact: {
    id: string
    eyebrow: string
    title: string
    links: PortfolioLink[]
  }
}

const sharedUrls = {
  email: 'mailto:victor.puerta2298@gmail.com',
  linkedin: 'https://www.linkedin.com/in/victor-puerta-zvizzct/',
  github: 'https://github.com/zvizzct'
}

export const portfolioContent: Record<Locale, PortfolioContent> = {
  en: {
    seo: {
      title: 'Víctor Puerta | Portfolio',
      description:
        'Portfolio of Víctor Puerta, focused on full-stack development, automation, internal tools, and applied AI.'
    },
    layout: {
      skipLinkLabel: 'Skip to content'
    },
    header: {
      meta: 'Barcelona / full-stack / automation, internal tools, applied AI / 3 years of experience'
    },
    hero: {
      title: 'Víctor Puerta',
      note: 'Full-stack developer with a focus on automation, internal tools, and applied AI.',
      lede:
        'I design and build full-stack software for client and research-driven projects, from interfaces and APIs to data systems and AI workflows.',
      support:
        'I also build internal tools, automate repetitive work, and improve engineering workflows when that reduces friction and makes systems easier to maintain.',
      links: [
        { label: 'email', href: sharedUrls.email },
        { label: 'linkedin', href: sharedUrls.linkedin, variant: 'secondary' },
        { label: 'github', href: sharedUrls.github, variant: 'secondary' }
      ]
    },
    sections: {
      capabilities: {
        id: 'what-i-do',
        title: 'What I work on',
        kicker: 'Where I usually contribute'
      },
      experience: {
        id: 'experience',
        title: 'Experience',
        kicker: 'Professional background'
      },
      projects: {
        id: 'projects',
        title: 'Projects',
        kicker: 'Selected work'
      },
      education: {
        id: 'education',
        title: 'Education',
        kicker: 'Academic and technical foundation'
      },
      about: {
        id: 'how-i-work',
        title: 'How I work',
        kicker: 'Engineering judgment and working style'
      }
    },
    projectLabels: {
      role: 'Role',
      stack: 'Stack',
      contribution: 'Contribution',
      impact: 'Impact'
    },
    capabilities: [
      {
        title: 'Data pipelines and AI workflows',
        detail: 'Extraction, classification, enrichment, and retrieval of technical context.'
      },
      {
        title: 'Internal tools and automation',
        detail: 'Utilities and workflows that reduce setup time, repetition, and manual work.'
      },
      {
        title: 'Agent tooling and integrations',
        detail: 'Tooling and integrations that help teams adopt agents with clearer conventions and less friction.'
      },
      {
        title: 'Backend systems and architecture',
        detail: 'APIs, services, and system design for products that grow without losing clarity.'
      },
      {
        title: 'Applied AI',
        detail: 'Moving from demo to real workflow, with context, guardrails, and human review where needed.'
      }
    ],
    experience: [
      {
        kind: 'Experience',
        title: 'Software Engineer',
        organization: 'Eurecat',
        period: 'Apr 2024 - Present',
        description:
          'Full-stack work on client and research-driven projects, including data pipelines, APIs, technical interfaces, and AI-based workflows. Alongside delivery, I have also built internal tools, standardized project setups, and supported the practical adoption of AI in the engineering workflow.'
      },
      {
        kind: 'Experience',
        title: 'Development Trainee',
        organization: 'Escola Port Barcelona',
        period: 'Apr 2019 - Jun 2019',
        description:
          'Implemented new web features, improved interactivity, and adapted WordPress work to the needs of the project and the team.'
      }
    ],
    projects: [
      {
        label: 'Agent infrastructure',
        title: 'Agent Runtime',
        summary:
          'A shared environment that lets different teams work with agents without assembling their stack from scratch.',
        role: 'Tooling architecture',
        stack: 'MCP, Python, shell scripts, and multi-agent wrappers',
        contribution:
          'Designed the tooling layer and the packaging model for MCPs and skills so they could be adapted to each department.',
        impact:
          'Reduces manual setup and turns internal conventions into reusable tools.'
      },
      {
        label: 'Internal pipeline + LLM',
        title: 'UES Catalog',
        summary:
          'An internal pipeline that turns GitLab projects into a searchable technical catalog.',
        role: 'Data pipeline + product',
        stack: 'Python, GitLab API, Spring Boot, MySQL, Next.js, and Docker',
        contribution:
          'Defined the full pipeline: extraction, LLM enrichment, classification, API, and interface.',
        impact:
          'Makes it possible to retrieve technical context without reviewing repositories one by one.'
      },
      {
        label: 'Private system',
        title: 'Operational Memory',
        summary:
          'A local-first system for working with agents around projects, tasks, and persistent context.',
        role: 'Architecture + full-stack',
        stack: 'FastAPI, Next.js, Postgres, pgvector, Ollama, and MCP',
        contribution:
          'Defined the architecture and built the memory layer, semantic retrieval, and MCP tooling around the workflow.',
        impact:
          'Reduces context load between sessions and makes project knowledge more reusable.',
        links: [{ label: 'Code', href: 'https://github.com/zvizzct/organizacion' }]
      },
      {
        label: 'Digital library',
        title: 'The Kiosk',
        summary:
          'A web-based EPUB library for browsing, organizing, and reading a catalog of around 80k books in the browser.',
        role: 'Frontend + backend',
        stack: 'React, Tailwind, Node.js, Express, and PostgreSQL',
        contribution:
          'Built frontend and backend features for scraping, search, organization, and integrated reading.',
        impact:
          'Brings a personal library into a more accessible format with less dependence on closed platforms.',
        links: [{ label: 'Code', href: 'https://github.com/zvizzct/backend-epub-library' }]
      },
      {
        label: 'Native iOS',
        title: 'Closet Native',
        summary:
          'A personal wardrobe iOS app with AI vision, outfit generation, and a usage calendar.',
        role: 'iOS + product',
        stack: 'SwiftUI, async/await, LLM vision, Supabase, and modular architecture',
        contribution:
          'Built the native experience and the modular architecture behind cataloging, recommendations, and subscription flows.',
        impact:
          'Turns vision and generation capabilities into an everyday product experience, not an isolated demo.',
        links: [{ label: 'Code', href: 'https://github.com/zvizzct/outfit-ios' }]
      }
    ],
    studies: [
      {
        kind: 'Education',
        title: 'Computer Engineering',
        organization: 'Universitat Pompeu Fabra',
        period: 'Completed',
        description:
          'Training focused on software engineering, analysis, architecture, and systems development.'
      },
      {
        kind: 'Education',
        title: 'Higher Technician in Development of Web Applications (DAW)',
        organization: 'Higher vocational qualification',
        period: 'Earlier stage',
        description:
          'Two-year vocational qualification completed after Bachillerato, with a hands-on foundation in frontend, backend, databases, and web application development.'
      }
    ],
    about: {
      paragraphs: [
        'My starting point is full-stack development. I work across frontend, backend, APIs, data flows, and product work, especially when software needs to solve a real client or research problem.',
        'Alongside delivery, I usually improve the way engineering work gets done: internal tools, documentation, automation, and shared conventions that save time and reduce friction.',
        "I'm interested in applied AI in the same practical way. I care less about novelty than about where it helps, where it needs limits, and how it can become part of everyday engineering work."
      ]
    },
    contact: {
      id: 'contact',
      eyebrow: 'contact',
      title: 'Get in touch',
      links: [
        { label: 'email', href: sharedUrls.email },
        { label: 'linkedin', href: sharedUrls.linkedin, variant: 'secondary' },
        { label: 'github', href: sharedUrls.github, variant: 'secondary' }
      ]
    }
  },
  es: {
    seo: {
      title: 'Víctor Puerta | Portfolio',
      description:
        'Portfolio de Víctor Puerta, centrado en desarrollo full-stack, automatización, herramientas internas e IA aplicada.'
    },
    layout: {
      skipLinkLabel: 'Saltar al contenido'
    },
    header: {
      meta: 'Barcelona / full-stack / automatización, herramientas internas e IA aplicada / 3 años de experiencia'
    },
    hero: {
      title: 'Víctor Puerta',
      note: 'Desarrollador full-stack con foco en automatización, herramientas internas e IA aplicada.',
      lede:
        'Diseño y construyo software full-stack para proyectos de cliente y de investigación, desde interfaces y APIs hasta sistemas de datos y flujos con IA.',
      support:
        'También suelo construir herramientas internas, automatizar trabajo repetitivo y mejorar flujos de ingeniería cuando eso reduce fricción y hace los sistemas más mantenibles.',
      links: [
        { label: 'email', href: sharedUrls.email },
        { label: 'linkedin', href: sharedUrls.linkedin, variant: 'secondary' },
        { label: 'github', href: sharedUrls.github, variant: 'secondary' }
      ]
    },
    sections: {
      capabilities: {
        id: 'what-i-do',
        title: 'En qué trabajo',
        kicker: 'Dónde suelo aportar'
      },
      experience: {
        id: 'experience',
        title: 'Experiencia',
        kicker: 'Recorrido profesional'
      },
      projects: {
        id: 'projects',
        title: 'Proyectos',
        kicker: 'Trabajo seleccionado'
      },
      education: {
        id: 'education',
        title: 'Estudios',
        kicker: 'Base académica y técnica'
      },
      about: {
        id: 'how-i-work',
        title: 'Cómo trabajo',
        kicker: 'Criterio técnico y forma de trabajar'
      }
    },
    projectLabels: {
      role: 'Rol',
      stack: 'Tecnologías',
      contribution: 'Contribución',
      impact: 'Impacto'
    },
    capabilities: [
      {
        title: 'Pipelines de datos y flujos con IA',
        detail: 'Extracción, clasificación, enriquecimiento y recuperación de contexto técnico.'
      },
      {
        title: 'Herramientas internas y automatización',
        detail: 'Utilidades y flujos que reducen tiempo de configuración, repetición y trabajo manual.'
      },
      {
        title: 'Herramientas e integraciones para agentes',
        detail: 'Herramientas e integraciones para que un equipo adopte agentes con convenciones más claras y menos fricción.'
      },
      {
        title: 'Backend y arquitectura de sistemas',
        detail: 'APIs, servicios y diseño de sistemas para productos que crecen sin perder claridad.'
      },
      {
        title: 'IA aplicada',
        detail: 'Pasar de la demo al flujo real, con contexto, límites y revisión humana donde hace falta.'
      }
    ],
    experience: [
      {
        kind: 'Experiencia',
        title: 'Ingeniero de software',
        organization: 'Eurecat',
        period: 'Abr 2024 - Actualidad',
        description:
          'Trabajo full-stack en proyectos para cliente y ligados a investigación, incluyendo pipelines de datos, APIs, interfaces técnicas y flujos con IA. Además de la entrega, también he construido herramientas internas, estandarizado configuraciones de proyecto y apoyado la adopción práctica de IA dentro del flujo de ingeniería.'
      },
      {
        kind: 'Experiencia',
        title: 'Trainee de desarrollo',
        organization: 'Escola Port Barcelona',
        period: 'Abr 2019 - Jun 2019',
        description:
          'Implementación de nuevas funcionalidades web, mejora de la interactividad y adaptación de desarrollos en WordPress según las necesidades del proyecto y del equipo.'
      }
    ],
    projects: [
      {
        label: 'Infraestructura de agentes',
        title: 'Agent Runtime',
        summary:
          'Entorno compartido para que distintos equipos trabajen con agentes sin montar su stack desde cero.',
        role: 'Arquitectura de herramientas',
        stack: 'MCP, Python, shell scripts y wrappers multiagente',
        contribution:
          'Diseño de la capa de tooling y del modelo de empaquetado de MCPs y skills para adaptarlos a cada departamento.',
        impact:
          'Reduce trabajo manual de configuración y convierte convenciones internas en herramientas reutilizables.'
      },
      {
        label: 'Pipeline interna + LLM',
        title: 'Catálogo UES',
        summary:
          'Pipeline interna para convertir proyectos de GitLab en un catálogo técnico consultable.',
        role: 'Pipeline de datos + producto',
        stack: 'Python, GitLab API, Spring Boot, MySQL, Next.js y Docker',
        contribution:
          'Planteamiento de la pipeline completa: extracción, enriquecimiento con LLM, clasificación, API e interfaz.',
        impact:
          'Permite recuperar contexto técnico sin revisar repositorio por repositorio.'
      },
      {
        label: 'Sistema privado',
        title: 'Memoria Operativa',
        summary:
          'Sistema local-first para trabajar con agentes sobre proyectos, tareas y contexto persistente.',
        role: 'Arquitectura + full-stack',
        stack: 'FastAPI, Next.js, Postgres, pgvector, Ollama y MCP',
        contribution:
          'Definición de la arquitectura y construcción de la capa de memoria, la búsqueda semántica y las herramientas MCP alrededor del flujo de trabajo.',
        impact:
          'Reduce la carga de contexto entre sesiones y hace más reutilizable el conocimiento de proyecto.',
        links: [{ label: 'Código', href: 'https://github.com/zvizzct/organizacion' }]
      },
      {
        label: 'Biblioteca digital',
        title: 'El Quiosco',
        summary:
          'Biblioteca EPUB web para consultar, organizar y leer un catálogo de unos 80k libros desde el navegador.',
        role: 'Frontend + backend',
        stack: 'React, Tailwind, Node.js, Express y PostgreSQL',
        contribution:
          'Desarrollo de frontend y backend para scraping, búsqueda, organización y lectura integrada.',
        impact:
          'Lleva una biblioteca personal a un formato más accesible y menos dependiente de plataformas cerradas.',
        links: [{ label: 'Código', href: 'https://github.com/zvizzct/backend-epub-library' }]
      },
      {
        label: 'iOS nativo',
        title: 'Closet Native',
        summary:
          'App iOS de armario personal con visión por IA, generación de outfits y calendario de uso.',
        role: 'iOS + producto',
        stack: 'SwiftUI, async/await, visión con IA, Supabase y arquitectura modular',
        contribution:
          'Construcción de la experiencia nativa y de la arquitectura modular para catalogación, recomendaciones y suscripción.',
        impact:
          'Aterriza capacidades de visión y generación en una experiencia cotidiana, no en una demo aislada.',
        links: [{ label: 'Código', href: 'https://github.com/zvizzct/outfit-ios' }]
      }
    ],
    studies: [
      {
        kind: 'Estudios',
        title: 'Ingeniería Informática',
        organization: 'Universitat Pompeu Fabra',
        period: 'Finalizada',
        description:
          'Formación orientada a ingeniería de software, análisis, arquitectura y construcción de sistemas.'
      },
      {
        kind: 'Estudios',
        title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
        organization: 'Ciclo formativo de grado superior',
        period: 'Etapa anterior',
        description:
          'Formación de dos años cursada después de Bachillerato, con una base práctica en frontend, backend, bases de datos y desarrollo de aplicaciones web.'
      }
    ],
    about: {
      paragraphs: [
        'Mi punto de partida es el desarrollo full-stack. Trabajo entre frontend, backend, APIs, flujos de datos y producto, sobre todo cuando el software tiene que resolver un problema real de cliente o de investigación.',
        'Además de la entrega, suelo mejorar cómo se hace el trabajo de ingeniería: herramientas internas, documentación, automatización y convenciones compartidas que ahorran tiempo y reducen fricción.',
        'Me interesa la IA aplicada desde esa misma mirada práctica. Me importa menos la novedad que dónde ayuda, dónde necesita límites y cómo puede formar parte del trabajo cotidiano de ingeniería.'
      ]
    },
    contact: {
      id: 'contact',
      eyebrow: 'contacto',
      title: 'Contacto',
      links: [
        { label: 'email', href: sharedUrls.email },
        { label: 'linkedin', href: sharedUrls.linkedin, variant: 'secondary' },
        { label: 'github', href: sharedUrls.github, variant: 'secondary' }
      ]
    }
  }
}
