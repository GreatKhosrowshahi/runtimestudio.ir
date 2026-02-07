
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner"; // Assuming 'sonner' handles toasts in this project (as seen in App.tsx)

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        projectType: "طراحی وبسایت",
        description: ""
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            const newRequest = {
                id: Date.now().toString(),
                ...formData,
                date: new Date().toISOString()
            };

            // Save to localStorage as a "Database"
            const existingRequests = JSON.parse(localStorage.getItem('runtime_requests') || '[]');
            localStorage.setItem('runtime_requests', JSON.stringify([...existingRequests, newRequest]));

            toast.success("درخواست شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.");
            setFormData({ name: "", phone: "", projectType: "طراحی وبسایت", description: "" });
            setLoading(false);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">شروع همکاری</h2>
                        <p className="text-gray-400 text-lg mb-12">
                            آماده‌اید تا ایده خود را به واقعیت تبدیل کنید؟ ما اینجا هستیم تا به شما کمک کنیم.
                            با ما تماس بگیرید یا فرم روبرو را پر کنید.
                        </p>

                        <div className="space-y-8">
                            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">شماره تماس</h3>
                                    <p className="text-gray-400 font-sans text-lg dir-ltr">09301211301</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">ایمیل</h3>
                                    <p className="text-gray-400 font-sans text-lg dir-ltr">runtimestudio@gmail.com</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-pink-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">آدرس</h3>
                                    <p className="text-gray-400">ایران، قزوین</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">نام و نام خانوادگی</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
                                        placeholder="مثال: علی رضایی"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">شماره تماس</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-sans dir-ltr placeholder:text-gray-600"
                                        placeholder="0912..."
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">موضوع پروژه</label>
                                <select
                                    value={formData.projectType}
                                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                >
                                    <option>طراحی وبسایت</option>
                                    <option>اپلیکیشن موبایل</option>
                                    <option>طراحی رابط کاربری</option>
                                    <option>سایر</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">توضیحات تکمیلی</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-gray-600"
                                    placeholder="درباره پروژه خود توضیح دهید..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "در حال ارسال..." : (
                                    <>
                                        ارسال پیام
                                        <Send size={20} />
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
