import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { parseMarkdownLinks } from "../utils/markdownParser";
import { allProjects } from "@/data/projects";

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
                <div
                  key={project.name}
                  className="flex flex-col border-l-2 border-gray-200 pl-4"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        {project.logo && (
                          <Image
                            src={project.logo}
                            alt={`${project.name} logo`}
                            width={54}
                            height={54}
                            className="rounded-lg"
                          />
                        )}
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{project.name}</h3>
                          <h4 className="text-xs text-gray-500 font-semibold">
                            {project.year}
                          </h4>
                        </div>
                      </div>
                      {project.openSource && (
                        <span className="text-[0.54rem] bg-gray-50 text-green-400 px-2 py-[2px] rounded-lg rotate-[5deg] shadow-sm uppercase tracking-wide">
                          open-source
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 ">
                      {parseMarkdownLinks(project.description).map(
                        (part, index) => {
                          if (part.type === "link" && part.url) {
                            return (
                              <Link
                                key={index}
                                href={part.url}
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {part.text}
                              </Link>
                            );
                          }
                          return part.content;
                        }
                      )}
                    </p>

                    {project.screenshot && (
                      <div className="mt-3 mb-3">
                        <Image
                          src={project.screenshot}
                          alt={`${project.name} screenshot`}
                          width={600}
                          height={300}
                          className="rounded-lg border border-gray-200 w-full"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {project?.skills?.map((skill) => (
                      <div
                        key={skill}
                        className="text-xs bg-gray-100 px-2 py-1 rounded-md whitespace-nowrap"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 my-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        className="text-sm bg-gray-200 px-3 py-1 rounded-lg inline cursor-pointer"
                      >
                        Github
                      </Link>
                    )}

                    {project.url && (
                      <div className="text-sm bg-gray-200 px-3 py-1 rounded-lg inline cursor-pointer">
                        <Link href={project.url}>View</Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <footer className="mt-10 text-center text-lg text-gray-500 pb-8">
            <p className="text-sm">© 2025 AK. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a
                href="https://www.github.com/adnankhan46"
                className="hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/adnankhan93"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.x.com/adnankhan_93"
                className="hover:underline"
              >
                Twitter (X)
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default page;
