
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "bg-gradient-to-br from-purple-900 to-indigo-900",
        description: "یک فروشگاه اینترنتی کامل با پنل مدیریت پیشرفته و درگاه پرداخت.",
        tags: ["React", "Node.js", "MongoDB"],
        links: { demo: "#", github: "#" }
    },
    {
        id: 2,
        title: "Healthcare App",
        category: "Mobile App",
        image: "bg-gradient-to-br from-teal-900 to-emerald-900",
        description: "اپلیکیشن مدیریت سلامت بیماران با قابلیت نوبت‌دهی آنلاین.",
        tags: ["React Native", "Firebase"],
        links: { demo: "#", github: "#" }
    },
    {
        id: 3,
        title: "Corporate Dashboard",
        category: "UI/UX Design",
        image: "bg-gradient-to-br from-slate-800 to-gray-900",
        description: "طراحی داشبورد مدیریتی مدرن برای سازمان‌های بزرگ.",
        tags: ["Figma", "Analytics"],
        links: { demo: "#", github: "#" }
    }
];

const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 bg-black/20">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">پروژه‌های منتخب</h2>
                        <p className="text-gray-400 max-w-xl">
                            نگاهی به برخی از آخرین پروژه‌هایی که با عشق و دقت طراحی کرده‌ایم.
                        </p>
                    </div>
                    <button className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                        مشاهده همه پروژه‌ها
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:transform hover:scale-[1.02]">
                            {/* Image Placeholder */}
                            <div className={`h-48 ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                    <a href={project.links.demo} className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors">
                                        <ExternalLink size={16} />
                                        مشاهده آنلاین
                                    </a>
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                                        <Github size={16} />
                                        سورس کد
                                    </a>
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
