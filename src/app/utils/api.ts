import { API_SERVICE_URLS } from './constants/api';
export const get = async (url?: string): Promise<any> => {
    if (!url) return Promise.resolve();
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getAPIURL = (service: 'users' | 'user' | 'search'): string | undefined => {
    if (process.env.ENV === 'local') return API_SERVICE_URLS.dev?.[service];
    return API_SERVICE_URLS.prod?.[service];
}
export const hasReachedAPILimit = (data: any): boolean => {
    const reached = data?.message?.includes('API rate limit exceeded');
    if (reached) console.log(`\x1b[101m${data?.message}`);
    return reached;
};