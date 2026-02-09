
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Meta from "@/components/SEO/Meta";
import { Link } from "react-router-dom";
import { ArrowLeft, Code2, Target, Shield, Zap, Github, Linkedin, ExternalLink, Award, Sparkles, Cpu, Globe } from "lucide-react";
const yazdanImg = "/yazdan.jpg";

const values = [
  {
    icon: Cpu,
    title: "مهندسی دقیق",
    description: "توسعه نرم‌افزار با بالاترین استانداردهای کدنویسی و معماری اصولی.",
    color: "text-blue-400"
  },
  {
    icon: Zap,
    title: "سرعت و بازدهی",
    description: "خلق محصولاتی که با سرعت نور کار می‌کنند و تجربه‌ای روان ارائه می‌دهند.",
    color: "text-amber-400"
  },
  {
    icon: Shield,
    title: "اعتماد فنی",
    description: "حفاظت از دارایی‌های دیجیتال شما با راهکارهای امنیتی پیشرفته و تست‌های مداوم.",
    color: "text-emerald-400"
  },
  {
    icon: Globe,
    title: "مقیاس‌پذیری",
    description: "طراحی محصولاتی که با رشد کسب‌وکار شما، به راحتی در سطح جهانی مقیاس‌پذیر هستند.",
    color: "text-purple-400"
  }
];

const AboutPage = () => {
  return (
    <Layout>
      <Meta
        title="درباره رانتایم استودیو | شرکت برنامه نویسی و توسعه وب"
        description="رانتایم استودیو با تیمی متخصص در طراحی سایت حرفه‌ای و توسعه نرم‌افزار، استانداردهای جدیدی در مهندسی نرم‌افزار برای پروژه‌های مقیاس‌پذیر تعریف می‌کند."
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="container-width relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-runtime-accent/10 border border-runtime-accent/20 text-runtime-accent text-[10px] font-bold uppercase tracking-[0.3em] en mb-8"
          >
            The Architecture of Success
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black mb-8 tracking-tighter en leading-[0.9]"
          >
            WE REDEFINE <br /> <span className="text-gradient">POSSIBILITIES</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-vazir">
            داستان ما، داستان تبدیل چالش‌های پیچیده مهندسی به راه‌حل‌های ساده و کارآمد است.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group">
                <img src={yazdanImg} alt="Yazdan Astereki" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-runtime-bg via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-10 left-10 flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border-runtime-primary/20 backdrop-blur-2xl">
                <p className="text-white font-black text-xl en leading-none">YAZDAN ASTEREKI</p>
                <p className="text-[10px] text-runtime-primary font-bold uppercase tracking-widest mt-1 en">Founder & Architect</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-black font-vazir leading-tight">
                چشم‌اندازی فراتر از <br /> <span className="text-gradient">یک شرکت برنامه نویسی</span> معمولی
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-vazir text-justify">
                <p>
                  در <span className="text-white font-bold en">Runtime Studio</span>، ما کدنویسی را یک هنر مهندسی می‌بینیم. هدف ما فقط تحویل پروژه نیست؛ بلکه خلق محصولی است که ستون اصلی رشد کسب‌وکار شما باشد.
                </p>
                <p>
                  این مجموعه با هدف ارائه خدمات تراز اول در حوزه طراحی سایت حرفه‌ای و توسعه نرم‌افزار تحت وب تاسیس شده است. ما با رویکردی وسواس‌گونه به جزئیات فنی، محصولاتی می‌سازیم که در مقیاس جهانی رقابت کنند.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5 en">
                <div>
                  <p className="text-4xl font-black text-white">100%</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Code Integrity</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white">24/7</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Innovation Fuel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-runtime-surface/10 border-y border-white/5">
        <div className="container-width text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black en uppercase tracking-tighter mb-4">THE CORE <span className="text-gradient">DNA</span></h2>
          <p className="text-gray-400 font-vazir">فلسفه‌ای که در تمام خطوط کدهای ما جاری است.</p>
        </div>
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] border-white/5 hover:border-runtime-primary/40 transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${v.color}`}>
                  <v.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-vazir">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed font-vazir text-sm">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container-width">
          <div className="relative rounded-[4rem] p-12 md:p-32 bg-runtime-primary text-white text-center overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
            <div className="relative z-10 en">
              <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-none">
                READY TO BUILD <br /> THE FUTURE?
              </h2>
              <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-6 rounded-2xl bg-white text-black font-black text-xl hover:bg-black hover:text-white transition-all shadow-2xl">
                START COLLABORATION
                <ArrowLeft size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;


