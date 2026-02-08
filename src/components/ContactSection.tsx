import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        projectType: "Web Development",
        description: ""
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            const newRequest = {
                id: Date.now().toString(),
                ...formData,
                date: new Date().toISOString()
            };
            const existingRequests = JSON.parse(localStorage.getItem('runtime_requests') || '[]');
            localStorage.setItem('runtime_requests', JSON.stringify([...existingRequests, newRequest]));

            toast.success("درخواست شما با موفقیت ثبت شد.");
            setFormData({ name: "", phone: "", projectType: "Web Development", description: "" });
            setLoading(false);
        }, 1000);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-[#030303]">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Info Side */}
                    <div className="space-y-12 animate-fade-up">
                        <div className="space-y-6">
                            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase font-sans">Get in Touch</span>
                            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight font-sans leading-none">
                                LET'S WORK <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">TOGETHER</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-vazir leading-relaxed max-w-lg" dir="rtl">
                                برای شروع یک پروژه خارق‌العاده آماده‌اید؟ ما اینجا هستیم تا ایده‌های شما را به واقعیت دیجیتال تبدیل کنیم.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, label: "CALL US", value: "0930 121 1301", color: "text-blue-400", bg: "bg-blue-500/10" },
                                { icon: Mail, label: "EMAIL US", value: "runtimestudio@gmail.com", color: "text-purple-400", bg: "bg-purple-500/10" },
                                { icon: MapPin, label: "VISIT US", value: "Qazvin, Iran", color: "text-pink-400", bg: "bg-pink-500/10" }
                            ].map((item, i) => (
                                <div key={i} className="group glass-card p-6 rounded-3xl flex items-center gap-6 hover:border-white/20 transition-all duration-300">
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 font-sans">{item.label}</h3>
                                        <p className="text-white font-bold text-xl font-sans tracking-wide">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="glass-card p-8 md:p-12 rounded-[3rem] border-white/5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3 group">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-vazir">نام و نام خانوادگی</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all placeholder:text-gray-700 font-vazir text-right"
                                        placeholder="نام شما"
                                    />
                                </div>
                                <div className="space-y-3 group">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-vazir">شماره تماس</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all font-sans placeholder:text-gray-700"
                                        placeholder="+98 9..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-vazir">موضوع پروژه</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Web Development", "Mobile App", "UI/UX Design", "Consulting"].map((type) => (
                                        <div
                                            key={type}
                                            onClick={() => setFormData({ ...formData, projectType: type })}
                                            className={`cursor-pointer rounded-xl px-4 py-3 text-center text-sm font-bold transition-all border ${formData.projectType === type
                                                    ? "bg-blue-600 text-white border-blue-500"
                                                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/10"
                                                }`}
                                        >
                                            {type}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider font-vazir">توضیحات پروژه</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all resize-none placeholder:text-gray-700 font-vazir text-right"
                                    placeholder="درباره نیازهای خود بنویسید..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full group bg-white text-black hover:bg-blue-600 hover:text-white font-black py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-4 text-lg"
                            >
                                {loading ? "SENDING..." : (
                                    <>
                                        START PROJECT
                                        <ArrowRight className="transition-transform group-hover:translate-x-2" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
