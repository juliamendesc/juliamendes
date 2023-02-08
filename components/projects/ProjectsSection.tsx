import React from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';
import styles from './ProjectsSection.module.css';
import SectionTitle from 'components/section-title/SectionTitle';
import Link from 'next/link';

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

      <div className={styles.otherProjectsWrapper}>
        <button className={styles.otherProjects}>
          <Link
            href="https://github.com/juliamendesc"
            target="_blank"
            rel="noreferrer"
          >
            Want to see more? Checkout my Github!
          </Link>
        </button>
      </div>
    </>
  );
};

export default ProjectsSection;
