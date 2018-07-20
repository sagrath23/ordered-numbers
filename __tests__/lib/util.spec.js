import { checkLastOrderedNumberByBruteForce } from '../../src/lib/util';

describe('Ordered numbers', () => {
    describe('basic test cases', () => {
        it('should return 19 when n is equal to 20', () => {
            expect(checkLastOrderedNumberByBruteForce(20)).toEqual(19);
        });

        it('should return 129 when n is equal to 132', () => {
            expect(checkLastOrderedNumberByBruteForce(132)).toEqual(129);
        });

        it('should return 999 when n is equal to 1000', () => {
            expect(checkLastOrderedNumberByBruteForce(1000)).toEqual(999);
        });

        it('should return 8 when n is equal to 8', () => {
            expect(checkLastOrderedNumberByBruteForce(8)).toEqual(8);
        });

        it('should return 9999999 when n is equal to 11111110', () => {
            expect(checkLastOrderedNumberByBruteForce(11111110)).toEqual(9999999);
        });

        it('should return 99999999 when n is equal to 111111110', () => {
            expect(checkLastOrderedNumberByBruteForce(111111110)).toEqual(99999999);
        });

        it('should return 999999999 when n is equal to 1111111110', () => {
            expect(checkLastOrderedNumberByBruteForce(1111111110)).toEqual(999999999);
        });

        it('should return 9999999999 when n is equal to 11111111110', () => {
            expect(checkLastOrderedNumberByBruteForce(11111111110)).toEqual(9999999999);
        });
    });
})