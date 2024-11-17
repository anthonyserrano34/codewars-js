function makeNegative(num) {
	return num <= 0 ? num : -num;
}

console.log(makeNegative(42)); // Expected: -42
console.log(makeNegative(1)); // Expected: -1
console.log(makeNegative(-5)); // Expected: -5
console.log(makeNegative(0)); // Expected: 0
console.log(makeNegative(0.12)); // Expected: -0.12
