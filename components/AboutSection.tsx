import { aboutData } from '@/data/data';
import { ArrowDown } from 'lucide-react';

const AboutSection: React.FC = () => {
    const navLinks = [
        { href: "#skills", label: "Compétences" },
        { href: "#experience", label: "Expérience" },
        { href: "#projects", label: "Projets" },
        { href: "#contact", label: "Contact" }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="relative z-10 -mt-16 px-4 pb-[var(--section-padding)] sm:-mt-24 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="relative overflow-hidden rounded-[36px] border-[3px] border-[var(--color-ink-inverse)] bg-[var(--color-surface-dark)] px-6 py-12 sm:px-10 md:px-14 md:py-16">
                    <div className="relative flex flex-col gap-8 text-center">
                        <span className="eyebrow inline-flex items-center justify-center gap-3 text-[#F4F0A2]">
                            <span className="h-[3px] w-10 bg-[#F4F0A2]"></span>
                            {aboutData.eyebrow}
                            <span className="h-[3px] w-10 bg-[#F4F0A2]"></span>
                        </span>

                        <h2 className="font-heading text-3xl leading-[0.9] text-[var(--color-ink-inverse)] sm:text-4xl lg:text-5xl">
                            {aboutData.title.line1} {aboutData.title.line2}
                        </h2>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                            {aboutData.profile.summary}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="group flex items-center gap-2 rounded-full border-[3px] border-[var(--color-ink-inverse)] bg-transparent px-4 py-2 text-xs font-semibold text-[var(--color-ink-inverse)] transition-all duration-200 hover:border-[#F4F0A2] hover:bg-[#F4F0A2] hover:text-[var(--color-ink)] sm:px-6 sm:py-3 sm:text-sm"
                                >
                                    {link.label}
                                    <ArrowDown className="h-3 w-3 transition-transform duration-200 group-hover:translate-y-1 sm:h-4 sm:w-4" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;