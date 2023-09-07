import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

import { ReactElement } from "react";
import BackButton from "../../BackButton";
import { InfoListLoader } from "../../InfoList/InfoListLoader";
import avatarStyles from '../../Avatar/avatar.module.css';
import styles from './user.module.css';

export const UserLoader = (): ReactElement => {
    return <section className={styles.user}>
        <aside>
            <div className={styles.header}>
                <div className={styles.navigation}>
                    <BackButton>
                        <h1>
                            <Skeleton count={1} width={160} />
                        </h1>
                    </BackButton>
                </div>
                <div className={`${avatarStyles.avatar} ${avatarStyles.l}`}></div>
            </div>
            <div className={styles.activity}>
                <InfoListLoader size={1} title='Organizations' />
                <InfoListLoader size={5} title='Followers' />
            </div>
        </aside>
        <InfoListLoader size={20} title='Repos' />
    </section >
}