import { MapPin, GraduationCap } from 'lucide-react';
import { experienceData } from '@/data/data';
import Image from 'next/image';
import DownloadResumeButton from './DownloadResumeButton';

interface ExperienceItem {
    employer: string;
    title: string;
    start: string;
    end: string;
    duration: string;
    location?: string;
    type?: string;
    logo?: string;
    tags?: string[];
    description: string[];
}

type CombinedExperience = ExperienceItem & {
    type?: string;
    logo?: string;
    tags?: string[];
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
            tags: edu.tags,
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

                    <div className="mt-8">
                        <DownloadResumeButton className="rounded-full border-[3px] border-[var(--color-blue)] bg-[var(--color-blue)] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]" />
                    </div>
                </div>

                <div className="relative mt-16">
                    {/* Central Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[var(--color-neon)] via-[var(--color-blue)] to-[var(--color-orange)] lg:block opacity-30 dashed-line"></div>

                    <div className="space-y-12 lg:space-y-24">
                        {allExperiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-neon)] shadow-[0_0_15px_var(--color-neon)] lg:block ring-4 ring-white"></div>

                                <article
                                    className={`group relative flex-1 rounded-[32px] border border-white/50 bg-white/60 backdrop-blur-md p-6 text-[var(--color-ink)] sm:p-8 lg:w-[calc(50%-4rem)] transition-all duration-500 hover:-translate-y-1 hover:bg-white/80 hover:shadow-xl hover:shadow-[var(--color-neon)]/10 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                                        }`}
                                >
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                                            <div className="flex-shrink-0">
                                                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden sm:h-28 sm:w-28 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                                    {exp.type === 'Formation' ? (
                                                        <GraduationCap className="h-10 w-10 text-[var(--color-neon)]" />
                                                    ) : exp.logo ? (
                                                        <Image
                                                            src={exp.logo}
                                                            alt={`${exp.employer} logo`}
                                                            width={112}
                                                            height={112}
                                                            className="object-contain w-full h-full"
                                                        />
                                                    ) : (
                                                        <div className="text-2xl font-bold text-gray-400">
                                                            {exp.employer.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <header className="flex flex-1 flex-col gap-2">
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-blue)]">
                                                        {exp.employer}
                                                    </span>
                                                    <span className="rounded-full border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-ink)]/60">
                                                        {exp.start} — {exp.end}
                                                    </span>
                                                </div>

                                                <h3 className="font-heading text-2xl leading-none text-[var(--color-ink)] sm:text-3xl">
                                                    {exp.title}
                                                </h3>

                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                                    {exp.location && (
                                                        <span className="flex items-center gap-1.5">
                                                            <MapPin className="h-3.5 w-3.5 text-[var(--color-orange)]" />
                                                            {exp.location}
                                                        </span>
                                                    )}
                                                    {exp.duration && (
                                                        <span className="flex items-center gap-1.5">
                                                            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
                                                            {exp.duration}
                                                        </span>
                                                    )}
                                                </div>
                                            </header>
                                        </div>

                                        <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-ink)]/10 to-transparent"></div>

                                        {exp.tags && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="rounded-full border border-[var(--color-ink)]/10 bg-white px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[var(--color-ink)]/70 transition-colors hover:border-[var(--color-neon)] hover:text-[var(--color-neon)]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <ul className="space-y-3">
                                            {exp.description.map((desc, descIndex) => (
                                                <li key={descIndex} className="flex gap-3 text-sm leading-relaxed text-gray-600">
                                                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-neon)]/60"></span>
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