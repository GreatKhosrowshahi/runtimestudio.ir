import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/portfolio", label: "نمونه‌کارها" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden shadow-lg shadow-primary/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white/20 blur-md" />
              <Code2 className="w-7 h-7 text-primary-foreground relative z-10" />
            </div>
            <div className="flex flex-col en">
              <span className="font-black text-xl md:text-2xl tracking-tight leading-none gradient-text">Runtime</span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase leading-none mt-1">Studio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 bg-secondary/30 backdrop-blur-md px-2 py-1.5 rounded-2xl border border-white/5" dir="rtl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 font-vazir ${location.pathname === link.href
                  ? "text-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary),0.1)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Start Collaboration Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild className="rounded-2xl shadow-xl shadow-primary/10 font-vazir">
              <Link to="/contact">شروع همکاری</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-2xl bg-secondary/50 border border-white/5 hover:bg-secondary transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-white/5 animate-blur-in" dir="rtl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-6 py-4 rounded-2xl text-lg font-black transition-all font-vazir text-right ${location.pathname === link.href
                    ? "text-primary bg-primary/10 border-r-4 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="hero" size="xl" className="mt-6 rounded-2xl font-vazir text-xl h-20" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  شروع همکاری
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

