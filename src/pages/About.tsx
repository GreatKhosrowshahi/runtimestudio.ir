import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Target, Shield, Zap, Github, Linkedin, Twitter, ExternalLink, Award, Sparkles } from "lucide-react";
const yazdanImg = "/yazdan.jpg";

const values = [
  {
    icon: Code2,
    title: "مهندسی دقیق",
    description: "توسعه نرم‌افزار با بالاترین استانداردهای کدنویسی و معماری اصولی.",
  },
  {
    icon: Zap,
    title: "سرعت و بازدهی",
    description: "خلق محصولاتی که با سرعت نور کار می‌کنند و تجربه‌ای روان ارائه می‌دهند.",
  },
  {
    icon: Shield,
    title: "اعتماد و امنیت",
    description: "حفاظت از دارایی‌های دیجیتال شما با راهکارهای امنیتی پیشرفته.",
  },
  {
    icon: Target,
    title: "آینده‌نگری",
    description: "طراحی محصولاتی که با رشد کسب‌وکار شما، به راحتی مقیاس‌پذیر هستند.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"], color: "from-cyan-400 to-blue-500" },
  { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL"], color: "from-blue-500 to-purple-500" },
  { category: "Mobile", items: ["React Native", "Expo", "Native Modules"], color: "from-purple-500 to-pink-500" },
  { category: "Infrastructure", items: ["Docker", "Kubernetes", "AWS", "CI/CD"], color: "from-pink-500 to-primary" },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-blur-in en">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Behind the Code</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9]">
              WE REDEFINE <br />
              <span className="gradient-text glow-text leading-snug">POSSIBILITIES</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-vazir text-center" dir="rtl">
              داستان ما، داستان تبدیل چالش‌های پیچیده به راه‌حل‌های ساده و زیباست.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative group">
              <div className="relative z-10 aspect-[3/4] rounded-[3rem] overflow-hidden border-2 border-white/5 shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                <img
                  src={yazdanImg}
                  alt="Yazdan Astereki"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-10 left-10 right-10 flex flex-col items-end text-right en">
                  <div className="flex gap-4 mb-6">
                    <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 uppercase">YAZDAN ASTEREKI</h3>
                  <p className="text-primary font-bold tracking-widest uppercase text-xs">Architect & Founder</p>
                </div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 animate-fade-up">
              <h2 className="text-3xl md:text-5xl font-black mb-10 tracking-tight">
                چشم‌اندازی فراتر از <br />
                <span className="gradient-text leading-tight">پیکسل‌ها و کدها</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-vazir">
                <p>
                  در <span className="text-foreground font-bold en">Runtime Studio</span>، ما بر این باوریم که هر خط کد پتانسیل تغییر یک کسب‌وکار را دارد.
                  این مجموعه توسط <strong className="text-foreground border-b border-primary/40">یزدان آسترکی</strong> با تمرکزی وسواس‌گونه بر کیفیت فنی و زیبایی بصری شکل گرفته است.
                </p>
                <p>
                  مسیر ما با عطش بی‌پایان برای نوآوری آغاز شد. پس از سال‌ها تجربه در پروژه‌های بین‌المللی و همکاری با تیم‌های پیشرو، تصمیم گرفتیم استانداردی جدید برای توسعه محصولات دیجیتال در ایران تعریف کنیم.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5 en">
                  <div>
                    <div className="text-4xl font-black text-foreground mb-1">15+</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Global Projects</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-foreground mb-1">100%</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Clean Architecture</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight en">THE CORE <span className="gradient-text">DNA</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-vazir">ارزش‌هایی که در رگ‌های هر پروژه جریان دارد.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
                  <v.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:gradient-text transition-all font-vazir">{v.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors font-vazir">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernized Tech Stack */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3 animate-fade-up">
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight en">POWERHOUSE <br /><span className="gradient-text leading-tight">STACK</span></h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-vazir">
                ما از ابزارهایی استفاده می‌کنیم که سرعت، امنیت و پایداری را در DNA محصول شما نهادینه می‌کنند.
              </p>
              <div className="p-8 rounded-3xl glass-card border-primary/20">
                <div className="flex items-center gap-4 mb-4 en">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-bold text-foreground">Always Evolving</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-vazir">
                  تیم تحقیق و توسعه ما به طور روزانه فریم‌ورک‌های جدید را بررسی می‌کند تا همیشه از بهترین‌ها استفاده کنیم.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {techStack.map((stack, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-secondary/30 border border-white/5 hover:border-white/10 transition-all duration-500 animate-fade-up en" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={`text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block bg-gradient-to-r ${stack.color} bg-clip-text text-transparent`}>
                    {stack.category}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {stack.items.map((item, idx) => (
                      <div key={idx} className="px-4 py-2 rounded-xl bg-background/50 border border-white/5 text-xs font-bold text-foreground/80 hover:text-foreground hover:border-primary/30 transition-all cursor-default">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto rounded-[4rem] p-12 md:p-24 bg-gradient-to-br from-primary via-cyan-500 to-blue-600 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:scale-110 transition-transform duration-1000" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-primary-foreground">
              <div className="en">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to <br />start a project?</h2>
                <p className="text-xl text-primary-foreground/80 leading-relaxed mb-10 font-vazir text-right" dir="rtl">
                  بیایید با هم چیزی بسازیم که در بازار امروز بدرخشد.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <Button variant="secondary" size="xl" asChild className="rounded-2xl h-20 text-xl font-black bg-white text-primary hover:bg-white/90 shadow-2xl transition-all en">
                  <Link to="/contact">
                    Book a Consultation
                    <ArrowLeft className="mr-4 w-8 h-8" />
                  </Link>
                </Button>
                <div className="flex items-center justify-center gap-8 mt-4 en">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-white/60" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Top Rated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-white/60" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Verified Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

