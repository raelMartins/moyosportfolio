import Head from 'next/head';
import Link from 'next/link';
import styles from './style.module.scss';
import { Navbar } from 'layout/Navbar';
import { Footer } from 'layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Moyosore Adigun</title>
        <meta name='description' content="Moyosore's Portfolio" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <Navbar background='light' />
        </div>
        <section className={styles.top}>
          <h1>About</h1>
          <p>
            Juliet Nneka is an award-winning visual artist who was born and
            raised in Lagos, Nigeria.
          </p>
        </section>
        <div className={styles.achievements}>
          <section className={styles.section}>
            <h2>AWARDS AND HONOURS</h2>
            <p>
              Outstanding Cambridge Learner Award: Top in the Country, Art and
              Design (United Kingdom / Nigeria, 2017)
            </p>
            <p>
              Beautiful Bizarre Art Prize: iCanvas Digital Art Award, Third
              place (International, 2022)
            </p>
          </section>
          <section className={styles.section}>
            <h2>PRESS</h2>
            <p>
              Beautiful Bizarre Magazine: Juliet Nneka and Her Black Nymphs: A
              10-Question Interview
            </p>
            <p>Imagine FX Magazine: FXPose Artist of The Month</p>
            <p>British Council&apos;s Outstanding Cambridge Learners</p>
          </section>
          <section className={styles.section}>
            <h2>CLIENT WORK</h2>
            <p>
              Procreate, Amazon Studios, DC Comics (Variant covers: Wonder
              Woman, Green Lantern, Nubia and the Amazons, etc), Snap. Inc,
              Grady Hendrix, and more.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
