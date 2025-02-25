import React, { useEffect, useRef, useState } from "react";
import bgImage from '../../assets/kid.jpg'

// Handler hook for when Outside click dropdown close
let useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let maybeHandler = (event: MouseEvent) => {
      if (domNode.current && !domNode.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, []);
  return domNode;
};

const Video: React.FC = () => {
  const [videoOpen, setvideoOpen] = useState(false);
  const domNode = useClickOutside(() => setvideoOpen(false));

  const videoLink = "https://www.youtube.com/embed/ZDPfMY8Cvao"; 

  return (
    <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
    <div className="mx-auto max-w-4xl text-center">
      <p className="mt-2 mb-6 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
        Why We’re Here
      </p>
    </div>
    <div ref={domNode} className="container mx-auto px-4">
    <div className="relative z-20 h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden rounded-lg max-w-4xl mx-auto">
      <div className="absolute left-0 top-0 h-full w-full">
        <img
          src={bgImage}
          alt="bg"
          className="h-full w-full object-cover object-center"
        />
      </div>
            <div
              className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-primary bg-opacity-90`}
            >
              <a
                onClick={() => setvideoOpen(true)}
                className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary dark:bg-dark-2 dark:text-white md:h-[100px] md:w-[100px]"
              >
                <span className="absolute right-0 top-0 z-[-1] h-full w-full animate-ping rounded-full bg-white bg-opacity-20 delay-300 duration-1000"></span>
                <svg
                  width="23"
                  height="27"
                  viewBox="0 0 23 27"
                  className="fill-current"
                >
                  <path d="M22.5 12.634C23.1667 13.0189 23.1667 13.9811 22.5 14.366L2.25 26.0574C1.58333 26.4423 0.750001 25.9611 0.750001 25.1913L0.750002 1.80866C0.750002 1.03886 1.58334 0.557731 2.25 0.942631L22.5 12.634Z" />
                </svg>
              </a>
            </div>
  
            {/* Conditional Rendering of Video Player */}
            {videoOpen && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative w-full h-0 pb-[56.25%]"> {/* This is a 16:9 aspect ratio */}
                  <iframe
                    src={videoLink}
                    title="Video"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>

  </section>
  
  
  );
};

export default Video;
