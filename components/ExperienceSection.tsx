import { Code, Briefcase, Calendar, MapPin, Star, GraduationCap } from 'lucide-react';

interface ExperienceItem {
    employer: string;
    title: string;
    start: string;
    end: string;
    duration: string;
    location?: string;
    type?: string;
    description: string[];
}

interface EducationItem {
    school: string;
    field: string;
    period: string;
}

interface ExperienceSectionProps {
    resumeData?: {
        name: string;
        headline: string;
        location: string;
        experience: ExperienceItem[];
        education: EducationItem[];
    };
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ resumeData }) => {
    // Default data if not provided
    const defaultData = {
        name: "Colin Champdavoine",
        headline: "React Front End Developer",
        location: "Paris, Île-de-France, France",
        experience: [

            {
                employer: "IZI Solutions",
                title: "ReactJS/React Native Front End Developer",
                start: "janvier 2020",
                end: "Present",
                duration: "5 ans 11 mois",
                location: "Paris, France",
                description: [
                    "Développement de features pour la partie admin du site. Migration de Redux vers les React Context.",
                    "Reprise en main de l'application mobile Réseau IZI by EDF pour la mise en relation des professionnels avec les conducteurs de travaux. Migration vers React Native 0.63, implémentation des normes RGPD, mise en place de Tests E2E, implémentation d'un nouveau design, mise en production sur le Play Store et l'App Store, implémentation de features.",
                    "Développement d'un portail partenaire B2B2C, création d'un CMS maison pour intégrer de nouveaux partenaires."
                ]
            },
            {
                employer: "Connecting Food",
                title: "Front End Developer",
                start: "novembre 2018",
                end: "septembre 2019",
                duration: "11 mois",
                location: "Station F",
                description: [
                    "Création d'une landing page de présentation de la société (scrollable) avec blog.",
                    "Conception de Progressive-web-app en ReactJS, avec un UX/UI orienté Mobile-first afin d'afficher la traçabilité complète d'un produit alimentaire scanné via un QRCODE.",
                    "Création d'outils internes : Content-Manager-System pour permettre au business de produire des webapp React et opérer des changements sur des applications en production.",
                    "Gestion et administration de nombreuses versions de cette webapp pour des démos client ou application en production sur un serveur Ubuntu (Nginx) et gestion de domaine OVH (SSL)."
                ]
            },
            {
                employer: "Freelance",
                title: "Développeur Front-End Freelance",
                start: "septembre 2018",
                end: "novembre 2018",
                duration: "3 mois",
                location: "Station F",
                description: [
                    "Création d'applications mobiles (progressive web app) depuis la conception jusqu'à la mise en production sur serveur.",
                    "Conception d'un CMS en React/Redux pour création d'app mobile sans code sur une interface graphique."
                ]
            },
            {
                employer: "Nokia",
                title: "Full-stack Developer",
                start: "janvier 2018",
                end: "septembre 2018",
                duration: "9 mois",
                description: [
                    "Création d'un outil interne de recherche d'utilisateurs ou de produits (montre, balance connectées) et d'affichage exhaustif et compréhensible des données (recherche de visualisation appropriée, travail UX/UI).",
                    "Implémentation en React/Redux d'outils existants."
                ]
            },
            {
                employer: "Withings",
                title: "Full-stack Developer Intern",
                start: "juillet 2017",
                end: "décembre 2017",
                duration: "6 mois",
                location: "Paris",
                description: [
                    "Développement d'un script pour générer des fake data utilisateurs pour des besoins marketing ou de tests.",
                    "Création de fausses données reproduisant le format et le modèle officiels (JSON) de la société et utilisation de l'API interne pour les stocker dans la base de données (Cassandra / PostgreSQL).",
                    "Capacité à simuler les données de tous les produits (montre, balance, sleep sensor...)."
                ]
            }
        ],
        education: [
            {
                school: "42",
                field: "Informatique",
                period: "2015 - 2017"
            }
        ]
    };

    const data = resumeData || defaultData;

    return (
        <section id="experience" className="py-32 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black"></div>
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-6xl font-black mb-6">
                        <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                            Expérience Professionnelle
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
                </div>

                {/* Professional Experience */}
                <div className="mb-20">
                    <div className="flex items-center mb-12">
                        <div className="p-4 bg-purple-500/20 rounded-3xl mr-6">
                            <Briefcase className="w-10 h-10 text-purple-400" />
                        </div>
                        <h3 className="text-4xl font-bold text-white">Parcours Professionnel</h3>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-purple-400"></div>

                        <div className="space-y-12">
                            {data.experience.map((exp, index) => (
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
                                                            {exp.title}
                                                        </h4>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Briefcase className="w-5 h-5 text-purple-400" />
                                                            <span className="text-lg text-purple-400 font-medium">{exp.employer}</span>
                                                            {exp.type && (
                                                                <span className="ml-2 px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-lg border border-yellow-500/30">
                                                                    {exp.type}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {exp.location && (
                                                            <p className="text-gray-400 flex items-center gap-2">
                                                                <MapPin className="w-4 h-4" />
                                                                {exp.location}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="text-right mt-4 lg:mt-0">
                                                        <div className="inline-flex flex-col items-end bg-purple-500/10 border border-purple-500/30 rounded-2xl px-4 py-2">
                                                            <p className="text-purple-300 font-semibold">{exp.start} - {exp.end}</p>
                                                            <p className="text-xs text-purple-400">{exp.duration}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="space-y-3 mb-6">
                                                    {exp.description.map((desc, descIndex) => (
                                                        <div key={descIndex} className="flex items-start gap-3">
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                                            <p className="text-gray-300 leading-relaxed text-lg">{desc}</p>
                                                        </div>
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

                {/* Education */}
                <div>
                    <div className="flex items-center mb-12">
                        <div className="p-4 bg-green-500/20 rounded-3xl mr-6">
                            <GraduationCap className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-4xl font-bold text-white">Formation</h3>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-400 to-green-400"></div>

                        <div className="space-y-12">
                            {data.education.map((edu, index) => (
                                <div key={index} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 w-4 h-4 bg-green-400 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300"></div>

                                    <div className="ml-20">
                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 rounded-3xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                                            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 lg:p-10 group-hover:border-green-500/30 transition-all duration-300">

                                                {/* Header */}
                                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                                    <div>
                                                        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                                                            {edu.school}
                                                        </h4>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <Code className="w-5 h-5 text-green-400" />
                                                            <span className="text-lg text-green-400 font-medium">{edu.field}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right mt-4 lg:mt-0">
                                                        <div className="inline-flex flex-col items-end bg-green-500/10 border border-green-500/30 rounded-2xl px-4 py-2">
                                                            <p className="text-green-300 font-semibold">{edu.period}</p>
                                                        </div>
                                                    </div>
                                                </div>
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
    );
};

export default ExperienceSection;