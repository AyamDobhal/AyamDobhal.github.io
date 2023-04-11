import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options = {{
          //   max: 45,
          //   scale: 1.1,
          //   speed: 450,
          // }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a self-taught fullstack/blockchain developer who loves to code! I
        have over 2 years of professional experience as a developer and I like
        exploring new technologies and frameworks. I started my journey as a
        programmer back in 2016 with C language and later moved on to Python and
        web development. Over the past 2 years, I've transitioned into the field
        of blockchain development and since then have worked on various projects
        on Ethereum and BNB Chain (formerly Binance Smart Chain).
        <br />
        <br /> With a lot planned to learn in the near future, I'm always
        looking for new opportunities to learn and grow as a developer.
        <br />
        <br /> Other than coding, I play video games and study about aviation. I
        also love to travel and explore new places. I specifically love to
        travel alone.
        <br />
        <br /> I listen to a lot of music which you can check out at{" "}
        <a
          href="https://last.fm/user/ayamdobhal"
          target="_blank"
          className="text-white"
        >
          my last.fm profile
        </a>
        .
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
