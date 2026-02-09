
import { motion } from "framer-motion";
import { Github, Send, Terminal, Cpu } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    specialties: string[];
    socials: {
        github?: string;
        telegram?: string;
    };
}

const team: TeamMember[] = [
    {
        name: "Yazdan Astaraki",
        role: "Founder & Lead Engineer",
        image: "/src/assets/team/yazdan.jpg",
        bio: "معمار ارشد نرم‌افزار با تمرکز بر سیستم‌های توزیع‌شده و بهینه‌سازی زیرساخت‌های ابری. هدایت نقشه راه فنی استودیو.",
        specialties: ["Software Architecture", "Distributed Systems", "Kubernetes", "TypeScript Expert"],
        socials: {
            github: "https://github.com/GreatKhosrowshahi",
            telegram: "https://t.me/thatsboyyazdan"
        }
    },
    {
        name: "Ali Shams",
        role: "Co-Founder & Full-Stack Developer",
        image: "/src/assets/team/alishams.jpg",
        bio: "متخصص توسعه Full-stack با تمرکز بر پرفورمنس و امنیت. پیاده‌سازی استانداردهای مدرن مهندسی در پروژه‌ها.",
        specialties: ["React Stack", "Node.js", "App Security"],
        socials: {
            github: "#",
            telegram: "https://t.me/thatsboyali"
        }
    },
    {
        name: "Mohammad Feyz",
        role: "Senior Frontend Engineer",
        image: "/src/assets/team/mohammadfeyz.jpg",
        bio: "طراح محصول با نگاه مهندسی به رابط کاربری. پل ارتباطی بین هنر طراحی و محدودیت‌های فنی توسعه.",
        specialties: ["Next.js", "UI Engineering", "Motion Architecture"],
        socials: {
            telegram: "https://t.me/+989999978569"
        }
    }
];

const TeamSection = () => {
    return (
        <section id="about" className="py-24 relative z-10" aria-labelledby="team-heading">
            <div className="container-width">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-runtime-secondary/10 border border-runtime-secondary/20 text-runtime-secondary text-[10px] font-bold uppercase tracking-widest en mb-6"
                    >
                        <Terminal size={12} />
                        Engineers behind the code
                    </motion.div>
                    <motion.h2
                        id="team-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black mb-6"
                    >
                        تیم <span className="text-gradient">متخصص و مهندسی</span> ما
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg max-w-2xl font-vazir"
                    >
                        ما از مجموعه‌ای از مهندسان نرم‌افزار و تحلیل‌گران محصول تشکیل شده‌ایم که دغدغه کیفیت و استاندارد دارند.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card rounded-[2rem] p-8 group overflow-hidden"
                        >
                            <div className="relative mb-8 flex justify-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-runtime-bg/50 ring-2 ring-runtime-primary/20 group-hover:ring-runtime-primary transition-all duration-500">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-2 bg-runtime-bg px-4 py-1 rounded-full border border-white/5 text-[10px] en font-mono font-bold text-runtime-primary shadow-2xl">
                                    {member.role}
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-2 font-vazir">{member.name}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-vazir min-h-[4.5rem]">
                                    {member.bio}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {member.specialties.map(s => (
                                        <span key={s} className="px-2 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] en font-bold text-gray-500">
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/5">
                                    {member.socials.github && (
                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {member.socials.telegram && (
                                        <a href={member.socials.telegram} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-white transition-colors">
                                            <Send size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;

