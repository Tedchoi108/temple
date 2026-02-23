"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './BottomNav.module.css';

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className={styles.bottomNav}>
            <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
                <span className={styles.icon}>🏠</span>
                <span className={styles.label}>홈</span>
            </Link>
            <Link href="/explore" className={`${styles.navItem} ${pathname === '/explore' ? styles.active : ''}`}>
                <span className={styles.icon}>🧭</span>
                <span className={styles.label}>탐험</span>
            </Link>
            <Link href="/ar" className={styles.navItem}>
                <div className={styles.arCircle}>
                    <span className={styles.icon}>📷</span>
                </div>
            </Link>
            <Link href="/chatbot" className={`${styles.navItem} ${pathname === '/chatbot' ? styles.active : ''}`}>
                <span className={styles.icon}>💬</span>
                <span className={styles.label}>가이드</span>
            </Link>
            <Link href="/saved" className={`${styles.navItem} ${pathname === '/saved' ? styles.active : ''}`}>
                <span className={styles.icon}>🔖</span>
                <span className={styles.label}>저장</span>
            </Link>
        </nav>
    );
}
