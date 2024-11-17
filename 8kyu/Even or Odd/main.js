function evenOrOdd(number) {
	return number % 2 === 0 ? "Even" : "Odd";
}

// Personal note :
// In JS the === operator checks for strict equality, meaning both the value and the type must be the same. When using the modulus operator %, the result of number % 2 will always be either 0 or 1 for any integer input.

// IMPORTANT : The value -0 is considered equal to 0 in JavaScript. This is because -0 and 0 are treated as the same value when it comes to comparison operations. Therefore, number % 2 === 0 will return true for both 0 and -0.

// console.log(-1 === 1); // Expected: false
// console.log(-0 === 0); // Expected: true

console.log(evenOrOdd(2)); // Expected: "Even"
console.log(evenOrOdd(7)); // Expected: "Odd"
console.log(evenOrOdd(-7)); // Expected: "Odd"
console.log(evenOrOdd(0)); // Expected: "Even"
console.log(evenOrOdd(-42)); // Expected: "Even"
