'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className={`${styles.page} ${animate ? styles.enter : ''}`}>
      <h1 className={styles.title}>Contentful App</h1>
      <nav className={styles.nav}>
        <Link href="/landing/page-1" className={styles.link}>
          Go to Page 1 →
        </Link>
        <Link href="/landing/page-2" className={styles.link}>
          Go to Page 2 →
        </Link>
      </nav>
    </div>
  );
}

