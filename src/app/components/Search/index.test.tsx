import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('Search', () => {
    it('renders', () => {
        render(<Component />);
        expect(screen.getByText('Search')).toBeInTheDocument();
    });
});
