import Image from 'next/image'

const Footer: React.FC = () => {
    const navLinks = [
        { href: "#about", label: "À propos" },
        { href: "#skills", label: "Compétences" },
        { href: "#experience", label: "Expérience" },
        { href: "#code", label: "Projets" },
        { href: "#music", label: "Musique" }
    ];

    return (
        <footer className="relative retro-section-dark mt-32 md:mt-40 px-6 py-20 pt-48 md:pt-56">
            {/* Large Isometric Image - extends above footer */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/4 z-10">
                <div className="relative w-56 h-56 md:w-72 md:h-72">
                    <Image
                        src="/images/footer.webp"
                        alt="Isometric illustration"
                        fill
                        sizes="(min-width: 768px) 288px, 224px"
                        className="object-contain drop-shadow-2xl"
                    />
                </div>
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center gap-8 text-center">
                    {/* Logo */}
                    <div className="w-20 h-20 bg-primary-red transform rotate-45 flex items-center justify-center relative">
                        <span className="transform -rotate-45 font-heading font-bold text-text-on-dark text-lg">
                            CC
                        </span>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap items-center justify-center gap-8 text-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="retro-heading text-sm text-text-on-dark hover:text-primary-orange transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center gap-4 text-text-on-dark/80">
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            <a
                                href="mailto:colin.champdavoine@example.com"
                                className="hover:text-primary-orange transition-colors duration-200"
                            >
                                colin.champdavoine@example.com
                            </a>
                            <span className="text-text-on-dark/50">•</span>
                            <span>Développeur Frontend & Music Artist</span>
                        </div>

                        <div className="retro-badge bg-background-main text-text-primary">
                            © 2025 COLIN CHAMPDAVOINE
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="flex gap-4 opacity-50">
                        <div className="w-3 h-3 bg-accent-yellow transform rotate-45"></div>
                        <div className="w-2 h-2 bg-accent-green-light rounded-full"></div>
                        <div className="w-3 h-3 bg-primary-orange transform rotate-45"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;