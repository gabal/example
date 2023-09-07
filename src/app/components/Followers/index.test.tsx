import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Component from './index';
import * as api from "../../utils/api";
import FOLLOWERS_RESPONSE from '../../mocks/followers.json';

describe('Followers', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('renders', async () => {
        jest.spyOn(api, 'get').mockReturnValue(Promise.resolve(FOLLOWERS_RESPONSE.slice(0, 2)));
        render(await Component({ url: 'followers' }));
        await waitFor(() => {
            expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent('Followers (2)');
        });
        const listItems = screen.getAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent('defunkt');
        expect(listItems[1]).toHaveTextContent('pjhyett');
    });

    it('caps follower list top 5', async () => {
        jest.spyOn(api, 'get').mockReturnValue(Promise.resolve(FOLLOWERS_RESPONSE));
        render(await Component({ url: 'followers' }));
        await waitFor(() => {
            expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent('Followers (6)');
        });
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(5);
    });

    it('does not render if no data', async () => {
        jest.spyOn(api, 'get').mockReturnValue(Promise.resolve());
        render(await Component({ url: 'followers' }));
        await waitFor(() => {
            expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
        });
    });

    it('does not render if 0 followers', async () => {
        jest.spyOn(api, 'get').mockReturnValue(Promise.resolve([]));
        render(await Component({ url: 'followers' }));
        await waitFor(() => {
            expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent('Followers (0)');
        });
    });
});




