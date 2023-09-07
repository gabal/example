import { getAPIURL, get, hasReachedAPILimit } from './api';

describe('api', () => {
    describe('getAPIURL', () => {
        const initialProcessEnv = process.env;
        afterEach(() => {
            jest.clearAllMocks();
            jest.resetModules();
            process.env = initialProcessEnv;
        });
        it('gets api endpoind for users', () => {
            expect(getAPIURL('users')).toBe('https://api.github.com/users');
        });
        it('gets api endpoind for user', () => {
            expect(getAPIURL('user')).toBe('https://api.github.com/users/{login}');
        });
        it('gets api endpoind for users (local)', () => {
            jest.resetModules();
            process.env.ENV = 'local';
            expect(getAPIURL('users')).toBe('http://localhost:3000/data/users.json');
        });
        it('gets api endpoind for user (local)', () => {
            jest.resetModules();
            process.env.ENV = 'local';
            expect(getAPIURL('user')).toBe('http://localhost:3000/data/user.json');
        });
    });
    describe('get', () => {
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('returns undefined when no url is passed', async () => {
            const result = await get();
            expect(result).toBeUndefined();
        });
        it('returns a json', async () => {
            const returnValue = { id: 1 };
            jest.spyOn(window, 'fetch').mockReturnValueOnce(Promise.resolve(new Response(JSON.stringify(returnValue), { "status": 200 })));
            const result = await get('https://www.test.com/');
            expect(result).toStrictEqual(returnValue);
        });
    });

    describe('hasReachedAPILimit', () => {

        it('has reached API limit', async () => {
            expect(hasReachedAPILimit({ message: 'API rate limit exceeded' })).toBeTruthy();
        });
        it('has NOT reached API limit', async () => {
            expect(hasReachedAPILimit({})).toBeFalsy();
        });
    });

});


