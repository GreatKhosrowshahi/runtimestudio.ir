import { Code2, Users, Rocket, Clock } from "lucide-react";

const stats = [
  { icon: Code2, value: "۱۵+", label: "پروژه تحویل شده", suffix: "" },
  { icon: Users, value: "۱۰+", label: "مشتری راضی", suffix: "" },
  { icon: Rocket, value: "۳+", label: "سال تجربه", suffix: "" },
  { icon: Clock, value: "۲۴/۷", label: "پشتیبانی", suffix: "" },
];

export const Stats = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="grain-noise" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 font-vazir">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-vazir text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
