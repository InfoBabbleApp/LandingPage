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
    <div className="min-h-screen w-full bg-white overflow-x-hidden overflow-y-hidden">
      <ReactLenis root options={{ lerp: 0.05 }}>
        <Hero />
      </ReactLenis>
    </div>
  );
};

// const SECTION_HEIGHT = 700;

const Hero = () => {
  return (
    <div style={{ height: "100vh" }} className="relative w-full overflow-hidden">
      <DeviceLayout />
      {/* <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-white-900" /> */}
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

  // Define transform values
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-180%"]); // Move left
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]); // Move right
   const sideOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // Side devices start slightly visible
  const sideZIndex = useTransform(scrollYProgress, [0, 0.2], [5, 10]); // Raise zIndex as they appear

  const getDeviceClasses = (type: 'center' | 'side') => {
    const baseClasses = "absolute transition-all duration-300 ease-in-out";
    const sizeClasses = {
      large: type === 'center' ? 'h-[600px] w-[300px]' : 'h-[510px] w-[255px]',
      medium: type === 'center' ? 'h-[500px] w-[250px]' : 'h-[425px] w-[212px]',
      small: type === 'center' ? 'h-[400px] w-[200px]' : 'h-[340px] w-[170px]'
    }[screenSize];
    
    return `${baseClasses} ${sizeClasses}`;
  };

  return (
    <div ref={containerRef} className="sticky top-0 h-screen w-full flex justify-center items-center" style={{ perspective: "1000px" }}>
      
      {/* Left Device (Appears from Behind) */}
      <motion.div
        className={`${getDeviceClasses('side')}`}
        initial={{ x: "0%", opacity: 0, zIndex: 1 }}
        style={{ x: leftX, opacity: sideOpacity, zIndex: sideZIndex }}
      >
        <img src={login} alt="Left device" className="w-full h-full object-contain" />
      </motion.div>

      {/* Center Device (Static) */}
      <div className={`${getDeviceClasses('center')} z-20`}>
        <img src={splash} alt="Center device" className="w-full h-full object-contain" />
      </div>

      {/* Right Device (Appears from Behind) */}
      <motion.div
        className={`${getDeviceClasses('side')}`}
        initial={{ x: "0%", opacity: 0, zIndex: 1 }}
        style={{ x: rightX, opacity: sideOpacity, zIndex: sideZIndex }}
      >
        <img src={home} alt="Right device" className="w-full h-full object-contain" />
      </motion.div>

    </div>
  );
};

export default Mockup;


// import { ReactLenis as ReactLenisType } from '@studio-freight/react-lenis';
// import {
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import myImage from "../../assets/SplashScreen.png";

// type ScreenSize = 'small' | 'medium' | 'large';

// interface TransformValues {
//   left: string[];
//   right: string[];
//   scale: number[];
// }

// const ReactLenis = ReactLenisType as any;

// export const SmoothScrollHero = () => {
//   return (
//     <div className="min-h-screen w-full bg-gray-900 overflow-x-hidden">
//       <ReactLenis
//         root
//         options={{
//           lerp: 0.05,
//         }}
//       >
//         <Hero />
//       </ReactLenis>
//     </div>
//   );
// };

// const SECTION_HEIGHT = 1500;

// const Hero = () => {
//   return (
//     <div
//       style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
//       className="relative w-full overflow-hidden"
//     >
//       <DeviceLayout />
//       <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-gray-900" />
//     </div>
//   );
// };

// const DeviceLayout = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [screenSize, setScreenSize] = useState<ScreenSize>('large');

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 768) {
//         setScreenSize('small');
//       } else if (width < 1024) {
//         setScreenSize('medium');
//       } else {
//         setScreenSize('large');
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const getTransformValues = (): TransformValues => {
//     switch (screenSize) {
//       case 'small':
//         return {
//           left: ["0%", "-60%"],
//           right: ["0%", "60%"],
//           scale: [0.6, 0.8]
//         };
//       case 'medium':
//         return {
//           left: ["0%", "-80%"],
//           right: ["0%", "80%"],
//           scale: [0.7, 0.9]
//         };
//       default:
//         return {
//           left: ["0%", "-70%"],
//           right: ["0%", "70%"],
//           scale: [0.8, 1]
//         };
//     }
//   };

//   const transformValues = getTransformValues();
//   const leftX = useTransform(scrollYProgress, [0, 0.5], transformValues.left);
//   const rightX = useTransform(scrollYProgress, [0, 0.5], transformValues.right);
//   const sideScale = useTransform(scrollYProgress, [0, 0.5], transformValues.scale);
//   const sideOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

//   const getDeviceClasses = (type: 'center' | 'side'): string => {
//     const baseClasses = "relative transition-all duration-300 ease-in-out";
//     const sizeClasses = {
//       large: type === 'center' ? 'h-[600px] w-[300px]' : 'h-[510px] w-[255px]',
//       medium: type === 'center' ? 'h-[500px] w-[250px]' : 'h-[425px] w-[212px]',
//       small: type === 'center' ? 'h-[400px] w-[200px]' : 'h-[340px] w-[170px]'
//     }[screenSize];
    
//     return `${baseClasses} ${sizeClasses}`;
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="sticky top-0 h-screen w-full flex justify-center items-center"
//       style={{ perspective: "1000px" }}
//     >
//       <motion.div
//         className={`${getDeviceClasses('side')} absolute z-10`}
//         style={{
//           x: leftX,
//           scale: sideScale,
//           opacity: sideOpacity,
//           left: '50%',
//           translateX: '-50%',
//         }}
//         initial={{ x: 0, opacity: 0 }}
//       >
//         <img src={myImage} alt="Left device" className="w-full h-full object-contain" />
//       </motion.div>

//       <div className={`${getDeviceClasses('center')} z-20`}>
//         <img src={myImage} alt="Center device" className="w-full h-full object-contain" />
//       </div>

//       <motion.div
//         className={`${getDeviceClasses('side')} absolute z-10`}
//         style={{
//           x: rightX,
//           scale: sideScale,
//           opacity: sideOpacity,
//           left: '50%',
//           translateX: '-50%',
//         }}
//         initial={{ x: 0, opacity: 0 }}
//       >
//         <img src={myImage} alt="Right device" className="w-full h-full object-contain" />
//       </motion.div>
//     </div>
//   );
// };