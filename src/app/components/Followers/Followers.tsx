import InfoList from '../InfoList';
import UserRow from '../UserRow';
import { ReactElement } from 'react';
import { get } from '../../utils/api';

const MAX_FOLLOWERS = 5;
interface FollowersProps {
    url: string;
}
export const Followers = async ({ url }: FollowersProps): Promise<ReactElement> => {
    const data = await get(url);
    return <InfoList title={`Followers (${data?.length})`} RenderComponent={UserRow} data={data?.slice(0, MAX_FOLLOWERS)} />
}
