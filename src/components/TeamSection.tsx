
import { Github, Linkedin, Twitter, Globe, Code } from "lucide-react";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio: string;
    skills: string[];
    socials: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        portfolio?: string;
        telegram?: string;
    };
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Yazdan Astaraki",
        role: "Founder & Lead Developer",
        image: "/yazdan.jpg",
        bio: "توسعه‌دهنده فول‌استک با تخصص در معماری نرم‌افزارهای مقیاس‌پذیر. عاشق کدنویسی تمیز و تکنولوژی‌های جدید.",
        skills: ["React", "Node.js", "TypeScript", "Next.js"],
        socials: {
            github: "https://github.com/GreatKhosrowshahi",
            linkedin: "https://linkedin.com/in/yazdan",
            telegram: "https://t.me/thatsboyyazdan",
            portfolio: "https://yazdan.dev"
        }
    },
    {
        id: 2,
        name: "سارا محمدی",
        role: "UI/UX Designer",
        image: "/avatars/sara.jpg",
        bio: "طراح رابط کاربری با نگاهی هنرمندانه و تمرکز بر تجربه کاربری. خلق رابط‌های زیبا و کاربردی تخصص من است.",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
        socials: {
            linkedin: "#",
            twitter: "#"
        }
    },
    {
        id: 3,
        name: "علی کریمی",
        role: "Backend Developer",
        image: "/avatars/ali.jpg",
        bio: "متخصص بازیسازی و سیستم‌های توزیع‌شده. علاقه‌مند به حل چالش‌های پیچیده نرم‌افزاری.",
        skills: ["Python", "Django", "Docker", "PostgreSQL"],
        socials: {
            github: "#",
            linkedin: "#"
        }
    }
];

const TeamSection = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">تیم متخصص ما</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ما مجموعه‌ای از بهترین متخصصان را گرد هم آورده‌ایم تا پروژه‌های شما را با بالاترین کیفیت پیاده‌سازی کنیم.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group relative bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 mx-auto mb-6 overflow-hidden border-2 border-white/10 group-hover:border-blue-500 transition-colors">
                                    {/* Placeholder for image if not exists */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-bold bg-white/5">
                                        {member.name.charAt(0)}
                                    </div>
                                </div>

                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                    <div className="text-blue-400 text-sm font-medium mb-4">{member.role}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center mb-6">
                                    {member.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/5">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/5">
                                    {member.socials.github && (
                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors">
                                            <Twitter size={18} />
                                        </a>
                                    )}
                                    {member.socials.portfolio && (
                                        <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                                            <Globe size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
