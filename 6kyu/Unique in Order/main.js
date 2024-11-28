var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array
	console.log(iterable);
	let array = ['A'];
	let arrayIndex = 0;
	for (var i = 0; i < iterable.length; i++) {
		console.log(`${iterable.charAt(i)} - ${array[i - 1]}`);
		if (array[i-1] !== iterable.charAt(i)) {
			console.log(`${iterable.charAt(i)} - ${array[i-1]}`);
			arrayIndex++;
			console.log(arrayIndex)
			array.push(iterable.charAt(i));
		}
	}
	console.log(array);
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3]));       // [1, 2, 3]
