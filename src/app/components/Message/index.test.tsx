import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
const TITLE = 'Title';
const CONTENT = 'Content';
describe('Message', () => {
    it('renders', () => {
        render(<Component title={TITLE}>{CONTENT}</Component>);
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(TITLE);
        expect(screen.getByText(CONTENT)).toBeInTheDocument();
    });
});
