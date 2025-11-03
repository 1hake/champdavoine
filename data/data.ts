// Hero Section Data
export const heroData = {
    firstName: 'COLIN',
    lastName: 'CHAMPDAVOINE',
    title: '',
    images: {
        back: '/images/back.png',
        middle: '/images/middle.png',
        front: '/images/front.png',
    }
};

// About Section Data
export const aboutData = {
    eyebrow: 'À propos',
    badge: 'Tech Créative / Culture Audacieuse',
    title: {
        line1: 'Dev front.',
        line2: 'Bedroom artist.'
    },
    profile: {
        summary: "Développeur front-end React & Next.js. Je fais de la musique à mes heures perdues.",
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
    title: 'Expérience',
    description: 'Développement front-end en startup et entreprise.',
    experience: [
        {
            employer: 'IZI Solutions',
            title: 'Développeur Front-End React/React Native',
            start: 'janvier 2020',
            end: 'Présent',
            duration: '5 ans 11 mois',
            location: 'Paris, France',
            logo: '/images/companies/izi-solutions.jpg',
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
            logo: '/images/companies/connecting-food.jpg',
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
            logo: '/images/companies/connecting-food.jpg',
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
            logo: '/images/companies/nokia.jpg',
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
            logo: '/images/companies/withings.jpg',
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

// Code Section Data
export const codeData = {
    eyebrow: 'Développement',
    title: 'Code',
    description: 'Projets techniques et applications.',
    projects: [
        {
            slug: 'diggerz',
            title: 'Diggerz',
            description: 'Application sociale de partage musical quotidien.',
            fullDescription:
                "Application mobile où chacun partage chaque jour la musique qu'il écoute, découvre celle de ses amis et construit une bibliothèque collective. Une seule recommandation par jour, centrée sur l'authenticité plutôt que l'algorithme.",
            tech: ['React', 'Capacitor', 'Tailwind', 'Prisma', 'SQLite', 'Node.js', 'Spotify API'],
            features: [
                '1 recommandation par jour',
                'Feed musical des amis',
                'Player Spotify intégré',
                'Notifications quotidiennes',
                'Historique des partages',
                'Backend Prisma + SQLite'
            ],
            challenge:
                "Créer une expérience sociale musicale authentique en limitant le partage, tout en intégrant Spotify et des notifications natives.",
            solution:
                "Appli React + Capacitor, backend Prisma, notifications natives, UX ultra minimaliste.",
            results: [
                'Prototype fonctionnel mobile',
                'Notifications opérationnelles',
                'First users tests'
            ],
            role: 'Founder & Full-Stack Developer',
            timeline: '2023 – Présent',
            status: 'Beta privée',
            team: 'Solo',
            gallery: [],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '🎵',
            image: '/images/projects/diggerz.png',
            accent: '#87C9F9',
            tone: 'light'
        },
        {
            slug: 'jai-tout-perdu',
            title: "J'ai tout perdu",
            description: 'Micro-service perso de récupération de données.',
            fullDescription:
                "Petit service personnel pour aider des particuliers à récupérer des données perdues (disques durs, USB, cartes SD). Site simple pour expliquer le besoin, me contacter et recevoir une estimation. Un service humain et artisanal.",
            tech: ['Next.js', 'React', 'Tailwind CSS'],
            features: [
                'Mini-site de contact',
                'Formulaire simple',
                'Diagnostic de base gratuit',
                'Récupération sur supports courants'
            ],
            challenge:
                "Créer une manière simple, humaine et locale d'aider des gens à récupérer leurs fichiers sans passer par des services opaques.",
            solution:
                "Site minimal + prise de contact directe + bonnes pratiques de récupération de base.",
            results: [
                'Plusieurs récupérations réussies',
                'Bouche-à-oreille local positif'
            ],
            role: 'Créateur & opérateur',
            timeline: '2024 – Présent',
            status: 'Actif',
            team: 'Solo',
            gallery: [],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '💾',
            image: '/images/projects/jai-tout-perdu.png',
            accent: '#FF9B4B',
            tone: 'dark'
        },
        {
            slug: 'fuzdi',
            title: 'FUZDi',
            description: 'Plateforme GPU + interface pour génération d’images IA.',
            fullDescription:
                "Plateforme permettant de lancer et gérer des serveurs GPU à la demande pour la création d'images avec IA (ComfyUI / Stable Diffusion). Dashboard pour lancer des jobs, suivre les rendus, optimiser les coûts et contrôler le cycle de vie des GPU.",
            tech: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Docker', 'Traefik', 'GPU compute', 'ComfyUI API'],
            features: [
                'Gestion serveurs GPU à la demande',
                'Lancement de jobs IA + monitoring',
                'Aperçu en direct des rendus',
                'Auto-shutdown pour éviter les coûts',
                'Déploiement sur serveurs GPU cloud/self-host'
            ],
            challenge:
                "Rendre accessible la puissance GPU à la demande pour la création d’images IA, sans complexité serveur.",
            solution:
                "Dashboard Next.js + API ComfyUI + orchestration Docker & shutdown auto.",
            results: [
                'Interface prête pour utilisateurs test',
                'Pipeline de génération d’images opérationnel'
            ],
            role: 'Founder & Full-Stack Developer',
            timeline: '2024 – Présent',
            status: 'Beta privée',
            team: 'Solo',
            gallery: [],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '⚙️',
            image: '/images/projects/fuzdi.png',
            accent: '#A87BFF',
            tone: 'light'
        },
        {
            slug: 'stripe-shop-boilerplate',
            title: 'Boilerplate Shop Stripe',
            description: 'Template e-commerce perso pour créateurs.',
            fullDescription:
                "Boilerplate e-commerce utilisé pour créer rapidement des boutiques pour des amis artistes et designers, sans Shopify. Panier, checkout Stripe, pages produit simples et design épuré.",
            tech: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'Node.js'],
            features: [
                'Catalogue & fiches produit',
                'Panier + checkout Stripe',
                'Emails de confirmation',
                'Déploiement rapide (Vercel ou serveur)'
            ],
            challenge:
                "Offrir une alternative simple et indépendante à Shopify pour des petits créateurs.",
            solution:
                "Template Next.js + Stripe avec structure ultra simple à cloner et personnaliser.",
            results: [
                '2 boutiques en production',
                'Mise en place en quelques heures'
            ],
            role: 'Full-Stack Developer',
            timeline: '2024 – Présent',
            status: 'Utilisé en production',
            team: 'Solo',
            gallery: [],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '🛒',
            image: '/images/projects/shop-stripe.png',
            accent: '#00D4FF',
            tone: 'dark'
        },
        {
            slug: 'savoir-et-rire',
            title: 'Partage du savoir & du rire',
            description: 'Bibliothèque YouTube entre amis + extension navigateur.',
            fullDescription:
                "Mini-plateforme privée pour créer une bibliothèque de vidéos YouTube entre amis — culture, humour et découvertes. Extension Chrome pour ajouter une vidéo en un clic.",
            tech: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Browser Extension', 'YouTube API'],
            features: [
                'Ajout en un clic via extension Chrome',
                'Bibliothèque commune',
                'Tags & catégories',
                'Réactions / emojis',
                'Espace social privé'
            ],
            challenge:
                "Créer un endroit simple et fun pour partager des vidéos entre amis sans algorithmes.",
            solution:
                "Web app + extension YouTube custom + stockage Firebase.",
            results: [
                'Usage privé régulier',
                'Renforce culture + humour dans le groupe'
            ],
            role: 'Creator & Developer',
            timeline: '2024 – Présent',
            status: 'Actif privé',
            team: 'Solo',
            gallery: [],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '📺',
            image: '/images/projects/savoir-et-rire.png',
            accent: '#FFDD4A',
            tone: 'light'
        }
    ]
};

// Music Section Data
export const musicData = {
    eyebrow: 'créations musicales',
    title: 'Musique',
    description: 'Bedroom artist, rap',
    projects: [
        {
            slug: 'aquarium-album',
            title: 'Aquarium',
            description: 'Un album introspectif mêlant textures aquatiques, ambient et rap alternatif.',
            fullDescription:
                "Aquarium est un album concept mêlant rap alternatif, textures aquatiques, sonorités électroniques organiques et nappes ambient. Il explore les thèmes du flottement, de l'introspection et des rêves liquides. Jeux de voix, sound design inspiré du monde sous-marin, percussions douces et synthés fluides créent une atmosphère immersive. Pensé comme un voyage sensoriel, Aquarium incarne l’idée de plonger dans son propre monde intérieur.",
            tech: ['Ableton Live', 'Synthés modulaires & virtuels', 'Field Recording (eau / nature)', 'Plugins créatifs', 'Vocal layers'],
            features: [
                'Concept album en 9 titres',
                'Influences ambient, rap atmosphérique et electronica',
                'Textures aquatiques & sound design organique',
                'Exploration introspective & poétique',
                'Artwork original'
            ],
            challenge:
                "Trouver un équilibre entre influences rap et ambient tout en construisant une identité sonore cohérente autour du thème aquatique.",
            solution:
                "Recherche sonore basée sur des textures liquides, superpositions vocales, rythmiques minimalistes et exploration de synthés modulaires.",
            results: [
                'Album finalisé et prêt au mix / release',
                'Univers visuel défini',
                'Retour enthousiaste des premiers écoutes privées'
            ],
            role: 'Auteur-compositeur, Producteur, Sound Designer',
            timeline: '2024 - 2025',
            status: 'En finalisation',
            team: 'Solo (feat. collaborations ponctuelles)',
            gallery: [],
            videos: [],
            year: '2025',
            link: null, // ajouter lien si déjà uploadé
            github: null,
            icon: '🌊',
            image: '/images/music/aquarium.jpg', // remplacer si nécessaire
            accent: '#00A8E8',
            tone: 'dark',
            genre: 'Rap Ambient / Electronica',
            duration: '~28 min',
            artist: 'trenteseptcinq',
            soundcloud: null,
            spotify: null,
            tags: ['Ambient', 'Rap alternatif', 'Electronica', 'Concept album']
        },
    ]
};

export const skillsData = {
    eyebrow: 'Compétences',
    title: 'Stack technique',
    description: 'Technologies front-end, IA, infrastructure et outils créatifs.',
    skillsRows: {
        row1: [
            { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
            { name: 'Vite', logo: 'https://vitejs.dev/logo.svg' },
        ],

        row2: [
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Docker Compose', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Traefik', logo: 'https://avatars.githubusercontent.com/u/6203628?s=200&v=4' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        ],

        row3: [
            { name: 'OpenAI API', logo: 'https://avatars.githubusercontent.com/u/14957082?s=200&v=4' },
            { name: 'Gemini API', logo: 'https://avatars.githubusercontent.com/u/1342004?s=200&v=4' },
            { name: 'n8n', logo: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
            { name: 'ComfyUI', logo: 'https://avatars.githubusercontent.com/u/137696620?s=200&v=4' },
            { name: 'Capacitor', logo: 'https://raw.githubusercontent.com/ionic-team/ionicons/master/src/svg/ios-phone-portrait.svg' },
            { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
        ]
    }
};
// Contact Section Data
export const contactData = {
    eyebrow: 'Contact',
    title: {
        line1: 'Travaillons ensemble',
        line2: ''
    },
    description: 'Disponible pour des missions freelance.',
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
    projects_highlight: codeData.projects.map(p => p.title),
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
