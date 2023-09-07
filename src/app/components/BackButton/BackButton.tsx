import Link from 'next/link';
import styles from './back-button.module.css';
import { ReactElement } from 'react';

interface BackButtonProps {
    url?: string;
    children?: ReactElement;
}
export const BackButton = ({ url = '/', children }: BackButtonProps): ReactElement => {
    return <Link href={url} className={styles?.['back-button']}>
        <div className={styles.icon}>
            <img src="/img/back.svg" alt='back' />
        </div>
        <div>{children ? children : 'Back'}</div>
    </Link>;
}
