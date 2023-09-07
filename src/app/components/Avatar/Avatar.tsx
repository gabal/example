import { ReactElement } from 'react';
import styles from './avatar.module.css';

interface AvatarProps {
    src?: string;
    size?: string;
    alt?: string;
}
export const Avatar = ({ src, alt, size = 's' }: AvatarProps): ReactElement => {
    return <div className={`${styles.avatar} ${styles?.[size]}`
    }>
        {src && <img className={styles.avatar} src={src} alt={alt} />}
    </div >;
}
