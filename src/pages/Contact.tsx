import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send, Github, Linkedin, MapPin, Phone, Globe, Sparkles, CheckCircle2 } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    title: "Email Support",
    persianTitle: "ارتباط مستقیم ایمیلی",
    value: "hello@runtime.studio",
    href: "mailto:hello@runtime.studio",
    desc: "برای استعلام قیمت و همکاری‌های سازمانی.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Linkedin,
    title: "Social Connect",
    persianTitle: "شبکه‌های حرفه‌ای",
    value: "linkedin.com/in/yazdan-astaraki",
    href: "https://linkedin.com/in/yazdan-astaraki",
    desc: "برقراری ارتباط مستقیم و مشاهده سوابق.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Github,
    title: "Open Source",
    persianTitle: "گیت‌هاب و کدها",
    value: "github.com/yazdan-astaraki",
    href: "https://github.com/yazdan-astaraki",
    desc: "مشاهده پروژه‌ها و کیفیت پیاده‌سازی ما.",
    color: "from-emerald-500/20 to-teal-500/20"
  },
];

const faq = [
  { q: "زمان پاسخ‌گویی چقدر است؟", a: "تیم ما معمولاً ظرف کمتر از ۲۴ ساعت کاری به درخواست‌های شما پاسخ می‌دهد." },
  { q: "آیا مشاوره اولیه هزینه دارد؟", a: "خیر، جلسه اول برای بررسی نیازها و ارائه نقشه راه کاملاً رایگان است." },
  { q: "پروژه‌ها چه بازه زمانی دارند؟", a: "هر پروژه بسته به پیچیدگی متفاوت است، اما ما همیشه به زمان‌بندی متعهدیم." },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "پیام شما دریافت شد",
      description: "ما به زودی برای بررسی جزئیات با شما تماس می‌گیریم.",
    });
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="container-custom relative z-10 text-center en">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl mb-12 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/70">Available for new projects</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] animate-blur-in">
            LET'S <br />
            <span className="gradient-text glow-text leading-tight">CONNECT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up font-vazir text-center" dir="rtl">
            ایده‌های بزرگ با یک گفتگوی ساده شروع می‌شوند. ما اینجا هستیم تا بشنویم.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Form Column */}
            <div className="lg:col-span-7 animate-fade-up">
              <div className="glass-card p-10 md:p-14 rounded-[3.5rem] border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-20 transition-opacity">
                  <MessageSquare className="w-40 h-40 text-primary" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-2 font-vazir" dir="rtl">ارسال پیام مستقیم</h2>
                  <p className="text-muted-foreground mb-12 font-vazir" dir="rtl">جزئیات پروژه خود را برای ما بنویسید.</p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-2 en">Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="نام و نام خانوادگی"
                          className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all text-lg font-vazir"
                          dir="rtl"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-2 en">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          dir="ltr"
                          placeholder="your@email.com"
                          className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all text-lg en"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-2 en">Company</label>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="شرکت / استارتاپ"
                          className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all text-lg font-vazir"
                          dir="rtl"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-2 en">Subject</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="موضوع گفتگو"
                          className="h-16 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 transition-all text-lg font-vazir"
                          dir="rtl"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-foreground/60 ml-2 en">Message</label>
                      <span className="sr-only">Message</span>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="درباره پروژه خود توضیح دهید..."
                        className="min-h-[200px] rounded-[2rem] bg-white/5 border-white/10 focus:border-primary/50 transition-all text-lg resize-none p-6 font-vazir"
                        dir="rtl"
                      />
                    </div>

                    <Button
                      disabled={isSubmitting}
                      className="w-full h-20 rounded-2xl text-xl font-black bg-primary hover:bg-primary/90 text-primary-foreground transition-all flex items-center justify-center gap-4 group en"
                    >
                      {isSubmitting ? <span className="font-vazir">در حال ارسال...</span> : "SEND MESSAGE"}
                      {!isSubmitting && <Send className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>

              {/* Contact Channels */}
              <div className="space-y-6">
                <h2 className="text-3xl font-black mb-8 px-4 font-vazir text-right" dir="rtl">پل‌های ارتباطی</h2>
                {contactChannels.map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all"
                    dir="rtl"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <c.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div className="flex-1 text-right">
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1 en text-left" dir="ltr">{c.title}</div>
                      <h3 className="text-xl font-black mb-1 font-vazir">{c.persianTitle}</h3>
                      <p className="text-sm text-muted-foreground en text-left" dir="ltr">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* FAQ Mini Accordion */}
              <div className="p-10 rounded-[3rem] bg-secondary/30 border border-white/5 text-right" dir="rtl">
                <h3 className="text-2xl font-black mb-8 font-vazir">سوالات متداول</h3>
                <div className="space-y-8">
                  {faq.map((item, i) => (
                    <div key={i} className="space-y-2">
                      <h4 className="text-lg font-bold text-foreground flex items-center gap-2 font-vazir">
                        <Sparkles className="w-4 h-4 text-primary" />
                        {item.q}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed pr-6 font-vazir">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Map/Badge Mockup */}
              <div className="relative p-10 rounded-[3rem] bg-gradient-to-br from-primary/20 to-blue-500/10 border border-white/10 overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 en">Remote Worldwide</h3>
                  <p className="text-muted-foreground mb-6 font-vazir text-right" dir="rtl">ما از تهران به صورت بین‌المللی با تمام دنیا در ارتباط هستیم.</p>
                  <div className="flex items-center gap-4 en">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Global Collaboration Ready</span>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <MapPin className="w-40 h-40 text-primary" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

