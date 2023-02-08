import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import ProjectModal from './ProjectModal';

export interface ProjectProps {
  id: number;
  title: string;
  icon: string;
  stack: string[];
  description: string;
  learned: string;
  skills: string[];
  images: string[];
  imageSize: string[];
  websiteLink: string;
  githubLink: string;
}

const ProjectCard = (project: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    // setIsModalOpen(!isModalOpen);
    setIsModalOpen((prev) => !prev);
    document.documentElement.style.overflowY = 'hidden';
  };

  return (
    <section id="projectWrapper" className={styles.project_wrapper}>
      <Image
        src={project.icon}
        alt="icon"
        className={styles.project_image}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <article className={styles.project_summary_wrapper}>
        <div>
          <h3 className={styles.project_title}>{project.title}</h3>

          <p className={styles.project_stack}>
            {project.stack.slice(0, 3).join(' / ')}
          </p>
        </div>
        <button className={styles.project_button} onClick={openModal}>
          View more
        </button>
      </article>

      <ProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        project={project}
      />
    </section>
  );
};

export default ProjectCard;
