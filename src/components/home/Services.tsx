import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Server, ArrowLeft } from "lucide-react";
import webDevImage from "@/assets/web-development.jpg";
import mobileDevImage from "@/assets/mobile-development.jpg";
import backendDevImage from "@/assets/backend-development.jpg";

const services = [
  {
    icon: Globe,
    title: "توسعه وب‌سایت",
    description: "طراحی و توسعه وب‌سایت‌های مدرن با React، Next.js و TypeScript. بهینه‌سازی عملکرد و SEO.",
    image: webDevImage,
  },
  {
    icon: Smartphone,
    title: "توسعه اپلیکیشن",
    description: "ساخت اپلیکیشن‌های موبایل با React Native و Flutter. تجربه کاربری یکپارچه در iOS و Android.",
    image: mobileDevImage,
  },
  {
    icon: Server,
    title: "توسعه Backend",
    description: "طراحی API و معماری سرور با Node.js، Python و PostgreSQL. سیستم‌های مقیاس‌پذیر و امن.",
    image: backendDevImage,
  },
];

export const Services = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="grain-noise" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl mb-8 en">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Technical Masterclass</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight en">
            LEVEL UP YOUR <br />
            <span className="gradient-text glow-text leading-tight">DIGITAL STACK</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-vazir text-center" dir="rtl">
            ما مجموعه‌ای از پیشرفته‌ترین راه‌حل‌های فنی را برای پیاده‌سازی دیدگاه‌های جسورانه شما فراهم آورده‌ایم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with Parallax-like effect */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-xl border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground mb-4 tracking-tight group-hover:gradient-text transition-all font-vazir text-right" dir="rtl">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors font-vazir text-right" dir="rtl">
                  {service.description}
                </p>

                {/* Reveal Arrow */}
                <div className="mt-8 overflow-hidden">
                  <div className="flex items-center gap-2 text-primary font-bold text-[10px] tracking-widest uppercase translate-y-8 group-hover:translate-y-0 transition-transform duration-500 en">
                    Learn More
                    <ArrowLeft className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Glowing Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

