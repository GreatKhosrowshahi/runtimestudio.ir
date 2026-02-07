import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Link2 } from "lucide-react";
const yazdanImg = "/yazdan.jpg";

const highlights = [
  "تمرکز بر کیفیت کد و Best Practices",
  "معماری مقیاس‌پذیر و قابل نگهداری",
  "ارتباط شفاف و گزارش‌دهی منظم",
  "پشتیبانی فنی پس از تحویل",
];

export const About = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-vazir text-right" dir="rtl">
              معمار <span className="gradient-text">ویژن‌های</span> دیجیتال شما
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-vazir text-right" dir="rtl">
              <span className="en">Runtime Studio</span> با مدیریت <strong className="text-foreground border-b-2 border-primary/30 pb-0.5">یزدان آسترکی</strong>،
              جایی است که تکنولوژی با خلاقیت تلاقی می‌کند. ما صرفاً کد نمی‌زنیم؛ ما تجربه‌هایی می‌سازیم که کسب‌وکار شما را در فضای توسعه‌یافته امروز متمایز می‌کند.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-vazir text-right" dir="rtl">
              با استفاده از مدرن‌ترین استک‌های تکنولوژی و تمرکز بر جزئیاتی که دیگران نادیده می‌گیرند، پروژه‌های شما را به سطحی از پایداری و زیبایی می‌رسانیم که شایسته آن هستید.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-all duration-300 font-vazir text-right" dir="rtl">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-start">
              <Button variant="hero" size="xl" asChild className="rounded-2xl font-vazir h-16 text-lg">
                <Link to="/about">
                  داستان ما را بخوانید
                  <ArrowLeft className="mr-2 w-5 h-5 transition-transform group-hover:-translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual - Photo with Premium Frame */}
          <div className="relative group animate-blur-in">
            <div className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img
                src={yazdanImg}
                alt="Yazdan Astereki"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Info Box */}
              <div className="absolute bottom-8 right-8 left-8 p-6 glass-card rounded-3xl border-primary/20 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center justify-between">
                  <div className="text-right">
                    <h4 className="text-xl font-bold text-foreground font-vazir">یزدان آسترکی</h4>
                    <p className="text-[10px] text-primary font-bold tracking-wider uppercase en text-left" dir="ltr">Founder & Lead Dev</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Link2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-[3rem] blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-24 bg-primary/30 rounded-full blur-3xl" />

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 px-6 py-3 glass-card rounded-2xl border-primary/30 shadow-xl animate-float z-20 en">
              <span className="text-primary font-bold text-[10px] uppercase tracking-wider">Expert Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
