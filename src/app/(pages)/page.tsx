"use client";
import Users from '@/app/components/pages/Users';
import { useSearchParams } from 'next/navigation';
import { get, getAPIURL, hasReachedAPILimit } from '../utils/api';
import { APILimitReached } from '../components/APILimitReached/APILimitReached';

export default function UsersPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get('q');
  const url = getAPIURL('search');
  console.log('URL', url)
  const data = get(url?.replace('{search}', search || ''));
  if (hasReachedAPILimit(data)) return <APILimitReached />;
  if (!data) return null;

  return <Users result={data} />;
}
