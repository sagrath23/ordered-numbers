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

// brute force
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
	console.log(`${lastBound} has ${lastBoundLength} digits`);
	for(let i = 0; i < lastBoundLength; i++) {
		console.log(`current digit: ${baseNumber[i]}`);
		console.log(`matchPattern: ${limits[lastBoundLength - i]}`);
		const innerBound = baseNumber[i] * limits[lastBoundLength - i];
		console.log(`inner bound: ${innerBound}`);
		if (lastBound < innerBound || innerBound === 0) {
			console.log(`${lastBound} is in interval of ${innerBound} unordered numbers`);
			result.push((baseNumber[i] - 1) > 0 ? (baseNumber[i] - 1) : 9);
			lastBound = lastBound - (baseNumber[i] * bases[lastBoundLength - i]);
			console.log(`new lastBound: ${lastBound}`);
			console.log(`result state: ${result}`);
		} else {
			console.log(`${lastBound} isn't in interval of ${innerBound} unordered numbers`)
			//pass to check next digit
			result.push(baseNumber[i]);
			lastBound = lastBound - (baseNumber[i] * bases[lastBoundLength - i]);
			console.log(`new lastBound: ${lastBound}`);
			console.log(`result state: ${result}`);
		}
	}
	return Number(result.join(''));
};