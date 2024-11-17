function highAndLow(numbers) {
	numbers = numbers.split(" ");
	let lowest = numbers[0], highest = numbers[0];
	numbers.forEach((number) => {
		if (parseInt(number) > highest){
			highest = number;
		}
		if (parseInt(number) < lowest){
			lowest = number;
		}
	  });
	  return `${highest} ${lowest}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
console.log(highAndLow("1 2 3")); // "3 1"
