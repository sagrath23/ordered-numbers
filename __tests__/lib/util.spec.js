import { checkLastOrderedNumber } from '../../src/lib/util';

describe('Ordered numbers', () => {
    describe('basic test cases', () => {
        it('should return 19 when n is equal to 20', () => {
            expect(checkLastOrderedNumber(20)).toEqual(19);
        });

        it('should return 129 when n is equal to 132', () => {
            expect(checkLastOrderedNumber(132)).toEqual(129);
        });

        it('should return 999 when n is equal to 1000', () => {
            expect(checkLastOrderedNumber(1000)).toEqual(999);
        });

        it('should return 8 when n is equal to 8', () => {
            expect(checkLastOrderedNumber(8)).toEqual(8);
        });

        it('should return 9999999 when n is equal to 11111110', () => {
            expect(checkLastOrderedNumber(11111110)).toEqual(9999999);
        });
    });
})