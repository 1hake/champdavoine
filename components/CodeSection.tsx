import { ArrowUpRight } from 'lucide-react';
import { codeData } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';

const CodeSection: React.FC = () => {
    const ticketColors = [
        'primary-green',
        'primary-blue',
        'primary-orange',
        'accent-yellow',
        'background-sand'
    ];

    return (
        <section id="code" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    <span className="retro-badge mb-4 inline-block">
                        {codeData.eyebrow}
                    </span>
                    <h2 className="retro-heading text-h1 text-primary-red mb-6">
                        {codeData.title}
                    </h2>
                    <p className="max-w-2xl text-base leading-relaxed text-gray-700">
                        {codeData.description}
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {codeData.projects.filter(project => !project.disabled && project.slug !== 'ghost').map((project, index) => {
                        const ticketColor = ticketColors[index % ticketColors.length];
                        const isYellow = ticketColor === 'accent-yellow';
                        const textColor = isYellow ? 'text-text-primary' : 'text-text-on-dark';

                        return (
                            <Link key={project.title} href={`/projects/${project.slug}`}>
                                <article
                                    className={`group relative retro-ticket transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer overflow-hidden`}
                                    style={{
                                        backgroundColor: `var(--${ticketColor})`,
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    {/* Price tag in top corner */}
                                    <div className="absolute top-4 right-4 retro-badge z-10">
                                        PROJET
                                    </div>

                                    {/* Image section */}
                                    <div className="relative h-40 overflow-hidden border-b-3 border-border-strong">
                                        <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-105">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} preview`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-background-sand text-4xl">
                                                    {project.icon}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`p-6 ${textColor}`}>
                                        {project.comingSoon && (
                                            <span className="retro-badge bg-accent-red-strong text-background-main mb-3 inline-block">
                                                BIENTÔT
                                            </span>
                                        )}

                                        <h3 className="retro-heading text-xl mb-3">
                                            {project.title}
                                        </h3>

                                        <p className={`text-sm leading-relaxed mb-4 ${textColor}/80`}>
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-background-dark text-text-on-dark text-xs font-bold uppercase tracking-wider"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-3 ${textColor}`}>
                                            <span>EXPLORER</span>
                                            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>

                {/* Ghost Hosting Service Panel */}
                <div className="mt-20">
                    <div className="relative retro-section-dark p-8 sm:p-12">
                        {/* Decorative geometric accents */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-primary-orange transform rotate-45"></div>
                        <div className="absolute bottom-4 left-4 w-4 h-4 bg-accent-green-light transform rotate-45"></div>
                        {/* Content */}
                        <div className="relative flex flex-col items-center text-center lg:flex-row lg:text-left">
                            <div className="flex-1">
                                <span className="retro-badge bg-accent-yellow text-text-primary mb-6 inline-block">
                                    SERVICE D'HÉBERGEMENT
                                </span>

                                <h3 className="retro-heading text-h1 text-text-on-dark mb-6">
                                    Besoin d'hébergement?
                                </h3>

                                <p className="max-w-2xl text-base leading-relaxed text-text-on-dark/90 lg:text-lg">
                                    Hébergement professionnel avec audit sécurité et infrastructure swarm optimisée.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <div className="flex items-center gap-2 retro-badge bg-primary-green text-text-on-dark">
                                        🔒 HTTPS & SÉCURITÉ
                                    </div>
                                    <div className="flex items-center gap-2 retro-badge bg-primary-blue text-text-on-dark">
                                        ⚡ INFRASTRUCTURE SWARM
                                    </div>
                                    <div className="flex items-center gap-2 retro-badge bg-accent-orange-deep text-text-on-dark">
                                        💳 ABONNEMENT STRIPE
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col items-center gap-6 lg:ml-12 lg:mt-0">
                                <div className="relative h-48 w-48 retro-card overflow-hidden lg:h-56 lg:w-56">
                                    <Image
                                        src="/images/projects/ghost.png"
                                        alt="Ghost hébergement service"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Link
                                        href="https://ghost.gobc.fr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="retro-button-primary"
                                    >
                                        DÉCOUVRIR GHOST
                                    </Link>

                                    <div className="text-center text-sm text-text-on-dark/70">
                                        Monitoring • Support dédié
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Parallax Website Proposal Panel */}
                <div className="mt-20">
                    <div className="relative retro-card bg-primary-orange p-8 sm:p-12">
                        {/* Decorative geometric accents */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-primary-red transform rotate-45"></div>
                        <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent-yellow transform rotate-45"></div>

                        <div className="relative flex flex-col items-center text-center lg:flex-row lg:text-left">
                            <div className="flex-1">
                                <span className="retro-badge bg-background-dark text-text-on-dark mb-6 inline-block">
                                    DISPONIBLE POUR PROJETS
                                </span>

                                <h3 className="retro-heading text-h1 text-text-on-orange mb-6">
                                    Votre site web avec effets parallax
                                </h3>

                                <p className="max-w-2xl text-base leading-relaxed text-text-on-orange/90 lg:text-lg">
                                    Je crée des sites web immersifs avec des effets de parallax sur mesure.
                                </p>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <div className="retro-badge bg-primary-green text-text-on-dark">
                                        ✨ EFFETS PARALLAX CUSTOM
                                    </div>
                                    <div className="retro-badge bg-primary-blue text-text-on-dark">
                                        📱 RESPONSIVE DESIGN
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-col gap-4 lg:ml-12 lg:mt-0">
                                <Link
                                    href="#contact"
                                    className="retro-button-secondary border-text-on-orange text-text-on-orange hover:bg-text-on-orange hover:text-primary-orange"
                                >
                                    DISCUTONS DE VOTRE PROJET
                                </Link>

                                <div className="text-center text-sm text-text-on-orange/70">
                                    Réponse sous 24h • Devis gratuit
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeSection;