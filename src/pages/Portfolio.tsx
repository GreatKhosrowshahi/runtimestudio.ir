
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import Meta from "@/components/SEO/Meta";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Target, Layers, Info, ListChecks, Terminal } from "lucide-react";

const projects = [
  {
    id: "morpho",
    title: "Morpho Cafe",
    persianTitle: "مورفو کافه: سامانه هوشمند منوی دیجیتال",
    category: "Product Engineering",
    description: "مورفو کافه یک سیستم منوی دیجیتال تعاملی و پیشرفته است که برای کافه‌های لوکس و مدرن طراحی شده است. این پروژه با زیبایی‌شناسی Luxury Dark و افکت‌های شیشه‌ای (Glassmorphism) به همراه یک موتور پیشنهاددهنده هوشمند، تجربه مشتری را به سطح جدیدی ارتقا می‌دهد.",
    features: [
      "مود باریستا (پیشنهاددهنده هوشمند): دستیار تعاملی بر اساس مود و ذائقه کاربر",
      "رابط کاربری پریمیوم (Morho): طراحی Mobile-First با انیمیشن‌های Framer Motion",
      "پنل مدیریت (Dashboard): مدیریت لحظه‌ای محصولات و موجودی با Supabase",
      "PWA & Offline Support: سرعت لود خیره‌کننده و استفاده بدون اینترنت",
      "کاملاً فارسی و RTL: بهینه‌سازی شده با فونت وزیرمتن"
    ],
    challenge: "پیاده‌سازی یک تجربه بصری فوق‌العاده سنگین در قالب وب بدون افت پرفورمنس در دستگاه‌های ضعیف.",
    solution: "استفاده از سیستم پیشنهاددهنده هوشمند و بهینه‌سازی لایه رندرینگ با GPU Acceleration.",
    techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Supabase", "TanStack Query"],
    metrics: [
      { label: "UX Rating", value: "4.9/5" },
      { label: "Load speed", value: "0.7s" }
    ],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000",
    color: "from-orange-600 to-amber-500"
  }
];

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <Meta
        title="نمونه کارهای مهندسی و پروژه‌ها | Runtime Studio"
        description="مشاهده گزیده‌ای از پروژه‌های فنی رانتایم استودیو شامل معماری نرم‌افزار، طراحی اپلیکیشن و سامانه‌های تحت وب مقیاس‌پذیر."
      />

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden text-center">
        <div className="container-width relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-runtime-primary/10 border border-runtime-primary/20 text-runtime-primary text-[10px] font-bold uppercase tracking-[0.3em] en mb-8"
          >
            Selected Case Studies
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black mb-10 tracking-tighter leading-none en"
          >
            SELECTED <br /> <span className="text-gradient">WORKS</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-vazir">
            گزیده‌ای از پروژه‌های فنی و طراحی سایت حرفه‌ای با تمرکز بر حل چالش‌های مهندسی و توسعه سیستم‌های مقیاس‌پذیر.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24">
        {projects.map((p, idx) => (
          <div key={p.title} className="container-width mb-40">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start`}>
              {/* Stats & Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:col-span-6 relative group lg:sticky lg:top-32"
              >
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-runtime-bg via-transparent to-transparent opacity-80" />

                  <div className="absolute top-6 right-6">
                    <span className={`px-4 py-2 rounded-xl glass border-white/10 text-[10px] en font-bold text-white uppercase tracking-widest bg-gradient-to-r ${p.color}`}>
                      {p.category}
                    </span>
                  </div>

                  {/* Quick Metrics */}
                  <div className="absolute bottom-8 left-8 flex gap-4">
                    {p.metrics.map(m => (
                      <div key={m.label} className="glass p-4 rounded-2xl border-white/10 text-center min-w-[100px]">
                        <p className="text-white font-black text-xl en leading-none mb-1">{m.value}</p>
                        <p className="text-[8px] text-gray-400 uppercase tracking-widest en font-bold">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tabbed Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-6"
              >
                <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-4 bg-gradient-to-r ${p.color} bg-clip-text text-transparent en`}>
                  Engineering Report / {p.title}
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 en">
                  {p.title}
                </h2>
                <p className="text-gray-400 text-2xl font-vazir mb-8" dir="rtl">
                  {p.persianTitle}
                </p>

                {/* Tabs Multi-Switch */}
                <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5 mb-8" dir="rtl">
                  {[
                    { id: "overview", label: "بررسی کلی", icon: <Info size={14} /> },
                    { id: "features", label: "ویژگی‌ها", icon: <ListChecks size={14} /> },
                    { id: "tech", label: "فنی و مهندسی", icon: <Terminal size={14} /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-vazir transition-all ${activeTab === tab.id
                          ? "bg-runtime-primary text-white shadow-lg shadow-runtime-primary/20"
                          : "text-gray-500 hover:text-gray-300"
                        }`}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Animated Body */}
                <div className="min-h-[300px] mb-12">
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="font-vazir"
                        dir="rtl"
                      >
                        <p className="text-gray-300 text-lg leading-relaxed text-justify">
                          {p.description}
                        </p>
                      </motion.div>
                    )}

                    {activeTab === "features" && (
                      <motion.div
                        key="features"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="font-vazir"
                        dir="rtl"
                      >
                        <ul className="space-y-4">
                          {p.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-runtime-primary/30 transition-colors">
                              <div className="mt-1 w-2 h-2 rounded-full bg-runtime-primary group-hover:scale-125 transition-transform" />
                              <span className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === "tech" && (
                      <motion.div
                        key="tech"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="font-vazir"
                        dir="rtl"
                      >
                        <div className="space-y-8">
                          <div>
                            <div className="flex items-center gap-3 mb-4 text-runtime-primary">
                              <Target size={20} />
                              <span className="text-xs font-black uppercase tracking-widest en">Core Challenge</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed border-r-2 border-runtime-primary/20 pr-4">
                              {p.challenge}
                            </p>
                          </div>

                          <div>
                            <div className="flex items-center gap-3 mb-4 text-runtime-secondary">
                              <Layers size={20} />
                              <span className="text-xs font-black uppercase tracking-widest en">Applied Stack</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {p.techStack.map(t => (
                                <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] en font-bold text-gray-400 uppercase tracking-tighter">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 hover:border-runtime-primary transition-all font-vazir group w-full justify-center">
                  مشاوره مشابه این پروژه
                  <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Trust */}
      <section className="py-24 border-y border-white/5 bg-runtime-surface/20">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Elite Projects", value: "24+" },
              { label: "Global Clients", value: "10" },
              { label: "Code Integrity", value: "100%" },
              { label: "Uptime Avg", value: "99.9%" }
            ].map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-4xl md:text-6xl font-black mb-2 en">{s.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-runtime-primary en">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-width">
          <div className="glass-card rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-runtime-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-4xl md:text-7xl font-black mb-8 en tracking-tighter uppercase">
              YOUR PROJECT <br /> <span className="text-gradient">NEXT?</span>
            </h2>
            <p className="text-gray-400 text-xl font-vazir mb-12">
              ما آماده‌ایم تا چالش بعدی شما را به یک محصول موفقیت‌آمیز تبدیل کنیم.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-runtime-primary hover:text-white transition-all group">
              Let's Talk Tech
              <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;


