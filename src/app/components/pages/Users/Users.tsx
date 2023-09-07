"use client"
import UserRow from '../../../components/UserRow';
import { UserI } from '../../../types/users';
import { ReactElement, useEffect, useMemo, useState } from 'react';
import InfoList from '../../InfoList';
import Search from '../../Search';

interface UsersProps {
    result: Promise<{ items: UserI[] }>;
}
export const Users = ({ result }: UsersProps): ReactElement | null => {
    const [users, setUsers] = useState();
    useEffect(() => {
        const getResult = async () => {
            console.log('RESULT', result)
            const currentResult = await result;
            console.log('currentResult', currentResult)
            setUsers(currentResult?.items);
        };
        console.log('execute use effect')
        getResult();
    }, [result])

    console.log('USERS', users)
    if (!users) return null;
    return <>
        <h2 className='title'>Users</h2>
        <Search />
        <InfoList RenderComponent={UserRow} data={users} />
    </>
}



