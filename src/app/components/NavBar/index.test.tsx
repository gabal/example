import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('NavBar', () => {
    it('renders', () => {
        render(<Component />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/img/real_logo_blue.svg');
        expect(img).toHaveAttribute('alt', 'Real Brokerage Inc');
        expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    });
});
