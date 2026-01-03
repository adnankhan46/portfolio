import { Experience } from "@/lib/types";

const freelanceDesc =`Involved in building Production grade, <strong>type-safe React Native App</strong>.
- Built entire app using React Native Expo consist of <strong>80+ APIs</strong>
- Serving to <strong>real</strong> users
- Implemented Client Side Payment system using <strong>Razorpay</strong>
- Implemented <strong>Chat Systems</strong> in both app, optimized for scale.
`
const internDesc =`Rebuilt entire web stack using <strong>React.js</strong> and <strong>Firebase Cloud</strong>
- Improved site performance by <strong>70%</strong> by reducing unneccessary loads
- Optimized Components for improved performance and scalibility
- Continously contributed to the repo by discussing with founders
`

export const experience: Experience[] = [
  {
    title: "Freelance Cross-Plateform App Developer",
    company: "Stealth",
    period: "March 2025 - present",
    description: freelanceDesc,
  },
  {
    title: "Web Dev intern",
    company: "Starlight Foundation",
    period: "Feb 2024 - Apr 2024",
    description: internDesc
  },
];


