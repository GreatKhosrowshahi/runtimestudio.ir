
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Meta from "@/components/SEO/Meta";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Github, Linkedin, MessageSquare, Sparkles, Globe, Terminal } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    title: "Direct Query",
    persianTitle: "ارتباط مستقیم",
    value: "info@runtimestudio.ir",
    href: "mailto:info@runtimestudio.ir",
    color: "text-blue-400"
  },
  {
    icon: Linkedin,
    title: "Professional",
    persianTitle: "لینکدین",
    value: "Runtime Studio",
    href: "#",
    color: "text-indigo-400"
  },
  {
    icon: Github,
    title: "Codebase",
    persianTitle: "گیت‌هاب",
    value: "runtimestudio-ir",
    href: "#",
    color: "text-gray-400"
  }
];

const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    toast({
      title: "تیکت با موفقیت ثبت شد",
      description: "کارشناسان فنی ما به زودی با شما تماس خواهند گرفت.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <Layout>
      <Meta
        title="تماس با ما | مشاوره فنی و مهندسی"
        description="برای شروع پروژه‌های نرم‌افزاری و دریافت مشاوره تخصصی در حوزه‌های وب، اپلیکیشن و زیرساخت با رانتایم استودیو در تماس باشید."
      />

      {/* Header */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="container-width relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-runtime-primary/10 border border-runtime-primary/20 text-runtime-primary text-[10px] font-bold uppercase tracking-[0.3em] en mb-8"
          >
            Ready for deployment
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-9xl font-black mb-10 tracking-tighter leading-none en"
          >
            LET'S <br /> <span className="text-gradient">CONNECT</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-vazir">
            ما آماده‌ایم تا ایده‌های شما را به کدهای مقیاس‌پذیر و محصولات موفق تبدیل کنیم.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="glass-card p-10 md:p-14 rounded-[3rem] border-white/5 relative overflow-hidden group">
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest en">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all font-vazir"
                        placeholder="نام شما"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest en">Email / Phone</label>
                      <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all en"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest en">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all font-vazir"
                      placeholder="موضوع درخواست"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest en">Message</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-6 text-white focus:ring-2 focus:ring-runtime-primary/50 outline-none transition-all font-vazir resize-none"
                      placeholder="توضیح دهید..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-6 rounded-2xl bg-runtime-primary text-white font-black text-xl hover:bg-runtime-primary/80 transition-all flex items-center justify-center gap-4 group en shadow-xl shadow-runtime-primary/10"
                  >
                    {loading ? "PROCESSING..." : "SEND INFRASTRUCTURE TICKET"}
                    <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                  <Terminal size={300} />
                </div>
              </div>
            </motion.div>

            {/* Channels */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-black font-vazir">پل‌های ارتباطی</h2>
                {contactChannels.map((c, idx) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-runtime-surface/40 border border-white/5 hover:border-runtime-primary/30 transition-all group"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${c.color}`}>
                      <c.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1 en">{c.title}</p>
                      <p className="text-white font-black text-xl en leading-none mb-1">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-10 rounded-[3rem] bg-runtime-primary/5 border border-runtime-primary/10 relative overflow-hidden">
                <div className="relative z-10">
                  <Sparkles className="text-runtime-primary mb-4" size={32} />
                  <h3 className="text-2xl font-black en mb-4">Remote Worldwide</h3>
                  <p className="text-gray-400 font-vazir text-sm leading-relaxed" dir="rtl">
                    تیم فنی ما به صورت کاملاً توزیع شده و ریموت فعالیت می‌کند و آماده همکاری با پروژه‌های بین‌المللی در تمامی مناطق زمانی است.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none">
                  <Globe size={200} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;


