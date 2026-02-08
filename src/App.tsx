import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import ServicesSection from "./components/ServicesSection";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import Meta from "@/components/SEO/Meta";

const Landing = () => (
  <Layout>
    <Meta
      title="استودیوی توسعه نرم‌افزار و طراحی وب"
      description="Runtime Studio مرجع تخصصی طراحی وب‌سایت، اپلیکیشن و معماری نرم‌افزار. ارائه راهکارهای نوین برنامه‌نویسی با تکنولوژی‌های روز."
    />
    <Hero />
    <ServicesSection />
    <TeamSection />
    <ProjectSection />
    <ContactSection />
  </Layout>
);

import ServicesPage from "./pages/Services";

import { HelmetProvider } from "react-helmet-async";
import BlogPage from "./pages/Blog";

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
