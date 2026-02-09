
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase
                .from('contact_requests')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        status: 'pending'
                    }
                ]);

            if (error) throw error;

            toast.success("درخواست شما با موفقیت ثبت شد. تیکت مهندسی برای شما صادر گردید.");
            setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
        } catch (error: any) {
            console.error("Supabase Error:", error);
            toast.error("خطا در ثبت درخواست. لطفاً دوباره تلاش کنید.");
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        { icon: Phone, label: "Technical Support", value: "0930 121 1301", href: "tel:+989301211301" },
        { icon: Phone, label: "Management", value: "0930 120 8899", href: "tel:+989301208899" },
        { icon: Mail, label: "Business Inquiry", value: "info@runtimestudio.ir", href: "mailto:info@runtimestudio.ir" },
        { icon: MapPin, label: "Engineering Hub", value: "Qazvin, Iran", href: "#" }
    ];

    return (
        <section id="contact" className="py-24 relative z-10" aria-labelledby="contact-heading">
            <div className="container-width">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-xs font-bold en text-runtime-primary uppercase tracking-[0.3em] mb-4 block"
                        >
                            Contact Engineers
                        </motion.span>
                        <motion.h2
                            id="contact-heading"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-5xl font-black mb-6 leading-tight"
                        >
                            آماده شروع پروژه‌ی <span className="text-gradient">بعدی شما</span> هستیم
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-400 text-lg mb-12 font-vazir"
                        >
                            ایده‌های خود را با تیم فنی ما در میان بگذارید تا بهترین راهکار مهندسی را برای شما بررسی و تدوین کنیم.
                        </motion.p>

                        <div className="grid grid-cols-1 gap-6">
                            {contactInfo.map((info, idx) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-center gap-6 p-6 rounded-2xl glass border border-white/5 hover:border-runtime-primary/30 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-runtime-primary/10 flex items-center justify-center text-runtime-primary group-hover:scale-110 transition-transform">
                                        <info.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] en text-gray-500 font-bold uppercase tracking-widest mb-1">{info.label}</p>
                                        <p className="text-white font-bold en">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 rounded-3xl relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest font-vazir">نام شما</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all font-vazir"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest font-vazir">ایمیل یا شماره</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all en"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest font-vazir">توضیحات پروژه</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all font-vazir resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-runtime-primary text-white font-black flex items-center justify-center gap-3 hover:bg-runtime-primary/80 transition-all font-vazir group"
                            >
                                {loading ? "در حال ارسال تیکت..." : (
                                    <>
                                        ثبت درخواست مشاوره فنی
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

