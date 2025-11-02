const Footer: React.FC = () => {
    return (
        <footer className="border-t-[3px] border-[var(--color-border-strong)] bg-[var(--color-bg-darker)] px-6 py-14">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center gap-4 text-center text-[var(--color-muted)]">
                    <span className="inline-flex items-center gap-3 rounded-full border-[3px] border-[#F4F0A2] bg-[var(--color-surface-dark)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F4F0A2]">
                        <span className="h-2 w-2 rounded-full bg-[#F4F0A2]"></span>
                        Colin Champdavoine Studio
                    </span>
                    <p className="font-heading text-2xl text-[var(--color-ink-inverse)]">
                        Rendre le digital aussi mordant que la scène.
                    </p>
                    <p className="text-xs uppercase tracking-[0.35em]">
                        © 2025 – Toujours en création
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;