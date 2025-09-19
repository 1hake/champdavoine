'use client'

import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  const [, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)

    // Intersection Observer for scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])
  const resumeData = {
    "name": "Colin Champdavoine",
    "title": "Développeur full-stack créatif & rappeur",
    "profile": {
      "summary": "Développeur full-stack et artiste pluridisciplinaire. J&apos;allie expertise technique (React, Next.js, Prisma, GraphQL, Docker, n8n) et créativité artistique (rap, guitare, piano, organisation d'événements, design). Mon objectif : avancer l&apos;humanité par l&apos;art et l&apos;utile, en partageant des solutions innovantes et créatives.",
      "qualities": [
        "Créatif et polyvalent",
        "Capacité à fédérer autour de projets",
        "Esprit entrepreneurial",
        "Orienté solutions",
        "Souci du détail"
      ]
    },
    "skills": {
      "techniques": [
        "React", "Next.js", "Tailwind CSS", "Capacitor", "TypeScript", "Node.js",
        "GraphQL (Apollo)", "Prisma", "SQLite", "Firebase", "Docker", "Traefik",
        "Git/GitHub", "n8n workflows", "RAG (Qdrant, Supabase)", "Ollama / Gemini / TTS",
        "Photoshop", "Montage vidéo", "3D", "UI/UX", "Branding", "React Native",
        "Redux", "React Context", "RGPD (implémentation)", "Tests E2E",
        "Progressive Web App (PWA)", "Nginx", "Gestion DNS / OVH", "Cassandra", "PostgreSQL"
      ],
      "creatives": [
        "Rap (écriture et performance)", "Production musicale", "Guitare", "Piano",
        "Organisation d&apos;événements", "Création de contenus visuels",
        "Identité visuelle et communication"
      ]
    },
    "experience": {
      "development": [
        {
          "project": "IZI Solutions (Réseau IZI by EDF)",
          "role": "ReactJS/React Native Front End Developer",
          "company": "IZI Solutions",
          "period": "janv. 2020 - aujourd'hui",
          "duration": "5 ans 9 mois",
          "location": "Paris, France",
          "description": "Développement de features pour la partie admin du site. Migration de Redux vers React Context. Reprise en main de l'application mobile Réseau IZI by EDF : migration vers React Native 0.63, implémentation des normes RGPD, mise en place de tests E2E, implémentation d'un nouveau design, mise en production sur Play Store et App Store, implémentation de features. En cours : développement d'un portail partenaire B2B2C et création d'un CMS pour intégrer de nouveaux partenaires.",
          "skills": ["React", "React Native", "Migration Redux → React Context", "RGPD", "Tests E2E", "Design d&apos;app mobile", "Publication Play Store / App Store", "CMS B2B2C"]
        },
        {
          "project": "Encore Project",
          "role": "Développeur (Indépendant)",
          "company": "ENCORE Project",
          "period": "déc. 2021 - aujourd'hui",
          "duration": "3 ans 10 mois",
          "location": "Ville de Paris, Île-de-France, France",
          "type": "SIDE-PROJECT",
          "description": "Réalisation du prototype de la solution en React/Airtable. Accompagnement technique de la porteuse du projet.",
          "skills": ["Développement front-end", "React.js", "Airtable", "Prototypage rapide", "Accompagnement technique"],
          "notes": "Passage du projet à la télévision : extrait diffusé sur M6 (19:45) le 1er mai 2022."
        },
        {
          "project": "Connecting Food",
          "role": "Front End Developer",
          "company": "Connecting Food",
          "period": "nov. 2018 - sept. 2019",
          "duration": "11 mois",
          "location": "Station F, Paris",
          "description": "Création d&apos;une landing page de présentation (scrollable) avec blog. Conception d&apos;une Progressive Web App en ReactJS, UX/UI mobile-first pour afficher la traçabilité d&apos;un produit scanné via QR code. Création d&apos;outils internes : Content-Manager-System permettant au business de produire des webapps React et d&apos;opérer des changements en production. Gestion et administration de nombreuses versions pour démos clients et production sur serveur Ubuntu (Nginx) ; gestion de domaine OVH (SSL).",
          "skills": ["PWA", "React", "UX/UI mobile-first", "Content Management System", "Déploiement Ubuntu + Nginx", "Gestion DNS / OVH", "Maintenance multi-environnements"]
        },
        {
          "project": "Nokia",
          "role": "Full-stack Developer",
          "company": "Nokia",
          "period": "janv. 2018 - sept. 2018",
          "duration": "9 mois",
          "description": "Création d&apos;un outil interne de recherche d&apos;utilisateurs/produits (montres, balances connectées) et d&apos;affichage exhaustif et compréhensible des données (travail UX/UI pour visualisation adaptée). Implémentation en React/Redux d&apos;outils existants et développement de nouvelles vues pour faciliter l&apos;analyse produit/utilisateur.",
          "skills": ["React", "Redux", "UX/UI", "Visualisation de données", "Outils internes"]
        },
        {
          "project": "Withings",
          "role": "Full-stack Developer Intern",
          "company": "Withings",
          "period": "juil. 2017 - déc. 2017",
          "duration": "6 mois",
          "location": "Paris, France",
          "description": "Développement d&apos;un script pour générer des fake data utilisateurs pour besoins marketing et tests. Génération de jeux de données conformes aux formats officiels (JSON) et injection via API interne dans bases Cassandra / PostgreSQL. Simulation de données pour tous les produits (montre, balance, sleep sensor...).",
          "skills": ["Génération de données (fake data)", "Cassandra", "PostgreSQL", "Scripting", "Tests et environnements marketing"]
        }
      ],
      "cultural": [
        {
          "project": "trenteseptcinq (375)",
          "year": "2023–présent",
          "description": "Collectif rap avec Marty Boosterfly, Ramo et autres artistes.",
          "outputs": ["EP Aquarium", "Écriture et performance live", "Identité visuelle, posters, merchandising"]
        },
        {
          "project": "Événementiel musical",
          "description": "Organisation et promotion de concerts et festivals.",
          "events": ["Still Bass (Ingrandes)", "Guantaramo (chalet festival)", "La Kiffance (Bretagne 2025)", "Concerts au Chalet du Lac et Berthom"],
          "roles": ["Gestion logistique", "Communication", "Scénographie"]
        }
      ]
    },
    "projects_highlight": [
      "RapText (application de textes de rap)",
      "Music of the Day (partage de musique)",
      "J&apos;ai tout perdu (data recovery service)",
      "trenteseptcinq (collectif rap)",
      "Organisation de festivals et concerts",
      "ENCORE Project (prototype React/Airtable)"
    ],
    "contact": {
      "email": "colin@example.com",
      "phone": "+33 6 00 00 00 00",
      "location": "France",
      "socials": {
        "github": "https://github.com/colin",
        "instagram": "https://instagram.com/colin",
        "soundcloud": "https://soundcloud.com/375"
      }
    }
  }

  return (
    <div className="min-h-screen bg-black min-w-screen">
      {/* Floating Navigation */}
      {/* <nav
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
        style={{
          background: scrollY > 100 ? 'rgba(17, 24, 39, 0.9)' : 'rgba(17, 24, 39, 0.8)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(75, 85, 99, 0.3)',
          borderRadius: '9999px',
          padding: '12px 24px'
        }}
      >
        <div className="flex space-x-6">
          {[
            { href: "#about", label: "À propos" },
            { href: "#skills", label: "Compétences" },
            { href: "#experience", label: "Expérience" },
            { href: "#projects", label: "Projets" },
            { href: "#contact", label: "Contact" }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </nav> */}

      {/* Hero Section with Parallax Effect */}
      <Hero />

      {/* About Section */}
      {/* <AboutSection resumeData={resumeData} /> */}

      {/* Skills Section */}
      <SkillsSection resumeData={resumeData} />

      {/* Experience Section */}
      <ExperienceSection resumeData={resumeData} />

      {/* Projects Section */}
      <ProjectsSection resumeData={resumeData} />

      {/* Contact Section */}
      <ContactSection resumeData={resumeData} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
