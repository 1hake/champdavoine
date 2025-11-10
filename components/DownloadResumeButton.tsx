'use client';

import { useState } from 'react';
import { generateResumePDF } from '@/utils/pdfGenerator';

interface DownloadResumeButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export default function DownloadResumeButton({
    className = '',
    children
}: DownloadResumeButtonProps) {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        try {
            setIsGenerating(true);
            await generateResumePDF();
        } catch (error) {
            console.error('Erreur lors de la génération du CV:', error);
            alert('Erreur lors de la génération du CV. Veuillez réessayer.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isGenerating}
            className={`
        group relative overflow-hidden rounded-full border-[3px] border-[var(--color-neon)] bg-[var(--color-neon)] px-8 py-4 text-center font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-[var(--color-neon)] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--color-neon)] disabled:hover:text-white
        ${className}
      `}
        >
            {isGenerating ? (
                <>
                    <span className="relative z-10 inline-flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Génération...
                    </span>
                </>
            ) : (
                <>
                    <span className="relative z-10 inline-flex items-center gap-2">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        {children || 'Télécharger CV (PDF)'}
                    </span>
                </>
            )}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-neon)]/80 to-[var(--color-neon)] transition-transform duration-300 group-hover:scale-105"></div>
        </button>
    );
}