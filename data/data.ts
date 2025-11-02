// Hero Section Data
export const heroData = {
    firstName: 'COLIN',
    lastName: 'CHAMPDAVOINE',
    title: 'Développeur React',
    images: {
        back: '/images/back.png',
        middle: '/images/middle.png',
        front: '/images/front.png',
    }
};

// About Section Data
export const aboutData = {
    eyebrow: 'Manifesto',
    badge: 'Tech Créative / Culture Audacieuse',
    title: {
        line1: 'Code pour les audacieux.',
        line2: 'Design pour les visionnaires.'
    },
    profile: {
        summary: "Développeur front-end spécialisé React & Next.js. Expertise en workflows full-stack et architecture produit. Fondateur du collectif trenteseptcinq (création, événementiel, musique). Track record éprouvé en freelance et startup.",
        qualities: [
            'Performance',
            'UX Exigeante',
            'Vision Produit',
            'Culture Tech',
            'Agilité'
        ]
    },
    stats: [
        { value: '5+', label: "Ans d'expérience" },
        { value: '20+', label: 'Projets livrés' },
        { value: '∞', label: 'Créativité' }
    ]
};

// Experience Section Data
export const experienceData = {
    eyebrow: 'Parcours',
    title: 'Expérience & impact produit',
    description: 'Missions front-end à fort impact, culture produit exigeante et exécution rapide.',
    experience: [
        {
            employer: 'IZI Solutions',
            title: 'Développeur Front-End React/React Native',
            start: 'janvier 2020',
            end: 'Présent',
            duration: '5 ans 11 mois',
            location: 'Paris, France',
            logo: '/images/companies/izi-solutions.png',
            description: [
                "Développement admin et migration Redux vers React Context.",
                "Refonte application mobile Réseau IZI by EDF : migration React Native 0.63, RGPD, tests E2E, nouveau design, déploiement stores iOS/Android.",
                "Portail B2B2C et CMS sur mesure pour intégration partenaires."
            ]
        },
        {
            employer: 'Connecting Food',
            title: 'Développeur Front-End',
            start: 'novembre 2018',
            end: 'septembre 2019',
            duration: '11 mois',
            location: 'Station F',
            logo: '/images/companies/connecting-food.png',
            description: [
                "Landing page et blog de présentation.",
                "PWA React mobile-first pour traçabilité alimentaire via QR code.",
                "CMS interne pour génération et gestion de webapps React en production.",
                "Administration multi-versions sur serveur Ubuntu (Nginx), gestion domaines OVH (SSL)."
            ]
        },
        {
            employer: 'Freelance',
            title: 'Développeur Front-End',
            start: 'septembre 2018',
            end: 'novembre 2018',
            duration: '3 mois',
            location: 'Station F',
            logo: '/images/companies/freelance.png',
            description: [
                "PWA mobiles de la conception au déploiement.",
                "CMS React/Redux pour création no-code d'applications mobiles."
            ]
        },
        {
            employer: 'Nokia',
            title: 'Développeur Full-Stack',
            start: 'janvier 2018',
            end: 'septembre 2018',
            duration: '9 mois',
            logo: '/images/companies/nokia.png',
            description: [
                "Outil interne de recherche produits connectés avec visualisation de données optimisée (UX/UI).",
                "Migration d'outils existants vers React/Redux."
            ]
        },
        {
            employer: 'Withings',
            title: 'Développeur Full-Stack (Stage)',
            start: 'juillet 2017',
            end: 'décembre 2017',
            duration: '6 mois',
            location: 'Paris',
            logo: '/images/companies/withings.png',
            description: [
                "Script de génération de données de test conformes au modèle officiel.",
                "Intégration API interne et stockage Cassandra/PostgreSQL.",
                "Simulation multi-produits (montre, balance, capteur de sommeil)."
            ]
        }
    ],
    education: [
        {
            school: '42',
            field: 'Informatique',
            period: '2015 - 2017',
            type: 'Formation',
            logo: '/images/companies/42.png',
            description: "Socle technique solide, veille continue et expérimentations."
        }
    ]
};

// Projects Section Data
export const projectsData = {
    eyebrow: 'Projets',
    title: 'Expérimentations & réalisations',
    description: 'Produits hybrides, marques culturelles et side-projects à fort impact.',
    projects: [
        {
            title: 'RapText',
            description: 'API de punchlines & plateforme mobile pour rappeurs.',
            tech: ['Next.js', 'GraphQL', 'Prisma', 'SQLite'],
            icon: '🎤',
            image: '/images/projects/raptext.png',
            accent: '#F9FF00',
            tone: 'dark'
        },
        {
            title: 'Music of the Day',
            description: 'Sélection musicale quotidienne curée.',
            tech: ['React', 'Capacitor', 'Spotify API'],
            icon: '🎵',
            image: '/images/projects/music-of-the-day.png',
            accent: '#87C9F9',
            tone: 'light'
        },
        {
            title: "J'ai tout perdu",
            description: 'Service de récupération de données avec UX empathique.',
            tech: ['React', 'Stripe', 'Logistique'],
            icon: '💾',
            image: '/images/projects/jai-tout-perdu.png',
            accent: '#FF9B4B',
            tone: 'dark'
        },
        {
            title: 'trenteseptcinq',
            description: 'Direction artistique, merchandising et événements live du collectif.',
            tech: ['Branding', 'Événementiel', 'Production Musicale'],
            icon: '🎨',
            image: '/images/projects/trenteseptcinq.png',
            accent: '#F4F0A2',
            tone: 'light'
        },
        {
            title: 'ENCORE Project',
            description: 'Prototype rapide pour validation de concept startup culturelle.',
            tech: ['React', 'Airtable', 'Prototypage'],
            icon: '🚀',
            image: '/images/projects/encore.png',
            accent: '#87C9F9',
            tone: 'dark'
        },
        {
            title: 'Événementiel',
            description: 'Festivals, scénographie et événements nocturnes.',
            tech: ['Organisation', 'Communication', 'Logistique'],
            icon: '🎪',
            image: '/images/projects/evenementiel.png',
            accent: '#FF9B4B',
            tone: 'light'
        }
    ]
};

// Skills Section Data
export const skillsData = {
    eyebrow: 'Compétences',
    title: 'Stack & expertise',
    description: 'Front-end haute performance, workflows optimisés, livraison rapide et code propre.',
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
    description: 'Prêt à lancer un projet ambitieux ? Contactez-moi pour en discuter.',
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
    headline: 'Développeur Front-End React',
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
