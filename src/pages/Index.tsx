import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/home/TechMarquee";
import { Services } from "@/components/home/Services";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { About } from "@/components/home/About";
import { Stats } from "@/components/home/Stats";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TechMarquee />
      <Services />
      <FeaturedProjects />
      <About />
      <Stats />
      <CTA />
    </Layout>
  );
};

export default Index;
