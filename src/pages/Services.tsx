import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Server,
  Code2,
  Palette,
  Rocket,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Search,
  Zap,
  ShieldCheck,
  MousePointer2
} from "lucide-react";
import webDevImage from "@/assets/web-development.jpg";
import mobileDevImage from "@/assets/mobile-development.jpg";
import backendDevImage from "@/assets/backend-development.jpg";

const services = [
  {
    icon: Globe,
    title: "Web Engineering",
    persianTitle: "توسعه وب پیشرفته",
    description: "ما وب‌سایت‌هایی می‌سازیم که نه تنها زیبا هستند، بلکه از نظر فنی بی‌نقص و برای موتورهای جستجو بهینه شده‌اند.",
    features: [
      "Next.js & React Ecosystem",
      "SSR & SSG Optimization",
      "Responsive Fluid Design",
      "Headless CMS Integration",
    ],
    image: webDevImage,
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    persianTitle: "اپلیکیشن‌های موبایل نوآورانه",
    description: "خلق تجربه‌های بومی در هر دو پلتفرم iOS و Android با تمرکز بر عملکرد و تعامل کاربر.",
    features: [
      "React Native Expert Dev",
      "Seamless UI/UX Flow",
      "Offline-First Capability",
      "Native Module Bridge",
    ],
    image: mobileDevImage,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Backend Architecture",
    persianTitle: "معماری بک‌اِند مقیاس‌پذیر",
    description: "طراحی زیرساخت‌های قدرتمند و امن که قلب تپنده محصولات دیجیتال شما خواهند بود.",
    features: [
      "Robust Node.js & Go API",
      "Microservices Ecosystem",
      "Database Optimization",
      "Real-time Data Stream",
    ],
    image: backendDevImage,
    color: "from-emerald-500 to-teal-400"
  },
];

const additionalServices = [
  {
    icon: Code2,
    title: "Custom Systems",
    desc: "طراحی سیستم‌های اتوماسیون و داشبوردهای اختصاصی کسب‌وکار.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "خلق هویت بصری مدرن و رابط‌های کاربری چشم‌نواز.",
  },
  {
    icon: Rocket,
    title: "Tech Consulting",
    desc: "مشاوره تخصصی در انتخاب استک و استراتژی مقیاس‌پذیری.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>

        <div className="container-custom relative z-10 text-center en">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl mb-12 animate-fade-up">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">Our Technical Offerings</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] animate-blur-in">
            TECH <br />
            <span className="gradient-text glow-text leading-tight">SOLUTIONS</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up font-vazir text-center" dir="rtl" style={{ animationDelay: "0.2s" }}>
            ما ابزارهای لازم برای تسلط بر دنیای دیجیتال را در اختیار شما قرار می‌دهیم.
          </p>
        </div>
      </section>

      {/* Main Services - Premium Grid */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="space-y-40">
            {services.map((s, i) => (
              <div key={i} className="group relative">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:rtl' : ''}`}>
                  {/* Visual Column */}
                  <div className="relative aspect-video lg:aspect-square rounded-[3rem] overflow-hidden border border-white/10 group-hover:border-primary/40 transition-all duration-700 animate-fade-up">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Floating Badge in Image */}
                    <div className="absolute top-10 right-10 p-6 glass-card rounded-3xl border-white/10 animate-float">
                      <s.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-6 bg-gradient-to-r ${s.color} bg-clip-text text-transparent en`}>
                      0{i + 1} / Service
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
                      <span className="en">{s.title}</span> <br />
                      <span className="text-foreground/40 text-3xl md:text-4xl font-vazir block mt-4" dir="rtl">{s.persianTitle}</span>
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-vazir" dir="rtl">
                      {s.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 en">
                      {s.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="text-xs font-bold text-foreground/80">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="hero" size="xl" asChild className="rounded-2xl px-12 group en">
                      <Link to="/contact">
                        Request Quotation
                        <ArrowLeft className="mr-3 w-6 h-6 transition-transform group-hover:-translate-x-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Expertise */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight en">ADDITIONAL <span className="gradient-text">EXPERTISE</span></h2>
            <p className="text-muted-foreground text-lg font-vazir">خدمات تکمیلی برای پوشش تمام نیازهای فنی شما.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {additionalServices.map((s, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-500 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
                  <s.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:gradient-text transition-all en">{s.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-vazir" dir="rtl">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cooperation Process */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-24 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight en">THE <span className="gradient-text">PROCESS</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-vazir">چگونه ایده‌های شما را به واقعیت تبدیل می‌کنیم.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative animate-fade-up">
            <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

            {[
              { step: "01", label: "ANALYSIS", persian: "تحلیل نیازها", icon: Search },
              { step: "02", label: "DESIGN", persian: "طراحی و معماری", icon: Layers },
              { step: "03", label: "BUILD", persian: "توسعه و اجرا", icon: Code2 },
              { step: "04", label: "SCALE", persian: "استقرار و رشد", icon: Rocket },
            ].map((p, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-[120px] h-[120px] rounded-full bg-background border-4 border-white/5 flex items-center justify-center mb-8 group-hover:border-primary/50 transition-all duration-500 shadow-2xl">
                  <p.icon className="w-10 h-10 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-primary font-black text-[10px] tracking-[0.3em] mb-4 en">{p.step} / {p.label}</div>
                <h3 className="text-2xl font-black text-foreground mb-4 font-vazir">{p.persian}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="relative rounded-[4rem] p-12 md:p-32 bg-white/5 border border-white/10 overflow-hidden group text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 flex flex-col items-center">
              <MousePointer2 className="w-16 h-16 text-primary mb-12 animate-float" />
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight en">LET'S BUILD THE <br /><span className="gradient-text glow-text leading-tight">FUTURE</span></h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-vazir" dir="rtl">
                آماده‌اید تا پروژه خود را به سطح بعدی ببرید؟ ما منتظر شنیدن ایده‌های شما هستیم.
              </p>
              <Button variant="hero" size="xl" asChild className="rounded-2xl px-16 h-20 text-xl group shadow-2xl shadow-primary/20 en">
                <Link to="/contact">
                  Start Collaboration
                  <ArrowLeft className="mr-4 w-8 h-8 transition-transform group-hover:-translate-x-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;

