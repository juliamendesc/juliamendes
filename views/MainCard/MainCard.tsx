import Image from 'next/image'
import { FC } from 'react'
import styles from './MainCard.module.css'

export const MainCard: FC = () => {
  return (
    <section className={styles.mainCard}>
      <div className={styles.mainCard__container}>
        <div className={styles.mainCard__content}>
          <h1 className={styles.mainCard__title}>Frontend Developer</h1>
          <p className={styles.mainCard__description}>
            With a strong academic and professional background, and a vast
            collection of experiences and achievements, I decided to pursue a
            career in programming, and this was the best decision ever.
          </p>
          <button className={styles.mainCard__button}>Contact me!</button>
        </div>
        <div className={styles.mainCard__image}>
          <Image
            src="/assets/developer.svg"
            alt="Foto da Julia Mendes"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}

export default MainCard
