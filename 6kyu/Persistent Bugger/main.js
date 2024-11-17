function persistence(num) {
	let multiply = 0;
	while (num.toString().length !== 1) {
		multiply++;
		num = num.toString().split("").map(Number).reduce((acc, digit) => acc * digit, 1);
	}
	return multiply;
}