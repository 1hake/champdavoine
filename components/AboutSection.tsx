import { aboutData, contactData } from '@/data/data';
import { ArrowDown, Github, Instagram, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const AboutSection: React.FC = () => {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
    const navLinks = [
        { href: "#skills", label: "Compétences" },
        { href: "#experience", label: "Expérience" },
        { href: "#code", label: "Code" },
        { href: "#music", label: "Musique" },
    ];

    const socials = [
        { href: contactData.contact.socials.github, icon: Github, label: 'GitHub', color: 'var(--primary-red)', hoverColor: 'var(--primary-orange)' },
        { href: contactData.contact.socials.instagram, icon: Instagram, label: 'Instagram', color: 'var(--primary-blue)', hoverColor: 'var(--primary-orange)' },
        { href: `tel:${contactData.contact.phone}`, icon: Phone, label: 'Phone', color: 'var(--primary-green)', hoverColor: 'var(--primary-orange)' },
        { href: `mailto:${contactData.contact.email}`, icon: Mail, label: 'Email', color: 'var(--accent-yellow)', hoverColor: 'var(--primary-orange)' },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="about" className="relative z-10 -mt-16 px-4 pb-[var(--section-padding)] sm:-mt-24 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
                <div className="relative overflow-hidden retro-card geometric-accent px-6 py-12 sm:px-10 md:px-14 md:py-16">
                    <div className="relative flex flex-col gap-8 text-center">
                        <span className="eyebrow inline-flex items-center justify-center gap-3 text-primary-red">
                            <span className="h-[3px] w-10 bg-primary-red"></span>
                            {aboutData.eyebrow}
                            <span className="h-[3px] w-10 bg-primary-red"></span>
                        </span>

                        <h2 className="retro-heading text-h1 text-primary-red">
                            {aboutData.title.line1} {aboutData.title.line2}
                        </h2>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-800">
                            {aboutData.profile.summary}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="retro-button-secondary transition-all duration-200"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    onMouseEnter={() => setHoveredSocial(social.label)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                    className="group flex h-12 w-12 items-center justify-center retro-card transition-all duration-200 hover:scale-110"
                                    style={{
                                        backgroundColor: hoveredSocial === social.label ? social.hoverColor : social.color,
                                    }}
                                >
                                    <social.icon
                                        className="h-5 w-5 text-background-main"
                                    />
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={() => scrollToSection('#skills')}
                            className="group mx-auto flex items-center gap-2 retro-button-primary"
                        >
                            Explorer mon profil
                            <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;