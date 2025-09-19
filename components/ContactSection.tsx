import { Github, Instagram, Music, Mail, Phone, MapPin } from 'lucide-react';

interface ContactSectionProps {
    resumeData: {
        contact: {
            email: string;
            phone: string;
            location: string;
            socials: {
                github: string;
                instagram: string;
                soundcloud: string;
            };
        };
    };
}

const ContactSection: React.FC<ContactSectionProps> = ({ resumeData }) => {
    return (
        <section id="contact" className="py-32 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-6xl font-black mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Contact
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                    <p className="text-xl text-gray-400 mt-8 max-w-2xl mx-auto">
                        Prêt à collaborer sur votre prochain projet ? Contactons-nous !
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl blur opacity-25"></div>
                    <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 lg:p-16">

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors group">
                                    <div className="p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-colors">
                                        <Mail className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                                        <p className="text-gray-300">{resumeData.contact.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors group">
                                    <div className="p-4 bg-pink-500/20 rounded-2xl group-hover:bg-pink-500/30 transition-colors">
                                        <Phone className="w-8 h-8 text-pink-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">Téléphone</h3>
                                        <p className="text-gray-300">{resumeData.contact.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800/70 transition-colors group">
                                    <div className="p-4 bg-blue-500/20 rounded-2xl group-hover:bg-blue-500/30 transition-colors">
                                        <MapPin className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg mb-1">Localisation</h3>
                                        <p className="text-gray-300">{resumeData.contact.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links & CTA */}
                            <div className="flex flex-col justify-center">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold text-white mb-4">Connectons-nous</h3>
                                    <p className="text-gray-400 mb-8">Suivez-moi sur les réseaux sociaux pour rester au courant de mes projets</p>

                                    {/* Enhanced Social Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { href: resumeData.contact.socials.github, icon: Github, label: "GitHub", color: "hover:bg-gray-500/20 hover:border-gray-400/50" },
                                            { href: resumeData.contact.socials.instagram, icon: Instagram, label: "Instagram", color: "hover:bg-pink-500/20 hover:border-pink-400/50" },
                                            { href: resumeData.contact.socials.soundcloud, icon: Music, label: "SoundCloud", color: "hover:bg-orange-500/20 hover:border-orange-400/50" },
                                            { href: `mailto:${resumeData.contact.email}`, icon: Mail, label: "Email", color: "hover:bg-purple-500/20 hover:border-purple-400/50" }
                                        ].map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                className={`group p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl ${social.color}`}
                                            >
                                                <social.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors mx-auto mb-3" />
                                                <p className="text-gray-400 group-hover:text-white transition-colors font-medium">{social.label}</p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;