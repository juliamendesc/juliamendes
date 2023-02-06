import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import styles from './ProjectsSection.module.css';

type ProjectsArrayProps = {
  projects: ProjectProps[];
};

const ProjectsSection = (projects: ProjectsArrayProps) => {
  return (
    <div className={styles.projectsWrapper}>
      {projects.projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectsSection;
