
import React from 'react';
import Link from 'next/link';
import { Project } from "@/lib/types";
import { ProjectButton } from './ui/ProjectButton';

interface ProjectListItemProps {
  project: Project;
  isClientProject?: boolean;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({ project, isClientProject }) => {
  return (
    <li className="flex flex-col border-l-2 border-gray-200 pl-3">
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
              <ProjectButton href={project.playstore} label='Playstore URL'/>
            )
          : project.github && (
              <ProjectButton href={project.github} label='Github'/>
            )}

        {project.url && (
          <ProjectButton href={project.url} label='View'/>
        )}
      </div>
    </li>
  );
};

export default ProjectListItem;
