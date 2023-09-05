import Link from 'next/link';
import styles from 'styles/layout/footer.module.scss';
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoPinterest,
  IoLogoTwitter
} from 'react-icons/io';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.internal_links}>
        <Link href='/gallery'>Artwork</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/resume/test-resume.pdf' download>
          Resume
        </Link>
      </div>
      <div className={styles.social_links}>
        <a href='https://twitter.com'>
          <IoLogoTwitter />
        </a>
        <a href='https://instagram.com'>
          <IoLogoInstagram />
        </a>
        <a href='https://linkedin.com'>
          <IoLogoLinkedin />
        </a>
        <a href='https://pinterest.com'>
          <IoLogoPinterest />
        </a>
      </div>
    </footer>
  );
};
