import { getIdList, getRandomWidth } from './generators';

describe('generators', () => {
    describe('getIdList', () => {
        it('generates list', () => {
            const list = getIdList(3);
            expect(list).toHaveLength(3);
            expect(list[0]).toStrictEqual({ id: 0 });
        });
        it('generates list with default amount', () => {
            const list = getIdList();
            expect(list).toHaveLength(1);
        });
    });
    describe('getRandomWidth', () => {
        it('gets random width', async () => {
            const max = 5;
            const min = 1;
            const width = getRandomWidth(max, min);
            expect(width >= min).toBeTruthy();
            expect(width <= max).toBeTruthy();
        });
        it('gets random width with no max', async () => {
            const min = 1;
            const width = getRandomWidth(undefined, min);
            expect(width >= min).toBeTruthy();
            expect(width <= 1).toBeTruthy();
        });
        it('gets random width with no min', async () => {
            const max = 5;
            const width = getRandomWidth(max, undefined);
            expect(width >= 0).toBeTruthy();
            expect(width <= max).toBeTruthy();
        });
    });
});


