import DetailsBox from '../DetailsBox';
import { ReactElement } from 'react';
import styles from './user-info.module.css'

interface InfoListProps {
    title?: string;
    data?: any[];
    RenderComponent?: any;
}
export const InfoList = ({ title, data, RenderComponent }: InfoListProps): ReactElement | null => {
    if (!data || !RenderComponent) return null;
    return <DetailsBox title={title}>
        <ul className={styles?.['info-list']}>
            {
                data?.map((item) => {
                    return <li key={item.id} role='listitem'><RenderComponent {...item} /></li>;
                })
            }
        </ul>
    </DetailsBox>
}