
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
    <li className="flex flex-col border-l-2 theme-border pl-3">
      <div className="flex flex-col">
        <h3 className="font-semibold">{project.name}</h3>
        <p
          className="text-sm theme-muted whitespace-pre-line"
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
        ></p>
      </div>

      <div className="flex flex-wrap gap-1">
        {project?.skills?.map((skill) => (
          <div
            key={skill}
            className="text-xs theme-surface-muted px-2 py-1 rounded-md whitespace-nowrap"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="flex gap-2 my-2">
        {isClientProject
          ? project.playstore &&  (
              <ProjectButton href={project.playstore} label='Playstore URL' inActive={true}/>
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
