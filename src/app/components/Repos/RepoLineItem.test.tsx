import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RepoLineItem } from './RepoLineItem';
import REPOS_RESPONSE from '../../mocks/repos.json';

describe('RepoLineItem', () => {
    it('renders', async () => {
        render(<RepoLineItem {...REPOS_RESPONSE[0]} />);
        const listItem = screen.getByRole('link');
        expect(listItem).toHaveTextContent('30daysoflaptops.github.io');
        expect(listItem).toHaveAttribute('href', 'https://github.com/mojombo/30daysoflaptops.github.io');
    });
    it('renders with description', async () => {
        render(<RepoLineItem {...REPOS_RESPONSE[1]} />);
        const listItem = screen.getByRole('link');
        expect(listItem).toHaveTextContent('asteroids');
        expect(listItem).toHaveTextContent('Destroy your Atom editor, Asteroids style!');
        expect(listItem).toHaveAttribute('href', 'https://github.com/mojombo/asteroids');
    });
});




