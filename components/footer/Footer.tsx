import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Made with 💜 by Julia Mendes</span>
      <span>
        <a
          href="https://linktr.ee/juliamendesc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image
              src="/assets/linktree.svg"
              alt="LinkedIn Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </span>
      <span className={styles.logoWrapper}>
        <span>
          <a
            href="https://www.linkedin.com/in/juliamendesc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>
              <Image
                src="/assets/linkedin.svg"
                alt="LinkedIn Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </span>
        <span>
          <a
            href="https://github.com/juliamendesc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>
              <Image
                src="/assets/github.svg"
                alt="Github Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
