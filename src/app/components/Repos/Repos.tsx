import InfoList from '../InfoList';
import { ReactElement } from 'react';
import { RepoLineItem } from './RepoLineItem';
import { get } from '../../utils/api';

interface ReposProps {
    url: string;
}
export const Repos = async ({ url }: ReposProps): Promise<ReactElement> => {
    const data = await get(url);
    return <InfoList title='Repos' RenderComponent={RepoLineItem} data={data} />
}


