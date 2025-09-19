import { ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
    resumeData: {
        projects_highlight: string[];
    };
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ }) => {
    const projects = [
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
            title: "J'ai tout perdu",
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
    ];

    return (
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
                    {projects.map((project, index) => (
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
    );
};

export default ProjectsSection;