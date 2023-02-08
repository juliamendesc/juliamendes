import Image from 'next/image';
import styles from './MainCard.module.css';
import React, { FC } from 'react';

const MainCard: FC = () => {
  const scrollToContact = () => {
    const elemContact = document.getElementById('contact-form');

    elemContact?.scrollIntoView();
  };

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
          <div className={styles.buttonWrapper}>
            <button onClick={scrollToContact}>Contact me!</button>
          </div>
        </div>
        <div className={styles.imageCard}>
          <Image
            src="/assets/developer.svg"
            alt="Imagem de uma mulher programando"
            className={styles.image}
            fill
            sizes="(max-width: 600px) 100vw, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default MainCard;
