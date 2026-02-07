
import { Code, Smartphone, Palette, Globe, Server, Database } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Web Development",
        titleFa: "توسعه وب‌سایت",
        description: "طراحی و پیاده‌سازی وب‌سایت‌های واکنش‌گرا، سریع و ایمن با جدیدترین تکنولوژی‌ها.",
        icon: <Globe className="w-10 h-10 text-blue-500" />,
        features: ["React & Next.js", "Performance Optimization", "SEO Friendly"]
    },
    {
        id: 2,
        title: "Mobile Apps",
        titleFa: "اپلیکیشن موبایل",
        description: "ساخت اپلیکیشن‌های موبایل برای Android و iOS با تجربه کاربری بومی.",
        icon: <Smartphone className="w-10 h-10 text-purple-500" />,
        features: ["React Native", "Cross-Platform", "Native UI/UX"]
    },
    {
        id: 3,
        title: "UI/UX Design",
        titleFa: "طراحی رابط کاربری",
        description: "طراحی رابط‌های کاربری چشم‌نواز و تجربه‌های کاربری روان و لذت‌بخش.",
        icon: <Palette className="w-10 h-10 text-pink-500" />,
        features: ["Figma Design", "Prototyping", "User Research"]
    },
    {
        id: 4,
        title: "Backend Systems",
        titleFa: "سیستم‌های بک‌اند",
        description: "توسعه APIها و سیستم‌های مدیریت محتوا با معماری میکروسرویس.",
        icon: <Server className="w-10 h-10 text-emerald-500" />,
        features: ["Node.js", "Python", "Scalable Architecture"]
    },
    {
        id: 5,
        title: "Database Design",
        titleFa: "طراحی دیتابیس",
        description: "طراحی و بهینه‌سازی دیتابیس‌های رابطه‌ای و غیررابطه‌ای برای داده‌های حجیم.",
        icon: <Database className="w-10 h-10 text-orange-500" />,
        features: ["PostgreSQL", "MongoDB", "Data Modeling"]
    },
    {
        id: 6,
        title: "Custom Solutions",
        titleFa: "راه‌حل‌های اختصاصی",
        description: "مشاوره و پیاده‌سازی نرم‌افزارهای سفارشی برای نیازهای خاص کسب‌وکارتان.",
        icon: <Code className="w-10 h-10 text-cyan-500" />,
        features: ["Automation", "Consulting", "Maintenance"]
    }
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-black/40">
            <div className="container px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">خدمات ما</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        ارائه دهنده راهکارهای جامع نرم‌افزاری برای رشد و توسعه کسب‌وکار شما در دنیای دیجیتال.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="mb-6 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-between">
                                {service.titleFa}
                                <span className="text-xs text-gray-500 font-sans font-normal opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                                    {service.title}
                                </span>
                            </h3>

                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2 border-t border-white/5 pt-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-blue-300 transition-colors font-sans" dir="ltr">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
