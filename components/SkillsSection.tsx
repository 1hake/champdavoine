import { skillsData } from '@/data/data';

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="relative w-full py-[var(--section-padding)] ">
            <div className="container relative z-10 mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center px-4">
                    <span className="eyebrow inline-flex items-center gap-3 text-[var(--color-neon)]">
                        <span className="h-[3px] w-10 bg-[var(--color-neon)]"></span>
                        {skillsData.eyebrow}
                    </span>
                    <h2 className="mt-8 font-heading text-3xl leading-[0.9] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                        {skillsData.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                        {skillsData.description}
                    </p>
                </div>
            </div>

            <div className="relative z-10 mt-16 overflow-hidden">
                <div className="mb-6 flex animate-scroll-right">
                    {Array.from({ length: 3 }).map((_, groupIndex) => (
                        <div key={`row1-${groupIndex}`} className="mr-4 flex min-w-max gap-4">
                            {skillsData.skillsRows.row1.map((skill, index) => (
                                <div
                                    key={`row1-${groupIndex}-${index}`}
                                    className="group relative flex-shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--color-ink)] bg-white px-6 py-3 neo-chip-shadow transition-transform duration-200 hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={skill.logo} alt={skill.name} className="h-6 w-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        <span className="whitespace-nowrap text-sm font-semibold text-[var(--color-ink)]">{skill.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mb-6 flex animate-scroll-left">
                    {Array.from({ length: 3 }).map((_, groupIndex) => (
                        <div key={`row2-${groupIndex}`} className="mr-4 flex min-w-max gap-4">
                            {skillsData.skillsRows.row2.map((skill, index) => (
                                <div
                                    key={`row2-${groupIndex}-${index}`}
                                    className="group relative flex-shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--color-ink)] bg-white px-6 py-3 neo-chip-shadow transition-transform duration-200 hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={skill.logo} alt={skill.name} className="h-6 w-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        <span className="whitespace-nowrap text-sm font-semibold text-[var(--color-ink)]">{skill.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex animate-scroll-right">
                    {Array.from({ length: 3 }).map((_, groupIndex) => (
                        <div key={`row3-${groupIndex}`} className="mr-4 flex min-w-max gap-4">
                            {skillsData.skillsRows.row3.map((skill, index) => (
                                <div
                                    key={`row3-${groupIndex}-${index}`}
                                    className="group relative flex-shrink-0 overflow-hidden rounded-full border-[3px] border-[var(--color-ink)] bg-white px-6 py-3 neo-chip-shadow transition-transform duration-200 hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-3">
                                        <img src={skill.logo} alt={skill.name} className="h-6 w-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                        <span className="whitespace-nowrap text-sm font-semibold text-[var(--color-ink)]">{skill.name}</span>
                                    </div>
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