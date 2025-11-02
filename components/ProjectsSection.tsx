import { ExternalLink } from 'lucide-react';
import { projectsData } from '@/data/data';

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="relative px-6 py-[var(--section-padding)]">
            <div className="absolute right-10 top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-[var(--color-blue)] opacity-40 blur-[160px]"></div>
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

                <div className="mt-20 grid gap-10 sm:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    {projectsData.projects.map((project) => {
                        const isLight = project.tone === 'light';

                        return (
                            <article
                                key={project.title}
                                className={`relative flex h-full flex-col overflow-hidden rounded-[28px] border-[3px] ${isLight ? 'border-[var(--color-ink)] bg-[var(--color-bg-light)] text-[var(--color-ink)]' : 'border-[var(--color-border-strong)] bg-[var(--color-surface-dark)] text-[var(--color-ink-inverse)]'} p-7 sm:p-8 lg:p-9 transition-transform duration-200 hover:-translate-y-1.5`}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="text-4xl">{project.icon}</span>
                                    <span
                                        className="h-14 w-14 rounded-full border-[3px] border-current"
                                        style={{ background: project.accent }}
                                    ></span>
                                </div>
                                <h3 className="mt-8 font-heading text-2xl leading-[0.95] sm:text-3xl">
                                    {project.title}
                                </h3>
                                <p className={`mt-4 text-sm leading-relaxed sm:text-base ${isLight ? 'text-[var(--color-ink)]/75' : 'text-[var(--color-muted)]'}`}>
                                    {project.description}
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`rounded-full border-[3px] px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${isLight ? 'border-[var(--color-ink)] text-[var(--color-ink)]' : 'border-[var(--color-ink-inverse)] text-[var(--color-ink-inverse)]'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className={`mt-10 inline-flex items-center gap-2 text-sm font-semibold ${isLight ? 'text-[var(--color-ink)]' : 'text-[var(--color-neon)]'}`}>
                                    <span>Explorer le projet</span>
                                    <ExternalLink className="h-4 w-4" />
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;