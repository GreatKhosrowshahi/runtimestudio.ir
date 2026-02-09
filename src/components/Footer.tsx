
import { Code2, Github, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 bg-runtime-surface/80 border-t border-white/5 pt-20 pb-10 backdrop-blur-sm">
            <div className="container-width">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-runtime-primary/20 to-runtime-secondary/20 flex items-center justify-center text-runtime-primary border border-white/5 overflow-hidden">
                                <img src="/favicon.ico" alt="Runtime Studio Logo" className="w-6 h-6 object-contain" />
                            </div>
                            <span className="text-xl font-black text-white en tracking-tight">Runtime<span className="text-runtime-primary">Studio</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            پیشرو در ارائه راهکارهای نوین مهندسی نرم‌افزار، طراحی وب‌سایت‌های پیشرفته و اپلیکیشن‌های مقیاس‌پذیر. همراه شما در مسیر تحول دیجیتال.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Github, href: "https://github.com/GreatKhosrowshahi", label: "GitHub" },
                                { icon: Instagram, href: "https://www.instagram.com/runtimestudio.ir", label: "Instagram" },
                                { icon: Send, href: "https://t.me/thatsboyyazdan", label: "Telegram" }
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-runtime-primary/20 hover:border-runtime-primary/30 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">خدمات تخصصی</h4>
                        <ul className="space-y-4">
                            {["طراحی وب‌سایت مدرن", "اپلیکیشن‌های موبایل", "معماری نرم‌افزار", "مشاوره فنی"].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-gray-400 hover:text-runtime-primary text-sm transition-colors duration-200">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">دسترسی سریع</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/" onClick={(e) => { if (window.location.pathname === "/") { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }} className="text-gray-400 hover:text-white transition-colors">صفحه اصلی</a></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">خدمات برتر</Link></li>
                            <li><Link to="/#projects" className="text-gray-400 hover:text-white transition-colors">نمونه کارها</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">مجله تکنولوژی</Link></li>
                            <li><Link to="/#about" className="text-gray-400 hover:text-white transition-colors">درباره استودیو</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">ارتباط با ما</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex flex-col gap-1">
                                <span className="text-gray-500 text-xs">پست الکترونیک</span>
                                <a href="mailto:runtimestudio@gmail.com" className="text-gray-300 hover:text-runtime-primary en transition-colors">runtimestudio@gmail.com</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-gray-500 text-xs">تلفن مستقیم</span>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+989301211301" className="text-gray-300 hover:text-runtime-primary en transition-colors">+98 930 121 1301</a>
                                    <a href="tel:+989301208899" className="text-gray-300 hover:text-runtime-primary en transition-colors">+98 930 120 8899</a>
                                </div>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-gray-500 text-xs">موقعیت</span>
                                <span className="text-gray-300">ایران، قزوین</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-gray-500 text-xs en">
                        © {currentYear} Runtime Studio. Engineered with precision.
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="en">Built with</span>
                        <div className="flex items-center gap-1.5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
                            <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded en font-bold">React</span>
                            <span className="bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded en font-bold">Tailwind</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
