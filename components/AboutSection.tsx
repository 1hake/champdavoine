interface AboutSectionProps {
    resumeData: {
        profile: {
            summary: string;
        };
    };
}

const AboutSection: React.FC<AboutSectionProps> = ({ resumeData }) => {
    return (
        <section id="about" className="pb-24 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mt-20 mb-20">
                    <h2 className="text-5xl lg:text-6xl font-black mb-6">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            À propos
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-25"></div>
                    <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 lg:p-16">
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed text-center max-w-5xl mx-auto font-light">
                            {resumeData.profile.summary}
                        </p>

                        {/* Stats */}
                        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-700/50">
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">5+</div>
                                <div className="text-gray-400">Années d&apos;expérience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">20+</div>
                                <div className="text-gray-400">Projets réalisés</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">∞</div>
                                <div className="text-gray-400">Créativité</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;