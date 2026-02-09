
import { useRef, useEffect } from "react";

/**
 * BackgroundVideo Component
 * Renders a full-screen background video with a subtle overlay for contrast.
 */
const BackgroundVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8; // Slightly slower for more premium feel
        }
    }, []);

    return (
        <div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none bg-runtime-bg">
            {/* The Video Element - Base Layer */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
            >
                <source src="/video-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Subtle Overlays for contrast - Low blur as requested */}
            <div className="absolute inset-0 z-10 bg-black/25 backdrop-blur-[2px]"></div>
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-runtime-bg/10 via-transparent to-runtime-bg/90"></div>
        </div>
    );
};

export default BackgroundVideo;
