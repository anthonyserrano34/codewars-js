function getCount(str) {
	const vowels = ["a", "e", "i", "o", "u"];
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str.charAt(i))) {
			count++;
		}
	}
	return count;
}

console.log(getCount("abracadabra")); // 5
