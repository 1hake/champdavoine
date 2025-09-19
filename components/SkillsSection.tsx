import { Code, Palette } from 'lucide-react';

interface SkillsSectionProps {
    resumeData: {
        skills: {
            techniques: string[];
            creatives: string[];
        };
    };
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ }) => {
    return (
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
                                    {
                                        category: "Frontend", skills: [
                                            { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                                            { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                                            { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
                                            { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                                            { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
                                        ]
                                    },
                                    {
                                        category: "Backend", skills: [
                                            { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                                            { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
                                            { name: "Prisma", logo: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4" },
                                            { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
                                            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
                                        ]
                                    },
                                    {
                                        category: "DevOps", skills: [
                                            { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                                            { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
                                            { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                                            { name: "n8n workflows", logo: "https://docs.n8n.io/favicon.svg" }
                                        ]
                                    },
                                    {
                                        category: "Design", skills: [
                                            { name: "UI/UX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                                            { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
                                            { name: "3D", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
                                            { name: "Branding", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" }
                                        ]
                                    }
                                ].map((group, groupIndex) => (
                                    <div key={groupIndex} className="mb-6">
                                        <h4 className="text-purple-300 font-semibold mb-3 text-lg">{group.category}</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {group.skills.map((skill, index) => (
                                                <div
                                                    key={index}
                                                    className="group/skill relative overflow-hidden bg-gradient-to-r from-purple-500/5 to-blue-500/5 hover:from-purple-500/15 hover:to-blue-500/15 border border-purple-500/20 hover:border-purple-400/40 rounded-2xl p-4 transition-all duration-300 cursor-default"
                                                >
                                                    {/* Subtle background glow on hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover/skill:from-purple-500/5 group-hover/skill:to-blue-500/5 transition-all duration-300"></div>

                                                    <div className="relative flex items-center gap-3">
                                                        <div className="flex-shrink-0 w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center group-hover/skill:bg-white/10 transition-colors duration-300">
                                                            <img
                                                                src={skill.logo}
                                                                alt={skill.name}
                                                                className="w-6 h-6 object-contain group-hover/skill:scale-110 transition-transform duration-300"
                                                                onError={(e) => {
                                                                    e.currentTarget.style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <span className="text-purple-200 group-hover/skill:text-white font-medium text-sm block truncate transition-colors duration-300">
                                                                {skill.name}
                                                            </span>
                                                        </div>

                                                        {/* Subtle arrow indicator on hover */}
                                                        <div className="opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                                                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
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
    );
};

export default SkillsSection;