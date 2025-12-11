import { skillsData } from '@/data/data';
import Image from 'next/image';

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="relative w-full py-[var(--section-padding)] retro-section-blue">
            <div className="container relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-4">
                    {/* Left Column - Text */}
                    <div className="lg:w-1/2 text-left">
                        <span className="retro-badge mb-6 inline-block">
                            {skillsData.eyebrow}
                        </span>
                        <h2 className="retro-heading text-h1 text-text-on-blue mb-6">
                            {skillsData.title}
                        </h2>
                        <p className="text-base leading-relaxed text-text-on-blue/90">
                            {skillsData.description}
                        </p>
                    </div>

                    {/* Right Column - Angled Skills Card */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative transform lg:rotate-3 retro-card bg-background-main p-8 max-w-md w-full">
                            <div className="space-y-6">
                                {[skillsData.skillsRows.row1, skillsData.skillsRows.row2, skillsData.skillsRows.row3].map((row, rowIndex) => (
                                    <div key={rowIndex} className="flex flex-wrap gap-3">
                                        {row.slice(0, 4).map((skill, index) => (
                                            <div
                                                key={`${rowIndex}-${index}`}
                                                className="flex items-center gap-2 px-3 py-2 bg-background-sand border-2 border-border-strong hover:bg-primary-orange hover:text-text-on-orange transition-all duration-200"
                                            >
                                                <div className="relative h-4 w-4">
                                                    <Image
                                                        src={skill.logo}
                                                        alt={skill.name}
                                                        fill
                                                        className="object-contain"
                                                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                                    />
                                                </div>
                                                <span className="text-xs font-semibold">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* Decorative geometric accent */}
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-accent-orange-deep transform rotate-45"></div>
                            <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-accent-yellow transform rotate-45"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;