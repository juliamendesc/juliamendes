import Image from 'next/image'
import { FC } from 'react'
import styles from '../styles/Home.module.css'
import ContactForm from '../views/ContactForm/ContactForm'
import MetaHead from '../views/Head/Head'
import Header from '../views/Header/Header'
import MainCard from '../views/MainCard/MainCard'

export const Home: FC = () => {
  return (
    <div className={styles.container}>
      <MetaHead />

      <Header />
      <main className={styles.main}>
        <MainCard />

        <section className={styles.contactForm}>
          <h1>Get in touch</h1>
        </section>
        <ContactForm />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
