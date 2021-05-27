import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>Pixelbonds</a>
      </Link>
      <div className={styles.nav}>
        <Link href="/feed">
          <a className={styles.navItem}>Feed</a>
        </Link>
        <Link href="/submit">
          <a className={styles.navItem}>Submit</a>
        </Link>
      </div>
    </div>
  );
}
