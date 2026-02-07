import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Sparkles, Target, Zap, TrendingUp, Trophy } from "lucide-react";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectFintech from "@/assets/project-fintech.jpg";

const projects = [
  {
    title: "Novin E-Commerce",
    persianTitle: "پلتفرم فروشگاهی نوین",
    category: "Architecture & Frontend",
    description: "پلتفرم فروشگاهی مقیاس‌پذیر که استانداردهای جدیدی در تجربه خرید آنلاین خلق کرد.",
    challenge: "نیاز به سیستم فروشگاهی سفارشی با قابلیت هندل کردن ترافیک بالا و مدیریت فروشندگان متعدد.",
    solution: "طراحی معماری میکروسرویس و استفاده از Next.js برای سئو و سرعت فوق‌العاده.",
    techStack: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    metrics: [
      { label: "Conversion Rate", value: "+40%", icon: TrendingUp },
      { label: "Load Time", value: "<1.2s", icon: Zap },
      { label: "Stability", value: "99.9%", icon: Trophy },
    ],
    image: projectEcommerce,
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Insight Analytics",
    persianTitle: "داشبورد تحلیلی هوشمند",
    category: "Data Visualization",
    description: "تبدیل داده‌های خام به بینش‌های تجاری ارزشمند از طریق یک رابط بصری پیشرفته.",
    challenge: "یکپارچه‌سازی داده‌های پراکنده از ۱۰ منبع مختلف و نمایش آن‌ها در زمان واقعی.",
    solution: "پیاده‌سازی پایپ‌لاین‌های داده و استفاده از D3.js برای نمودارهای تعاملی پیچیده.",
    techStack: ["D3.js", "React", "Python", "Redis"],
    metrics: [
      { label: "Report Time", value: "-60%", icon: Zap },
      { label: "Data Sources", value: "15+", icon: Target },
      { label: "User Adoption", value: "100%", icon: Sparkles },
    ],
    image: projectDashboard,
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Fintech Wallet",
    persianTitle: "اپلیکیشن مالی و بانکی",
    category: "Mobile Engineering",
    description: "امن‌ترین راه برای مدیریت دارایی‌های دیجیتال با رابط کاربری در سطح جهانی.",
    challenge: "تضمین امنیت تراکنش‌ها و ایجاد یک تجربه کاربری ساده برای مفاهیم پیچیده مالی.",
    solution: "استفاده از React Native با ماژول‌های بومی امنیتی و سیستم احراز هویت بیومتریک.",
    techStack: ["React Native", "Node.js", "Encryption", "Auth0"],
    metrics: [
      { label: "App Store", value: "4.8/5", icon: Trophy },
      { label: "Downloads", value: "10k+", icon: TrendingUp },
      { label: "Transaction Time", value: "0.2s", icon: Zap },
    ],
    image: projectFintech,
    color: "from-emerald-600 to-teal-500"
  },
];

const PortfolioPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        </div>

        <div className="container-custom relative z-10 text-center animate-blur-in en">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl mb-12">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">Our Halls of Fame</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
            SELECTED <br />
            <span className="gradient-text glow-text leading-tight">WORKS</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-vazir text-center" dir="rtl">
            هر پروژه، شاهدی بر تعهد ما به برتری فنی و خلاقیت بی‌پایان است.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="space-y-40">
            {projects.map((p, i) => (
              <article key={i} className="group relative">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${i % 2 === 1 ? 'lg:rtl' : ''}`}>

                  {/* Visual Column */}
                  <div className="lg:col-span-12 xl:col-span-7 relative group/image">
                    <div className="relative aspect-[16/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-transform duration-700 animate-fade-up">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover grayscale-[0.3] group-hover/image:grayscale-0 group-hover/image:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                      {/* Overlay Badge */}
                      <div className="absolute top-10 right-10 flex flex-col items-end gap-2 animate-float en">
                        <span className={`px-5 py-2 rounded-full bg-gradient-to-r ${p.color} text-white font-black text-[10px] tracking-widest uppercase shadow-xl`}>
                          {p.category}
                        </span>
                      </div>
                    </div>

                    {/* Floating Stats over Image (Desktop only) */}
                    <div className="hidden xl:grid grid-cols-3 gap-4 absolute -bottom-10 left-10 right-10 z-20 en">
                      {p.metrics.map((m, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-3xl border-white/10 shadow-2xl animate-fade-up" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                          <m.icon className="w-6 h-6 text-primary mb-3" />
                          <div className="text-2xl font-black text-foreground mb-1">{m.value}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-12 xl:col-span-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-6 bg-gradient-to-r ${p.color} bg-clip-text text-transparent en`}>
                      Case Study / {p.title}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
                      <span className="en">{p.title}</span> <br />
                      <span className="text-foreground/40 text-2xl md:text-3xl font-vazir block mt-4" dir="rtl">{p.persianTitle}</span>
                    </h2>

                    <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-vazir" dir="rtl">
                      {p.description}
                    </p>

                    {/* Brief Detail Grid */}
                    <div className="grid grid-cols-1 gap-6 mb-12">
                      <div className="p-8 rounded-[2rem] bg-secondary/30 border border-white/5 hover:border-primary/20 transition-all font-vazir text-right" dir="rtl">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="w-5 h-5 text-primary" />
                          <span className="text-sm font-black uppercase tracking-widest text-foreground">The Challenge</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{p.challenge}</p>
                      </div>
                      <div className="p-8 rounded-[2rem] bg-secondary/30 border border-white/5 hover:border-primary/20 transition-all font-vazir text-right" dir="rtl">
                        <div className="flex items-center gap-3 mb-4">
                          <Sparkles className="w-5 h-5 text-primary" />
                          <span className="text-sm font-black uppercase tracking-widest text-foreground">The Solution</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{p.solution}</p>
                      </div>
                    </div>

                    {/* Tech Tag list */}
                    <div className="flex flex-wrap gap-3 mb-12 en">
                      {p.techStack.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-xl bg-background border border-white/10 text-[10px] font-black uppercase tracking-widest text-foreground/70 hover:text-primary hover:border-primary/30 transition-all">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="hero" size="xl" asChild className="rounded-2xl px-12 group w-full sm:w-auto en">
                      <Link to="/contact">
                        Start a similar project
                        <ArrowLeft className="mr-3 w-6 h-6 transition-transform group-hover:-translate-x-2" />
                      </Link>
                    </Button>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats / Trust Section */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container-custom relative z-10 text-center en">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
            {[
              { label: "Elite Projects", value: "15+" },
              { label: "Happy Clients", value: "100%" },
              { label: "Lines of Code", value: "1M+" },
              { label: "Awards Win", value: "5+" },
            ].map((s, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-6xl font-black text-foreground mb-4">{s.value}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="relative rounded-[4rem] p-12 md:p-32 bg-white/5 border border-white/10 overflow-hidden group text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 en">
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight uppercase">READY TO BECOME <br /><span className="gradient-text leading-tight">THE NEXT SUCCESS?</span></h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-vazir text-center" dir="rtl">
                ما آماده‌ایم تا ایده شما را به عنوان برند برتر بعدی در این گالری ثبت کنیم.
              </p>
              <Button variant="hero" size="xl" asChild className="rounded-2xl px-16 h-20 text-xl group shadow-2xl shadow-primary/20">
                <Link to="/contact" className="en">
                  Work with us
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

export default PortfolioPage;

