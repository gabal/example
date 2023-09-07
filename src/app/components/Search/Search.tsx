
import { useRouter } from 'next/navigation';
import styles from './search.module.css';
import { useState } from 'react';
export const Search = () => {
    const [waiting, setWaiting] = useState<any>();
    const router = useRouter();
    const onChange = (e) => {
        if (waiting) clearTimeout(waiting);
        const timeout = setTimeout(() => {
            router.push(`?q=${e.target.value}`)
        }, 2000);
        setWaiting(timeout);

    }
    return <div className={styles?.['search']}>
        <input onChange={onChange} />
    </div >;
}
