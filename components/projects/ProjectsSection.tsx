import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import styles from './ProjectsSection.module.css';
import SectionTitle from 'components/section-title/SectionTitle';

type ProjectsArrayProps = {
  projects: ProjectProps[];
};

const ProjectsSection = (projects: ProjectsArrayProps) => {
  return (
    <>
      <SectionTitle title="Recent projects" />
      <section className={styles.projectsWrapper}>
        {projects.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </>
  );
};

export default ProjectsSection;
