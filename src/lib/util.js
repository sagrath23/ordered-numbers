import { bases, limits } from './bases';

/**	Creates a callback that proxies node callback style arguments to an Express Response object.
 *	@param {express.Response} res	Express HTTP Response
 *	@param {number} [status=200]	Status code to send on success
 *
 *	@example
 *		list(req, res) {
 *			collection.find({}, toRes(res));
 *		}
 */
export function toRes(res, status=200) {
	return (err, thing) => {
		if (err) return res.status(500).send(err);

		if (thing && typeof thing.toObject==='function') {
			thing = thing.toObject();
		}
		res.status(status).json(thing);
	};
}

const checkNumber = (numberToCheck) => {
	const splitNumbers = `${numberToCheck}`.split('');
	const sum = splitNumbers.reduce((prev, cur, index) => {
		if(index) {
			return cur >= splitNumbers[index -1] ? prev : prev +1;
		} else {
			return prev
		}
	}, 0);
	return sum === 0;
};

// brute force: check if current number match with ordered number definition
// if number don't match, then decrement by one and test again.
export const checkLastOrderedNumberByBruteForce = (lastBound) => {
	let pivot = lastBound;
	while(!checkNumber(pivot)) {
		pivot --;
	}
	return pivot;
}

export const checkLastOrderedNumberByPattern = (lastBound) => {
	// first, we get the number of digits of lastBound
	const lastBoundLength = Math.log(lastBound) * Math.LOG10E + 1 | 0,
		baseNumber =`${lastBound}`;

	//let result = `${lastBound}`;
	const result = [];
	for(let i = 0; i < lastBoundLength; i++) {
		const innerBound = baseNumber[i] * limits[lastBoundLength - i];
		if (lastBound < innerBound || innerBound === 0) {
			result.push((baseNumber[i] * bases[lastBoundLength - i]) -1);
			break;
		} else {
			//pass to check next digit
			result.push(baseNumber[i]);
			lastBound = lastBound - (baseNumber[i] * bases[lastBoundLength - i]);
		}
	}
	return Number(result.join(''));
};