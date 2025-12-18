
import React from "react";
import { skills } from "@/data/skills";

const SkillsSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 px-3 py-1 rounded-lg text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
