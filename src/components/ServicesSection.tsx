
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, Shield, Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
    {
        icon: Globe,
        titleEn: "Corporate Web Design",
        titleFa: "طراحی سایت شرکتی و تجاری",
        desc: "طراحی سایت اختصاصی و حرفه‌ای برای کسب‌وکارهای مدرن با تمرکز بر سئو فنی و سرعت لود فوق‌العاده جهت افزایش نرخ تبدیل.",
        color: "text-blue-400"
    },
    {
        icon: Smartphone,
        titleEn: "Web App Development",
        titleFa: "توسعه وب اپلیکیشن‌های تخصصی",
        desc: "پیاده‌سازی سامانه‌های تحت وب و اپلیکیشن‌های پیشرفته با معماری ماژولار برای مدیریت بهینه فرآیندهای تجاری و استارتاپی.",
        color: "text-purple-400"
    },
    {
        icon: Server,
        titleEn: "System Engineering",
        titleFa: "مهندسی سیستم‌های بک‌اِند",
        desc: "طراحی زیرساخت‌های ابری و APIهای قدرتمند با معماری میکروسرویس برای مدیریت داده‌های حجیم و پردازش‌های سنگین.",
        color: "text-cyan-400"
    },
    {
        icon: Zap,
        titleEn: "Performance Overhaul",
        titleFa: "بهینه‌سازی عملکرد و Core Web Vitals",
        desc: "آنالیز و رفع گلوگاه‌های عملکردی برای دستیابی به بالاترین امتیازهای Lighthouse و بهبود نرخ تبدیل کاربر.",
        color: "text-orange-400"
    },
    {
        icon: Shield,
        titleEn: "Security & QA",
        titleFa: "امنیت و تضمین کیفیت",
        desc: "تست‌های نفوذ، امنیت داده‌ها و پیاده‌سازی متدهای CI/CD برای تضمین پایداری و امنیت محصول نهایی.",
        color: "text-emerald-400"
    },
    {
        icon: Cpu,
        titleEn: "AI Integration",
        titleFa: "یکپارچه‌سازی هوش مصنوعی",
        desc: "استقرار مدل‌های هوشمند و یادگیری ماشین در فرآیندهای کسب‌وکار برای اتوماسیون و تحلیل هوشمند داده‌ها.",
        color: "text-blue-500"
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 relative z-10" aria-labelledby="services-heading">
            <div className="container-width">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold en text-runtime-primary uppercase tracking-[0.3em] mb-4 block"
                    >
                        Engineering Capability
                    </motion.span>
                    <motion.h2
                        id="services-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-black mb-6 leading-tight"
                    >
                        استودیو تخصصی <span className="text-gradient">راهکارهای نرم‌افزاری</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-400 text-lg leading-relaxed font-vazir"
                    >
                        ما در Runtime Studio فقط کد نمی‌زنیم؛ ما راهکارهای مهندسی‌شده‌ای خلق می‌کنیم که کسب‌وکار شما را در فضای پررقابت دیجیتال متمایز می‌کند.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.titleEn}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass-card p-8 rounded-2xl group flex flex-col h-full"
                        >
                            <div className="mb-6 flex items-center justify-between">
                                <div className={`${service.color} mb-2`}>
                                    <service.icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] en text-gray-600 font-mono tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                                    {service.titleEn}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-runtime-primary">
                                {service.titleFa}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>

                            <Link to="/services" className="flex items-center gap-2 text-xs font-bold text-runtime-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                <span>Learn More</span>
                                <div className="w-4 h-[1px] bg-runtime-primary" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

