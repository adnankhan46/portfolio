
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";
import { parseMarkdownLinks, MarkdownPart } from "@/utils/markdownParser";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
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
            <span className="text-[0.54rem] bg-green-100/40 text-green-600 px-2 py-[2px] rounded-lg rotate-[5deg] shadow-sm uppercase tracking-wide">
              open-source
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 ">
          {parseMarkdownLinks(project.description).map(
            (part: MarkdownPart, index: number) => {
              if (part.type === "link") {
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
              return <React.Fragment key={index}>{part.content}</React.Fragment>;
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

      <div className="flex gap-2 mt-2">
        {project.github && (
          <Link
            href={project.github}
            className="text-sm bg-gray-50 px-2 py-1 rounded-lg inline cursor-pointer border-dashed border-2 border-gray-400"
          >
            Github
          </Link>
        )}

        {project.url && (
          <Link
            href={project.url}
            className="text-sm bg-gray-50 px-2 py-1 rounded-lg inline cursor-pointer border-dashed border-2 border-gray-400"
          >
            View
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
