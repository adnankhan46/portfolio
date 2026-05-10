
import React from "react";
import { proofOfWork } from "@/data/proof-of-work";
import { GitMerge } from "lucide-react";

const ProofOfWorkSection: React.FC = () => {
  return (
    <section className="mb-6">
      <h2
        className="text-2xl font-semibold mb-4"
        style={{ fontFamily: "var(--ppe-italic)" }}
      >
        Proof of Work
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {proofOfWork.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="border border-gray-300 rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-100 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-gray-600">
              <GitMerge size={24}/>
            </span>
            <span className="text-black">{item.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProofOfWorkSection;
