import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import yazdanImg from "@/assets/yazdan.jpg";

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
        image: yazdanImg,
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
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
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
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
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
        <section id="about" className="py-24 relative overflow-hidden bg-[#030303]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-up">
                    <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block font-sans">Our Team</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-vazir">تیم متخصص ما</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-vazir text-lg leading-relaxed">
                        ما مجموعه‌ای از بهترین متخصصان را گرد هم آورده‌ایم تا پروژه‌های شما را با بالاترین کیفیت پیاده‌سازی کنیم.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, i) => (
                        <div key={member.id} className="group relative bg-white/5 rounded-[2rem] p-8 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 mb-6 group-hover:scale-105 transition-transform duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#030303]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className="hidden w-full h-full flex items-center justify-center text-gray-400 text-3xl font-bold bg-gray-800">
                                            {member.name.charAt(0)}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-sans">{member.name}</h3>
                                    <div className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 font-sans">{member.role}</div>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-vazir text-center line-clamp-3">
                                        {member.bio}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center mb-8">
                                    {member.skills.map((skill) => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-xs font-bold text-gray-400 border border-white/5 font-sans group-hover:border-blue-500/30 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/5 w-full">
                                    {member.socials.github && (
                                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-white hover:text-black transition-all">
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all">
                                            <Twitter size={18} />
                                        </a>
                                    )}
                                    {member.socials.portfolio && (
                                        <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-green-500 hover:text-white transition-all">
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
