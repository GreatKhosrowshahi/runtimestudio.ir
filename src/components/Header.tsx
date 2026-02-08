
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Link } from "react-router-dom"; // Assuming react-router-dom is used
import { cn } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "خانه", href: "/" },
        { name: "خدمات", href: "/services" },
        { name: "وبلاگ", href: "/blog" },
        { name: "تیم ما", href: "/#about" },
        { name: "پروژه‌ها", href: "/#projects" },
        { name: "تماس با ما", href: "/#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "glass-header shadow-lg shadow-primary/5 py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container px-4 mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                        <Code2 size={24} />
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 font-sans tracking-tight leading-none group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                            Runtime Studio
                        </span>
                        <span className="text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase">Software Group</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-all px-4 py-2 rounded-full hover:bg-white/10 relative group font-vazir"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <button className="hidden md:block px-6 py-2.5 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary hover:text-white text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/5 hover:shadow-primary/20 font-vazir">
                    شروع پروژه
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-white py-2 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/20">
                        شروع پروژه
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
