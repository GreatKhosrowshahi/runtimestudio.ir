
import { ArrowLeft } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] animate-pulse-slow" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-8 fade-in-up delay-100">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    نسل جدید توسعه وب
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 fade-in-up delay-200">
                    Runtime <span className="text-blue-500">Studio</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-300">
                    ما یک تیم خلاق هستیم که با جدیدترین تکنولوژی‌ها، ایده‌های شما را به محصولات دیجیتال بی‌نظیر تبدیل می‌کنیم.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-400">
                    <button className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-blue-500/25">
                        شروع همکاری
                        <ArrowLeft size={20} />
                    </button>
                    <button className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95">
                        مشاهده نمونه‌کارها
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-white/5 pt-12 fade-in-up delay-500">
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">+۵۰</div>
                        <div className="text-gray-500 text-sm">پروژه موفق</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">+۹۸٪</div>
                        <div className="text-gray-500 text-sm">رضایت مشتری</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">+۵</div>
                        <div className="text-gray-500 text-sm">سال تجربه</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-white mb-2">۲۴/۷</div>
                        <div className="text-gray-500 text-sm">پشتیبانی</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
