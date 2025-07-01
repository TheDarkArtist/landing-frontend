import Link from 'next/link';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Landing Page</Link>
      </div>
      <ul className={styles.navList}>
        <li><Link href="/landing/page-1">Page 1</Link></li>
        <li><Link href="/landing/page-2">Page 2</Link></li>
      </ul>
    </nav>
  );
};

