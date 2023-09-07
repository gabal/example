import Link from 'next/link';
import styles from './nav-bar.module.css';

export const NavBar = () => {
    return <nav className={styles?.['nav-bar']}>
        <Link href='/'>
            <img alt="Real Brokerage Inc" src="/img/real_logo_blue.svg" />
        </Link>
    </nav>;
}
