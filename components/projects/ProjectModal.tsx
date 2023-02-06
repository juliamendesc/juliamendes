import React, { FC, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ProjectProps } from './ProjectCard';
import styles from './ProjectModal.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  project: ProjectProps;
}

const ProjectModal: FC<ProjectModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  project,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isModalOpen) return null;

  const updateImage = (value: number) => {
    //Press right with the last image displayed
    if (value > 0 && currentImage === project.images.length - 1) {
      setCurrentImage(0);

      // Press left with the first image displayed
    } else if (value < 0 && currentImage === 0) {
      setCurrentImage(project.images.length - 1);

      // Press left or right without being at first or last index
    } else {
      setCurrentImage((prev) => prev + value);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.documentElement.style.overflowY = 'scroll';
  };

  const portalDiv = document.getElementById('portal');

  if (!portalDiv) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <section
          className={styles.modal_background}
          role="presentation"
          ref={modalRef}
          onClick={(e) => {
            if (modalRef.current === e.target) {
              closeModal();
            }
          }}
        >
          <div className={styles.modal_body}>
            {project.images.length !== 0 && (
              <div className={styles.project_image}>
                <Image
                  src={project.images[currentImage]}
                  alt="project"
                  className={styles.current_image}
                />

                {project.images.length > 1 && (
                  <>
                    <div
                      className={styles.slider}
                      role="presentation"
                      onClick={() => updateImage(-1)}
                      style={{ left: '0px' }}
                    >
                      <Image src="favicon.ico" alt="icon" fill />
                    </div>

                    <div
                      className={styles.slider}
                      role="presentation"
                      onClick={() => updateImage(1)}
                      style={{ right: '0px' }}
                    >
                      <Image src="favicon.ico" alt="icon" fill />
                    </div>
                  </>
                )}
              </div>
            )}

            <div className={styles.text_section}>
              <div className={styles.text}>
                <h3 className={styles.title}>{project.title}</h3>

                <p className={styles.description}>{project.description}</p>

                <p className={styles.stack}>
                  <strong>Stack:</strong> {project.stack.join(' / ')}
                </p>

                <p className={styles.skills}>
                  <strong>What I learned:</strong> {project.skills.join(' / ')}
                </p>
              </div>

              <div className={styles.link_section}>
                <button
                  className={styles.cross_button}
                  onClick={() => closeModal()}
                >
                  x
                </button>

                <div className={styles.links}>
                  {project.websiteLink !== '' && (
                    <Link
                      href={project.websiteLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>View website</button>
                    </Link>
                  )}

                  {project.githubLink !== '' && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button>View on Github</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>,
        portalDiv,
      )}
    </>
  );
};

export default ProjectModal;
