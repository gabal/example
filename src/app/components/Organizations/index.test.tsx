import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Component from './index';
import * as api from "../../utils/api";
import ORGS_RESPONSE from '../../mocks/orgs.json';

describe('Organizations', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('renders', async () => {
        jest.spyOn(api, 'get').mockReturnValue(Promise.resolve(ORGS_RESPONSE));
        render(await Component({ url: 'organizations' }));
        await waitFor(() => {
            expect(screen.queryByRole('heading', { level: 2 })).toHaveTextContent('Organizations');
        });
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(1);
        expect(listItems[0]).toHaveTextContent('toml-lang');
    });
});




