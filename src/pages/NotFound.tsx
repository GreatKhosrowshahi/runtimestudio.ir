import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Ghost } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center animate-fade-up">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-3xl bg-secondary/50 border border-white/5 flex items-center justify-center animate-float">
              <Ghost className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tighter gradient-text en">404</h1>
          <h2 className="text-3xl md:text-4xl font-black mb-8 en">PAGE NOT FOUND</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-md mx-auto font-vazir text-center" dir="rtl">
            متأسفانه صفحه‌ای که به دنبال آن هستید پیدا نشد یا آدرس آن تغییر کرده است.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild className="rounded-2xl px-12 group en h-16 text-lg">
              <Link to="/">
                <Home className="ml-3 w-5 h-5" />
                Back to Home
              </Link>
            </Button>
            <Button variant="ghost" size="xl" asChild className="rounded-2xl px-12 text-muted-foreground hover:text-foreground en h-16 text-lg">
              <Link to="/contact">
                Contact Us
                <ArrowLeft className="mr-3 w-5 h-5 transition-transform group-hover:-translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

