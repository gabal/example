import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { getIdList, getRandomWidth } from '../../utils/generators';
import avatarStyles from '../Avatar/avatar.module.css';
import userRowStyles from '../UserRow/user-row.module.css';
import infoListStyles from '../InfoList/user-info.module.css';
import detailsBoxStyles from '../DetailsBox/details-box.module.css';

interface InforListLoaderProps {
    title: string;
    size?: number
}
export const InfoListLoader = ({ title, size = 20 }: InforListLoaderProps) => {
    const data = getIdList(size);
    return <section className={detailsBoxStyles?.['details-box']}>
        <h2 className='title'>{title}</h2>
        <ul className={infoListStyles?.['info-list']}>
            {data.map(({ id }) => <li key={id} className={userRowStyles?.['user-row']}>
                <a>
                    <div className={`${avatarStyles.avatar} ${avatarStyles.s}`}></div>
                    <Skeleton count={1} width={getRandomWidth(120, 40)} />
                </a>
            </li>)}
        </ul>
    </section>
}