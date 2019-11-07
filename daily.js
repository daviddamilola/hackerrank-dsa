/*
 *Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
 * 
 *
 */

const addsUp = (arr, k) => {
	for(let i=0; i<arr.length; i++){
	if(arr.includes(k-arr[i])){
		return true;
		break;
	}
	}
	return false;
}

console.log(addsUp([10, 15, 3, 7],37))

/*
 * This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
 *
 */

const multiples = (arr) => {
return arr.map(
    (each, i) => arr.filter(
        (x, z) => i != z
    ).reduce(
	(acc, curr) => acc * curr, 1
    )
)
}

console.log('mul',multiples([1, 2, 3, 4, 5]));
