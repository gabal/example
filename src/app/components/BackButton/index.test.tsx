import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';

describe('BackButton', () => {
    it('renders', () => {
        render(<Component />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', '/img/back.svg');
        expect(img).toHaveAttribute('alt', 'back');
        expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    });

    it('renders with custom url', () => {
        const CUSTOM_URL = 'http://google.com/'
        render(<Component url={CUSTOM_URL} />);
        expect(screen.getByRole('link')).toHaveAttribute('href', CUSTOM_URL);
    });
});
