import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
describe('{{ pascalCase name }}', () => {
    it('renders', () => {
        render(<Component />);
        expect(screen.getByText('{{ name }}')).toBeInTheDocument();
    });
});
