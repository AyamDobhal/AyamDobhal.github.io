import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ayam } from "../assets";
import { BackgroundCircles } from "./BackgroundCircles";

type Props = {};

export function Front({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Hey lol! I'm Ayam Dobhal",
      "I'm a FullStack/Blockchain Developer",
      "Responsible, working adult in the day",
      "and a shameless lush by the night.",
      "sry...",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section>
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover "
        src={ayam}
        alt="image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Fullstack/Blockchain Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>

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
}
