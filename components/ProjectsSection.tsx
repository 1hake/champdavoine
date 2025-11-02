import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/data';

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="relative px-6 py-[var(--section-padding)]">
            <div className="container relative mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    <span className="eyebrow inline-flex items-center gap-3 text-[var(--color-orange)]">
                        <span className="h-[3px] w-10 bg-[var(--color-orange)]"></span>
                        {projectsData.eyebrow}
                    </span>
                    <h2 className="mt-8 font-heading text-4xl leading-[0.9] text-[var(--color-ink-inverse)] sm:text-6xl lg:text-[4.5rem]">
                        {projectsData.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                        {projectsData.description}
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {projectsData.projects.map((project, index) => {
                        const isLight = project.tone === 'light';

                        return (
                            <article
                                key={project.title}
                                className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] border-[3px] ${isLight ? 'border-[var(--color-ink)] bg-[var(--color-bg-light)] text-[var(--color-ink)]' : 'border-[var(--color-border-strong)] bg-[var(--color-surface-dark)] text-[var(--color-ink-inverse)]'} p-8 sm:p-9 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Accent glow effect */}
                                <div
                                    className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-[80px] transition-opacity duration-300 group-hover:opacity-30"
                                    style={{ background: project.accent }}
                                ></div>

                                {/* Project Image Placeholder */}
                                <div className="relative -mx-8 -mt-8 mb-6 h-48 overflow-hidden sm:-mx-9 sm:-mt-9 lg:-mx-10 lg:-mt-10">
                                    <div
                                        className="h-full w-full flex items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-105"
                                        style={{ background: `linear-gradient(135deg, ${project.accent}40, ${project.accent}20)` }}
                                    >
                                        {project.icon}
                                    </div>
                                </div>

                                <div className="relative flex items-start justify-between gap-4">
                                    <div
                                        className="h-3 w-3 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"
                                        style={{ background: project.accent }}
                                    ></div>
                                </div>

                                <h3 className="relative mt-8 font-heading text-2xl leading-[0.95] sm:text-3xl lg:text-3xl">
                                    {project.title}
                                </h3>

                                <p className={`relative mt-5 flex-grow text-sm leading-relaxed sm:text-base ${isLight ? 'text-[var(--color-ink)]/75' : 'text-[var(--color-muted)]'}`}>
                                    {project.description}
                                </p>

                                <div className="relative mt-8 flex flex-wrap gap-2.5">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`rounded-full border-[2px] px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.25em] transition-all duration-200 ${isLight ? 'border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg-light)]' : 'border-[var(--color-ink-inverse)]/30 text-[var(--color-ink-inverse)]/80 hover:border-[var(--color-ink-inverse)] hover:bg-[var(--color-ink-inverse)] hover:text-[var(--color-surface-dark)]'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={`relative mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isLight ? 'text-[var(--color-ink)] group-hover:gap-3' : 'text-[var(--color-neon)] group-hover:gap-3'}`}>
                                    <span>Explorer</span>
                                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>

                                {/* Hover border accent */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                                    style={{ background: project.accent }}
                                ></div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;