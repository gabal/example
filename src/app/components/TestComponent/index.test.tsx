import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('TestComponent', () => {
    it('renders', () => {
        render(<Component />);
        expect(screen.getByText('TestComponent')).toBeInTheDocument();
    });
});
