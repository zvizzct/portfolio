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
  footer: {
    emailLabel: string
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
        'I design and build full-stack software for client and research-driven projects, from interfaces and APIs to data and AI workflows.',
      support:
        'Alongside that work, I tend to push internal tools, automation, and clearer ways of working that make engineering easier to scale and easier to operate with context.',
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
        kicker: 'Systems, tooling, and product'
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
    capabilities: [
      {
        title: 'Data pipelines and LLM workflows',
        detail: 'Extraction, classification, enrichment, and technical context retrieval.'
      },
      {
        title: 'Internal tools',
        detail: 'Utilities, automations, and workflows that reduce setup time and manual work.'
      },
      {
        title: 'Agents and MCPs',
        detail: 'Tooling packaged so a team can adopt agents with clear conventions and less friction.'
      },
      {
        title: 'Backend and architecture',
        detail: 'APIs, services, and structure for systems that scale without losing clarity.'
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
          'Full-stack work on client and research-driven projects, including data pipelines with LLMs, APIs, and technical interfaces. Alongside delivery work, I have also pushed internal tools, project standardization, and the practical adoption of AI in the engineering workflow, with context, guardrails, and human review.'
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
        'My starting point is full-stack development. I am comfortable moving across frontend, backend, APIs, and product work, especially in projects where software has to solve a real client or research problem rather than just look good in a demo.',
        'Alongside delivery work, I tend to notice friction in how engineering is done and push useful improvements around internal tools, documentation, automation, and working conventions when they genuinely help. I am less interested in process for its own sake than in making a system easier to build, easier to understand, and easier to maintain.',
        'Applied AI interests me in the same practical way. I care about where automation helps, where limits matter, and how new capabilities can become part of real engineering work without turning the system into something harder to trust.'
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
    },
    footer: {
      emailLabel: 'Email'
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
        'Diseño y construyo software full-stack para proyectos de cliente y de investigación, desde interfaces y APIs hasta flujos de datos y trabajo con IA.',
      support:
        'Además de esa parte, tiendo a empujar herramientas internas, automatización y formas de trabajo más claras que hacen la ingeniería más escalable y más fácil de operar con contexto.',
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
        kicker: 'Sistemas, herramientas y producto'
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
    capabilities: [
      {
        title: 'Pipelines de datos y flujos con LLMs',
        detail: 'Extracción, clasificación, enriquecimiento y recuperación de contexto técnico.'
      },
      {
        title: 'Herramientas internas',
        detail: 'Utilidades, automatizaciones y flujos que reducen setup y trabajo manual.'
      },
      {
        title: 'Agentes y MCPs',
        detail: 'Tooling empaquetado para que un equipo adopte agentes con convenciones claras y menos fricción.'
      },
      {
        title: 'Backend y arquitectura',
        detail: 'APIs, servicios y estructura para sistemas que crecen sin perder legibilidad.'
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
          'Trabajo full-stack en proyectos para cliente y ligados a investigación, incluyendo pipelines de datos con LLMs, APIs e interfaces técnicas. Además del trabajo de entrega, también he empujado herramientas internas, estandarización de proyectos y la adopción práctica de IA dentro del flujo de ingeniería, con contexto, límites y revisión humana.'
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
        role: 'Arquitectura de tooling',
        stack: 'MCP, Python, shell scripts y wrappers multiagente',
        contribution:
          'Diseño de la capa de tooling y del modelo de empaquetado de MCPs y skills para adaptarlos a cada departamento.',
        impact:
          'Reduce setup manual y convierte convenciones internas en herramientas reutilizables.'
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
          'Definición de arquitectura y construcción de la capa de memoria, búsqueda semántica y tooling MCP alrededor del flujo de trabajo.',
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
        stack: 'SwiftUI, async/await, LLM vision, Supabase y arquitectura modular',
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
        'Mi punto de partida es el desarrollo full-stack. Me muevo cómodo entre frontend, backend, APIs y trabajo de producto, sobre todo en proyectos donde el software tiene que resolver un problema real de cliente o de investigación y no solo quedar bien en una demo.',
        'Además del trabajo de entrega, suelo detectar fricción en cómo se hace ingeniería y empujar mejoras útiles en herramientas internas, documentación, automatización y convenciones de trabajo cuando de verdad aportan. Me interesa menos el proceso por el proceso que hacer un sistema más fácil de construir, de entender y de mantener.',
        'La IA aplicada me interesa de la misma forma práctica. Me importa dónde ayuda la automatización, dónde hacen falta límites y cómo una capacidad nueva puede formar parte del trabajo real de ingeniería sin convertir el sistema en algo más difícil de confiar.'
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
    },
    footer: {
      emailLabel: 'Correo'
    }
  }
}
