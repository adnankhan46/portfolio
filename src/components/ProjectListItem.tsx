
import React from 'react';
import Link from 'next/link';
import { Project } from "@/lib/types";

interface ProjectListItemProps {
  project: Project;
  isClientProject?: boolean;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project, isClientProject }) => {
  return (
    <li className="flex flex-col border-l-2 border-gray-200 pl-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{project.name}</h3>
        <p
          className="text-sm text-gray-600 whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
        ></p>
      </div>

      <div className="flex gap-2 my-2">
        {isClientProject
          ? project.playstore && (
              <Link
                href={project.playstore}
                className="text-sm bg-gray-100 px-3 py-1 rounded-lg inline cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Playstore URL
              </Link>
            )
          : project.github && (
              <Link
                href={project.github}
                className="text-sm bg-gray-100 px-3 py-1 rounded-lg inline cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            )}

        {project.url && (
          <div className="text-sm bg-gray-100 px-3 py-1 rounded-lg inline cursor-pointer">
            <Link href={project.url} target="_blank" rel="noopener noreferrer">View</Link>
          </div>
        )}
      </div>
    </li>
  );
};

export default ProjectListItem;
