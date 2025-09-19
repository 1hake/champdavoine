import { Code, Palette, Calendar, MapPin, Star } from 'lucide-react';

interface ExperienceSectionProps {
    resumeData: {
        experience: {
            development: Array<{
                project: string;
                role: string;
                company?: string;
                period: string;
                duration: string;
                location?: string;
                description: string;
                skills: string[];
                notes?: string;
                type?: string;
            }>;
            cultural: Array<{
                project: string;
                year?: string;
                description: string;
                outputs?: string[];
                events?: string[];
                roles?: string[];
            }>;
        };
    };
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ resumeData }) => {
    return (
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
                                                        {exp.location && (
                                                            <p className="text-gray-400 flex items-center gap-2">
                                                                <MapPin className="w-4 h-4" />
                                                                {exp.location}
                                                            </p>
                                                        )}
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
    );
};

export default ExperienceSection;