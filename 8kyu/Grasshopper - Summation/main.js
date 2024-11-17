var summation = function (num) {
	// Code here
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum = sum + i;
	}
	return sum;
};

console.log(summation(1)); // Expected: 1
console.log(summation(2)); // Expected: 3
console.log(summation(8)); // Expected: 36
