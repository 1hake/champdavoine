import { ArrowUpRight } from 'lucide-react';
import { codeData } from '@/data/data';
import Link from 'next/link';

const CodeSection: React.FC = () => {
    return (
        <section id="projects" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    <span className="eyebrow inline-flex items-center gap-3 text-[var(--color-neon)]">
                        <span className="h-[3px] w-10 bg-[var(--color-neon)]"></span>
                        {codeData.eyebrow}
                    </span>
                    <h2 className="mt-8 font-heading text-4xl leading-[0.9] text-[var(--color-ink)] sm:text-5xl lg:text-[3.75rem]">
                        {codeData.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                        {codeData.description}
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {codeData.projects.map((project, index) => {
                        const isLight = project.tone === 'light';

                        return (
                            <Link key={project.title} href={`/projects/${project.slug}`}>
                                <article
                                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border-[3px] ${isLight ? 'border-[var(--color-ink)] bg-[var(--color-bg-light)] text-[var(--color-ink)]' : 'border-gray-200 bg-white text-[var(--color-ink)]'} p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden sm:-mx-8 sm:-mt-8">
                                        <div
                                            className="h-full w-full flex items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-105 bg-gray-100"
                                        >
                                            {project.icon}
                                        </div>
                                    </div>



                                    <h3 className="relative mt-8 font-heading text-2xl leading-[0.95] sm:text-3xl lg:text-3xl">
                                        {project.title}
                                    </h3>

                                    <p className={`relative mt-5 flex-grow text-sm leading-relaxed sm:text-base ${isLight ? 'text-[var(--color-ink)]/75' : 'text-gray-600'}`}>
                                        {project.description}
                                    </p>

                                    <div className="relative mt-8 flex flex-wrap gap-2 sm:gap-3">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className={`rounded-full border-[2px] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] transition-all duration-200 sm:border-[3px] sm:px-4 sm:text-[0.6rem] ${isLight ? 'border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg-light)]' : 'border-gray-300 text-gray-700 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white'}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`relative mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isLight ? 'text-[var(--color-ink)] group-hover:gap-3' : 'text-[var(--color-neon)] group-hover:gap-3'}`}>
                                        <span>Explorer</span>
                                        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-neon)] transition-all duration-300 group-hover:w-full"></div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CodeSection;