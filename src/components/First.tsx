import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { ayam } from "../assets";

type Props = {};

function ok({}: Props) {
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
  );
}

export default ok;
