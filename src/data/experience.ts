import { Experience } from "@/lib/types";

const freelanceDesc =`Architected and delivered production grade <strong>typesafe</strong> React Native Expo app.
• Engineered a scalable API integration layer consuming <strong>80+ Backend endpoints.</strong>
•  Served to <strong>real users</strong> in production environment.
• Implemented Client Side Payment system using <strong>Razorpay</strong>, enabling secure, low-latency transactions with reliable failure handling.
• Implemented <strong>Chat Systems</strong> across multiple app surfaces.
`
const internDesc =`Rebuilt entire web application using <strong>React.js</strong> and <strong>Firebase Cloud</strong> significantly improving UI consistency, usability, and overall user experience.
• Improved site performance by <strong>70%</strong>.
• Refactored and optimized React component architecture, improving rendering efficiency and long-term maintainability.
•  All of the decisions were taken under the guidance of founder with 1:1 weekly sessions.
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


