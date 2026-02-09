
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Meta from "@/components/SEO/Meta";
import { Link } from "react-router-dom";
import {
  Globe, Smartphone, Server, ShieldCheck, Zap,
  Terminal, Cpu, ArrowLeft, CheckCircle2, MessageSquarePlus
} from "lucide-react";

import webDevImage from "@/assets/web-development.jpg";
import mobileDevImage from "@/assets/mobile-development.jpg";
import backendDevImage from "@/assets/backend-development.jpg";

const services = [
  {
    id: "corporate",
    icon: Globe,
    titleEn: "Corporate Web Design",
    titleFa: "طراحی سایت شرکتی و تجاری حرفه‌ای",
    desc: "بسیاری از سایت‌های شرکتی به دلیل سرعت پایین و تجربه کاربری ضعیف، نرخ تبدیل پایینی دارند. ما با طراحی سایت اختصاصی با React و Next.js، پلتفرمی با سئو فنی عالی و سرعت لود زیر ۱ ثانیه خلق می‌کنیم که هویت برند شما را در فضای دیجیتال به درستی بازتاب می‌دهد.",
    features: ["Core Web Vitals Optimization", "Clean Architecture", "Technical SEO Audit", "Responsive & Mobile-First"],
    image: webDevImage,
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "webapp",
    icon: Smartphone,
    titleEn: "Web Application Development",
    titleFa: "توسعه وب اپلیکیشن و سامانه‌های تحت وب",
    desc: "سامانه‌های نرم‌افزاری پیچیده نیازمند مهندسی دقیق هستند. ما با تمرکز بر توسعه وب اپلیکیشن‌های مقیاس‌پذیر، راهکارهای اتوماسیون و پلتفرم‌های تعاملی را از صفر تا صد با استانداردهای جهانی پیاده‌سازی می‌کنیم تا چالش‌های عملیاتی شما را به فرصت‌های رشد تبدیل کنیم.",
    features: ["API-First Strategy", "Scalable Microservices", "Real-time Monitoring", "Secure Data Handling"],
    image: mobileDevImage,
    color: "from-purple-500 to-violet-500"
  },
  {
    id: "custom",
    icon: Server,
    titleEn: "Custom Software Engineering",
    titleFa: "برنامه‌نویسی اختصاصی و توسعه نرم‌افزار",
    desc: "وقتی ابزارهای آماده پاسخگوی نیاز شما نیستند، برنامه‌نویسی اختصاصی تنها راه چاره است. ما با طراحی معماری سیستم و دیتابیس‌های ابری، نرم‌افزارهایی می‌سازیم که با رشد کسب‌وکار شما مقیاس‌پذیر هستند و امنیت داده‌های شما را در بالاترین سطح تضمین می‌کنند.",
    features: ["Custom System Architecture", "Database Modeling", "Cloud Integration", "Legacy System Migration"],
    image: backendDevImage,
    color: "from-emerald-500 to-teal-400"
  }
];

const expertise = [
  { icon: Terminal, title: "DevOps & CI/CD", desc: "خودکارسازی فرآیند استقرار و مانیتورینگ ۲۴/۷ برای آپتایم ۱۰۰٪." },
  { icon: ShieldCheck, title: "Technical Audit", desc: "بررسی امنیتی و رفع گلوگاه‌های عملکردی در کدهای موجود." },
  { icon: Cpu, title: "AI Integration", desc: "هوشمندسازی فرآیندها با استفاده از مدل‌های زبانی و پردازش داده." }
];

const ServicesPage = () => {
  return (
    <Layout>
      <Meta
        title="خدمات تخصصی مهندسی نرم‌افزار | Runtime Studio"
        description="مرجع خدمات طراحی وب، اپلیکیشن حرفه‌ای و معماری دیتابیس با تمرکز بر استانداردهای مهندسی و سئو فنی."
      />

      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="container-width relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-runtime-primary/10 border border-runtime-primary/20 text-runtime-primary text-[10px] font-bold uppercase tracking-[0.3em] en mb-8"
          >
            High-End Development Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-10 leading-[1.1]"
          >
            تخصص ما خلق <br />
            <span className="text-gradient">محصولات بی‌نقص</span> است
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-vazir"
          >
            ما با رویکرد مهندسی و وسواس در جزئیات، راهکارهایی را ارائه می‌دهیم که نه تنها کار می‌کنند، بلکه به رشد پایدار کسب‌وکار شما کمک می‌کنند.
          </motion.p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 space-y-32">
        {services.map((s, idx) => (
          <div key={s.id} className="container-width">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Visual Content */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
              >
                <img src={s.image} alt={s.titleFa} className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-runtime-bg via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 right-6 p-4 rounded-2xl glass border-white/10 text-runtime-primary">
                  <s.icon size={32} />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className={`text-[10px] font-black uppercase tracking-[0.4em] bg-gradient-to-r ${s.color} bg-clip-text text-transparent en block mb-4`}>
                  0{idx + 1} / {s.titleEn}
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-6 font-vazir leading-tight">
                  {s.titleFa}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-vazir text-justify">
                  {s.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-runtime-primary/20 transition-all">
                      <CheckCircle2 size={16} className="text-runtime-primary" />
                      <span className="text-[11px] font-bold text-gray-300 en tracking-wide uppercase">{f}</span>
                    </div>
                  ))}
                </div>

                <a href="/#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-runtime-primary text-white font-bold hover:bg-runtime-primary/80 transition-all font-vazir group">
                  مشاوره فنی پروژه
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Engineering Standards */}
      <section className="py-24 bg-runtime-surface/30 border-y border-white/5">
        <div className="container-width">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 en tracking-tight">
              ENGINEERING <span className="text-gradient">STANDARDS</span>
            </h2>
            <p className="text-gray-400 font-vazir">اولویت‌های فنی ما در تمام مراحل توسعه محصولات دیجیتال</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] glass border-white/5 hover:border-runtime-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-runtime-primary/10 flex items-center justify-center mb-8 text-runtime-primary group-hover:scale-110 transition-transform">
                  <item.icon size={30} />
                </div>
                <h3 className="text-2xl font-bold mb-4 en">{item.title}</h3>
                <p className="text-gray-400 font-vazir leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[4rem] p-12 md:p-24 glass border-white/10 overflow-hidden group text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-runtime-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="text-4xl md:text-7xl font-black mb-8 en tracking-tighter leading-none">
              READY TO <br /><span className="text-gradient">BUILD?</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-vazir">
              ایده‌های جسورانه شما شایسته پیاده‌سازی با بالاترین استانداردهای مهندسی هستند.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-runtime-primary hover:text-white transition-all group shadow-2xl shadow-runtime-primary/20">
              Start Engineering
              <MessageSquarePlus size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

