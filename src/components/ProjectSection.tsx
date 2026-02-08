import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Morpho Cafe",
        category: "Digital Experience",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800", // Coffee/Cafe aesthetic
        description: "یک تجربه دیجیتال منحصر به فرد برای کافه مورفو. طراحی مینیمال و تعاملی با تمرکز بر حس خوب قهوه.",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        links: { demo: "https://morphocafe.ir", github: null }
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
        description: "یک فروشگاه اینترنتی کامل با پنل مدیریت پیشرفته، سیستم انبارداری و درگاه پرداخت اختصاصی.",
        tags: ["Next.js", "Node.js", "PostgreSQL"],
        links: { demo: "#", github: "#" }
    },
    {
        id: 3,
        title: "Healthcare Dashboard",
        category: "Enterprise System",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        description: "داشبورد مدیریتی جامع برای کلینیک‌ها با قابلیت نوبت‌دهی آنلاین و پرونده الکترونیک سلامت.",
        tags: ["React", "TypeScript", "Chart.js"],
        links: { demo: "#", github: "#" }
    }
];

const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

            <div className="container px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-fade-up">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 font-sans">Selected Works</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight font-sans">
                            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">PROJECTS</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg font-vazir leading-relaxed" dir="rtl">
                            ما فقط کد نمی‌نویسیم؛ ما تجربه‌های دیجیتال خلق می‌کنیم. نگاهی به آخرین آثار ما بیندازید.
                        </p>
                    </div>
                    <button className="group px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white transition-all duration-300 flex items-center gap-3 font-vazir">
                        مشاهده همه پروژه‌ها
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div key={project.id} className="group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                            {/* Image Section */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                                    <span className="text-xs font-bold text-white font-sans">{project.category}</span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 relative z-20 -mt-10">
                                <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-white/5 shadow-xl group-hover:border-blue-500/20 transition-colors">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white font-sans group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                        {project.links.demo && (
                                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 line-clamp-2 font-vazir leading-relaxed" dir="rtl">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-3 py-1.5 rounded-lg font-sans">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
