function swap(string) {
	const vowels = ["a", "e", "i", "o", "u"];
	let newWord = "";
	for (let i = 0; i < string.length; i++) {
		vowels.includes(string.charAt(i)) ? newWord += string.charAt(i).toUpperCase() : newWord += string.charAt(i);
	}
	return newWord;
}

console.log(swap("")); // ""
console.log(swap("   @@@")); // "   @@@"
console.log(swap("HelloWorld!")); // "HEllOWOrld!"
console.log(swap("Sunday")); // "SUndAy"
console.log(swap("Codewars")); // "COdEwArs"
console.log(swap("Monday")); // "MOndAy"
console.log(swap("Friday")); // "FrIdAy"
console.log(swap("abracadabra")); // "AbrAcAdAbrA"
console.log(swap("AbrAcAdAbrA")); // "AbrAcAdAbrA"
console.log(swap("ABRACADABRA")); // "ABRACADABRA"
console.log(swap("aBRaCaDaBRa")); // "ABRACADABRA"