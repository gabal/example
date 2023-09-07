import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';

describe('APILimitReached', () => {
    it('renders', () => {
        render(<Component />);
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('API Limit Reached');
        expect(screen.getByText('Please try again later')).toBeInTheDocument();
    });
});
