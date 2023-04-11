import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1, 3, 1],
        opacity: [1, 0.5, 1, 0.5, 1],
        borderRadius: ["20%", "30%", "20%", "30%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#ee7239] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />

      <div className="rounded-full border border-[#e90808] opacity-0 h-[550px] w-[550px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[700px] w-[700px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
