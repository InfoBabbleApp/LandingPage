import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
import feature1 from '../../assets/flashcard.png';
import feature2 from '../../assets/sequencingCards.png';
import feature4 from '../../assets/ProgressTracker.png';
import feature3 from '../../assets/emergencyCards.png';

interface FeatureTextProps {
  title: string;
  description: string;
  isReversed?: boolean;
}

interface DeviceProps {
  color: string;
  image: string;
  rotation?: number;
}

interface FeatureSectionProps {
  device: string;
  text: {
    title: string;
    description: string;
  };
  isReversed: boolean;
  color: string;
  image: string; 
}

const FeatureText: React.FC<FeatureTextProps> = ({ title, description, isReversed }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full lg:w-1/2 p-8"
      initial={{ opacity: 0, x: isReversed ? 100 : -100 }}  // Flip the initial direction
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 100 : -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-sm mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-xl md:text-2xl text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const Device: React.FC<DeviceProps> = ({ image, rotation = -30 }) => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: `rotateY(${rotation}deg) rotateX(15deg)`,
      }}
      className={`rounded-[24px] bg-pink-100`}
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <div className="relative z-0 h-full w-full overflow-hidden rounded-[20px] bg-white">
          <img 
             src={image} 
            alt="Device screen"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const FeatureSection: React.FC<FeatureSectionProps> = ({ text, isReversed, color, image }) => {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''} ${isReversed ? 'gap-0' : 'gap-0'}`}>
          {/* Device */}
          <div className={`flex items-center justify-center ${isReversed ? 'lg:col-start-2' : ''}`}>
            <Device color={color} rotation={isReversed ? 30 : -30} image={image} />
          </div>
          {/* Text */}
          <div className={`flex items-center ${isReversed ? 'lg:pr-2=0 text-right' : 'lg:pl-0 text-left'} justify-center`}>
            <FeatureText 
              title={text.title}
              description={text.description}
              isReversed={isReversed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};




const Feature = () => {
  const features = [
    {
      color: "violet",
      text: {
        title: "Flashcards",
        description: " Interactive flashcards with real images and voice recognition to help children learn words through visual and audio cues."
      },
      image: feature1
    },
    {
      color: "violet",
      text: {
        title: "Scenario Building",
        description: "Drag and arrange words to form sentences, with voice input support to improve communication skills."
      },
      image: feature2
    },
    {
      color: "violet",
      text: {
        title: "Emergency Cards",
        description: "Quick-access customizable cards for essential needs, ensuring children can easily express urgent requests."
      },
      image: feature3
    },
    {
      color: "Progress Tracking",
      text: {
        title: "Progress Tracking",
        description: "Monitor learning progress with detailed reports on word recognition, pronunciation attempts, and achievements."
      },
      image: feature4
    }
  ];

  return (
    <div className="space-y-24">
      <div className="text-4xl font-bold text-center mt-5 md:text-6xl">Key Features</div>
      <div className="flex justify-center text-3l text-center -mt-17 md:text-2xl">Experience The Key Features Of Our App</div>
      {features.map((feature, index) => (
        <FeatureSection
          key={index}
          device={`device${index + 1}`}
          text={feature.text}
          isReversed={index % 2 === 1}
          color={feature.color}
          image={feature.image}
        />
      ))}
    </div>
  );
};

export default Feature;