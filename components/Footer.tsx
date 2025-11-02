const Footer: React.FC = () => {
    return (
        <footer className="border-t-[3px] border-gray-200 bg-gray-50 px-6 py-14">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center gap-4 text-center text-gray-600">
                    <span className="inline-flex items-center gap-3 rounded-full border-[3px] border-[var(--color-neon)] bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-neon)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-neon)]"></span>
                        Colin Champdavoine
                    </span>
                    <p className="text-xs uppercase tracking-[0.35em]">
                        © 2025
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;