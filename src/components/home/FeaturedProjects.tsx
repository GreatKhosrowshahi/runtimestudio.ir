import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectFintech from "@/assets/project-fintech.jpg";

const projects = [
  {
    title: "داشبورد تحلیلی",
    category: "وب اپلیکیشن",
    image: projectDashboard,
  },
  {
    title: "فروشگاه آنلاین",
    category: "اپلیکیشن موبایل",
    image: projectEcommerce,
  },
  {
    title: "اپلیکیشن مالی",
    category: "فین‌تک",
    image: projectFintech,
  },
];

export const FeaturedProjects = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="grain-noise" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-24 animate-fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl mb-8 en">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Portfolio Spotlight</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight en">
              SELECTED <span className="gradient-text glow-text leading-tight">ARTWORKS</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-vazir text-right" dir="rtl">
              تلاقی مهندسی دقیق و زیبایی بصری در پروژه‌هایی که استانداردهای بازار را تغییر داده‌اند.
            </p>
          </div>
          <Button variant="hero" size="lg" asChild className="group rounded-2xl px-10 h-16 font-vazir">
            <Link to="/portfolio" className="flex items-center gap-3">
              مشاهده گالری کامل
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Link
              key={index}
              to="/portfolio"
              className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with Zoom */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />

              {/* Content Reveal */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4 overflow-hidden text-right" dir="rtl">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-75 font-vazir">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-foreground mb-4 group-hover:gradient-text transition-all duration-300 font-vazir text-right" dir="rtl">
                  {project.title}
                </h3>

                {/* Visual Separator */}
                <div className="w-0 group-hover:w-full h-px bg-gradient-to-r from-primary to-transparent transition-all duration-700 delay-100" />

                {/* View Project Text */}
                <div className="mt-6 flex items-center gap-2 text-foreground/0 group-hover:text-foreground/100 transition-all duration-500 delay-150 font-bold text-[10px] tracking-widest uppercase en">
                  View Project
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

