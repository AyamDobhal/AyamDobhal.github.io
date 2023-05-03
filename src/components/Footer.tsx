import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

export function Footer({}: Props) {
  return (
    <footer className="bottom-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: false }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/AyamDobhal"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.facebook.com/AyamD1533/"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.youtube.com/@ayamdobhal"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.instagram.com/ayamdobhal/"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.linkedin.com/in/ayamdobhal/"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://twitter.com/AyamDobhal"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.reddit.com/user/AyamDobhal"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://t.me/ayamdobhal"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
        url="mailto:me@iamdobhal.dev"
        fgColor="white"
        bgColor="transparent"
      />

      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: false }}
        className="flex flex-row items-center"
      >
        <p className="text-white text-[14px] font-medium">
          <a href="https://github.com/ayamdobhal/ayamdobhal.github.io" target="_blank">
            Made with ❤️ by Ayam Dobhal
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
