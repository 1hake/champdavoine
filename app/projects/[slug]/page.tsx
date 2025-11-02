import { codeData } from '@/data/data'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export function generateStaticParams() {
    return codeData.projects.map((project) => ({
        slug: project.slug,
    }))
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
    const project = codeData.projects.find(p => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-[var(--color-surface-light)]">
            {/* Back Button */}
            <Link
                href="/#code"
                className="fixed top-6 left-6 z-50 group inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-border-light)] bg-white/80 px-5 py-2.5 text-sm text-[var(--color-ink)]/60 backdrop-blur-xl transition-all hover:border-[var(--color-ink)]/30 hover:text-[var(--color-ink)]"
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

                <div className="container mx-auto max-w-5xl px-6 py-24 sm:py-32">
                    {/* Icon + Title */}
                    <div className="mb-8 flex items-center gap-6">
                        <div
                            className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl text-5xl backdrop-blur-sm"
                            style={{
                                background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)`,
                                boxShadow: `0 0 60px ${project.accent}20`
                            }}
                        >
                            {project.icon}
                        </div>
                        <div>
                            <h1 className="font-heading text-5xl leading-tight text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
                                {project.title}
                            </h1>
                            <p className="mt-2 text-xl text-[var(--color-ink)]/60">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="mb-10 flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.role}</span>
                        <span>•</span>
                        <span>{project.timeline}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105"
                                style={{
                                    background: project.accent,
                                    boxShadow: `0 0 40px ${project.accent}40`
                                }}
                            >
                                Voir le projet
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-[var(--color-ink)] backdrop-blur-sm transition-all hover:border-[var(--color-ink)] hover:bg-gray-50"
                            >
                                Code source
                                <Github className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto max-w-5xl px-6 py-16 sm:py-24">
                <div className="space-y-16">
                    {/* Overview */}
                    <section>
                        <p className="text-xl leading-relaxed text-gray-600">
                            {project.fullDescription}
                        </p>
                    </section>

                    {/* Technologies */}
                    <section>
                        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                            Technologies
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink)] backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Challenge & Solution */}
                    <div className="grid gap-8 md:grid-cols-2">
                        <section>
                            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                Défi
                            </h2>
                            <p className="leading-relaxed text-gray-600">
                                {project.challenge}
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                Solution
                            </h2>
                            <p className="leading-relaxed text-gray-600">
                                {project.solution}
                            </p>
                        </section>
                    </div>

                    {/* Features */}
                    <section>
                        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                            Fonctionnalités
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {project.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:bg-gray-50"
                                >
                                    <div className="flex gap-3">
                                        <div
                                            className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                                            style={{ background: project.accent }}
                                        />
                                        <p className="text-sm leading-relaxed text-gray-600 group-hover:text-[var(--color-ink)]">
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Results */}
                    <section>
                        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                            Résultats
                        </h2>
                        <div className="space-y-4">
                            {project.results.map((result, index) => (
                                <div key={index} className="flex items-start gap-3 text-gray-600">
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
                            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                Galerie
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200"
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
                            <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                Vidéos
                            </h2>
                            <div className="space-y-4">
                                {project.videos.map((video, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200"
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
