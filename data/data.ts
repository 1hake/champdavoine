// Hero Section Data
export const heroData = {
    firstName: 'COLIN',
    lastName: 'CHAMPDAVOINE',
    title: 'React Developer',
    images: {
        back: '/images/back.png',
        middle: '/images/middle.png',
        front: '/images/front.png',
    }
};

// About Section Data
export const aboutData = {
    eyebrow: 'Manifesto',
    badge: 'Creative Tech / Bold Culture',
    title: {
        line1: 'Code for the daring.',
        line2: 'Design for the loud.'
    },
    profile: {
        summary: "Je conçois des produits front-end modernes, avec une rigueur technique et une sensibilité visuelle pensées pour l'impact. Spécialisé dans l'écosystème React, Next.js, et les workflows produit full-stack. Fondateur du collectif trenteseptcinq (création, évènementiel, musique), avec un track record freelance et startup qui parle de lui-même.",
        qualities: [
            'Performance',
            'UX Exigeant',
            'Produit Orienté',
            'Culture Tech',
            'Agilité'
        ]
    },
    stats: [
        { value: '5+', label: "Années d'expérience" },
        { value: '20+', label: 'Projets réalisés' },
        { value: '∞', label: 'Créativité' }
    ]
};

// Experience Section Data
export const experienceData = {
    eyebrow: 'Track Record',
    title: 'Parcours de terrain & impact produit',
    description: 'Des missions front-end haute voltige, portées par une culture produit exigeante et une exécution rapide.',
    experience: [
        {
            employer: 'IZI Solutions',
            title: 'ReactJS/React Native Front End Developer',
            start: 'janvier 2020',
            end: 'Present',
            duration: '5 ans 11 mois',
            location: 'Paris, France',
            description: [
                "Développement de features pour la partie admin du site. Migration de Redux vers les React Context.",
                "Reprise en main de l'application mobile Réseau IZI by EDF pour la mise en relation des professionnels avec les conducteurs de travaux. Migration vers React Native 0.63, implémentation des normes RGPD, mise en place de Tests E2E, implémentation d'un nouveau design, mise en production sur le Play Store et l'App Store, implémentation de features.",
                "Développement d'un portail partenaire B2B2C, création d'un CMS maison pour intégrer de nouveaux partenaires."
            ]
        },
        {
            employer: 'Connecting Food',
            title: 'Front End Developer',
            start: 'novembre 2018',
            end: 'septembre 2019',
            duration: '11 mois',
            location: 'Station F',
            description: [
                "Création d'une landing page de présentation de la société (scrollable) avec blog.",
                "Conception de Progressive-web-app en ReactJS, avec un UX/UI orienté Mobile-first afin d'afficher la traçabilité complète d'un produit alimentaire scanné via un QRCODE.",
                "Création d'outils internes : Content-Manager-System pour permettre au business de produire des webapp React et opérer des changements sur des applications en production.",
                "Gestion et administration de nombreuses versions de cette webapp pour des démos client ou application en production sur un serveur Ubuntu (Nginx) et gestion de domaine OVH (SSL)."
            ]
        },
        {
            employer: 'Freelance',
            title: 'Développeur Front-End Freelance',
            start: 'septembre 2018',
            end: 'novembre 2018',
            duration: '3 mois',
            location: 'Station F',
            description: [
                "Création d'applications mobiles (progressive web app) depuis la conception jusqu'à la mise en production sur serveur.",
                "Conception d'un CMS en React/Redux pour création d'app mobile sans code sur une interface graphique."
            ]
        },
        {
            employer: 'Nokia',
            title: 'Full-stack Developer',
            start: 'janvier 2018',
            end: 'septembre 2018',
            duration: '9 mois',
            description: [
                "Création d'un outil interne de recherche d'utilisateurs ou de produits (montre, balance connectées) et d'affichage exhaustif et compréhensible des données (recherche de visualisation appropriée, travail UX/UI).",
                "Implémentation en React/Redux d'outils existants."
            ]
        },
        {
            employer: 'Withings',
            title: 'Full-stack Developer Intern',
            start: 'juillet 2017',
            end: 'décembre 2017',
            duration: '6 mois',
            location: 'Paris',
            description: [
                "Développement d'un script pour générer des fake data utilisateurs pour des besoins marketing ou de tests.",
                "Création de fausses données reproduisant le format et le modèle officiels (JSON) de la société et utilisation de l'API interne pour les stocker dans la base de données (Cassandra / PostgreSQL).",
                "Capacité à simuler les données de tous les produits (montre, balance, sleep sensor...)."
            ]
        }
    ],
    education: [
        {
            school: '42',
            field: 'Informatique',
            period: '2015 - 2017',
            type: 'Formation',
            description: "Un socle académique solide, prolongé par une veille continue et des expérimentations studio."
        }
    ]
};

// Projects Section Data
export const projectsData = {
    eyebrow: 'Signature Work',
    title: 'Expérimentations & lab sessions',
    description: 'Des produits hybrides, des marques culturelles et des side-projects taillés pour rayonner sur scène comme en production.',
    projects: [
        {
            title: 'RapText',
            description: 'Punchline API & mobile stage for rap heads.',
            tech: ['Next.js', 'GraphQL', 'Prisma', 'SQLite'],
            icon: '🎤',
            accent: '#F9FF00',
            tone: 'dark'
        },
        {
            title: 'Music of the Day',
            description: 'Daily drops curated like a vinyl boutique.',
            tech: ['React', 'Capacitor', 'Spotify API'],
            icon: '🎵',
            accent: '#87C9F9',
            tone: 'light'
        },
        {
            title: "J'ai tout perdu",
            description: 'Data recovery service with empathy-led UX.',
            tech: ['React', 'Stripe', 'Logistics'],
            icon: '💾',
            accent: '#FF9B4B',
            tone: 'dark'
        },
        {
            title: 'trenteseptcinq',
            description: 'Art direction, merch, and live shows for the collective.',
            tech: ['Branding', 'Event Mgmt', 'Music Prod'],
            icon: '🎨',
            accent: '#F4F0A2',
            tone: 'light'
        },
        {
            title: 'ENCORE Project',
            description: 'Rapid prototype to validate a cultural startup vision.',
            tech: ['React', 'Airtable', 'Prototyping'],
            icon: '🚀',
            accent: '#87C9F9',
            tone: 'dark'
        },
        {
            title: 'Événementiel',
            description: 'Festivals, scenography, and nightlife pop-ups.',
            tech: ['Organization', 'Communication', 'Logistics'],
            icon: '🎪',
            accent: '#FF9B4B',
            tone: 'light'
        }
    ]
};

// Skills Section Data
export const skillsData = {
    eyebrow: 'Skills Arsenal',
    title: 'Stack & savoir-faire',
    description: 'Du front-end haute performance aux workflows low-code, un arsenal pensé pour livrer vite et propre.',
    skillsRows: {
        row1: [
            { name: 'Socket.io', logo: 'https://socket.io/images/logo.svg' },
            { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Jest', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' }
        ],
        row2: [
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
        ],
        row3: [
            { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
            { name: 'Vite', logo: 'https://vitejs.dev/logo.svg' },
            { name: 'Prisma', logo: 'https://avatars.githubusercontent.com/u/17219288?s=200&v=4' },
            { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
        ]
    }
};

// Contact Section Data
export const contactData = {
    eyebrow: 'Contact',
    title: {
        line1: 'Construisons quelque chose',
        line2: 'de neuf'
    },
    description: 'Prêt à lancer un produit qui claque ? Écrivez-moi et on cadre la mission.',
    contact: {
        email: 'colin.champdavoine@gmail.com',
        phone: '+33 6 95 41 17 96',
        location: 'Paris, Île-de-France, France',
        socials: {
            github: 'https://github.com/1hake',
            instagram: 'https://www.instagram.com/1hake_/',
            soundcloud: 'https://soundcloud.com/1hake'
        }
    }
};

// Combined resume data (for backward compatibility)
export const resumeData = {
    name: 'Colin Champdavoine',
    headline: 'React Front End Developer',
    location: contactData.contact.location,
    profile: aboutData.profile,
    experience: experienceData.experience,
    education: experienceData.education,
    projects_highlight: projectsData.projects.map(p => p.title),
    skills: {
        techniques: [
            ...skillsData.skillsRows.row1.map(s => s.name),
            ...skillsData.skillsRows.row2.map(s => s.name),
            ...skillsData.skillsRows.row3.map(s => s.name)
        ],
        creatives: []
    },
    contact: contactData.contact
};
