import { Project } from "@/lib/types";

export const personalProjects: Project[] = [
  {
    name: "CampusX",
    description:
      "<strong>Incentivized Opportunity finding Social App</strong> | A social app in the campus that connects students with companies offering paid micro-tasks, such as: Engagement tasks, Survey tasks, Marketing tasks, Work experience tasks.\n<strong>My Work:</strong>\n• Implemented Payment System using <strong> Dodo Payments </strong>\n• Implemented NSFW Content Filteration using <strong> Tensorflow.js </strong>\n• Continuously building and scaling the product for the campusx in <strong> VPS </strong> with a 2-person team",
    github: "https://www.github.com/adnankhan46/campusx",
    url: "",
    playstore: "",
  },
  {
    name: "BooleanAI",
    description:
      "AI Digital Electronics Question Solver | Sketch Questions on Whiteboard or Upload an Image for Logic Gates, Code Conversions (BCD to Excess 3, etc.), K-Map, Binary Arithmetic, Boolean Algebra.",
    github: "https://www.github.com/adnankhan46/booleanai",
    url: "https://booleanai.vercel.app",
    playstore: "",
  },
  {
    name: "A toy Javascript game - for fun* ",
    description:
      "A fun javascript obstable avoiding game. The game recieved 200+ unique visitors within 1st hour of launch in the college Campus ",
    github: "https://www.github.com/adnankhan46/falak-superman-game",
    url: "https://falaksuperman.netlify.app",
    playstore: "",
  },
];

export const clientProjects: Project[] = [
  {
    name: "React Native Expo App",
    description:
      "Built using React Native Expo(TS) consist of 70+ APIs | served to real users \n -Implemented Client Side <strong>payment using Razorpay</strong> \n -Implemented <strong>Chat</strong> System",
    playstore:
      "https://play.google.com/store/apps/details?id=com.developerknowforth.exhibitor",
    github: "",
  },
  {
    name: "React Native Expo",
    description:
      "Built using React Native Expo(TS) consist of 30+ APIs | served to real users \n -Implemented <strong>Chat</strong> System  \n -State management using <strong>Custom</strong> states",
    playstore:
      "https://play.google.com/store/apps/details?id=com.developerknowforth.visitor",
    github: "",
  },
];

export const allProjects: Project[] = [
  {
    name: "BeCampusX",
    description:
      "A campus-based social platform where students get paid and experience by completing real company micro-tasks such as development, marketing, surveys and engagement activities.",
    year: "(10 Nov 2023)",
    github: "https://www.github.com/adnankhan46/campusx",
    url: "",
    live: false,
    playstore: "",
    openSource: true,
    screenshot: "/projects/CampusX/cx-opp-ui.png",
    skills: [
      "React",
      "MongoDB Aggregation Pipelines",
      "NodeJS",
      "DodoPayments",
      "TensorFlow",
      "ShadCN",
      "OCR"
    ],
  },
  {
    name: "BooleanAI",
    description:
      "A digital electronics helper where students can draw or upload questions like K-Maps, logic gates, or code conversions and instantly get the solved answers.",
    year: "(29 Oct 2024)",
    github: "https://www.github.com/adnankhan46/booleanai",
    url: "https:booleanai.vercel.app",
    live: true,
    playstore: "",
    openSource: true,
    screenshot: "/projects/BooleanAI/booleanai-webui.png",
    skills: [
      "React",
      "NodeJS",
      "LLM API",
      "Web Canvas",
      "Docker",
      "Tailwindcss",
      "ExpressJS",
      "Rate Limiting", 
    ],
  },
  {
    name: "CollabGPT",
    description:
      "Multi-user RAG app where people can chat collaboratively with multiple PDFs in a shared room. We built this feature even before perplexity & chatGPT.",
    year: "(20 Mar 2025)",
    github: "https://www.github.com/adnankhan46/collab-gpt-rag",
    url: "",
    live: false,
    playstore: "",
    openSource: true,
    logo: "/projects/CollabGPT/collabgpt-logo.png",
    screenshot: "/projects/CollabGPT/collabgpt-mockup.png",
    skills: [
      "RAG",
      "Langchain",
      "Pinecone Vector DB",
      "Groq AI",
      "HuggingFace Embeddings",
      "ExpressJS"
    ],
  },
  {
    name: "Land Registry Web3",
    description:
      "A decentralized land governance system that secures tribal land rights using blockchain and geo-tagged verification.  Won 2nd at IIIT NAYA RAIPUR",
    year: "(14 Nov 2025)",
    github: "https://github.com/adnankhan46/land-registry-web3",
    live: false,
    playstore: "",
    openSource: true,
    screenshot: "/projects/LandRegistryWeb3/land-registry-dapp.png",
    skills: [
      "Blockchain",
      "Solidity",
      "Ehtereum/HardHat",
      "React",
      "IPFS + Pinata",
      "MetaMask Wallet",
      "ExpressJS",
      "OCR",
      "Smart Contracts",
      "Google Maps API", "Google Cloud"
    ],
  },
  {
    name: "KytBook",
    description:
      "An online directory of Used books. A Consumer to consumer used book sharing app. List your used books, add pickup address, clear the desk.",
    year: "(24 April 2021)",
    url: "",
    live: false,
    playstore: "",
    logo: "/projects/KytBook/logo.png",
    screenshot: "/projects/KytBook/kytbook-mockup.png",
    skills: [
      "React Native",
      "Figma",
      "Flask"
    ],
  },
  {
    name: "SkytChat",
    description:
      "A Chat app that detects receiver's facial expression of each messages sent and show to sender. 5 Expressions Like 'smiling, sad, etc'. Built this before ai was a thing using rapid APIs with too tight limit, there were no good providers at that time.",
    year: "(22 November 2020)",
    url: "",
    live: false,
    playstore: "",
    logo: "/projects/SkytChat/logo.png",
    screenshot: "/projects/SkytChat/skytchat-mockup.png",
    skills: [
      "React Native",
      "Figma",
      "Flask",
      "Rapid API"
    ],
  },
  {
    name: "BoolAI",
    description:
      "An assistant in your WhatsApp, call anywhere in any chat, ask group chat related questions, ask to explain received pdf. (puppeteer under the hood)",
    year: "(4 June 2025)",
    github: "https://www.github.com/adnankhan46/boolai",
    url: "",
    live: false,
    playstore: "",
    openSource: true,
    screenshot: "",
  },
  {
    name: "Commit App",
    description:
      "An invite-only habit commitment platform where your friends profit from your failures. Currently down due to india's betting apps regulations. Invites are still open.",
    year: "(20 August 2025)",
    url: "https://getcommit.vercel.app",
    live: false,
    playstore: "",
    screenshot: "/projects/CommitApp/commit-ui.png",
    skills: [
      "React Native",
      "Expo",
      "Honojs",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    name: "Talk Of People",
    description:
      "App where teens can anonymously compliment each other through fun engaging polls. You vote for friends on positive compliments, and you get notified when someone picks you or your friends. Polls like 'who is funniest'. [alternative to tbh by nikita bier](https://en.wikipedia.org/wiki/Tbh)",
    year: "(6 August 2022)",
    url: "",
    live: false,
    playstore: "",
    logo: "/projects/TOP/logo.png",
    screenshot: "/projects/TOP/top-mockup.png",
    skills: [
      "React Native",
      "Figma"
    ]
  },
  {
    name: "StudyTine",
    description:
      "A flashcard webapp for JEE exam with spaced-repetition system to remind for revision. Mostly for fking chemistry.",
    year: "(24 February 2022)",
    url: "",
    live: false,
    playstore: "",
    logo: "/projects/StudyTine/logo.png",
    skills: [
      "Thunkable App Maker",
      "Figma",
      "Block Programming"
    ]
  },
  {
    name: "PetrolNow",
    description:
      "In my city i noticed that nearby petrol pumps face shortages several times a month, so I built this notify citizens about petrol availability.",
    year: "(i don't know, 2022)",
    url: "",
    live: false,
    playstore: "",
    skills: ["WEB 2.0","HTML", "CSS", "Email Notify"]
  },
];
