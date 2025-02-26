import { Particles } from "../../components/Particles";
import styles from "../../components/bubble.module.css";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background";
import logo from "../../assets/logo.png";
import Ballpit from "@/Backgrounds/Ballpit/Ballpit";
import { useEffect, useState } from "react";

function Intro() {
  const color = "#ff1493"; // Using hot pink colors for both themes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const [ballCount, setBallCount] = useState(80);

  // Log when ballCount changes
  useEffect(() => {
    console.log("Ball count state updated:", ballCount);
  }, [ballCount]);

  useEffect(() => {
    const updateBallCount = () => {
      const width = window.innerWidth;
      console.log("Window width detected:", width);
      
      if (width > 1200) {
        console.log("Setting ball count to 70");
        setBallCount(70);
      } else if (width > 768) {
        console.log("Setting ball count to 50");
        setBallCount(50);
      } else {
        console.log("Setting ball count to 20");
        setBallCount(20);
      }
    };

    console.log("Initial component mount - checking screen size");
    updateBallCount();
    
    console.log("Adding resize event listener");
    window.addEventListener("resize", updateBallCount);
    
    return () => {
      console.log("Removing resize event listener");
      window.removeEventListener("resize", updateBallCount);
    };
  }, []);

  console.log("Rendering with ball count:", ballCount);

  return (
    <WavyBackground className="h-screen">
      <div
        style={{
          position: "absolute",
          bottom: 0,
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        <Ballpit
          count={ballCount}
          gravity={0.7}
          friction={0.9}
          wallBounce={0.95}
          followCursor={false}
          maxSize={0.8}
          colors={["#a032a8", "#ffbfea", "#ff1fb5"]}
        />
      </div>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="w-full mt-30">
          <div className="flex flex-col justify-center items-center ">
            <div className="flex flex-col justify-center items-center">
              <span className="text-5xl font-bold md:text-7xl">
                Introducing
              </span>
              <span className="w-7/10 mt-7 md:w-3/10">
                <img src={logo} alt="babble-logo" />
              </span>
            </div>
            <div className="flex flex-col justify-center items-center md:w-1/2">
              <h2 className="text-center mt-5 font-bold text-3xl text-pink-400 md:text-4xl">
                {"Helping Children Communicate & Learn Through Playful Interactions"
                  .split("")
                  .map((child, idx) => (
                    <span className={styles.hoverText} key={idx}>
                      {child}
                    </span>
                  ))}
              </h2>
              <div className="text-center w-8/10 mt-5 text-gray-500 mb-5 m">
                Babble is a playful, engaging app designed to help children
                communicate and learn through interactive activities. With fun
                tasks and personalized feedback. bla bla bla
              </div>
              <div className="flex flex-col justify-center items-center mx-5">
                <PlaceholdersAndVanishInput
                  placeholders={["Enter Your Email", "Join Us", "Get In Touch"]}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
                <button className="relative w-40 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50 ml-5 mt-5 mb-10 md:mb-0">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#ff367f_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-pink-90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Join Us
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Particles */}
          <Particles
            className="absolute inset-0 z-0"
            quantity={200}
            ease={80}
            color={color}
            refresh={false}
            size={0.3}
          />
        </div>
      </motion.div>
    </WavyBackground>
  );
}

export default Intro;