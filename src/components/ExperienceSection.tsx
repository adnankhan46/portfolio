
import React from "react";
import { experience } from "@/data/experience";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="mb-10 scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <ul className="space-y-4">
        {experience.map((exp) => (
          <li
            key={exp.title}
            className="border-l-2 border-gray-200 pl-4"
          >
            <h3 className="font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-600">
              {exp.company} | {exp.period}
            </p>
            <p
              className="text-sm text-gray-600 whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: exp.description,
              }}
            ></p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
