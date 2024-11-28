function squareDigits(num) {
	let total = 0;
	for (var i = 0; i < num.toString().length; i++) {
		total = total + "" + parseInt(num.toString().charAt(i) ** 2);
	}
	return parseInt(total);
}

console.log(squareDigits(9119)); // 811181
console.log(squareDigits(0)); // 0
console.log(squareDigits(1234)); // 14916
console.log(squareDigits(5678)); // 25364964
