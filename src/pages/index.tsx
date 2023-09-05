import { Footer } from 'layout/Footer';
import { Navbar } from 'layout/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import styles from 'styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Moyosore Adigun</title>
        <meta name='description' content="Moyosore's Portfolio" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.header}>
          <div className={styles.header_content}>
            <Link className={styles.contact_button} href='/contact'>
              Contact
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
