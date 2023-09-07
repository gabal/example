import UserRow from '../UserRow';
import InfoList from '../InfoList';
import { ReactElement } from 'react';
import { get } from '../../utils/api';
interface OrganizationsProps {
    url: string
}
export const Organizations = async ({ url }: OrganizationsProps): Promise<ReactElement> => {
    const data = await get(url);
    return <InfoList title='Organizations' RenderComponent={UserRow} data={data} />
}
