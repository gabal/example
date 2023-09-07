import Link from "next/link"
import styles from './user-row.module.css';
import Avatar from "../Avatar";
import { ReactElement } from "react";

interface UserRowProperties {
    login: string;
    avatar_url: string;
}

export const UserRow = ({ login, avatar_url }: UserRowProperties): ReactElement => {
    return <div className={styles?.['user-row']}>
        <Link href={`/${login}`}>
            <Avatar src={avatar_url} alt={login} />
            <p>{login}</p>
        </Link>
    </div>
}
