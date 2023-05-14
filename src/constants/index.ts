import {
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  b,
  blockchain,
  devops,
  react,
  whalesnetwork,
  codemarks,
  solidity,
  python,
  rust,
  twitter,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Blockchain Developer",
    icon: blockchain,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: devops,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Rust",
    icon: rust,
  },
];

const experiences = [
  {
    title: "Freelance Developer",
    company_name: "Freelance",
    icon: backend,
    iconBg: "#383E56",
    date: "Jan 2020 - Jul 2022",
    points: [
      "Delivered various products for different clients.",
      "Developed multiple Twitter/Discord/Telegram bots for clients as per the requirements.",
      "Created scripts for automation/web scraping.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Whales Network",
    icon: whalesnetwork,
    iconBg: "#383E56",
    date: "Feb 2022 - Aug 2022",
    points: [
      "Developed and maintained an API for a social media application built for a crypto based startup.",
      "Created a contest platform for placing bets on cryptocurrency prices using Node.js, Mongoose ODM, Express.js.",
      "Made a tracker that notifies users when an unusual transaction occurs on various cryptocurrency chains.",
    ],
  },
  {
    title: "Fullstack/Blockchain Developer",
    company_name: "Codemarks",
    icon: codemarks,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Developed the backend of various applications.",
      "Built and deployed multiple blockchain applications on the BSC chain.",
      "Created server-side scripts for various purposes.",
      "Worked on frontend of a few projects.",
    ],
  },
];

const projects = [
  {
    name: "CryptoSports",
    description:
      "A web3 dApp for betting on FIFA World Cup 2022 matches using BNB.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "bnb_chain",
        color: "pink-text-gradient",
      },
    ],
    image: b,
    icon: github,
  },
  {
    name: "Khar Bot",
    description: "A twitter bot for distorting images using ImageMagick.",
    tags: [
      {
        name: "twitter_api",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: b,
    source_code_link: "https://twitter.com/khar_bot",
    icon: twitter,
  },
  {
    name: "8086 Emulator",
    description:
      "An CLI based emulator for Intel-8086 microprocessor written in Python.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "assembly",
        color: "green-text-gradient",
      },
      {
        name: "8086",
        color: "pink-text-gradient",
      },
    ],
    image: b,
    source_code_link: "https://github.com/AyamDobhal/8086-emulator",
    icon: github,
  },
  {
    name: "Reddit CLI",
    description:
      "A CLI based Reddit client written in Python using PRAW library.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "reddit api",
        color: "green-text-gradient",
      },
      {
        name: "cli",
        color: "pink-text-gradient",
      },
    ],
    image: b,
    source_code_link: "https://github.com/AyamDobhal/reddit-cli",
    icon: github,
  },
];

export { services, technologies, experiences, projects };
