import { APILimitReached } from '@/app/components/APILimitReached/APILimitReached';
import User from '@/app/components/pages/User';
import { get, getAPIURL, hasReachedAPILimit } from '@/app/utils/api';

export default async function UserPage({ params }: { params: { login: string } }) {
    const url = getAPIURL('user');
    const data = await get(url?.replace('{login}', params.login));
    if (hasReachedAPILimit(data)) return <APILimitReached />
    return <User user={data} />;
}