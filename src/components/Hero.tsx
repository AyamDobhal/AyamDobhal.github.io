import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const text1 = "Hello,";
const text2 = "I'm Ayam,";
const text3 = "Welcome";

const spanVariants = {
  visible: { y: 0, scaleY: 1 },
  hover: {
    y: [-1, -2, -2.8, 0.9, 0],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
    color: "red",
  },
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.9,
    },
  },

  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: {
    opacity: 1,
    y: [-1, -1.9, -2.8, 0.9, 0],
    scaleY: [1, 1.3, 0.8, 1, 1.2],
  },
  hidden: {
    opacity: 0,
  },
};

type Props = {};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={` absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="home-page">
          <div className="landing-left-section">
            <div className="text">
              <motion.h1 variants={list} initial="hidden" animate="visible">
                {text1.split("").map((letter, id) => (
                  <motion.span variants={item}>
                    <motion.span
                      key={id}
                      variants={spanVariants}
                      initial="visible"
                      whileHover="hover"
                    >
                      {letter}
                    </motion.span>
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h1 variants={list} initial="hidden" animate="visible">
                {text2.split("").map((letter, id) =>
                  letter === " " ? (
                    <span key={id}>&nbsp;</span>
                  ) : (
                    <motion.span variants={item}>
                      <motion.span
                        key={id}
                        variants={spanVariants}
                        initial="visible"
                        whileHover="hover"
                      >
                        {letter}
                      </motion.span>
                    </motion.span>
                  )
                )}
              </motion.h1>
              <motion.h1 variants={list} initial="hidden" animate="visible">
                {text3.split("").map((letter, id) => (
                  <motion.span variants={item}>
                    <motion.span
                      key={id}
                      variants={spanVariants}
                      initial="visible"
                      whileHover="hover"
                    >
                      {letter}
                    </motion.span>
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
      <ComputersCanvas />

      <div className="relative xs:bottom-12 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[38px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
