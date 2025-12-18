"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { personalProjects, clientProjects } from "@/data/projects";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectListItem from "@/components/ProjectListItem";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"personal" | "client">("personal");

  return (
    <div className="bg-white text-gray-900 pb-2">
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <div className="relative w-full h-36 md:h-52 lg:h-44">
            <Image
              src="/background/wallpaper.avif"
              alt="Landscape banner"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="w-full max-w-3xl px-4 shadow-md rounded-lg">
            <header className="mb-4">
              <h1 className="text-4xl font-bold mt-2">Adnan Khan</h1>
              <p className="text-lg mt-2">
                I am pre-final year undergrad and a hobbyist developer
              </p>
              <p className="text-lg mt-2">I started programming at 13</p>
            </header>

            {/* @Socials */}
            <SocialLinks />

            {/* @GitHub Contributions */}
            <ProofOfWorkSection />

            <main>
              <SkillsSection />
              
              {/* ##################  Projects */}
              <section className="mb-6">
                <h2 className="text-2xl font-semibold font-serif mb-4">
                  Pr<span style={{ fontFamily: "var(--ppe-italic)" }}>o</span>
                  jects
                </h2>

                {/* Tab Navigation */}
                <div className="flex mb-4 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab("personal")}
                    className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === "personal"
                        ? "border-gray-400 bg-gray-100 rounded-t-lg"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Personal Projects
                  </button>
                  <button
                    onClick={() => setActiveTab("client")}
                    className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                      activeTab === "client"
                        ? "border-gray-400 bg-gray-100 rounded-t-lg"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Client Works
                  </button>
                </div>

                {/* Projects Content */}
                <div className={`p-4`}>
                  <ul className="space-y-4">
                    {(activeTab === "personal"
                      ? personalProjects
                      : clientProjects
                    ).map((project) => (
                      <ProjectListItem 
                        key={project.name} 
                        project={project} 
                        isClientProject={activeTab === "client"}
                      />
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-2 justify-center mt-2">

                  <div className="flex items-center gap-2 justify-center mt-2">
                    <h2 className="font-serif text-lg">
                      View all my C
                      <span style={{ fontFamily: "var(--ppe-italic)" }}>
                        oo
                      </span>
                      l pr
                      <span style={{ fontFamily: "var(--ppe-italic)" }}>o</span>
                      jects here
                    </h2>

                    <Link href="/projects">
                      <button className="group relative inline-flex items-center justify-center px-4 py-1.5 overflow-hidden rounded-full border border-black/10 font-semibold transition-transform active:scale-95">
                        {/* Background Layer with Grainy Gradient */}
                        <span
                          className="absolute inset-0 rounded-full opacity-80 transition-opacity group-hover:opacity-100"
                          style={{
                            backgroundImage: `url('https://img.freepik.com/free-vector/gradient-colorful-grainy-dynamic-background_52683-101908.jpg?semt=ais_hybrid&w=740&q=80')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            boxShadow:
                              "inset 0px 1px 4px rgba(255, 255, 255, 0.8)",
                          }}
                        />
                        <span
                          className="relative text-white text-sm"
                          style={{
                            fontFamily: "var(--ppe-italic)",
                            textShadow: "1px 1px 0px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          Show All
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
              
              {/* ################## Exp */}
              <ExperienceSection />
              
              {/* ################## Research Project */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">
                  Research Projects
                </h2>
                <ul className="space-y-4">
                  Improving LLM response accuracy for campus social data using
                  domain-tuned retrieval (i will update it)
                </ul>
              </section>
            </main>

            <Footer />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
