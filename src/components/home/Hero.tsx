import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code2, Zap, Play, MousePointer2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background with Motion Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 grid-pattern mask-radial opacity-30" />
        <div className="grain-noise" />
        <img
          src={heroBg}
          alt="Technology background"
          className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Dynamic Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[160px] animate-pulse-slow opacity-50" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl mb-12 animate-fade-up en">
            <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-foreground/80">Available for New Projects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-10 tracking-tight animate-blur-in en">
            CRAFTING <br />
            <span className="gradient-text glow-text leading-tight">DIGITAL</span> <br />
            EXCELLENCE
          </h1>

          {/* Subheadline (Persian) */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-vazir text-center animate-fade-up" dir="rtl" style={{ animationDelay: "0.2s" }}>
            ما در <span className="text-foreground font-bold border-b border-primary/40">استودیو رانتایم</span> ایده‌های جسورانه شما را به محصولات نرم‌افزاری در کلاس جهانی تبدیل می‌کنیم.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild className="group rounded-2xl px-10 shadow-2xl shadow-primary/20 font-vazir h-16 text-lg">
              <Link to="/contact">
                شروع یک پروژه
                <ArrowLeft className="mr-2 w-6 h-6 transition-transform group-hover:-translate-x-2" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="group rounded-2xl px-10 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-vazir h-16 text-lg">
              <Link to="/portfolio">
                <Play className="ml-3 w-5 h-5 fill-current" />
                مشاهده کارها
              </Link>
            </Button>
          </div>

          {/* Scroll Discovery */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 animate-fade-up en" style={{ animationDelay: "0.8s" }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Discover More</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating Elements (Purely visual) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
        <div className="absolute top-1/4 left-10 p-4 glass-card rounded-2xl border-white/5 animate-float opacity-30 skew-y-12">
          <Code2 className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-1/3 right-10 p-4 glass-card rounded-2xl border-white/5 animate-float opacity-30 -skew-y-12" style={{ animationDelay: "1.5s" }}>
          <Zap className="w-8 h-8 text-cyan-400" />
        </div>
        <div className="absolute bottom-1/4 left-20 p-4 glass-card rounded-2xl border-white/5 animate-float opacity-30 -rotate-12" style={{ animationDelay: "3s" }}>
          <MousePointer2 className="w-8 h-8 text-blue-500" />
        </div>
      </div>
    </section>
  );
};

