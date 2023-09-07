import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';

const SRC = 'https://avatars.githubusercontent.com/u/1?v=4';
const LOGIN = 'Test';

describe('UserRow', () => {
    it('renders', () => {
        render(<Component login={LOGIN} avatar_url={SRC} />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', SRC);
        expect(img).toHaveAttribute('alt', LOGIN);
        expect(screen.getByRole('link')).toHaveTextContent(LOGIN);
    });
});
