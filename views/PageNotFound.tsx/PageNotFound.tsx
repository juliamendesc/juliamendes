import { HomeIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './PageNotFound.module.css'

export const PageNotFound: FC = () => {
  return (
    <section className={styles.notFound__container}>
      <Image
        src="/assets/404.svg"
        alt="404 - Page Not Found"
        width={700}
        height={700}
      />
      <div className={styles.notFound__content}>
        Sorry, the page you are looking for does not exist.
      </div>
      <div className={styles.notFound__link}>
        <Link href="/" passHref>
          <HomeIcon />
          Go to Home
        </Link>
      </div>
    </section>
  )
}

export default PageNotFound
