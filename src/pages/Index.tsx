
import Layout from "@/components/Layout";
import Meta from "@/components/SEO/Meta";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import { About } from "@/components/home/About";
import ProjectSection from "@/components/ProjectSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Meta
        title="طراحی سایت و توسعه وب اپلیکیشن حرفه‌ای | Runtime Studio"
        description="رانتایم استودیو متخصص در طراحی سایت اختصاصی، توسعه وب اپلیکیشن‌های مقیاس‌پذیر و سئو فنی با تمرکز بر استانداردهای مهندسی نرم‌افزار."
      />
      <Hero />
      <About />
      <ServicesSection />
      <ProjectSection />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

