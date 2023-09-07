import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
import USERS_RESPONSE from '../../../mocks/users.json';


describe('User', () => {
    it('renders', async () => {
        render(<Component users={USERS_RESPONSE} />);
        const listItems = screen.getAllByRole('link');
        expect(listItems).toHaveLength(30);
        expect(listItems[0]).toHaveTextContent('mojombo');
        expect(listItems[0]).toHaveAttribute('href', '/mojombo');
        expect(listItems[10]).toHaveTextContent('kevinclark');
        expect(listItems[10]).toHaveAttribute('href', '/kevinclark');
        expect(listItems[20]).toHaveTextContent('tomtt');
        expect(listItems[20]).toHaveAttribute('href', '/tomtt');

    });
});




