function squareSum(numbers) {
	let total=0;
	for (const number of numbers) {
		total = total + (number**2);
	}
	return total;
	
	// 2nd solution i was thinking about, but not totally tested :
	// return (numbers.length > 0 ? numbers.reduce((acc, currentValue) => (acc + currentValue**2)) : 0);
}

console.log(squareSum([1, 2])); // Expected output: 5
console.log(squareSum([0, 3, 4, 5])); // Expected output: 50
console.log(squareSum([])); // Expected output: 0
