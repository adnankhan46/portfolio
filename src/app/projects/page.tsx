import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { allProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

function page() {
  const projects = allProjects;

  return (
    <div className={`${inter.className} bg-white text-gray-900 pb-2`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl shadow-md rounded-lg">
          {/* Some headers */}
          <div>
            <div className="relative w-full rounded-lg h-36 md:h-52 lg:h-44">
              <Image
                src="/background/header-2.jpeg"
                alt="Landscape banner"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <section className="all-projects mx-4 my-2">
            <h2 className="text-4xl font-semibold my-6 font-serif">
              Some C<span style={{ fontFamily: "var(--ppe-italic)" }}>oo</span>l
              stuffs {`I've`} built
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default page;
