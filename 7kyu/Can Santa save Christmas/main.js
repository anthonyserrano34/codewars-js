function determineTime(durations) {
	//have fun with coding ^.^
	let sum = 0;
	const max = 240000;
	for (const duration of durations) {
		sum += parseInt(duration.replaceAll(':',''))
	}
	return sum>max ? false : true;
}

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"])); // true
console.log(determineTime([])); // true
console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"])); // true
console.log(determineTime(["12:00:00", "12:00:00"])); // true
console.log(determineTime(["12:00:00", "12:00:01"])); // false
console.log(determineTime(["06:00:00","12:00:00","06:30:00"])); // false
