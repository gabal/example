import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Component from './index';
import * as api from "../../../utils/api";
import ORGS_RESPONSE from '../../../mocks/orgs.json';
import USER_RESPONSE from '../../../mocks/user.json';
import FOLLOWERS_RESPONSE from '../../../mocks/followers.json';
import REPOS_RESPONSE from '../../../mocks/repos.json';
import Followers from "../../Followers";
import Organizations from "../../Organizations";
import Repos from "../../Repos";


//TODO: Expand this test to use the original async Components under suspense
jest.mock("../../Organizations", () => {
    return function Organizations() {
        return <h2>Organizations</h2>;
    }
});
jest.mock("../../Followers", () => {
    return function Followers() {
        return <h2>Followers</h2>;
    }
});
jest.mock("../../Repos", () => function Repos() {
    return <h2>Repos</h2>;
});

describe('User', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('renders', async () => {
        jest.spyOn(api, 'get').mockImplementation((url?: string) => {
            if (url?.includes('orgs'))
                return Promise.resolve(ORGS_RESPONSE)
            if (url?.includes('followers'))
                return Promise.resolve(FOLLOWERS_RESPONSE)
            if (url?.includes('repos'))
                return Promise.resolve(REPOS_RESPONSE)
            return Promise.resolve(ORGS_RESPONSE)
        });
        render(await Component({ user: USER_RESPONSE }));
        await waitFor(() => {
            expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(3);
        });
        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(USER_RESPONSE.login);
    });

    it('shows not found when no user is passed', async () => {
        let actualErrorMsg;
        try {
            render(await Component({}));
        } catch (e: any) {
            actualErrorMsg = e.message;
        }
        expect(actualErrorMsg).toEqual('NEXT_NOT_FOUND');
    });
});




