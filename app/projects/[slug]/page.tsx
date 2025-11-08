import { codeData, musicData } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Github, Music2 } from 'lucide-react'
import type { JSX } from 'react'

type CombinedProject = typeof codeData.projects[0] & {
    soundcloud?: string
    spotify?: string
    comingSoon?: boolean
    disabled?: boolean
    accent: string
}

const allProjects: CombinedProject[] = [...codeData.projects, ...musicData.projects]

export function generateStaticParams() {
    return allProjects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project: CombinedProject | undefined = allProjects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    const isMusicProject = musicData.projects.some((p) => p.slug === slug)
    const accentGlow = `${project.accent}4d`

    const actions = [
        project.link
            ? {
                href: project.link,
                label: isMusicProject ? 'Écouter' : 'Voir le projet',
                icon: <ExternalLink className="h-4 w-4" />,
                primary: true,
            }
            : null,
        project.soundcloud
            ? {
                href: project.soundcloud,
                label: 'SoundCloud',
                icon: <ExternalLink className="h-4 w-4" />,
                primary: false,
            }
            : null,
        project.spotify
            ? {
                href: project.spotify,
                label: 'Spotify',
                icon: <Music2 className="h-4 w-4" />,
                primary: false,
            }
            : null,
        project.github
            ? {
                href: project.github,
                label: 'Code source',
                icon: <Github className="h-4 w-4" />,
                primary: false,
            }
            : null,
    ].filter(Boolean) as Array<{
        href: string
        label: string
        icon: JSX.Element
        primary: boolean
    }>

    return (
        <div className="relative min-h-screen bg-[var(--color-surface-light)] text-[var(--color-ink)]">
            <Link
                href={isMusicProject ? '/#music' : '/#code'}
                className="group fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-light)] bg-white/80 px-4 py-2 text-sm text-[var(--color-ink)]/70 shadow-sm backdrop-blur-xl transition-all hover:border-[var(--color-ink)]/30 hover:text-[var(--color-ink)] sm:left-6 sm:top-6 sm:px-5 sm:py-2.5"
            >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>Retour</span>
            </Link>

            <section className="relative isolate overflow-hidden">
                <div className="absolute inset-0 -z-20">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover lg:blur-xl"
                    />
                </div>
                <div
                    className="absolute inset-0 -z-10"
                    style={{ background: `linear-gradient(120deg, ${accentGlow}, rgba(255,255,255,0.6) 55%)` }}
                />
                <div className="absolute inset-0 -z-10 bg-black/15" />

                <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-28">
                    <div className="rounded-[32px] border border-white/20 bg-white/80 p-8 shadow-2xl backdrop-blur-3xl sm:p-12">
                        <div>
                            <div className="flex items-start justify-between">
                                <span className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink)]/60">
                                    {isMusicProject ? 'Projet musical' : 'Projet digital'}
                                </span>
                                {project.comingSoon && (
                                    <span className="rounded-full border border-orange-300 bg-gradient-to-r from-orange-100 to-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700">
                                        Bientôt disponible
                                    </span>
                                )}
                            </div>
                            <h1 className="mt-3 font-heading text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                                {project.title}
                            </h1>
                        </div>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-ink)]/70 sm:text-xl">
                            {project.description}
                        </p>

                        {actions.length > 0 && (
                            <div className="mt-10 flex flex-wrap gap-3">
                                {actions.map((action) => (
                                    <a
                                        key={action.href}
                                        href={action.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={
                                            action.primary
                                                ? 'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:text-base'
                                                : 'inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--color-ink)]/80 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-ink)]/40 hover:text-[var(--color-ink)] sm:text-base'
                                        }
                                        style={
                                            action.primary
                                                ? {
                                                    background: project.accent,
                                                    boxShadow: `0 18px 45px ${accentGlow}`,
                                                }
                                                : undefined
                                        }
                                    >
                                        {action.label}
                                        {action.icon}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
                <div className="rounded-3xl border border-[var(--color-border-light)] bg-white p-8 shadow-xl">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/45">
                        Stack
                    </h2>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-[var(--color-border-light)] bg-[var(--color-surface-light)] px-4 py-2 text-sm font-medium text-[var(--color-ink)]/80"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
                <article>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/45">
                        Aperçu
                    </h2>
                    <div className="mt-6 grid gap-8 lg:grid-cols-[300px,1fr] lg:items-start">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--color-border-light)] bg-white/40 shadow-lg">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 300px, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <p className="text-base leading-relaxed text-[var(--color-ink)]/70 sm:text-lg">
                            {project.fullDescription}
                        </p>
                    </div>
                </article>
            </section>

            <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:pb-28">
                <div className="grid gap-16 lg:grid-cols-[2fr,1fr] lg:items-start lg:gap-20">
                    <div className="space-y-16">
                        {project.gallery && project.gallery.length > 0 && (
                            <div>
                                <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/45">
                                    Galerie
                                </h2>
                                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                    {project.gallery.map((img, index) => (
                                        <div
                                            key={`${img}-${index}`}
                                            className="group relative overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-white/40 shadow-lg"
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.title} visuel ${index + 1}`}
                                                fill
                                                sizes="(min-width: 640px) 50vw, 100vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.videos && project.videos.length > 0 && (
                            <div>
                                <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/45">
                                    Vidéos
                                </h2>
                                <div className="mt-6 space-y-5">
                                    {project.videos.map((video, index) => (
                                        <div
                                            key={`${video}-${index}`}
                                            className="overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-white/60 shadow-lg"
                                        >
                                            <iframe
                                                src={video}
                                                className="aspect-video w-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="space-y-12">
                        {isMusicProject && (project.soundcloud || project.spotify) && (
                            <div className="rounded-3xl border border-[var(--color-border-light)] bg-white/70 p-8 shadow-xl backdrop-blur-xl">
                                <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/45">
                                    Écoutes
                                </h2>
                                <div className="mt-5 flex flex-col gap-3">
                                    {project.soundcloud && (
                                        <a
                                            href={project.soundcloud}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between rounded-2xl border border-white/50 bg-white/80 px-4 py-3 text-sm font-semibold text-[var(--color-ink)]/80 transition-all hover:border-white hover:text-[var(--color-ink)]"
                                        >
                                            SoundCloud
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    )}
                                    {project.spotify && (
                                        <a
                                            href={project.spotify}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-between rounded-2xl border border-white/50 bg-white/80 px-4 py-3 text-sm font-semibold text-[var(--color-ink)]/80 transition-all hover:border-white hover:text-[var(--color-ink)]"
                                        >
                                            Spotify
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}

                        {project.github && (
                            <div className="rounded-3xl border border-[var(--color-border-light)] bg-white/70 p-8 shadow-xl backdrop-blur-xl">
                                <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/45">
                                    Dépôt
                                </h2>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex w-full items-center justify-between rounded-2xl border border-white/50 bg-white/80 px-4 py-3 text-sm font-semibold text-[var(--color-ink)]/80 transition-all hover:border-white hover:text-[var(--color-ink)]"
                                >
                                    Code source
                                    <Github className="h-4 w-4" />
                                </a>
                            </div>
                        )}
                    </aside>
                </div>
            </section>
        </div>
    )
}
