import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { InfoListLoader } from './InfoListLoader';

const TITLE = 'title';
const SIZE = 5;
describe('InfoList', () => {
    it('renders', () => {
        render(<InfoListLoader size={SIZE} title={TITLE} />);
        expect(screen.getByRole('heading', { level: 2, name: TITLE })).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(SIZE);
    });

    it('renders with default size', () => {
        render(<InfoListLoader title={TITLE} />);
        expect(screen.getByRole('heading', { level: 2, name: TITLE })).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(20);
    });
});
