import { codeData, musicData } from '@/data/data'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// Type for combined project (code + music specific fields)
type CombinedProject = typeof codeData.projects[0] & {
    duration?: string;
    genre?: string;
    artist?: string;
    soundcloud?: string;
    spotify?: string;
};

// Combine all projects from both code and music data
const allProjects: CombinedProject[] = [...codeData.projects, ...musicData.projects];

export function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project: CombinedProject | undefined = allProjects.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    // Determine if this is a music project
    const isMusicProject = musicData.projects.some(p => p.slug === slug);

    return (
        <div className="min-h-screen bg-[var(--color-surface-light)]">
            {/* Back Button */}
            <Link
                href={isMusicProject ? "/#music" : "/#code"}
                className="group fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-border-light)] bg-white/80 px-4 py-2 text-sm text-[var(--color-ink)]/60 backdrop-blur-xl transition-all hover:border-[var(--color-ink)]/30 hover:text-[var(--color-ink)] sm:left-6 sm:top-6 sm:px-5 sm:py-2.5"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Retour</span>
            </Link>

            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-gray-200">
                {/* Gradient Orbs */}
                <div
                    className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
                    style={{ background: project.accent }}
                />

                <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
                    {/* Project Image */}
                    {project.image && (
                        <div className="mb-8 sm:mb-12">
                            <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-xl sm:rounded-3xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    )}

                    {/* Icon + Title */}
                    <div className="mb-6 sm:mb-8">
                        {/* Mobile: Stack vertically, Desktop: Horizontal */}
                        <div className="flex justify-center sm:inline-flex sm:justify-start">
                            <div
                                className="mb-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-4xl backdrop-blur-sm sm:mb-0 sm:h-24 sm:w-24 sm:rounded-3xl sm:text-5xl"
                                style={{
                                    background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)`,
                                    boxShadow: `0 0 60px ${project.accent}20`
                                }}
                            >
                                {project.icon}
                            </div>
                        </div>
                        <div className="sm:ml-6 sm:inline-block sm:align-top">
                            <h1 className="text-center font-heading text-4xl leading-tight text-[var(--color-ink)] sm:text-left sm:text-5xl lg:text-7xl">
                                {project.title}
                            </h1>
                            <p className="mt-3 text-center text-lg leading-relaxed text-[var(--color-ink)]/60 sm:mt-2 sm:text-left sm:text-xl">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="mb-8 space-y-2 text-center text-sm text-gray-500 sm:mb-10 sm:flex sm:flex-wrap sm:justify-start sm:gap-3 sm:space-y-0">
                        <span className="block sm:inline">{project.year}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="block sm:inline">{project.role}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="block sm:inline">{project.timeline}</span>
                        {isMusicProject && project.duration && (
                            <>
                                <span className="hidden sm:inline">•</span>
                                <span className="block sm:inline">{project.duration}</span>
                            </>
                        )}
                        {isMusicProject && project.genre && (
                            <>
                                <span className="hidden sm:inline">•</span>
                                <span className="block sm:inline">{project.genre}</span>
                            </>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-semibold text-white transition-all duration-200 hover:scale-105"
                                style={{
                                    background: project.accent,
                                    boxShadow: `0 0 40px ${project.accent}40`
                                }}
                            >
                                {isMusicProject ? 'Écouter' : 'Voir le projet'}
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                        {project.soundcloud && (
                            <a
                                href={project.soundcloud}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-[var(--color-ink)] backdrop-blur-sm transition-all hover:border-[var(--color-ink)] hover:bg-gray-50"
                            >
                                SoundCloud
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-3 text-center font-semibold text-[var(--color-ink)] backdrop-blur-sm transition-all hover:border-[var(--color-ink)] hover:bg-gray-50"
                            >
                                Code source
                                <Github className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
                <div className="space-y-12 sm:space-y-16">
                    {/* Overview */}
                    <section>
                        <p className="text-base leading-relaxed text-gray-600 sm:text-xl">
                            {project.fullDescription}
                        </p>
                    </section>

                    {/* Technologies */}
                    <section>
                        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6 sm:text-sm">
                            Technologies
                        </h2>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Challenge & Solution */}
                    <div className="space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                        <section>
                            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-4 sm:text-sm">
                                Défi
                            </h2>
                            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                                {project.challenge}
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-4 sm:text-sm">
                                Solution
                            </h2>
                            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                                {project.solution}
                            </p>
                        </section>
                    </div>

                    {/* Features */}
                    <section>
                        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6 sm:text-sm">
                            Fonctionnalités
                        </h2>
                        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                            {project.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:bg-gray-50 sm:rounded-2xl sm:p-6"
                                >
                                    <div className="flex gap-2 sm:gap-3">
                                        <div
                                            className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                                            style={{ background: project.accent }}
                                        />
                                        <p className="text-xs leading-relaxed text-gray-600 group-hover:text-[var(--color-ink)] sm:text-sm">
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Results */}
                    <section>
                        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6 sm:text-sm">
                            Résultats
                        </h2>
                        <div className="space-y-3 sm:space-y-4">
                            {project.results.map((result, index) => (
                                <div key={index} className="flex items-start gap-3 text-sm text-gray-600 sm:text-base">
                                    <div
                                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                                        style={{ background: project.accent }}
                                    />
                                    <span>{result}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Gallery */}
                    {project.gallery && project.gallery.length > 0 && (
                        <section>
                            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6 sm:text-sm">
                                Galerie
                            </h2>
                            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 sm:rounded-2xl"
                                    >
                                        <Image
                                            src={img}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Videos */}
                    {project.videos && project.videos.length > 0 && (
                        <section>
                            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 sm:mb-6 sm:text-sm">
                                Vidéos
                            </h2>
                            <div className="space-y-3 sm:space-y-4">
                                {project.videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 sm:rounded-2xl"
                                    >
                                        <iframe
                                            src={video}
                                            className="h-full w-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}
