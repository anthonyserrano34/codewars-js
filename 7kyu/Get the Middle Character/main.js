function getMiddle(s) {
	//Code goes here!
	return s.length % 2 === 0 ? s.slice(s.length/2-1,s.length/2+1) : s.slice(s.length/2,s.length/2+1);
}

console.log(getMiddle("test")); // "es"
console.log(getMiddle("testing")); // "t"
console.log(getMiddle("middle")); // "dd"
console.log(getMiddle("A")); // "A"