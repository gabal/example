import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('DetailsBox', () => {
    it('renders', () => {
        const CONTENT = 'children';
        const TITLE = 'Main Title';
        render(<Component title={TITLE} ><>{CONTENT}</></Component>);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(TITLE);
        expect(screen.getByRole('region')).toHaveTextContent(CONTENT);
    });

    it('renders with no title', () => {
        const CONTENT = 'children';
        render(<Component><>{CONTENT}</></Component>);
        expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
        expect(screen.getByRole('region')).toHaveTextContent(CONTENT);
    });
});
