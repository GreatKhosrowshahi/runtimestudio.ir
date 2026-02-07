
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
        { name: "خدمات", href: "#services" },
        { name: "تیم ما", href: "#about" },
        { name: "پروژه‌ها", href: "#projects" },
        { name: "تماس با ما", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/60 backdrop-blur-xl border-b border-border/20 py-3 shadow-lg shadow-black/5"
                    : "bg-transparent py-5 backdrop-blur-[2px]"
            )}
        >
            <div className="container px-4 mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <Code2 size={24} />
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 hidden sm:block font-sans">
                        Runtime Studio
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <button className="hidden md:block px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95">
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
