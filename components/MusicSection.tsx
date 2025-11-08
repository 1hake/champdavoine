import { ArrowUpRight } from 'lucide-react';
import { musicData } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';

const MusicSection: React.FC = () => {
    return (
        <section id="music" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    <span className="eyebrow inline-flex items-center gap-3 text-[var(--color-neon)]">
                        <span className="h-[3px] w-10 bg-[var(--color-neon)]"></span>
                        {musicData.eyebrow}
                    </span>
                    <h2 className="mt-8 font-heading text-4xl leading-[0.9] text-[var(--color-ink)] sm:text-5xl lg:text-[3.75rem]">
                        {musicData.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                        {musicData.description}
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-8 sm:gap-10">
                    {musicData.projects.filter(project => !project.disabled).map((project, index) => {
                        const isLight = project.tone === 'light';

                        return (
                            <Link key={project.title} href={`/projects/${project.slug}`}>
                                <article
                                    className={`group relative flex h-full flex-col lg:flex-row overflow-hidden rounded-[28px] border-[3px] ${isLight ? 'border-[var(--color-ink)] bg-[var(--color-bg-light)] text-[var(--color-ink)]' : 'border-gray-200 bg-white text-[var(--color-ink)]'
                                        } p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div
                                        className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-[80px] transition-opacity duration-300 group-hover:opacity-30"
                                        style={{ background: project.accent }}
                                    ></div>

                                    <div className="relative -mx-6 -mt-6 mb-6 h-48 sm:-mx-8 sm:-mt-8 lg:h-48 lg:w-48 lg:flex-shrink-0 lg:mx-0 lg:mt-0 lg:mb-0 lg:mr-8 overflow-hidden">
                                        <div
                                            className="h-full w-full lg:aspect-square flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105"
                                            style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}20)` }}
                                        >
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} cover`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="text-6xl">{project.icon}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="lg:flex-1">
                                        <div className="relative flex items-start justify-between gap-4">
                                            <div
                                                className="h-3 w-3 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"
                                                style={{ background: project.accent }}
                                            ></div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                {project.comingSoon && (
                                                    <span className="rounded-full border border-orange-300 bg-gradient-to-r from-orange-100 to-yellow-100 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-orange-700 mr-2">
                                                        Bientôt
                                                    </span>
                                                )}
                                                <span>{project.year}</span>
                                            </div>
                                        </div>

                                        <h3 className="relative mt-4 font-heading text-2xl leading-[0.95] sm:text-3xl lg:text-3xl">
                                            {project.title}
                                        </h3>

                                        <p className={`relative mt-4 flex-grow text-sm leading-relaxed sm:text-base ${isLight ? 'text-[var(--color-ink)]/75' : 'text-gray-600'
                                            }`}>
                                            {project.description}
                                        </p>

                                        <div className="relative mt-6 flex flex-wrap gap-2 sm:gap-3">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`rounded-full border-[2px] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] transition-all duration-200 sm:border-[3px] sm:px-4 sm:text-[0.6rem] ${isLight ? 'border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg-light)]' : 'border-gray-300 text-gray-700 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white'
                                                        }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="relative mt-8 flex items-center justify-between gap-4">
                                            <span className={`text-sm font-semibold uppercase tracking-wider ${isLight ? 'text-[var(--color-ink)]/60' : 'text-gray-500'
                                                }`}>
                                                Musique
                                            </span>

                                            <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isLight ? 'text-[var(--color-ink)] group-hover:gap-3' : 'text-[var(--color-neon)] group-hover:gap-3'}`}>
                                                <span>Explorer</span>
                                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </div>
                                        </div>

                                        <div
                                            className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                                            style={{ background: project.accent }}
                                        ></div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MusicSection;