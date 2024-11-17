function solution(str) {
	let newStr = "";
	for (var i = str.length -1; i >= 0; i--){
		newStr = newStr+str[str.length - 1];
		str = str.slice(0, -1);
	}
	return newStr;
}

// solution("world"); // 'dlrow'
// console.log(solution('world')); // 'dlrow'
// console.log(solution('hello')); // 'olleh'
// console.log(solution('')); // ''
// console.log(solution('h')); // 'h'
