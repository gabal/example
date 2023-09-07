import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Component from './index';
import * as api from "../../utils/api";
import REPOS_RESPONSE from '../../mocks/repos.json';

describe('Repos', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('renders', async () => {
        jest.spyOn(api, 'get').mockReturnValue(Promise.resolve(REPOS_RESPONSE));
        render(await Component({ url: 'repos' }));
        await waitFor(() => {
            expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent('Repos');
        });
        const listItems = screen.getAllByRole('link');
        expect(listItems[0]).toHaveTextContent('30daysoflaptops.github.io');
        expect(listItems[0]).toHaveAttribute('href', 'https://github.com/mojombo/30daysoflaptops.github.io');
        expect(listItems[1]).toHaveTextContent('asteroids');
        expect(listItems[1]).toHaveAttribute('href', 'https://github.com/mojombo/asteroids');
    });
});




