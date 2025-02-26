import { Particles } from "../../components/Particles";
import styles from "../../components/bubble.module.css";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { motion } from "framer-motion";
import { WavyBackground } from "../ui/wavy-background";
import logo from "../../assets/logo.png";
import Ballpit from "@/Backgrounds/Ballpit/Ballpit";
import koala from "../../assets/Koala.png";

function Intro() {
  const color = "#ff1493"; // Using hot pink colors for both themes

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <WavyBackground className="min-h-screen pb-30 md:mb-0">
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
          count={70}
          gravity={0.7}
          friction={0.9}
          wallBounce={0.95}
          followCursor={false}
          maxSize={0.9}
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
        <div className="flex justify-center min-h-screen items-center w-full mt-30 md:mt-0">
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col items-center text-gray-700 text-5xl font-bold md:text-7xl md:text-left md:items-start md:ml-20 text-center">
                Play, Learn, Enjoy & Repeat With
                <span className="mt-9 w-7/10 md:w-4/10"><img src={logo} alt="babble-logo" /></span>
              </div>
              <h2 className="text-center mt-9 font-bold text-2xl text-pink-400 md:text-2xl md:text-left md:ml-20">
                {"Helping Children Communicate & Learn Through Playful Interactions"
                  .split("")
                  .map((child, idx) => (
                    <span className={styles.hoverText} key={idx}>
                      {child}
                    </span>
                  ))}
              </h2>
              <div className="flex justify-center items-center flex-col mt-10 mx-5 md:flex-row md:mx-0">
                <PlaceholdersAndVanishInput
                  placeholders={["Enter Your Email", "Join Us", "Get In Touch"]}
                  onChange={handleChange}
                  onSubmit={onSubmit}
                />
                <button className="relative w-40 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50 ml-5 mt-5 mb-10 md:mb-0 md:mt-0">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#ff367f_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-pink-90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Join Us
                  </span>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center w-full mt-10 pb-10 md:-mt-5 z-10">
              <img className="w-6/10" src={koala} alt="koala" />
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
