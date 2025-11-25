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
    badge: 'Tech Créative',
    title: {
        line1: 'Dev front.',
        line2: 'Bedroom music artist.'
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
            tags: ['React', 'React Native', 'TypeScript', 'Tailwind CSS', 'Tanstack Query', 'Docker'],
            gallery: [
                '/images/experience/izi-mobile.jpeg',
                '/images/experience/izi-admin.jpeg',
            ],
            description: [
                "Développement admin et migration Redux vers React Context.",
                "Refonte application mobile Réseau IZI by EDF : migration React Native 0.63, RGPD, tests E2E, nouveau design, déploiement stores iOS/Android.",
                "Portail B2B2C et CMS sur mesure pour intégration partenaires.",
                "Migration vers TypeScript, Tailwind CSS, Tanstack Query.",
            ]
        },
        {
            employer: 'Connecting Food',
            title: 'Développeur Front-End',
            start: 'septembre 2018',
            end: 'septembre 2019',
            duration: '1 an',
            location: 'Station F',
            logo: '/images/companies/connecting-food.jpg',
            tags: ['React', 'PWA', 'Nginx', 'Server Ubuntu', 'Redux'],
            gallery: [
            ],
            description: [
                "Landing page et blog de présentation.",
                "PWA React mobile-first pour traçabilité alimentaire via QR code.",
                "CMS interne pour génération et gestion de webapps React en production.",
                "CMS React/Redux pour création no-code d'applications mobiles.",
                "Administration multi-versions sur serveur Ubuntu (Nginx), gestion domaines OVH (SSL)."
            ]
        },
        {
            employer: 'Nokia',
            title: 'Développeur Full-Stack',
            start: 'janvier 2018',
            end: 'septembre 2018',
            duration: '9 mois',
            logo: '/images/companies/nokia.jpg',
            tags: ['React', 'Redux', 'Data Viz', 'UX/UI'],
            gallery: [

            ],
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
            tags: ['API', 'Python', 'PostgreSQL', 'Testing'],
            gallery: [

            ],
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
            tags: ['C', 'Algorithms', 'Unix/Bash'],
            gallery: [

            ],
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

            gallery: [
                '/images/projects/diggerz.png',
            ],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '🎵',
            image: '/images/projects/diggerz.png',
            tone: 'light',
            comingSoon: true,
            disabled: true
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

            gallery: [
                '/images/projects/jai-tout-perdu.png',
            ],
            videos: [],
            year: '2024',
            link: 'https://jaitoutperdu.com/',
            github: null,
            icon: '💾',
            image: '/images/projects/jai-tout-perdu.png',
            tone: 'dark',
            comingSoon: false,
            disabled: false
        },
        {
            slug: 'fuzdi',
            title: 'FUZDi',
            description: 'Plateforme GPU + interface pour génération d\'images IA.',
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

            gallery: [
                '/images/projects/fuzdi.png',
            ],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '⚙️',
            image: '/images/projects/fuzdi.png',
            tone: 'light',
            comingSoon: true,
            disabled: true
        },
        {
            slug: 'le-mentaliste-game',
            title: 'Le Mentaliste',
            description: "Jeu social de déduction et bluff assisté par IA. Pensez à utiliser sur mobile ou via l'application (qui arrive bientôt).",
            fullDescription:
                "Jeu social original où chaque joueur choisit secrètement un mot lié à un thème, puis l'IA ajoute des mots supplémentaires pour semer la confusion. Les mots sont mélangés et lus à voix haute, et chacun tente de deviner qui a proposé quel mot. Un mélange de psychologie, intuition, bluff et invention de mots, de titre de films imaginaires...",
            tech: ['ChatGPT', 'Jeu social', 'Déduction'],
            features: [
                'Choix secret de mots sur un thème',
                'Mots IA ajoutés pour brouiller les pistes',
                'Liste mélangée et lecture à voix haute',
                'Accusations et révélations',
                'Système de points & variantes de jeu'
            ],
            gallery: [
                '/images/projects/mentalistpackshot.png',
            ],
            videos: [],
            year: '2025',
            link: 'https://mentaliste.gobc.fr',
            github: null,
            icon: '🧠',
            image: '/images/projects/mentaliste.png',
            tone: 'dark',
            comingSoon: false,
            disabled: false
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

            gallery: [
                '/images/projects/shop-stripe.png',
            ],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '🛒',
            image: '/images/projects/shop-stripe.png',
            tone: 'dark',
            comingSoon: true,
            disabled: true
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

            gallery: [
                '/images/projects/savoir-et-rire.png',
            ],
            videos: [],
            year: '2024',
            link: null,
            github: null,
            icon: '📺',
            image: '/images/projects/savoir-et-rire.png',
            tone: 'light',
            comingSoon: true,
            disabled: true
        }
    ]
};

// Music Section Data
export const musicData = {
    eyebrow: 'créations musicales',
    title: 'Musique',
    description: 'Rap intime, désabusé et autofictionnel',
    projects: [
        {
            slug: 'aquarium-album',
            title: 'Aquarium',
            description:
                'Un premier projet de rap introspectif, entre autofiction, désillusion et observation du monde moderne.',
            fullDescription:
                "Sorti en octobre 2023, *Aquarium* est mon premier projet musical. Un EP de 9 morceaux, entièrement autoproduit, construit à partir de textes que j'ai écrits entre l'adolescence et aujourd'hui. J'ai toujours vu l'écriture comme un exutoire, un moyen de faire le tri dans ce que je ressens, de mettre en forme ce que je ne saurais pas dire autrement.\n\nCe projet parle de moi, forcément : mes doutes, mes obsessions, mes contradictions. Mais aussi du monde autour — l'absurdité du travail, les relations, la ville, la technologie, la solitude, les soirées qui dégénèrent, les souvenirs qui restent. J'ai voulu un projet brut, sincère, sans artifice. Un mélange de rap personnel et de fragments de vie, souvent sombres, parfois drôles, toujours lucides.\n\nJ'ai grandi à Tours, je vis à Paris, et j'ai fait ce disque avec les moyens du bord, entouré de mes potes. Pour moi, *Aquarium*, c'est comme ouvrir un journal intime que t'aurais planqué dans ton disque dur depuis 15 ans.",
            tech: [
                'Écriture personnelle',
                'Enregistrements maison',
                'Esthétique DIY',
                'Autofiction',
            ],
            features: [
                'EP de 9 titres autoproduit',
                'Rap introspectif, réaliste et personnel',
                'Textes écrits sur plus de 15 ans',
                'Thèmes : solitude, société, mémoire, tech, amour, burn-out',
                'Release party en octobre 2023 à Paris (Social Square)'
            ],
            gallery: ['/images/music/aquarium.jpg'],
            videos: [],
            year: '2023',
            link: null,
            github: null,
            icon: '🐠',
            image: '/images/music/aquarium.jpg',
            tone: 'dark',
            accent: '#0ea5e9',
            comingSoon: false,
            disabled: false,
            soundcloud: null,
            spotify: 'https://open.spotify.com/album/3F39qaqmziPNKJGMCdz3Zl?si=eYq6tzmUR2OMZfRKmSHp4Q',
            tags: ['Rap', 'Autofiction', 'DIY', 'Introspectif']
        }
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
            { name: 'Traefik', logo: 'https://avatars.githubusercontent.com/u/6203628?s=200&v=4' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        ],

        row3: [
            { name: 'OpenAI API', logo: 'https://avatars.githubusercontent.com/u/14957082?s=200&v=4' },
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
    description: 'Disponible pour des missions freelance ou CDI',
    contact: {
        email: 'champdavoine.work@gmail.com',
        phone: '+33 6 70 96 33 26',
        location: 'Paris, Île-de-France, France',
        socials: {
            github: 'https://github.com/1hake',
            instagram: 'https://www.instagram.com/onehake/',
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
