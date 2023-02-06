import { FC } from 'react';
import styles from '../styles/Home.module.css';
import ContactForm from '../components/contact-form/ContactForm';
import Header from '../components/nav-bar/Header';
import MainCard from '../components/main-card/MainCard';
import projects from '../shared/projects';
import MetaHead from 'components/head/Metahead';
import Footer from 'components/footer/Footer';
import ProjectsSection from 'components/projects/ProjectsSection';

export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <MetaHead />

      <Header />
      <main className={styles.main}>
        <MainCard />

        <ProjectsSection projects={projects} />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
