import { MapPin, GraduationCap } from 'lucide-react';
import { experienceData } from '@/data/data';

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

type CombinedExperience = ExperienceItem & {
    type?: string;
};

const ExperienceSection: React.FC = () => {
    // Combine all experiences and education into one timeline
    const allExperiences: CombinedExperience[] = [
        ...experienceData.experience,
        ...experienceData.education.map((edu): CombinedExperience => ({
            employer: edu.school,
            title: edu.field,
            start: edu.period.split(' - ')[0],
            end: edu.period.split(' - ')[1],
            duration: "",
            location: "",
            type: edu.type,
            description: [edu.description]
        }))
    ];

    return (
        <section id="experience" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    <span className="eyebrow inline-flex items-center gap-3 text-[#F4F0A2]">
                        <span className="h-[3px] w-10 bg-[#F4F0A2]"></span>
                        {experienceData.eyebrow}
                    </span>
                    <h2 className="mt-8 font-heading text-4xl leading-[0.9] text-[var(--color-ink-inverse)] sm:text-5xl lg:text-[3.75rem]">
                        {experienceData.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                        {experienceData.description}
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* Timeline line - visible only on desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#F4F0A2] via-[var(--color-blue)] to-[var(--color-orange)] lg:block"></div>

                    {/* Experience items */}
                    <div className="space-y-12 lg:space-y-20">
                        {allExperiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline dot - visible only on desktop */}
                                <div className="absolute left-1/2 top-8 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-[var(--color-surface-dark)] bg-[#F4F0A2] shadow-[0_0_20px_rgba(244,240,162,0.5)] lg:block"></div>

                                {/* Content card */}
                                <article
                                    className={`relative flex-1 rounded-[28px] border-[3px] border-[var(--color-border-strong)] bg-[var(--color-surface-dark)] p-6 text-[var(--color-ink-inverse)] sm:p-8 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'
                                        }`}
                                >
                                    {/* Arrow pointing to timeline - visible only on desktop */}
                                    <div
                                        className={`absolute top-8 hidden h-0 w-0 border-y-8 border-y-transparent lg:block ${index % 2 === 0
                                            ? 'right-0 translate-x-full border-l-8 border-l-[var(--color-border-strong)]'
                                            : 'left-0 -translate-x-full border-r-8 border-r-[var(--color-border-strong)]'
                                            }`}
                                    ></div>

                                    <header className="flex flex-col gap-4">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-blue)]">
                                                {exp.employer}
                                            </span>
                                            {exp.type && (
                                                <span className={`rounded-full border-[3px] px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${exp.type === 'Formation'
                                                    ? 'border-[#F4F0A2] text-[#F4F0A2]'
                                                    : 'border-[var(--color-blue)] text-[var(--color-blue)]'
                                                    }`}>
                                                    {exp.type === 'Formation' ? (
                                                        <span className="inline-flex items-center gap-2">
                                                            <GraduationCap className="h-3 w-3" />
                                                            {exp.type}
                                                        </span>
                                                    ) : (
                                                        exp.type
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="font-heading text-2xl leading-tight text-[var(--color-ink-inverse)] sm:text-3xl">
                                            {exp.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4">
                                            {exp.location && (
                                                <p className="flex items-center gap-2 text-sm font-medium text-[var(--color-muted)]">
                                                    <MapPin className="h-4 w-4 text-[var(--color-orange)]" />
                                                    {exp.location}
                                                </p>
                                            )}
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="rounded-full border-[3px] border-[#F4F0A2] bg-[#F4F0A2] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-ink)]">
                                                    {exp.start} • {exp.end}
                                                </span>
                                                {exp.duration && (
                                                    <span className="text-xs font-medium text-[var(--color-muted)]">{exp.duration}</span>
                                                )}
                                            </div>
                                        </div>
                                    </header>

                                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                                        {exp.description.map((desc, descIndex) => (
                                            <li key={descIndex} className="flex gap-3">
                                                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--color-orange)]"></span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;