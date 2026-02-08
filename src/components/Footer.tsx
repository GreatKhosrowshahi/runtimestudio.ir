
import { Code2, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-runtime-secondary/30 border-t border-white/5 pt-16 pb-8 backdrop-blur-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                <Code2 size={24} />
                            </div>
                            <span className="text-xl font-bold text-white font-sans">Runtime Studio</span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                            ما در Runtime Studio با ترکیب خلاقیت و تکنولوژی، ایده‌های شما را به واقعیت تبدیل می‌کنیم. تخصص ما طراحی و توسعه وبسایت‌های مدرن و اپلیکیشن‌های پیشرفته است.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/GreatKhosrowshahi" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com/in/yazdan" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://t.me/thatsboyyazdan" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">دسترسی سریع</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">خانه</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">خدمات</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">نمونه کارها</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">درباره ما</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-6">اطلاعات تماس</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="font-sans dir-ltr">09301211301</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-purple-500" />
                                <span className="font-sans dir-ltr">runtimestudio@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-pink-500" />
                                <span>ایران، قزوین</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p className="font-sans dir-ltr">© 2026 Runtime Studio. All rights reserved.</p>
                    <div className="flex items-center gap-1 font-sans dir-ltr">
                        <span>Design & Development by</span>
                        <span className="text-white font-bold">runtimestudio</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
