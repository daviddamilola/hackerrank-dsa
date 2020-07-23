import { countBy, characterScript } from './hof.js'
import SCRIPT from './scripts.js'
//flatten 

const flatten = (array = []) => {
	return array.reduce((ini, next) => {
       return [...ini, ...next]
	}, [])
}


// console.log(flatten([[2,4], [6,8]]))

/*
	Write a higher-order function loop that provides something like a for loop
	statement. It takes a value, a test function, an update function, and a body
	function. Each iteration, it first runs the test function on the current loop value
	and stops if that returns false. Then it calls the body function, giving it the
	current value. Finally, it calls the update function to create a new value and
	starts from the beginning.
	When defining the function, you can use a regular loop to do the actual
	looping.
 */

function forLoop (val, test, update, body) {
	let value = val
	while (test(value)) {
		// statement
		value = update(value)
		body(value)
	}
	
}
// let local=100

// console.log(forLoop(local, (testVal) => testVal > 0, (x) => x - 10 , (currVal) =>  console.log(currVal)))

/*
Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
 */

function every(array=[], predicate=() => {}){
	let result = true;
	for(var i = 0 ; i < array.length; i++){
		if(!predicate(array[i], i)){
			result = false;
			break;
		}
	}
	return result;
}

//every sum version

function everySome(array, predicate){
	//some is the opposite of every
	return !array.some(elem => (!predicate(elem)))
}

// console.log(everySome(['baz', 'baz'], (each) => each === 'baz'))

/*
Write a function that computes the dominant writing direction in a string of
text.
 */
function dominantDirection(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");
	
	const dominant = scripts.reduce((ini, curr) => {
		const detail = SCRIPT.find(each => each.name == curr.name)
		if(detail.direction === 'rtl'){
	      	ini[0].push(detail)
	      	return ini
		    }
			  // if(detail.direction === 'rtl') return ini[0].push(detail)
			  if(detail.direction === 'ltr'){
			  	ini[1].push(detail)
			  	return ini
			  }
		}, [[], []])

	return dominant[0].length > dominant[1].length? 'rtl' : 'ltr'
}

console.log(dominantDirection('green brown fox'))