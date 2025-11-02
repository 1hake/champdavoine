import { aboutData } from '@/data/data';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative z-10 -mt-16 px-4 pb-[var(--section-padding)] sm:-mt-24 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="relative overflow-hidden rounded-[36px] border-[3px] border-[var(--color-ink)] bg-[var(--color-bg-light)] px-6 py-12 text-[var(--color-ink)] sm:px-10 md:px-14 md:py-16">
                    <div className="pointer-events-none absolute -left-16 top-6 h-40 w-40 rounded-full bg-[var(--color-neon)] opacity-50 blur-[120px]"></div>
                    <div className="pointer-events-none absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-[var(--color-blue)] opacity-40 blur-[140px]"></div>

                    <div className="relative flex flex-col gap-10">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <span className="eyebrow inline-flex items-center gap-3 text-[var(--color-ink)]">
                                <span className="h-[3px] w-12 bg-[var(--color-ink)]"></span>
                                {aboutData.eyebrow}
                            </span>
                            <span className="inline-flex items-center gap-3 rounded-full border-[3px] border-[var(--color-ink)] px-5 py-3 text-[0.7rem] font-semibold tracking-[0.3em] uppercase">
                                {aboutData.badge}
                            </span>
                        </div>

                        <h2 className="font-heading text-4xl leading-[0.9] text-[var(--color-ink)] sm:text-5xl lg:text-[4rem]">
                            {aboutData.title.line1}<br className="hidden md:block" /> {aboutData.title.line2}
                        </h2>

                        <p className="max-w-3xl text-base leading-relaxed text-[var(--color-ink)]/80 sm:text-lg">
                            {aboutData.profile.summary}
                        </p>

                        {aboutData.profile.qualities?.length ? (
                            <div className="flex flex-wrap gap-3">
                                {aboutData.profile.qualities.map((quality) => (
                                    <span
                                        key={quality}
                                        className="neo-chip-shadow rounded-full border-[3px] border-[var(--color-ink)] bg-[var(--color-bg-light)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-ink)]"
                                    >
                                        {quality}
                                    </span>
                                ))}
                            </div>
                        ) : null}

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {aboutData.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="group rounded-[28px] border-[3px] border-[var(--color-ink)] bg-[var(--color-surface-light)] px-6 py-10 text-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-[0_24px_0_rgba(10,10,13,0.35)]"
                                >
                                    <div className="font-heading text-4xl text-[var(--color-ink)] sm:text-5xl">
                                        {stat.value}
                                    </div>
                                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/70">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;