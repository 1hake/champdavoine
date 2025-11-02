import { Code } from 'lucide-react';

interface SkillsSectionProps {
    resumeData: {
        skills: {
            techniques: string[];
            creatives: string[];
        };
    };
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ }) => {
    const skillsRow1 = [
        { name: "Socket.io", logo: "https://socket.io/images/logo.svg", color: "bg-gray-800 border-gray-600" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "bg-red-900/30 border-red-700" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "bg-gray-800 border-gray-600" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "bg-purple-900/30 border-purple-700" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-green-900/30 border-green-700" },
        { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", color: "bg-orange-900/30 border-orange-700" },
    ];

    const skillsRow2 = [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-blue-900/30 border-blue-700" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-900/30 border-blue-700" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-900/30 border-yellow-700" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "bg-blue-900/30 border-blue-700" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "bg-orange-900/30 border-orange-700" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "bg-purple-900/30 border-purple-700" },
    ];

    const skillsRow3 = [
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "bg-gray-800 border-gray-600" },
        { name: "Vite", logo: "https://vitejs.dev/logo.svg", color: "bg-purple-900/30 border-purple-700" },
        { name: "Prisma", logo: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4", color: "bg-gray-800 border-gray-600" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "bg-teal-900/30 border-teal-700" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-green-900/30 border-green-700" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "bg-blue-900/30 border-blue-700" },
    ];

    return (
        <section id="skills" className=" relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>

            {/* Title Section */}
            <div className="container mx-auto max-w-7xl relative z-10 px-6 mb-20">
                <div className="text-center">
                    <h2 className="text-5xl lg:text-6xl font-black mb-6">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Compétences
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
                </div>
            </div>

            {/* Scrolling Skills Section */}
            <div className="relative overflow-hidden w-full">
                {/* Gradient shadows */}
                <div className="absolute left-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

                {/* First row - moving right */}
                <div className="flex animate-scroll-right mb-6">
                    {Array.from({ length: 3 }).map((_, groupIndex) => (
                        <div key={`group-${groupIndex}`} className="flex gap-4 min-w-max mr-4">
                            {skillsRow1.map((skill, index) => (
                                <div
                                    key={`row1-${groupIndex}-${index}`}
                                    className={`group relative px-6 py-3 rounded-full border-2 ${skill.color} hover:scale-105 transition-all duration-300 cursor-default flex-shrink-0`}
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        <span className="text-white font-medium text-sm group-hover:text-gray-200 transition-colors whitespace-nowrap">{skill.name}</span>
                                    </div>
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Second row - moving left */}
                <div className="flex animate-scroll-left mb-6">
                    {Array.from({ length: 3 }).map((_, groupIndex) => (
                        <div key={`group-${groupIndex}`} className="flex gap-4 min-w-max mr-4">
                            {skillsRow2.map((skill, index) => (
                                <div
                                    key={`row2-${groupIndex}-${index}`}
                                    className={`group relative px-6 py-3 rounded-full border-2 ${skill.color} hover:scale-105 transition-all duration-300 cursor-default flex-shrink-0`}
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        <span className="text-white font-medium text-sm group-hover:text-gray-200 transition-colors whitespace-nowrap">{skill.name}</span>
                                    </div>
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Third row - moving right */}
                <div className="flex animate-scroll-right">
                    {Array.from({ length: 3 }).map((_, groupIndex) => (
                        <div key={`group-${groupIndex}`} className="flex gap-4 min-w-max mr-4">
                            {skillsRow3.map((skill, index) => (
                                <div
                                    key={`row3-${groupIndex}-${index}`}
                                    className={`group relative px-6 py-3 rounded-full border-2 ${skill.color} hover:scale-105 transition-all duration-300 cursor-default flex-shrink-0`}
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        <span className="text-white font-medium text-sm group-hover:text-gray-200 transition-colors whitespace-nowrap">{skill.name}</span>
                                    </div>
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;