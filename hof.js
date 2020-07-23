import SCRIPTS from './scripts';

/*
	takes a character code and check through scripts data to see which character has a range that the code falls in
	if found it returns the details of the character
	else it returns null
 */
export function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
return null;
}

export function countBy(items, groupName) {
	let counts = [];
		for (let item of items) {
			let name = groupName(item);
			let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}


//gets the script of text passed to it
function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");
	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return "No scripts found";
	return scripts.map(({name, count}) => {
	return `${Math.round(count * 100 / total)}% ${name}`;
	}).join(", ");
}

console.log(textScripts('latin'));