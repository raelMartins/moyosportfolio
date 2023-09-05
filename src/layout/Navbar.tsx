import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/layout/navbar.module.scss';

export const Navbar = ({ background = 'dark' }) => {
  return (
    <nav className={styles.navbar}>
      <div
        className={styles.links}
        style={
          background === 'light' ? { color: 'black', fontWeight: '400' } : {}
        }
      >
        <Link href='/gallery'>Artwork</Link>
        <Link href='/about'>About</Link>
      </div>
      <Link href={'/'} className={styles.icon} passHref>
        <Image
          src={
            background === 'light'
              ? '/images/moyo-logo-dark.png'
              : '/images/moyo-white-logo.png'
          }
          alt='Logo'
          width={164}
          height={110}
          style={{
            aspectRatio: '164 / 110',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </Link>
      <div
        className={styles.links}
        style={
          background === 'light' ? { color: 'black', fontWeight: '400' } : {}
        }
      >
        <Link href='/contact'>Contact</Link>
        <Link href='/resume/test-resume.pdf' download>
          Resume
        </Link>
      </div>
    </nav>
  );
};
