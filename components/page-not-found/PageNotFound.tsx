import { HomeIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './PageNotFound.module.css';

export const PageNotFound: FC = () => {
  return (
    <section className={styles.notFound__container}>
      <Image
        src="/assets/404.svg"
        alt="404 - Page Not Found"
        width={700}
        height={700}
      />

      <p>Sorry, the page you are looking for does not exist.</p>
      <p> Maybe you are looking for something else?</p>

      <Link href="/" passHref>
        <span>
          <HomeIcon width={24} height={24} />
          Go back Home
        </span>
      </Link>
    </section>
  );
};

export default PageNotFound;
