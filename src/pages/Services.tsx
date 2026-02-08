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
  Database,
  ShieldCheck,
  MousePointer2,
  HelpCircle,
  Terminal,
} from "lucide-react";
import webDevImage from "@/assets/web-development.jpg";
import mobileDevImage from "@/assets/mobile-development.jpg";
import backendDevImage from "@/assets/backend-development.jpg";

// Content derived from SEO Strategy
const services = [
  {
    icon: Globe,
    title: "Web Development",
    persianTitle: "طراحی وب‌سایت و توسعه وب",
    // SEO: Problem-Solution Mapping
    description: "بسیاری از وب‌سایت‌ها زیبا هستند اما کند و غیربهینه. در Runtime Studio، ما فرآیند توسعه وب را با رویکرد مهندسی پیش می‌بریم: Frontend سریع با React/Next.js، طراحی ریسپانسیو و معماری SEO-Friendly برای دیده شدن در گوگل.",
    features: [
      "Modern Frontend Engineering",
      "SEO-Friendly Architecture",
      "Responsive Fluid Design",
      "PWA Implementation",
    ],
    image: webDevImage,
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Smartphone,
    title: "Custom Applications",
    persianTitle: "طراحی اپلیکیشن و سامانه‌های اختصاصی",
    // SEO: Use-Case Driven
    description: "نرم‌افزارهای آماده پاسخگوی نیازهای پیچیده نیستند. ما اپلیکیشن‌هایی اختصاصی می‌سازیم که دقیقاً منطبق بر Workflow کسب‌وکار شماست. از تحلیل نیازمندی‌ها تا استقرار، سیستم‌هایی امن و پایدار با قابلیت پردازش حجم بالای داده خلق می‌کنیم.",
    features: [
      "Cross-Platform Solutions",
      "Scalable Systems",
      "Secure Data Handling",
      "Business Workflow Automation",
    ],
    image: mobileDevImage,
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Backend & Database",
    persianTitle: "معماری بک‌اِند و مهندسی داده",
    // SEO: Technical Depth
    description: "قلب تپنده نرم‌افزار شما. ما با انتخاب معماری صحیح (Microservices vs Monolith) و بهینه‌سازی دیتابیس (SQL/NoSQL)، سرعت و امنیت سیستم را در ترافیک‌های بالا تضمین می‌کنیم. APIهای RESTful و GraphQL ما، ارتباطی پایدار را رقم می‌زنند.",
    features: [
      "Microservices Architecture",
      "Database Optimization",
      "High-Performance APIs",
      "Cloud-Native Solutions",
    ],
    image: backendDevImage,
    color: "from-emerald-500 to-teal-400"
  },
];

const technicalExpertise = [
  {
    icon: Terminal,
    title: "DevOps & CI/CD",
    desc: "پیاده‌سازی پایپ‌لاین‌های اتوماسیون و مانیتورینگ سرور برای اطمینان از آپتایم و کارایی حداکثری.",
  },
  {
    icon: ShieldCheck,
    title: "Security Audits",
    desc: "تحلیل امنیت و تست نفوذ برای محافظت از داده‌های حیاتی و جلوگیری از حملات سایبری.",
  },
  {
    icon: Database,
    title: "Large Scale DB",
    desc: "طراحی و بهینه‌سازی دیتابیس‌های توزیع‌شده برای مدیریت حجم عظیمی از داده‌ها.",
  },
];


const faqItems = [
  {
    question: "تفاوت Runtime Studio با سایر شرکت‌های طراحی سایت چیست؟",
    answer: "تمرکز ما بر مهندسی نرم‌افزار و معماری سیستم است. ما صرفاً از قالب‌های آماده استفاده نمی‌کنیم، بلکه راهکارهای اختصاصی، امن و مقیاس‌پذیر را بر اساس استانداردهای جهانی Web Development پیاده‌سازی می‌کنیم."
  },
  {
    question: "آیا خدمات پشتیبانی و نگهداری پس از تحویل پروژه ارائه می‌شود؟",
    answer: "بله، نگهداری (Maintenance) بخش حیاتی چرخه عمر نرم‌افزار است. ما پلن‌های پشتیبانی فنی شامل مانیتورینگ، رفع باگ و آپدیت‌های امنیتی ارائه می‌دهیم تا سیستم شما همیشه به‌روز باشد."
  },
  {
    question: "از چه تکنولوژی‌هایی در پروژه‌ها استفاده می‌کنید؟",
    answer: "Stack ما بر اساس نیاز پروژه انتخاب می‌شود، اما تخصص اصلی ما شامل React, Next.js, Node.js, Python, PostgreSQL و ابزارهای Cloud-Native است."
  },
  {
    question: "فرآیند سفارش پروژه طراحی اپلیکیشن چگونه است؟",
    answer: "با جلسه مشاوره و تحلیل نیازها آغاز می‌شود. سپس MVP تعریف شده و پس از تأیید معماری، فاز توسعه چابک (Agile) آغاز می‌گردد."
  }
];

import Meta from "@/components/SEO/Meta";

const ServicesPage = () => {
  return (
    <Layout>
      <Meta
        title="خدمات توسعه نرم‌افزار | طراحی وب و اپلیکیشن"
        description="خدمات تخصصی Runtime Studio شامل طراحی وب‌سایت، توسعه اپلیکیشن موبایل، معماری Backend و سیستم‌های توزیع‌شده با بالاترین استانداردهای مهندسی."
      />
      {/* SEO-Optimized Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>

        <div className="container-custom relative z-10 text-center en">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl mb-12 animate-fade-up">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">Full-Stack Software Development Studio</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] animate-blur-in">
            RUNTIME <br />
            <span className="gradient-text glow-text leading-tight">STUDIO</span>
          </h1>
          {/* H1 Subtext / Intro - SEO Context */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-up font-vazir text-center" dir="rtl" style={{ animationDelay: "0.2s" }}>
            مرجع تخصصی <strong>طراحی وب‌سایت</strong>، <strong>توسعه اپلیکیشن</strong> و <strong>معماری نرم‌افزار</strong>.
            ما با تلفیق هنر طراحی و قدرت مهندسی، راهکارهایی مقیاس‌پذیر، امن و پرسرعت برای کسب‌وکار شما خلق می‌کنیم.
          </p>
        </div>
      </section>

      {/* Main Services - Problem-Solution Mapping */}
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

                    <div className="absolute top-10 right-10 p-6 glass-card rounded-3xl border-white/10 animate-float">
                      <s.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-6 bg-gradient-to-r ${s.color} bg-clip-text text-transparent en`}>
                      0{i + 1} / {s.title}
                    </div>
                    {/* H2 for SEO */}
                    <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight font-vazir text-right" dir="rtl">
                      {s.persianTitle}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-vazir text-justify" dir="rtl">
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
                        Get Technical Solutions
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

      {/* Technical Depth & E-E-A-T */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight en">ENGINEERING <span className="gradient-text">GRADE</span></h2>
            <p className="text-muted-foreground text-lg font-vazir">اانداردهای مهندسی که ما را متمایز می‌کند.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {technicalExpertise.map((s, i) => (
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

      {/* FAQ Section - Schema Ready */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl mb-8">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight font-vazir">پرسش‌های متداول</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((item, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-4 font-vazir text-right text-foreground/90 leading-tight" dir="rtl">{item.question}</h3>
                <p className="text-muted-foreground font-vazir text-right leading-relaxed" dir="rtl">{item.answer}</p>
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
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight en">READY TO <br /><span className="gradient-text glow-text leading-tight">SCALE?</span></h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-vazir" dir="rtl">
                همین حالا برای مشاوره رایگان و نیازسنجی پروژه خود با ما تماس بگیرید.
              </p>
              <Button variant="hero" size="xl" asChild className="rounded-2xl px-16 h-20 text-xl group shadow-2xl shadow-primary/20 en">
                <Link to="/contact">
                  Start Verification
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
