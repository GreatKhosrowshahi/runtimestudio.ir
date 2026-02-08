import { ArrowLeft, ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#030303]">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 animate-fade-up">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="font-vazir">نسل جدید توسعه وب</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 animate-fade-up font-sans" style={{ animationDelay: "0.1s" }}>
                    Runtime <span className="text-blue-500">Studio</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-loose animate-fade-up font-vazir" style={{ animationDelay: "0.2s" }} dir="rtl">
                    ما یک تیم خلاق هستیم که با جدیدترین تکنولوژی‌ها، ایده‌های شما را به <span className="text-white font-bold">محصولات دیجیتال بی‌نظیر</span> تبدیل می‌کنیم.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                    <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg shadow-blue-500/25 font-vazir group">
                        شروع همکاری
                        <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    </button>
                    <button className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 font-vazir">
                        مشاهده نمونه‌کارها
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12 animate-fade-up max-w-4xl mx-auto" style={{ animationDelay: "0.4s" }}>
                    {[
                        { value: "+۵۰", label: "پروژه موفق" },
                        { value: "+۹۸٪", label: "رضایت مشتری" },
                        { value: "+۵", label: "سال تجربه" },
                        { value: "۲۴/۷", label: "پشتیبانی" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-vazir">{stat.value}</div>
                            <div className="text-gray-500 text-sm font-vazir">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <ArrowDown className="text-white" size={24} />
            </div>
        </section>
    );
};

export default Hero;
