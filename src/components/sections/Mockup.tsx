import { ReactLenis as ReactLenisType } from '@studio-freight/react-lenis';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import splash from "../../assets/splash-screen.png";
import home from "../../assets/home.png";
import login from "../../assets/loginscreen.png";

type ScreenSize = 'small' | 'medium' | 'large';

const ReactLenis = ReactLenisType as any;

export const Mockup = () => {
  return (
    <div className="min-h-screen w-full bg-pink-100 overflow-hidden">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Hero />
      </ReactLenis>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <DeviceLayout />
    </div>
  );
};

const DeviceLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState<ScreenSize>('large');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenSize('small');
      else if (width < 1024) setScreenSize('medium');
      else setScreenSize('large');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Adjusted transform values based on screen size
  const getTransformDistance = () => {
    if (screenSize === 'small') return '100%';
    if (screenSize === 'medium') return '120%';
    return '150%';
  };

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", `-${getTransformDistance()}`]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", getTransformDistance()]);
  const sideOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const sideZIndex = useTransform(scrollYProgress, [0, 0.2], [5, 10]);

  // Dynamic positioning based on screen size
  const getSideDevicePosition = (side: 'left' | 'right') => {
    const offset = {
      small: side === 'left' ? '-30px' : '43px',
      medium: side === 'left' ? '-60px' : '60px',
      large: side === 'left' ? '-70px' : '70px'
    }[screenSize];
    
    return offset;
  };

  const getDeviceClasses = (type: 'center' | 'side') => {
    const baseClasses = "absolute transition-all duration-300 ease-in-out";
    const sizeClasses = {
      large: type === 'center' ? 'h-[530px] w-[300px]' : 'h-[460px] w-[255px]',
      medium: type === 'center' ? 'h-[450px] w-[250px]' : 'h-[375px] w-[212px]',
      small: type === 'center' ? 'h-[350px] w-[200px]' : 'h-[290px] w-[170px]'
    }[screenSize];
    
    return `${baseClasses} ${sizeClasses}`;
  };

  return (
    <div 
      ref={containerRef} 
      className="sticky top-0 h-screen w-full flex justify-center items-center"
      style={{ perspective: "1000px" }}
    >
      {/* Left Device */}
      <motion.div
        className={`${getDeviceClasses('side')}`}
        initial={{ 
          x: getSideDevicePosition('left'), 
          opacity: 0, 
          zIndex: 1 
        }}
        style={{ 
          x: leftX, 
          opacity: sideOpacity, 
          zIndex: sideZIndex 
        }}
      >
        <img src={login} alt="Left device" className="w-full h-full object-contain" />
      </motion.div>

      {/* Center Device */}
      <div className={`${getDeviceClasses('center')} z-20`}>
        <img src={splash} alt="Center device" className="w-full h-full object-contain" />
      </div>

      {/* Right Device */}
      <motion.div
        className={`${getDeviceClasses('side')}`}
        initial={{ 
          x: getSideDevicePosition('right'), 
          opacity: 0, 
          zIndex: 1 
        }}
        style={{ 
          x: rightX, 
          opacity: sideOpacity, 
          zIndex: sideZIndex 
        }}
      >
        <img src={home} alt="Right device" className="w-full h-full object-contain" />
      </motion.div>
    </div>
  );
};

export default Mockup;