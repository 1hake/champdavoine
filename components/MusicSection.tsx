import { Play, Pause, ExternalLink } from 'lucide-react';
import { musicData } from '@/data/data';
import { useState } from 'react';
import Image from 'next/image';

const MusicSection: React.FC = () => {
    const [playingTrack, setPlayingTrack] = useState<string | null>(null);

    const handlePlayPause = (trackTitle: string) => {
        if (playingTrack === trackTitle) {
            setPlayingTrack(null);
        } else {
            setPlayingTrack(trackTitle);
        }
    };

    return (
        <section id="music" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center">
                    <span className="eyebrow inline-flex items-center gap-3 text-[var(--color-neon)]">
                        <span className="h-[3px] w-10 bg-[var(--color-neon)]"></span>
                        {musicData.eyebrow}
                    </span>
                    <h2 className="mt-8 font-heading text-4xl leading-[0.9] text-[var(--color-ink)] sm:text-5xl lg:text-[3.75rem]">
                        {musicData.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
                        {musicData.description}
                    </p>
                </div>

                <div className="mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
                    {musicData.tracks.map((track, index) => {
                        const isLight = track.tone === 'light';
                        const isPlaying = playingTrack === track.title;

                        return (
                            <article
                                key={track.title}
                                className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border-[3px] ${isLight ? 'border-[var(--color-ink)] bg-[var(--color-bg-light)] text-[var(--color-ink)]' : 'border-gray-200 bg-white text-[var(--color-ink)]'
                                    } p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                <div
                                    className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-20 blur-[80px] transition-opacity duration-300 group-hover:opacity-30"
                                    style={{ background: track.accent }}
                                ></div>

                                <div className="relative -mx-6 -mt-6 mb-6 h-48 overflow-hidden sm:-mx-8 sm:-mt-8">
                                    <div
                                        className="h-full w-full flex items-center justify-center relative transition-transform duration-300 group-hover:scale-105"
                                        style={{ background: `linear-gradient(135deg, ${track.accent}40, ${track.accent}20)` }}
                                    >
                                        {track.cover ? (
                                            <Image
                                                src={track.cover}
                                                alt={`${track.title} cover`}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="text-6xl">🎵</div>
                                        )}

                                        {/* Play/Pause Overlay */}
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                                            onClick={() => handlePlayPause(track.title)}
                                        >
                                            <div
                                                className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-110"
                                                style={{ background: `${track.accent}80` }}
                                            >
                                                {isPlaying ? (
                                                    <Pause className="h-8 w-8 text-white ml-0" />
                                                ) : (
                                                    <Play className="h-8 w-8 text-white ml-1" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative flex items-start justify-between gap-4">
                                    <div
                                        className="h-3 w-3 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:shadow-lg"
                                        style={{ background: track.accent }}
                                    ></div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>{track.duration}</span>
                                        <span>•</span>
                                        <span>{track.year}</span>
                                    </div>
                                </div>

                                <h3 className="relative mt-4 font-heading text-2xl leading-[0.95] sm:text-3xl lg:text-3xl">
                                    {track.title}
                                </h3>

                                <p className="relative mt-1 text-sm font-semibold text-[var(--color-neon)] uppercase tracking-wider">
                                    {track.artist}
                                </p>

                                <p className={`relative mt-4 flex-grow text-sm leading-relaxed sm:text-base ${isLight ? 'text-[var(--color-ink)]/75' : 'text-gray-600'
                                    }`}>
                                    {track.description}
                                </p>

                                <div className="relative mt-6 flex flex-wrap gap-2 sm:gap-3">
                                    {track.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`rounded-full border-[2px] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] transition-all duration-200 sm:border-[3px] sm:px-4 sm:text-[0.6rem] ${isLight ? 'border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-bg-light)]' : 'border-gray-300 text-gray-700 hover:border-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white'
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="relative mt-8 flex items-center gap-4">
                                    <span className={`text-sm font-semibold uppercase tracking-wider ${isLight ? 'text-[var(--color-ink)]/60' : 'text-gray-500'
                                        }`}>
                                        {track.genre}
                                    </span>

                                    {track.soundcloud && (
                                        <a
                                            href={track.soundcloud}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:gap-3 ${isLight ? 'text-[var(--color-ink)]' : 'text-[var(--color-neon)]'
                                                }`}
                                        >
                                            <span>Écouter</span>
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>

                                <div
                                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                                    style={{ background: track.accent }}
                                ></div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MusicSection;