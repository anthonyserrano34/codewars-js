function opposite(number) {
	//your code here
	return number >= 0 ? -Math.abs(number) : Math.abs(number);
  }

console.log(opposite(1)); // Expected output: -1
console.log(opposite(0)); // Expected output: 0
console.log(opposite(4.25)); // Expected output: -4.25
console.log(opposite(3.3333333)); // Expected output: -3.3333333
console.log(opposite(-12525220.3325)); // Expected output: 12525220.3325
console.log(opposite(-5)); // Expected output: 5