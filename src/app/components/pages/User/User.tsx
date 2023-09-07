import Followers from "../../Followers";
import Organizations from "../../Organizations";
import Repos from "../../Repos";
import Avatar from "../../Avatar";
import styles from './user.module.css';
import { notFound } from 'next/navigation'
import { ReactElement, Suspense } from "react";
import { UserI } from "../../../types/users";
import BackButton from "../../BackButton";
import { InfoListLoader } from "../../InfoList/InfoListLoader";

interface UserProps {
    user?: UserI | undefined;
}
export const User = async ({ user }: UserProps): Promise<ReactElement> => {
    if (!user?.login) notFound();
    const { login, avatar_url, organizations_url, followers_url, repos_url } = user;
    return <section className={styles.user}>
        <aside>
            <div className={styles.header}>
                <div className={styles.navigation}>
                    <BackButton><h1>{login}</h1></BackButton>
                </div>
                {<Avatar src={avatar_url} alt={login} size='l' />}
            </div>
            <div className={styles.activity}>
                <Suspense fallback={<InfoListLoader size={1} title='Organizations' />}>
                    <Organizations url={organizations_url} />
                </Suspense>
                <Suspense fallback={<InfoListLoader size={5} title='Followers' />}>
                    <Followers url={followers_url} />
                </Suspense>
            </div>
        </aside>
        <Suspense fallback={<InfoListLoader size={20} title='Repos' />}>
            <Repos url={repos_url} />
        </Suspense>
    </section >
}
