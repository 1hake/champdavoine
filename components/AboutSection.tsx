import { aboutData, contactData } from '@/data/data';
import { ArrowDown, Github, Instagram, Mail, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
    const navLinks = [
        { href: "#skills", label: "Compétences" },
        { href: "#experience", label: "Expérience" },
        { href: "#code", label: "Code" },
        { href: "#music", label: "Musique" },
    ];

    const socials = [
        { href: contactData.contact.socials.github, icon: Github, label: 'GitHub' },
        { href: contactData.contact.socials.instagram, icon: Instagram, label: 'Instagram' },
        { href: `tel:${contactData.contact.phone}`, icon: Phone, label: 'Phone' },
        { href: `mailto:${contactData.contact.email}`, icon: Mail, label: 'Email' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="relative z-10 -mt-16 px-4 pb-[var(--section-padding)] sm:-mt-24 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="relative overflow-hidden rounded-[36px] border-[3px] border-[var(--color-ink)] bg-white px-6 py-12 sm:px-10 md:px-14 md:py-16">
                    <div className="relative flex flex-col gap-8 text-center">
                        <span className="eyebrow inline-flex items-center justify-center gap-3 text-[var(--color-neon)]">
                            <span className="h-[3px] w-10 bg-[var(--color-neon)]"></span>
                            {aboutData.eyebrow}
                            <span className="h-[3px] w-10 bg-[var(--color-neon)]"></span>
                        </span>

                        <h2 className="font-heading text-3xl leading-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                            {aboutData.title.line1} {aboutData.title.line2}
                        </h2>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
                            {aboutData.profile.summary}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="group flex items-center gap-2 rounded-full border-[3px] border-[var(--color-ink)] bg-transparent px-4 py-2 text-xs font-semibold text-[var(--color-ink)] transition-all duration-200 hover:border-[var(--color-neon)] hover:bg-[var(--color-neon)] hover:text-white sm:px-6 sm:py-3 sm:text-sm"
                                >
                                    {link.label}
                                    <ArrowDown className="h-3 w-3 transition-transform duration-200 group-hover:translate-y-1 sm:h-4 sm:w-4" />
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col items-center gap-6 border-t-2 border-gray-100 pt-8 w-full">
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                {contactData.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target={social.label === 'Phone' || social.label === 'Email' ? undefined : '_blank'}
                                        rel={social.label === 'Phone' || social.label === 'Email' ? undefined : 'noreferrer'}
                                        className="group flex items-center gap-2 rounded-full border-[2px] border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition-all duration-200 hover:border-[var(--color-neon)] hover:bg-[var(--color-neon)] hover:text-white"
                                    >
                                        <social.icon className="h-4 w-4" />
                                        <span>{social.label}</span>
                                    </a>
                                ))}
                            </div>

                            <p className="text-xs text-gray-400">
                                {contactData.contact.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;