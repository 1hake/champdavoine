import { ArrowUpRight } from 'lucide-react';
import { codeData } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';

const CodeSection: React.FC = () => {
    return (
        <section id="code" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
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
                    {codeData.projects.filter(project => !project.disabled).map((project, index) => {
                        const isLight = project.tone === 'light';

                        return (
                            <Link key={project.title} href={`/projects/${project.slug}`}>
                                <article
                                    className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border-[3px] ${isLight ? 'border-[var(--color-ink)] bg-[var(--color-bg-light)] text-[var(--color-ink)]' : 'border-gray-200 bg-white/80 backdrop-blur-sm text-[var(--color-ink)]'} p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer`}
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-[80px] transition-opacity duration-300 group-hover:opacity-30 bg-gradient-to-br from-blue-400/40 to-purple-400/40"></div>

                                    <div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden sm:-mx-8 sm:-mt-8">
                                        <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105 bg-gradient-to-br from-gray-100 to-gray-200">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} preview`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center text-6xl">
                                                    {project.icon}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative flex items-start justify-between gap-4">
                                        <div className="h-3 w-3 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg bg-[var(--color-neon)]"></div>
                                        {project.comingSoon && (
                                            <span className="rounded-full border border-orange-300 bg-gradient-to-r from-orange-100 to-yellow-100 px-2 py-1 text-[0.6rem] font-semibold uppercase tracking-wider text-orange-700">
                                                Bientôt
                                            </span>
                                        )}
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

                                    <div className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full bg-[var(--color-neon)]"></div>
                                </article>
                            </Link>
                        );
                    })}
                </div>

                {/* Parallax Website Proposal Panel */}
                <div className="mt-20">
                    <div className="relative overflow-hidden rounded-[32px] border-[3px] border-[var(--color-neon)] bg-gradient-to-br from-[var(--color-neon)]/10 via-white to-[var(--color-neon)]/5 p-8 sm:p-12">
                        {/* Background decoration */}
                        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--color-neon)]/20 blur-[60px]"></div>
                        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[var(--color-neon)]/15 blur-[40px]"></div>

                        {/* Animated floating elements */}
                        <div className="absolute top-6 right-20 h-2 w-2 rounded-full bg-[var(--color-neon)]/40 animate-pulse"></div>
                        <div className="absolute bottom-8 right-12 h-1.5 w-1.5 rounded-full bg-[var(--color-neon)]/60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-12 left-16 h-1 w-1 rounded-full bg-[var(--color-neon)]/50 animate-pulse" style={{ animationDelay: '2s' }}></div>

                        <div className="relative flex flex-col items-center text-center lg:flex-row lg:text-left">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-neon)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-neon)]">
                                    <span className="h-2 w-2 rounded-full bg-[var(--color-neon)] animate-pulse"></span>
                                    Disponible pour projets
                                </div>

                                <h3 className="mt-6 font-heading text-3xl leading-[0.95] text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                                    Votre site web avec
                                    <br />
                                    <span className="text-[var(--color-neon)]">effets parallax</span>
                                </h3>

                                <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 lg:text-lg">
                                    Je crée des sites web immersifs avec des effets de parallax sur mesure.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
                                        <span className="text-[var(--color-neon)]">✨</span>
                                        Effets parallax custom
                                    </div>
                                    <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
                                        <span className="text-[var(--color-neon)]">📱</span>
                                        Responsive design
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 lg:ml-12 lg:mt-0">
                                <Link
                                    href="#contact"
                                    className="group relative overflow-hidden rounded-full border-[3px] border-[var(--color-neon)] bg-[var(--color-neon)] px-8 py-4 text-center font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-[var(--color-neon)] hover:shadow-lg"
                                >
                                    <span className="relative z-10">Discutons de votre projet</span>
                                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-neon)]/80 to-[var(--color-neon)] transition-transform duration-300 group-hover:scale-105"></div>
                                </Link>

                                <div className="text-center text-sm text-gray-500">
                                    Réponse sous 24h • Devis gratuit
                                </div>
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-1/2 h-1 w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--color-neon)] to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeSection;