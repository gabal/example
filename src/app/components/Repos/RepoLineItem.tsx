import Link from 'next/link';
import { RepoI } from '@/app/types/repos';
import styles from './repo-line-item.module.css';

export const RepoLineItem = ({ description, name, html_url }: RepoI) => {
    return <Link target="_blank" href={html_url} className={styles?.['repo-line-item']}>
        <div>{name}</div>
        {description && <div className={styles.description}>{description}</div>}
    </Link>;
}