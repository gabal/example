import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { UserLoader } from './UserLoader';

describe('UserLoader', () => {
    it('renders', () => {
        render(<UserLoader />);
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(26);
    });
});
