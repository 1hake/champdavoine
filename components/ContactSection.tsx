import { Github, Instagram, Music, Mail } from 'lucide-react';
import { contactData } from '@/data/data';

const ContactSection: React.FC = () => {
    const socials = [
        { href: contactData.contact.socials.github, icon: Github, label: 'GitHub' },
        { href: contactData.contact.socials.instagram, icon: Instagram, label: 'Instagram' },
    ];

    return (
        <section id="contact" className="relative px-4 py-[var(--section-padding)] sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--color-surface-light)] via-[var(--color-surface-light)] to-gray-100">
            <div className="container relative mx-auto max-w-4xl">
                <div className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] border-[3px] border-[var(--color-neon)] bg-gradient-to-br from-[var(--color-blue)] via-[var(--color-purple)] to-[var(--color-orange)] p-[3px]">
                    <div className="relative rounded-[21px] sm:rounded-[33px] bg-white px-6 py-12 sm:px-12 sm:py-20">
                        <div className="pointer-events-none absolute -right-10 top-0 h-64 w-64 -translate-y-1/3 rounded-full bg-[var(--color-blue)] opacity-10 blur-[120px]"></div>
                        <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 translate-y-1/3 rounded-full bg-[var(--color-neon)] opacity-10 blur-[120px]"></div>

                        <div className="relative flex flex-col items-center text-center">
                            <span className="eyebrow inline-flex items-center gap-2 sm:gap-3 text-[var(--color-neon)]">
                                <span className="h-[3px] w-8 sm:w-10 bg-[var(--color-neon)]"></span>
                                {contactData.eyebrow}
                            </span>
                            <h2 className="mt-6 sm:mt-8 font-heading text-3xl leading-[0.95] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                                {contactData.title.line1}
                                <br />
                                <span className="text-[var(--color-neon)]">{contactData.title.line2}</span>
                            </h2>
                            <p className="mt-4 sm:mt-6 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg px-2">
                                {contactData.description}
                            </p>

                            <a
                                href={`mailto:${contactData.contact.email}`}
                                className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full border-[3px] border-[var(--color-neon)] bg-[var(--color-neon)] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] w-full max-w-[280px] sm:w-auto sm:max-w-none"
                            >
                                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                                <span className="truncate">{contactData.contact.email}</span>
                            </a>

                            <div className="mt-10 sm:mt-12 flex items-center gap-4 sm:gap-6">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-[3px] border-gray-200 bg-gray-50 transition-all duration-200 hover:scale-110 hover:border-[var(--color-neon)] hover:bg-[var(--color-neon)]"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-5 w-5 text-[var(--color-ink)] transition-colors group-hover:text-white" />
                                    </a>
                                ))}
                            </div>

                            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-600 leading-relaxed px-4">
                                {contactData.contact.location} • {contactData.contact.phone}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;