import Head from 'next/head';
import Link from 'next/link';
import styles from './style.module.scss';
import { Navbar } from 'layout/Navbar';
import { Footer } from 'layout/Footer';
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Artwork | Moyosore Adigun</title>
        <meta name='description' content="Moyosore's Portfolio" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <Navbar background='light' />
        </div>
        <div className={styles.gallery_grid}>
          <span className={styles.image}>
            <Image
              src={`/images/home_page_background.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/contact_background_image.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/home_page_background.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/contact_background_image.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/home_page_background.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/contact_background_image.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/home_page_background.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/contact_background_image.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
          <span className={styles.image}>
            <Image
              src={`/images/home_page_background.jpeg`}
              alt='Image'
              fill
              style={{ objectFit: 'cover' }}
            />
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
