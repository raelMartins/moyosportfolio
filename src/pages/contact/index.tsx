import { Footer } from 'layout/Footer';
import { Navbar } from 'layout/Navbar';
import Head from 'next/head';
import Link from 'next/link';
import styles from './style.module.scss';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Moyosore Adigun</title>
        <meta name='description' content="Moyosore's Portfolio" />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <section className={styles.header}>
          <div className={styles.header_content}>
            <h1>Contact</h1>
          </div>
        </section>
        <section className={styles.contact_form}>
          <form>
            <div className={styles.form_field}>
              <label>Your Name *</label>
              <input type='text' />
            </div>
            <div className={styles.form_field}>
              <label>Email Address *</label>
              <input type='text' />
            </div>
            <div className={styles.form_field}>
              <label>Message *</label>
              <textarea />
            </div>
            <div className={styles.submit_button}>
              <Link className={styles.submit} href='/contact'>
                Send Message
              </Link>
            </div>
          </form>
        </section>
        <Footer />
      </main>
    </>
  );
}
