import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';

const SRC = 'https://avatars.githubusercontent.com/u/1?v=4';
const ALT = 'Test';

describe('Avatar', () => {
    it('renders', () => {
        render(<Component src={SRC} alt={ALT} />);
        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', SRC);
        expect(img).toHaveAttribute('alt', ALT);
    });
});
