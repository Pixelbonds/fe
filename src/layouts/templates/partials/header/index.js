import Link from 'next/link';
import { Button } from 'components';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href="/">
          <a className={styles.logo}>Pixelbonds</a>
        </Link>
        <Link href="/explore">
          <a className={styles.navItem}>Explore</a>
        </Link>
        <Link href="/feed">
          <a className={styles.navItem}>Categories</a>
        </Link>
      </div>
      <div className={styles.rightNav}>
        <Button bold>Submit</Button>
      </div>
    </div>
  );
}
