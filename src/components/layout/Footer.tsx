import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-primary/20">
                <Code2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex flex-col en">
                <span className="font-black text-2xl tracking-tight leading-none gradient-text">Runtime</span>
                <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase leading-none mt-1">Studio</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm font-vazir text-right" dir="rtl">
              استودیوی پیشرو در طراحی و توسعه محصولات دیجیتال با تمرکز بر
              <span className="text-foreground"> نوآوری</span>،
              <span className="text-foreground"> کیفیت</span> و
              <span className="text-foreground"> عملکرد</span>.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col text-right" dir="rtl">
            <h4 className="text-foreground font-black text-lg mb-8 relative inline-flex items-center gap-2 font-vazir">
              دسترسی سریع
              <span className="w-8 h-[2px] bg-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/services", label: "خدمات فنی" },
                { href: "/portfolio", label: "نمونه‌کارها" },
                { href: "/about", label: "داستان ما" },
                { href: "/contact", label: "ارسال پیام" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group font-vazir"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col text-right" dir="rtl">
            <h4 className="text-foreground font-black text-lg mb-8 relative inline-flex items-center gap-2 font-vazir">
              همکاری با ما
              <span className="w-8 h-[2px] bg-primary/50 rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@runtime.studio" className="group flex flex-col items-end">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1 group-hover:text-primary/70 transition-colors font-vazir">ایمیل</span>
                  <span className="text-foreground font-black group-hover:text-primary transition-colors en" dir="ltr">hello@runtime.studio</span>
                </a>
              </li>
              <li className="flex gap-4 pt-4 justify-end">
                {[
                  { label: "Github", href: "https://github.com/runtime-studio" },
                  { label: "LinkedIn", href: "https://linkedin.com/company/runtime-studio" },
                  { label: "Twitter", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary/50 border border-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <span className="sr-only">{social.label}</span>
                    <span className="text-[10px] font-black uppercase en">{social.label.slice(0, 2)}</span>
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground tracking-wide order-2 md:order-1 font-vazir text-center md:text-right" dir="rtl">
            © {new Date().getFullYear()} <span className="text-foreground font-black en" dir="ltr">Runtime Studio</span>. طراحی شده با عشق در ایران.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground order-1 md:order-2 font-vazir">
            ساخته شده توسط
            <a href="#" className="px-3 py-1 rounded-full bg-primary/10 text-primary font-black border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all">
              یزدان آسترکی
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

