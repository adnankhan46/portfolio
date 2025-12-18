
import React from "react";
import { proofOfWork } from "@/data/proof-of-work";

const ProofOfWorkSection: React.FC = () => {
  return (
    <section className="mb-10">
      <h2
        className="text-2xl font-semibold mb-4"
        style={{ fontFamily: "var(--ppe-italic)" }}
      >
        Proof of Work
      </h2>
      <div className="space-y-4">
        {proofOfWork.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-100 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-gray-600">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.665.24 2.9.118 3.205.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </span>
            <span className="text-black">{item.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProofOfWorkSection;
