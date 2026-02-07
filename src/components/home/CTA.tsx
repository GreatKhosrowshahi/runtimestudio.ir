import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Sparkles } from "lucide-react";
import techPattern from "@/assets/tech-pattern.jpg";

export const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="grain-noise" />

      <div className="container-custom relative z-10">
        <div className="relative rounded-[3rem] overflow-hidden border border-white/5 bg-surface-elevated/50 backdrop-blur-sm">
          {/* Animated Background Effects */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

          <div className="relative z-10 p-12 md:p-24 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl mb-10 font-vazir text-right en" dir="rtl">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Collaboration Ready</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight font-vazir text-center" dir="rtl">
              مهندسی <br />
              <span className="gradient-text glow-text leading-tight">آینده دیجیتال شما</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed font-vazir text-center" dir="rtl">
              از ایده تا اجرا، همراه شما هستیم. با ما تماس بگیرید و درباره پروژه‌تان صحبت کنید.
              مشاوره اولیه <span className="text-primary font-bold">رایگان</span> است.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="hero" size="xl" asChild className="group h-16 rounded-2xl px-10 font-vazir text-lg">
                <Link to="/contact">
                  شروع گفتگو
                  <ArrowLeft className="w-6 h-6 mr-2 transition-transform group-hover:-translate-x-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild className="group h-16 rounded-2xl px-10 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-vazir text-lg">
                <Link to="/portfolio">مشاهده نمونه‌کارها</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-12 mt-12 pt-12 border-t border-white/5">
              {[
                { value: "۱۰۰%", label: "رضایت" },
                { value: "۲۴/۷", label: "پشتیبانی" },
                { value: "رایگان", label: "مشاوره" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-primary mb-2 font-vazir">{item.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-vazir">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
