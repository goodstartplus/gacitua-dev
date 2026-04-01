export const locales = ['en', 'pt'] as const;
export type SiteLocale = (typeof locales)[number];

export const ui = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      stack: 'Stack',
      footer: 'Bilingual product profile for real digital products and systems.',
      switchLanguage: 'Switch language',
    },
    home: {
      heroEyebrow: 'André Gacitua · Product Builder',
      heroHeading: 'I design and ship digital products',
      heroTitle: 'I design and ship digital products with clarity, speed, and practical execution.',
      heroDescription:
        'I work across product direction, interface design, and implementation to turn ideas into websites, platforms, automations, and internal tools that are useful outside the mockup.',
      heroPrimary: 'View featured work',
      heroSecondary: 'Learn more about me',
      highlightEyebrow: 'Ways to explore',
      highlightTitle: 'A profile-first archive of work, capabilities, and product direction.',
      highlightDescription:
        'Use these entry points to move through the profile the same way you would inspect a strong public-facing product identity: quickly, visually, and with enough context to keep going deeper.',
      foundationEyebrow: 'What this profile is for',
      foundationTitle: 'A public-facing system for showing real work, not just polished surfaces.',
      foundationDescription:
        'The goal is to make execution legible: what gets built, how it is shaped, and where product, technology, design, and delivery overlap in real projects.',
      visualIntent: 'Positioning',
      visualIntentCopy:
        'This is not a resume, a generic agency page, or a template portfolio. It is meant to feel like a curated digital profile for someone who actually builds and ships across multiple contexts.',
      responsiveRule: 'How to navigate',
      responsiveRuleCopy:
        'Start with featured projects, jump into stack and supporting pages, or use the projects archive to scan the work through different formats, categories, and levels of depth.',
      featuredEyebrow: 'Featured work',
      featuredTitle: 'Selected projects that show product range, execution quality, and technical breadth.',
      featuredDescription:
        'These entries work as the fastest way to understand the type of work represented here: platforms, apps, automations, websites, and product-oriented systems with practical delivery value.',
      featuredCountSuffix: 'curated items',
      aboutEyebrow: 'About',
      aboutTitle: 'A builder profile shaped by shipping, iteration, and practical digital delivery.',
      aboutDescription:
        'The through-line is execution: translating ideas into working systems, organizing complexity, and combining product direction with implementation across different kinds of digital work.',
      profileActionsTitle: 'Explore next',
      stackEyebrow: 'Stack and tools',
      stackTitle: 'A technical repertoire grounded in actual use, not just listed technologies.',
      stackDescription:
        'The stack section exists to show working environments, ecosystems, and implementation patterns that have been part of real products and operations.',
      contactEyebrow: 'Contact',
      contactTitle: 'A simple entry point for collaborations, product work, and serious conversations.',
      contactDescription:
        'If you want to talk about products, systems, websites, internal tools, or platform work, this profile is designed to make that next step easy.',
      statLabels: ['Seed projects', 'Active locales', 'Project types modeled'],
      profileMeta: ['Builder', 'Developer', 'Product-oriented'],
      highlightItems: ['Platforms', 'Apps', 'Automations', 'Websites', 'Education'],
      profileActions: ['View projects', 'About', 'Stack', 'Contact'],
    },
    pages: {
      about: {
        title: 'About André Gacitua — gacitua.dev',
        eyebrow: 'About',
        heading: 'A builder profile shaped by real product execution.',
        description:
          'This page frames André Gacitua not as a resume, but as someone whose background was built through shipping products, systems, websites, automations, and operational tools across different contexts.',
        blocks: [
          'The central idea behind this site is simple: present a body of work built through actual execution. The background here is not defined by a single stack or a single product category, but by repeated hands-on involvement in building and evolving digital things that had to function in practice.',
          'That includes product thinking, interface decisions, implementation detail, platform choices, delivery constraints, and operational realities. This page exists to make that breadth legible without turning the site into a resume or generic professional summary.',
          'Over time, this section can deepen with timeline context, turning points, and more explicit links between projects and the evolution of tools, responsibilities, and systems thinking.',
        ],
      },
      stack: {
        title: 'Stack and Tools — gacitua.dev',
        eyebrow: 'Stack',
        heading: 'Tools, platforms, frameworks, and ecosystems used in real work.',
        description:
          'The stack matters here as practical context: not as a list of buzzwords, but as the set of environments used to build, maintain, and evolve real digital products.',
        groups: {
          Frameworks: ['Astro', 'React', 'Next.js', 'React Native'],
          Platforms: ['Cloudflare', 'Firebase', 'Vercel', 'WordPress'],
          Languages: ['TypeScript', 'JavaScript', 'PHP'],
          Operations: ['APIs', 'Automation flows', 'Deployment workflows'],
        },
      },
      projects: {
        title: 'Projects Archive — gacitua.dev',
        eyebrow: 'Projects',
        heading: 'A structured archive of products, systems, websites, and automations.',
        description:
          'This page complements the homepage grid with a more explicit project index, making it easier to browse the body of work by reading, scanning, and filtering mentally.',
        intro: 'The goal here is not only to show finished outputs, but to make the range of work legible: public-facing products, internal systems, automation flows, and platform-oriented builds.',
      },
      contact: {
        title: 'Contact André Gacitua — gacitua.dev',
        eyebrow: 'Contact',
        heading: 'A simple contact point for collaborators, clients, and curious builders.',
        description:
          'The contact layer should stay direct and professional: enough to make outreach easy, without turning the site into a generic lead form or sales page.',
        body: 'For collaborations, product conversations, platform work, websites, internal tools, or automation ideas, this page can act as the direct entry point.',
      },
    },
    project: {
      back: 'Back to homepage',
      summary: 'Summary',
      stack: 'Stack',
      tags: 'Tags',
      status: 'Status',
      year: 'Year',
      category: 'Category',
      type: 'Project type',
      external: 'Visit live project',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      stack: 'Stack',
      footer: 'Perfil bilíngue orientado a produtos e sistemas digitais reais.',
      switchLanguage: 'Trocar idioma',
    },
    home: {
      heroEyebrow: 'André Gacitua · Builder de Produto',
      heroHeading: 'Desenvolvo e entrego produtos digitais',
      heroTitle: 'Eu desenho e entrego produtos digitais com clareza, velocidade e execução prática.',
      heroDescription:
        'Atuo entre direção de produto, interface e implementação para transformar ideias em websites, plataformas, automações e ferramentas internas que funcionam além do layout.',
      heroPrimary: 'Ver trabalhos em destaque',
      heroSecondary: 'Conhecer meu perfil',
      highlightEyebrow: 'Formas de explorar',
      highlightTitle: 'Um arquivo orientado a perfil para navegar por trabalho, repertório e direção de produto.',
      highlightDescription:
        'Esses pontos de entrada ajudam a percorrer o perfil do mesmo jeito que se inspeciona uma identidade digital forte: com rapidez, leitura visual e contexto suficiente para aprofundar depois.',
      foundationEyebrow: 'Para que este perfil existe',
      foundationTitle: 'Um sistema público para mostrar trabalho real, e não só superfície polida.',
      foundationDescription:
        'A ideia é tornar a execução legível: o que é construído, como ganha forma e onde produto, tecnologia, design e entrega se encontram em projetos reais.',
      visualIntent: 'Posicionamento',
      visualIntentCopy:
        'Isto não é currículo, página genérica de agência nem portfólio de template. A proposta é parecer um perfil digital curado de alguém que realmente constrói e entrega em contextos diferentes.',
      responsiveRule: 'Como navegar',
      responsiveRuleCopy:
        'Você pode começar pelos projetos em destaque, seguir para stack e páginas auxiliares ou usar o arquivo de projetos para ler o trabalho por formatos, categorias e níveis de profundidade.',
      featuredEyebrow: 'Trabalhos em destaque',
      featuredTitle: 'Projetos selecionados para mostrar repertório, qualidade de execução e amplitude técnica.',
      featuredDescription:
        'Essas entradas funcionam como a leitura mais rápida do tipo de trabalho presente aqui: plataformas, apps, automações, websites e sistemas orientados a produto com valor prático de entrega.',
      featuredCountSuffix: 'itens curados',
      aboutEyebrow: 'Sobre',
      aboutTitle: 'Um perfil de builder moldado por entrega, iteração e execução digital prática.',
      aboutDescription:
        'O fio condutor aqui é execução: transformar ideias em sistemas funcionais, organizar complexidade e combinar direção de produto com implementação em diferentes tipos de trabalho digital.',
      profileActionsTitle: 'Próximos caminhos',
      stackEyebrow: 'Stack e ferramentas',
      stackTitle: 'Um repertório técnico ancorado em uso real, não apenas em tecnologias listadas.',
      stackDescription:
        'A seção de stack existe para mostrar ambientes, ecossistemas e padrões de implementação que fizeram parte de produtos e operações de verdade.',
      contactEyebrow: 'Contato',
      contactTitle: 'Um ponto de entrada simples para colaborações, trabalho de produto e conversas sérias.',
      contactDescription:
        'Se você quiser falar sobre produtos, sistemas, websites, ferramentas internas ou trabalho de plataforma, este perfil foi feito para facilitar esse próximo passo.',
      statLabels: ['Projetos iniciais', 'Idiomas ativos', 'Tipos modelados'],
      profileMeta: ['Builder', 'Developer', 'Orientado a produto'],
      highlightItems: ['Plataformas', 'Apps', 'Automações', 'Websites', 'Educação'],
      profileActions: ['Ver projetos', 'Sobre', 'Stack', 'Contato'],
    },
    pages: {
      about: {
        title: 'Sobre André Gacitua — gacitua.dev',
        eyebrow: 'Sobre',
        heading: 'Um perfil de builder moldado por execução real de produto.',
        description:
          'Esta página enquadra André Gacitua não como currículo, mas como alguém cuja trajetória foi construída entregando produtos, sistemas, websites, automações e ferramentas operacionais em diferentes contextos.',
        blocks: [
          'A ideia central deste site é simples: apresentar um corpo de trabalho construído por execução real. A trajetória aqui não é definida por uma única stack ou uma única categoria de produto, mas por envolvimento prático recorrente na construção e evolução de coisas digitais que precisavam funcionar no mundo real.',
          'Isso inclui pensamento de produto, decisões de interface, detalhe de implementação, escolhas de plataforma, restrições de entrega e realidades operacionais. Esta página existe para tornar essa amplitude legível sem transformar o site em currículo ou resumo profissional genérico.',
          'Com o tempo, esta seção pode crescer com mais contexto de trajetória, pontos de virada e relações mais claras entre projetos, responsabilidades e evolução de repertório técnico.',
        ],
      },
      stack: {
        title: 'Stack e Ferramentas — gacitua.dev',
        eyebrow: 'Stack',
        heading: 'Ferramentas, plataformas, frameworks e ecossistemas usados em trabalho real.',
        description:
          'A stack aqui importa como contexto prático: não como lista de buzzwords, mas como conjunto de ambientes usados para construir, manter e evoluir produtos digitais reais.',
        groups: {
          Frameworks: ['Astro', 'React', 'Next.js', 'React Native'],
          Plataformas: ['Cloudflare', 'Firebase', 'Vercel', 'WordPress'],
          Linguagens: ['TypeScript', 'JavaScript', 'PHP'],
          Operações: ['APIs', 'Fluxos de automação', 'Workflows de deploy'],
        },
      },
      projects: {
        title: 'Arquivo de Projetos — gacitua.dev',
        eyebrow: 'Projetos',
        heading: 'Um arquivo estruturado de produtos, sistemas, websites e automações.',
        description:
          'Esta página complementa o grid da homepage com um índice de projetos mais explícito, facilitando navegar pelo corpo de trabalho com mais leitura e contexto.',
        intro: 'A proposta aqui não é apenas mostrar outputs finais, mas tornar legível a amplitude do trabalho: produtos públicos, sistemas internos, fluxos de automação e construções orientadas a plataforma.',
      },
      contact: {
        title: 'Contato André Gacitua — gacitua.dev',
        eyebrow: 'Contato',
        heading: 'Um ponto de contato simples para colaboradores, clientes e builders curiosos.',
        description:
          'A camada de contato deve permanecer direta e profissional: suficiente para facilitar o alcance, sem transformar o site em uma página genérica de captura.',
        body: 'Para colaborações, conversas sobre produto, plataformas, websites, ferramentas internas ou ideias de automação, esta página pode funcionar como ponto de entrada direto.',
      },
    },
    project: {
      back: 'Voltar para a homepage',
      summary: 'Resumo',
      stack: 'Stack',
      tags: 'Tags',
      status: 'Status',
      year: 'Ano',
      category: 'Categoria',
      type: 'Tipo de projeto',
      external: 'Visitar projeto',
    },
  },
} as const;

export function getLocaleFromPath(pathname: string): SiteLocale {
  return pathname.startsWith('/pt') ? 'pt' : 'en';
}

export function swapLocalePath(pathname: string, targetLocale: SiteLocale) {
  const normalized = pathname === '/' ? '/en/' : pathname;

  if (targetLocale === 'en') {
    return normalized.replace(/^\/pt(?=\/|$)/, '/en');
  }

  if (normalized.startsWith('/en')) {
    return normalized.replace(/^\/en(?=\/|$)/, '/pt');
  }

  return normalized.replace(/^\//, '/pt/');
}