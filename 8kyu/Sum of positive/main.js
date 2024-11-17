function positiveSum(arr) {
	return arr.filter((num) => num > 0).length > 0 ? arr.filter((num) => num > 0).reduce((acc, digit) => acc + digit) : 0;
}

// positiveSum([1,2,3,4,5]);
console.log(positiveSum([1, 2, 3, 4, 5])); // Expected output: 15
console.log(positiveSum([1, -2, 3, 4, 5])); // Expected output: 13
console.log(positiveSum([])); // Expected output: 0
console.log(positiveSum([-1, -2, -3, -4, -5])); // Expected output: 0
console.log(positiveSum([-1, 2, 3, 4, -5])); // Expected output: 9
