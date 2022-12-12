import Image from 'next/image'
import { FC } from 'react'
import styles from './MainCard.module.css'

export const MainCard: FC = () => {
  return (
    <section className={styles.mainCard}>
      <div>
        <div>
          <h1>Frontend Developer</h1>
          <p>
            With a strong academic and professional background, and a vast
            collection of experiences and achievements, I decided to pursue a
            career in programming, and this was the best decision ever.
          </p>
          <button>Contact me!</button>
        </div>
        <Image
          src="/assets/developer.svg"
          alt="Imagem de uma mulher programando"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default MainCard
