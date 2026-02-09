
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: "خانه", href: "/", isAnchor: false },
        { name: "خدمات", href: "/services", isAnchor: false },
        { name: "پروژه‌ها", href: "/#projects", isAnchor: true },
        { name: "وبلاگ", href: "/blog", isAnchor: false },
        { name: "درباره ما", href: "/#about", isAnchor: true },
        { name: "تماس", href: "/#contact", isAnchor: true },
    ];

    const HeaderLink = ({ link }: { link: typeof navLinks[0] }) => {
        const isActive = location.pathname === link.href;

        if (link.isAnchor) {
            return (
                <a
                    href={link.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-runtime-primary",
                        "px-4 py-2 rounded-full hover:bg-white/5",
                        "text-gray-400"
                    )}
                >
                    {link.name}
                </a>
            );
        }

        return (
            <Link
                to={link.href}
                onClick={(e) => {
                    if (location.pathname === "/" && link.href === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                }}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-runtime-primary",
                    "px-4 py-2 rounded-full hover:bg-white/5",
                    isActive ? "text-white bg-white/5" : "text-gray-400"
                )}
            >
                {link.name}
            </Link>
        );
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                isScrolled
                    ? "py-4 glass-header"
                    : "py-6 bg-transparent"
            )}
        >
            <div className="container-width flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-runtime-primary/20 to-runtime-secondary/20 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                            <img src="/favicon.ico" alt="Runtime Studio Logo" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-runtime-primary blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tight text-white en">
                            Runtime<span className="text-runtime-primary">Studio</span>
                        </span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-mono leading-none">
                            Dev Studio
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1 glass px-2 py-1 rounded-full border border-white/5 shadow-2xl">
                    {navLinks.map((link) => (
                        <HeaderLink key={link.name} link={link} />
                    ))}
                </nav>

                {/* Header Actions */}
                <div className="flex items-center gap-4">
                    <a href="/#contact" className="hidden sm:block en text-xs font-bold px-5 py-2.5 rounded-full bg-runtime-primary text-white hover:bg-runtime-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-runtime-primary/20">
                        Start a Project
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Interface */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 bg-runtime-bg/95 backdrop-blur-2xl border-b border-white/5 lg:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    {link.isAnchor ? (
                                        <a
                                            href={link.href}
                                            className="text-lg font-bold text-gray-400 hover:text-white py-3 block border-b border-white/5 last:border-0"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className={cn(
                                                "text-lg font-bold py-3 block border-b border-white/5 last:border-0",
                                                location.pathname === link.href ? "text-runtime-primary" : "text-gray-400 hover:text-white"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                            <a href="/#contact" className="mt-4 w-full py-4 rounded-xl bg-runtime-primary text-white font-bold shadow-xl shadow-runtime-primary/10 text-center block" onClick={() => setIsMobileMenuOpen(false)}>
                                شروع گفتگو
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

