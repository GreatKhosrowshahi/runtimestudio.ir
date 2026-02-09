
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-10" aria-labelledby="hero-heading">
            <div className="container-width relative z-10 py-20 lg:py-32">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-runtime-primary/10 border border-runtime-primary/20 text-runtime-primary text-xs font-bold mb-8 uppercase tracking-widest en"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-runtime-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-runtime-primary"></span>
                        </span>
                        Software Engineering Excellence
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        id="hero-heading"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black font-vazir tracking-tight leading-[1.2] mb-8 max-w-5xl"
                    >
                        طراحی و توسعه <span className="text-gradient">وب‌سایت و اپلیکیشن</span> حرفه‌ای
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-vazir"
                    >
                        ما در <span className="text-white font-bold">Runtime Studio</span> با تمرکز بر استانداردهای جهانی و سئو فنی، کسب‌وکار شما را با طراحی سایت اختصاصی و توسعه نرم‌افزارهای تحت وب مقیاس‌پذیر به سطح جدیدی می‌بریم.
                    </motion.p>

                    {/* Featured Studio Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="w-full max-w-5xl mb-12 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1600"
                            alt="Professional Software Studio"
                            className="w-full aspect-[21/9] object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-runtime-bg via-transparent to-transparent opacity-60" />
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                    >
                        <a href="/#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-runtime-primary hover:bg-runtime-primary/80 text-white font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-runtime-primary/20 flex items-center justify-center gap-2 group font-vazir">
                            شروع همکاری فنی
                            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                        </a>
                        <Link to="/services" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold transition-all hover:bg-white/10 flex items-center justify-center gap-2 font-vazir">
                            جزئیات خدمات
                        </Link>
                    </motion.div>

                    {/* Visual Tech Stack / Trust Tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border border-white/5 bg-white/5 backdrop-blur-md rounded-2xl p-8"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <Cpu size={24} className="text-runtime-primary opacity-50" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest en">High-Performance Dev</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Globe size={24} className="text-runtime-secondary opacity-50" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest en">Scalable Architecture</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Code2 size={24} className="text-runtime-accent opacity-50" />
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest en">Clean Code Standards</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

