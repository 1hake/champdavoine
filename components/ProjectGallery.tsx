'use client'

import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

interface ProjectGalleryProps {
    gallery: string[]
    projectTitle: string
    layout?: 'grid' | 'sidebar'
}

export default function ProjectGallery({ gallery, projectTitle, layout = 'grid' }: ProjectGalleryProps) {
    if (!gallery || gallery.length === 0) return null

    return (
        <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-ink)]/45">
                Galerie
            </h2>
            <PhotoProvider>
                <div className={`mt-6 ${layout === 'sidebar' ? 'space-y-3' : 'grid gap-5 sm:grid-cols-2'}`}>
                    {gallery.map((img, index) => (
                        <PhotoView key={`${img}-${index}`} src={img}>
                            <div className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-[var(--color-border-light)] bg-white/40 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${layout === 'sidebar' ? 'aspect-[4/3]' : 'aspect-[4/3]'
                                }`}>
                                <Image
                                    src={img}
                                    alt={`${projectTitle} visuel ${index + 1}`}
                                    fill
                                    sizes={layout === 'sidebar' ? '300px' : '(min-width: 640px) 50vw, 100vw'}
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                            </div>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    )
}