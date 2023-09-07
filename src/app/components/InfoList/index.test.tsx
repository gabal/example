import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Component from './index';
import { ReactElement } from 'react';

const TestRenderComponent = ({ name }: { name: string }): ReactElement => <>{name}</>;
const DATA = [
    { id: 1, name: 'Thing 1' },
    { id: 2, name: 'Thing 2' },
]
const TITLE = 'title';
describe('InfoList', () => {
    it('renders', () => {
        render(<Component title={TITLE} data={DATA} RenderComponent={TestRenderComponent} />);
        expect(screen.getByRole('heading', { level: 2, name: TITLE })).toBeInTheDocument();
        const listItems = screen.getAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent('Thing 1');
        expect(listItems[1]).toHaveTextContent('Thing 2');
    });

    it('renders when no data', () => {
        render(<Component title={TITLE} RenderComponent={TestRenderComponent} />);
        expect(screen.queryByRole('heading', { level: 2, name: TITLE })).toBeNull();
        expect(screen.queryAllByRole('listitem')).toStrictEqual([]);
    });

    it('renders when no render component', () => {
        render(<Component title={TITLE} data={DATA} />);
        expect(screen.queryByRole('heading', { level: 2, name: TITLE })).toBeNull();
        expect(screen.queryAllByRole('listitem')).toStrictEqual([]);
    });

    it('renders when no title', () => {
        render(<Component data={DATA} RenderComponent={TestRenderComponent} />);
        expect(screen.queryByRole('heading', { level: 2, name: TITLE })).toBeNull();
        const listItems = screen.getAllByRole('listitem');
        expect(listItems[0]).toHaveTextContent('Thing 1');
        expect(listItems[1]).toHaveTextContent('Thing 2');
    });
});
