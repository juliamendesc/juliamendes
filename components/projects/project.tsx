import Image from 'next/image'
import React, { FC, useState } from 'react'
import styles from './Projects.module.css'

export interface ProjectProps {
  title: string
  icon: string
  stack: string[]
  // description: string
  // skills: string[]
  // images: string[]
  // websiteLink: string
  // githubLink: string
}

export const Project: FC<ProjectProps> = ({ title, icon, stack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(prev => !prev)
    document.documentElement.style.overflowY = 'hidden'
  }

  return (
    <section className={styles.project_wrapper}>
      <Image src={icon} alt="icon" className={styles.project_image} fill />
      <article>
        <h3>{title}</h3>

        <p>{stack.slice(0, 3).join(' / ')}</p>
      </article>

      {/* <ProjectButton value="View more" onClick={openModal} />

<ProjectModal
isModalOpen={isModalOpen}
setIsModalOpen={setIsModalOpen}
project={project}
/> */}
    </section>
  )
}

export default Project
