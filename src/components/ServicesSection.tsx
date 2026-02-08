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
        <section id="services" className="py-24 relative overflow-hidden bg-[#030303]">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-purple-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 relative z-10">
                <div className="text-center mb-16 animate-fade-up">
                    <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-4 block font-sans">Our Services</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-vazir">خدمات ما</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-vazir text-lg leading-relaxed">
                        ارائه دهنده راهکارهای جامع نرم‌افزاری برای رشد و توسعه کسب‌وکار شما در دنیای دیجیتال.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className="group relative flex flex-col p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-white mb-2 font-vazir text-right" dir="rtl">
                                    {service.titleFa}
                                </h3>
                                <p className="text-sm text-gray-500 font-sans font-medium text-right uppercase tracking-wider" dir="ltr">
                                    {service.title}
                                </p>
                            </div>

                            <p className="text-gray-400 mb-8 leading-relaxed font-vazir text-justify flex-grow" dir="rtl">
                                {service.description}
                            </p>

                            <ul className="space-y-3 border-t border-white/5 pt-6 mt-auto">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-blue-300 transition-colors font-sans" dir="ltr">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400" />
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
