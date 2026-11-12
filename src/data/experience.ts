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
const kfseDesc =`Majorly maintained Backend & React Native Mobile App
• Designed and developed <strong>15+ RESTful</strong> APIs using Express.js (Node v22), PostgreSQL, and a layered multi-tiered architecture for a scalable and secure ERP system.
• <strong>Re-Deployed</strong> a distributed, microservices-based e-commerce backend from <strong>Azure to Hostinger VPS</strong>, <strong>reduced infrastructure cost by 70%</strong> while troubleshooting and resolving inter-service API issues to keep the cutover stable.
•  Improved the e-commerce mobile app <strong>performance by 85%</strong> and <strong>Published to Google Play Store</strong>
`

export const experience: Experience[] = [
  {
    title: "Founding Software Engineer Intern",
    company: "Knowforth Tech",
    period: "Jun 2026 - Dec 2026",
    description: kfseDesc,
  },
  {
    title: "Mobile App Developer",
    company: "Stealth",
    period: "Mar 2025 - Oct 2025",
    description: freelanceDesc,
  },
  {
    title: "Frontend Developer Intern",
    company: "Starlight Foundation",
    period: "Feb 2024 - Apr 2024",
    description: internDesc
  },
];


