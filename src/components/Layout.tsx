import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackgroundVideo from "./ui/BackgroundVideo";
import AnimatedBackground from "./ui/AnimatedBackground";
import { cn } from "@/lib/utils";

interface LayoutProps {
    children: ReactNode;
    className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
    const location = useLocation();

    // Determine if we are on a page that needs specific layout handling
    // For now, it's global, but good for future extensibility

    return (
        <div className="min-h-screen flex flex-col relative font-vazir text-foreground overflow-x-hidden selection:bg-runtime-primary/30 selection:text-white">
            <BackgroundVideo />
            <AnimatedBackground />

            <Header />

            <main className={cn("flex-grow pt-24 min-h-screen relative z-10 flex flex-col", className)}>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
