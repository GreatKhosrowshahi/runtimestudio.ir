
import { useEffect, useRef } from "react";

/**
 * AnimatedBackground Component
 * Renders a subtle, performance-friendly animated background with moving gradient orbs.
 * Uses CSS animations for GPU acceleration and minimal main-thread work.
 */
const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Subtle Grid Pattern Overlay */}
            <div
                className="absolute inset-0 z-[1] opacity-[0.2]"
                style={{
                    backgroundImage: `linear-gradient(to right, #202020 1px, transparent 1px),
                            linear-gradient(to bottom, #202020 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
                }}
            />

            {/* Gradient Orbs - Lowering opacity to blend with video */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-runtime-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-runtime-secondary/5 rounded-full blur-[120px] animate-pulse-slow delay-1000" />
            <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[40vw] h-[40vw] bg-runtime-accent/5 rounded-full blur-[100px] animate-float" />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-[10] bg-[url('/noise.png')] mix-blend-overlay"></div>
        </div>
    );
};

export default AnimatedBackground;
