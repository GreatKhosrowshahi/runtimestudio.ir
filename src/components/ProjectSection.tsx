
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const staticProjects = [
    {
        title: "Morpho Cafe",
        titleFa: "مورفو کافه: سامانه هوشمند منوی دیجیتال",
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
        tech: ["React 18", "TypeScript", "Supabase", "Framer Motion"],
        desc: "سامانه منوی دیجیتال هوشمند با قابلیت مود باریستا (AI Recommender)، پنل مدیریت Real-time و تکنولوژی PWA برای تجربه‌ای لوکس و بدون وقفه.",
        link: "https://morphocafe.ir"
    }
];

const ProjectSection = () => {
    const [projectsData, setProjectsData] = useState(staticProjects);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data && data.length > 0) {
                    setProjectsData(data.map(p => ({
                        title: p.title_en,
                        titleFa: p.title_fa,
                        image: p.image_url,
                        tech: p.tech_stack,
                        desc: p.description,
                        link: p.live_url || "#"
                    })));
                }
            } catch (err) {
                console.error("Error fetching projects:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="py-24 relative z-10" aria-labelledby="projects-heading">
            <div className="container-width">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold en text-runtime-primary uppercase tracking-[0.3em] mb-4 block"
                        >
                            Engineering Portfolio
                        </motion.span>
                        <motion.h2
                            id="projects-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-black mb-6"
                        >
                            نمونه کار <span className="text-gradient">طراحی سایت و نرم‌افزار</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-400 text-lg font-vazir"
                        >
                            ما با وسواس فنی و دقت مهندسی، پیچیده‌ترین پروژه‌ها را به تجربه‌های دیجیتال روان و کارآمد تبدیل می‌کنیم.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl glass border border-white/5 hover:border-runtime-primary/40 text-white font-bold transition-all font-vazir overflow-hidden relative"
                        >
                            <span className="relative z-10">مشاهده همه پروژه‌ها</span>
                            <ArrowUpRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            <div className="absolute inset-0 bg-runtime-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <div className="col-span-full flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-runtime-primary"></div>
                        </div>
                    ) : projectsData.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative flex flex-col bg-runtime-surface/40 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500"
                        >
                            {/* Image Wrapper */}
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.titleFa}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-runtime-bg/90 via-transparent to-transparent opacity-60" />

                                <div className="absolute top-4 right-4 flex gap-2">
                                    <button className="p-2.5 rounded-full glass border-white/10 text-white/70 hover:text-white hover:bg-runtime-primary transition-all">
                                        <Github size={18} />
                                    </button>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full glass border-white/10 text-white/70 hover:text-white hover:bg-runtime-primary transition-all">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] en font-mono font-bold tracking-widest text-runtime-primary/60 px-2 py-0.5 rounded border border-runtime-primary/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-runtime-primary transition-colors">
                                    {project.titleFa}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-vazir">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;

