import { MapPin, GraduationCap } from 'lucide-react';
import { experienceData } from '@/data/data';
import Image from 'next/image';

interface ExperienceItem {
    employer: string;
    title: string;
    start: string;
    end: string;
    duration: string;
    location?: string;
    type?: string;
    logo?: string;
    description: string[];
}

type CombinedExperience = ExperienceItem & {
    type?: string;
    logo?: string;
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
            logo: edu.logo,
            description: [edu.description]
        }))
    ];

    return (
        <section id="experience" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    <span className="eyebrow inline-flex items-center gap-3 text-[var(--color-neon)]">
                        <span className="h-[3px] w-10 bg-[var(--color-neon)]"></span>
                        {experienceData.eyebrow}
                    </span>
                    <h2 className="mt-8 font-heading text-4xl leading-[0.9] text-[var(--color-ink)] sm:text-5xl lg:text-[3.75rem]">
                        {experienceData.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                        {experienceData.description}
                    </p>
                </div>

                <div className="relative mt-16">
                    <div className="absolute left-1/2 top-0 bottom-0 hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-[var(--color-neon)] via-[var(--color-blue)] to-[var(--color-orange)] lg:block"></div>

                    <div className="space-y-12 lg:space-y-20">
                        {allExperiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="absolute left-1/2 top-8 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-[var(--color-neon)] shadow-[0_0_20px_rgba(255,107,0,0.5)] lg:block"></div>

                                <article
                                    className={`relative flex-1 rounded-[28px] border-[3px] border-gray-200 bg-white p-6 text-[var(--color-ink)] sm:p-8 lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pr-12'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-8 hidden h-0 w-0 border-y-8 border-y-transparent lg:block ${index % 2 === 0
                                            ? 'right-0 translate-x-full border-l-8 border-l-gray-200'
                                            : 'left-0 -translate-x-full border-r-8 border-r-gray-200'
                                            }`}
                                    ></div>

                                    <div className="flex flex-col gap-4 sm:gap-6">
                                        <div className="flex gap-4 sm:gap-6">
                                            <div className="flex-shrink-0 self-start">
                                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-[3px] border-gray-200 bg-gray-50 overflow-hidden sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                                                    {exp.type === 'Formation' ? (
                                                        <GraduationCap className="h-12 w-12 text-[var(--color-neon)] sm:h-16 sm:w-16 lg:h-18 lg:w-18" />
                                                    ) : exp.logo ? (
                                                        <Image
                                                            src={exp.logo}
                                                            alt={`${exp.employer} logo`}
                                                            width={80}
                                                            height={80}
                                                            className="object-contain w-full h-full"
                                                        />
                                                    ) : (
                                                        <div className="h-full w-full rounded-lg bg-gray-100 flex items-center justify-center text-base font-bold text-gray-500 sm:text-xl lg:text-2xl">
                                                            {exp.employer.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <header className="flex flex-1 flex-col gap-3 sm:gap-4">
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                                    <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-blue)] sm:text-xs">
                                                        {exp.employer}
                                                    </span>
                                                    {exp.type && (
                                                        <span className={`self-start rounded-full border-[2px] px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] sm:border-[3px] sm:px-3 sm:text-[0.6rem] ${exp.type === 'Formation'
                                                            ? 'border-[var(--color-neon)] text-[var(--color-neon)]'
                                                            : 'border-[var(--color-blue)] text-[var(--color-blue)]'
                                                            }`}>
                                                            {exp.type === 'Formation' ? (
                                                                <span className="inline-flex items-center gap-1 sm:gap-2">
                                                                    <GraduationCap className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                                                                    {exp.type}
                                                                </span>
                                                            ) : (
                                                                exp.type
                                                            )}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="font-heading text-lg leading-tight text-[var(--color-ink)] sm:text-2xl lg:text-3xl">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                                                    {exp.location && (
                                                        <p className="flex items-center gap-2 text-xs font-medium text-gray-600 sm:text-sm">
                                                            <MapPin className="h-3 w-3 text-[var(--color-orange)] sm:h-4 sm:w-4" />
                                                            {exp.location}
                                                        </p>
                                                    )}
                                                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                                        <span className="self-start rounded-full border-[2px] border-[var(--color-neon)] bg-[var(--color-neon)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white sm:border-[3px] sm:px-4 sm:text-xs sm:tracking-[0.25em]">
                                                            {exp.start} • {exp.end}
                                                        </span>
                                                        {exp.duration && (
                                                            <span className="text-xs font-medium text-gray-600">{exp.duration}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </header>
                                        </div>

                                        <ul className="space-y-2 text-sm leading-relaxed text-gray-600 sm:space-y-3 sm:text-sm lg:text-base">
                                            {exp.description.map((desc, descIndex) => (
                                                <li key={descIndex} className="flex gap-3">
                                                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-orange)] sm:mt-2 sm:h-2 sm:w-2"></span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
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