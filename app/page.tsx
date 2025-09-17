'use client'

import { Github, Instagram, Music, Mail, Phone, MapPin, Code, Palette, Calendar, ExternalLink, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import Hero from '../components/Hero'

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

      {/* Profile Summary Section */}
      <section id="about" className="pb-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                À propos
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 lg:p-16">
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light">
                {resumeData.profile.summary}
              </p>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-700/50">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-gray-400">Années d&apos;expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">20+</div>
                  <div className="text-gray-400">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">∞</div>
                  <div className="text-gray-400">Créativité</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Compétences
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-purple-500/20 rounded-2xl mr-4">
                    <Code className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Techniques</h3>
                </div>

                <div className="grid gap-4">
                  {[
                    { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "React Native"] },
                    { category: "Backend", skills: ["Node.js", "GraphQL", "Prisma", "SQLite", "PostgreSQL"] },
                    { category: "DevOps", skills: ["Docker", "Nginx", "Git/GitHub", "n8n workflows"] },
                    { category: "Design", skills: ["UI/UX", "Photoshop", "3D", "Branding"] }
                  ].map((group, groupIndex) => (
                    <div key={groupIndex} className="mb-6">
                      <h4 className="text-purple-300 font-semibold mb-3 text-lg">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-xl text-sm hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Creative Skills */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-pink-500/20 rounded-2xl mr-4">
                    <Palette className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Créatives</h3>
                </div>

                <div className="grid gap-4">
                  {[
                    { category: "Musique", skills: ["Rap (écriture et performance)", "Production musicale", "Guitare", "Piano"] },
                    { category: "Événementiel", skills: ["Organisation d&apos;événements", "Communication", "Scénographie"] },
                    { category: "Visuel", skills: ["Création de contenus visuels", "Identité visuelle", "Montage vidéo"] }
                  ].map((group, groupIndex) => (
                    <div key={groupIndex} className="mb-6">
                      <h4 className="text-pink-300 font-semibold mb-3 text-lg">{group.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 text-pink-300 rounded-xl text-sm hover:bg-pink-500/20 hover:border-pink-400/50 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Expérience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Development Experience */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="p-4 bg-purple-500/20 rounded-3xl mr-6">
                <Code className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-4xl font-bold text-white">Développement</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400"></div>

              <div className="space-y-12">
                {resumeData.experience.development.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300"></div>

                    <div className="ml-20">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-10 group-hover:border-purple-500/30 transition-all duration-300">

                          {/* Header */}
                          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                {exp.role}
                              </h4>
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="w-5 h-5 text-purple-400" />
                                <span className="text-lg text-purple-400 font-medium">{exp.project}</span>
                              </div>
                              <p className="text-gray-400 flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </p>
                            </div>
                            <div className="text-right mt-4 lg:mt-0">
                              <div className="inline-flex flex-col items-end bg-purple-500/10 border border-purple-500/30 rounded-2xl px-4 py-2">
                                <p className="text-purple-300 font-semibold">{exp.period}</p>
                                <p className="text-xs text-purple-400">{exp.duration}</p>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 leading-relaxed text-lg">{exp.description}</p>

                          {/* Special Notes */}
                          {exp.notes && (
                            <div className="mb-6 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl">
                              <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <p className="text-yellow-300 font-medium">{exp.notes}</p>
                              </div>
                            </div>
                          )}

                          {/* Skills */}
                          <div className="flex flex-wrap gap-3">
                            {exp.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-xl text-sm hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cultural Experience */}
          <div>
            <div className="flex items-center mb-12">
              <div className="p-4 bg-pink-500/20 rounded-3xl mr-6">
                <Palette className="w-10 h-10 text-pink-400" />
              </div>
              <h3 className="text-4xl font-bold text-white">Projets artistiques & culturels</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400"></div>

              <div className="space-y-12">
                {resumeData.experience.cultural.map((exp, index) => (
                  <div key={index} className="relative group">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-pink-400 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300"></div>

                    <div className="ml-20">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-10 group-hover:border-pink-500/30 transition-all duration-300">

                          {/* Header */}
                          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                            <div>
                              <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                                {exp.project}
                              </h4>
                              {exp.year && (
                                <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-xl px-3 py-1">
                                  <Calendar className="w-4 h-4 text-pink-400" />
                                  <span className="text-pink-400 font-medium">{exp.year}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 leading-relaxed text-lg">{exp.description}</p>

                          {/* Outputs */}
                          {exp.outputs && (
                            <div className="mb-6">
                              <h5 className="text-pink-400 font-bold mb-4 text-lg flex items-center">
                                <Star className="w-5 h-5 mr-2" />
                                Réalisations
                              </h5>
                              <div className="grid gap-3">
                                {exp.outputs.map((output, outputIndex) => (
                                  <div key={outputIndex} className="flex items-center gap-3 p-3 bg-pink-500/5 border border-pink-500/20 rounded-xl">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                    <span className="text-gray-300">{output}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Events */}
                          {exp.events && (
                            <div className="mb-6">
                              <h5 className="text-pink-400 font-bold mb-4 text-lg">Événements</h5>
                              <div className="flex flex-wrap gap-3">
                                {exp.events.map((event, eventIndex) => (
                                  <span
                                    key={eventIndex}
                                    className="px-4 py-2 bg-pink-500/10 border border-pink-500/30 text-pink-300 rounded-xl text-sm hover:bg-pink-500/20 hover:border-pink-400/50 transition-all duration-300"
                                  >
                                    {event}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Roles */}
                          {exp.roles && (
                            <div className="flex flex-wrap gap-3">
                              {exp.roles.map((role, roleIndex) => (
                                <span
                                  key={roleIndex}
                                  className="px-4 py-2 bg-gray-600/20 border border-gray-600/40 text-gray-300 rounded-xl text-sm hover:bg-gray-600/30 transition-all duration-300"
                                >
                                  {role}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Highlight */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/5 to-black"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Projets phares
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "RapText",
                description: "Application de textes de rap",
                tech: ["Next.js", "GraphQL", "Prisma", "SQLite"],
                color: "from-purple-500 to-pink-500",
                icon: "🎤"
              },
              {
                title: "Music of the Day",
                description: "Partage de musique quotidien",
                tech: ["React", "Capacitor", "Spotify API"],
                color: "from-blue-500 to-cyan-500",
                icon: "🎵"
              },
              {
                title: "J&apos;ai tout perdu",
                description: "Service de récupération de données",
                tech: ["React", "Stripe", "Logistics"],
                color: "from-red-500 to-orange-500",
                icon: "💾"
              },
              {
                title: "trenteseptcinq",
                description: "Collectif rap artistique",
                tech: ["Branding", "Event Mgmt", "Music Prod"],
                color: "from-green-500 to-emerald-500",
                icon: "🎨"
              },
              {
                title: "ENCORE Project",
                description: "Prototype React/Airtable",
                tech: ["React", "Airtable", "Prototyping"],
                color: "from-indigo-500 to-purple-500",
                icon: "🚀"
              },
              {
                title: "Événementiel",
                description: "Festivals et concerts",
                tech: ["Organization", "Communication", "Logistics"],
                color: "from-pink-500 to-rose-500",
                icon: "🎪"
              }
            ].map((project, index) => (
              <div key={index} className="group relative">
                {/* Background Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}></div>

                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                  {/* Project Icon */}
                  <div className="text-4xl mb-4">{project.icon}</div>

                  {/* Color Bar */}
                  <div className={`h-1 w-16 bg-gradient-to-r ${project.color} rounded-full mb-6`}></div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 text-gray-300 rounded-lg text-xs hover:bg-gray-600/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center text-gray-400 group-hover:text-white transition-colors cursor-pointer">
                    <span className="text-sm mr-2">Explorer le projet</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 mt-8 max-w-2xl mx-auto">
              Prêt à collaborer sur votre prochain projet ? Contactons-nous !
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl blur opacity-25"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 lg:p-16">

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors group">
                    <div className="p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-colors">
                      <Mail className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                      <p className="text-gray-300">{resumeData.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors group">
                    <div className="p-4 bg-pink-500/20 rounded-2xl group-hover:bg-pink-500/30 transition-colors">
                      <Phone className="w-8 h-8 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Téléphone</h3>
                      <p className="text-gray-300">{resumeData.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors group">
                    <div className="p-4 bg-blue-500/20 rounded-2xl group-hover:bg-blue-500/30 transition-colors">
                      <MapPin className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">Localisation</h3>
                      <p className="text-gray-300">{resumeData.contact.location}</p>
                    </div>
                  </div>
                </div>

                {/* Social Links & CTA */}
                <div className="flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-white mb-4">Connectons-nous</h3>
                    <p className="text-gray-400 mb-8">Suivez-moi sur les réseaux sociaux pour rester au courant de mes projets</p>

                    {/* Enhanced Social Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { href: resumeData.contact.socials.github, icon: Github, label: "GitHub", color: "hover:bg-gray-500/20 hover:border-gray-400/50" },
                        { href: resumeData.contact.socials.instagram, icon: Instagram, label: "Instagram", color: "hover:bg-pink-500/20 hover:border-pink-400/50" },
                        { href: resumeData.contact.socials.soundcloud, icon: Music, label: "SoundCloud", color: "hover:bg-orange-500/20 hover:border-orange-400/50" },
                        { href: `mailto:${resumeData.contact.email}`, icon: Mail, label: "Email", color: "hover:bg-purple-500/20 hover:border-purple-400/50" }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className={`group p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${social.color}`}
                        >
                          <social.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors mx-auto mb-3" />
                          <p className="text-gray-400 group-hover:text-white transition-colors font-medium">{social.label}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-gray-500 mb-4">© 2025 Colin Champdavoine - Développeur full-stack créatif & rappeur</p>
            <p className="text-gray-600 text-sm">Fait avec ❤️ et beaucoup de créativité</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
