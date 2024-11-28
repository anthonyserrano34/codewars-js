function disemvowel(str) {
	return str.match(/[^aeiou]/gi).join("");
}

console.log(disemvowel("This website is for losers LOL!")); // Expected: "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // Expected: "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?")); // Expected: "Wht r y,  cmmnst?"
