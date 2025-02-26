import React, { useEffect, useRef } from "react";
import introVideo from '../../assets/video.mp4';

const Video: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play(); // Auto-play when in view
            } else {
              videoRef.current.pause(); // Pause when out of view
            }
          }
        });
      },
      { threshold: 0.5 } // Play when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white-200 py-20 lg:py-[120px]">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 mb-6 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Why We’re Here
        </p>
      </div>
      <div className="container mx-auto px-4">
        <div className="relative z-20 overflow-hidden rounded-lg max-w-4xl mx-auto">
          {/* Video Element (Autoplays on Scroll) */}
          <video
            ref={videoRef}
            className="w-full h-auto rounded-lg object-cover"
            src= {introVideo}
            muted
            playsInline
            loop
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Video;
