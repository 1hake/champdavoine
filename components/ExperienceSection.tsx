'use client';

import { MapPin, GraduationCap } from 'lucide-react';
import { experienceData } from '@/data/data';
import Image from 'next/image';
import DownloadResumeButton from './DownloadResumeButton';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface ExperienceItem {
    employer: string;
    title: string;
    start: string;
    end: string;
    duration: string;
    location?: string;
    type?: string;
    logo?: string;
    tags?: string[];
    gallery?: string[];
    description: string[];
}

type CombinedExperience = ExperienceItem & {
    type?: string;
    logo?: string;
    tags?: string[];
    gallery?: string[];
};

const ExperienceSection: React.FC = () => {
    // Combine all experiences and education into one timeline
    const allExperiences: CombinedExperience[] = [
        ...experienceData.experience,
        ...experienceData.education.map((edu): CombinedExperience => ({
            employer: edu.school,
            title: edu.field,
            start: edu.period.split(' - ')[0],
            end: edu.period.split(' - ')[1],
            duration: "",
            location: "",
            type: edu.type,
            logo: edu.logo,
            tags: edu.tags,
            gallery: edu.gallery,
            description: [edu.description]
        }))
    ];

    return (
        <section id="experience" className="relative retro-section-dark px-4 py-[var(--section-padding)] sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="relative retro-card bg-background-main p-8 lg:p-12">
                    {/* Green vertical strip with EXPERIENCE label */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-primary-green flex items-center justify-center">
                        <span className="text-text-on-dark font-heading text-lg font-bold transform -rotate-90 whitespace-nowrap tracking-wider">
                            EXPÉRIENCE
                        </span>
                    </div>

                    {/* Decorative fruit slices */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-accent-yellow rounded-full"></div>
                    <div className="absolute bottom-4 left-16 w-6 h-6 bg-accent-orange-deep rounded-full"></div>
                    <div className="absolute top-1/2 right-8 w-4 h-8 bg-accent-green-light rounded-full transform rotate-45"></div>

                    {/* Content */}
                    <div className="ml-16">
                        <div className="text-center mb-12">
                            <span className="retro-badge mb-4 inline-block">
                                {experienceData.eyebrow}
                            </span>
                            <h2 className="retro-heading text-h1 text-primary-red mb-6">
                                {experienceData.title}
                            </h2>
                            <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-700">
                                {experienceData.description}
                            </p>
                            <div className="mt-8">
                                <DownloadResumeButton className="retro-button-primary" />
                            </div>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {allExperiences.slice(0, 4).map((exp, index) => (
                                <article
                                    key={index}
                                    className="relative retro-card bg-background-sand p-6 hover:bg-background-main transition-all duration-200"
                                >
                                    {/* Header */}
                                    <div className="flex gap-4 items-start mb-4">
                                        <div className="flex-shrink-0 w-12 h-12 retro-card bg-background-main flex items-center justify-center">
                                            {exp.type === 'Formation' ? (
                                                <GraduationCap className="h-6 w-6 text-primary-blue" />
                                            ) : exp.logo ? (
                                                <Image
                                                    src={exp.logo}
                                                    alt={`${exp.employer} logo`}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <div className="w-6 h-6 bg-primary-orange"></div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-heading text-sm font-bold text-primary-red uppercase tracking-wide">
                                                    {exp.employer}
                                                </h3>
                                                <div className="retro-badge text-xs">
                                                    {exp.start} - {exp.end}
                                                </div>
                                            </div>
                                            <p className="text-gray-800 font-semibold mt-1">{exp.title}</p>
                                            {exp.location && (
                                                <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                                                    <MapPin className="h-3 w-3" />
                                                    {exp.location}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="text-sm text-gray-700 space-y-1">
                                        {exp.description.slice(0, 2).map((desc, i) => (
                                            <p key={i}>{desc}</p>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    {exp.tags && (
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {exp.tags.slice(0, 3).map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 bg-primary-green text-text-on-dark text-xs font-semibold"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Gallery preview */}
                                    {exp.gallery && exp.gallery.length > 0 && (
                                        <PhotoProvider>
                                            <div className="flex gap-2 mt-4">
                                                {exp.gallery.slice(0, 2).map((image, i) => (
                                                    <PhotoView key={i} src={image}>
                                                        <div className="w-12 h-12 retro-card cursor-pointer overflow-hidden">
                                                            <Image
                                                                src={image}
                                                                alt={`${exp.employer} image ${i + 1}`}
                                                                width={48}
                                                                height={48}
                                                                className="object-cover w-full h-full hover:scale-110 transition-transform duration-200"
                                                            />
                                                        </div>
                                                    </PhotoView>
                                                ))}
                                            </div>
                                        </PhotoProvider>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;