import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import styles from './ProjectsSection.module.css';

type ProjectsArrayProps = {
  projects: ProjectProps[];
};

const ProjectsSection = (projects: ProjectsArrayProps) => {
  return (
    <section className={styles.sectionWrapper}>
      <section className={styles.titleSection}>
        <h1>Recent projects</h1>
      </section>
      <section className={styles.projectsWrapper}>
        {projects.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </section>
  );
};

export default ProjectsSection;
