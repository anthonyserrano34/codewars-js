function calculator(a, b, sign) {
	if (typeof a === "number" && typeof b === "number") {
		const signs = ["+", "-", "*", "/"];
		if (signs.includes(sign)) return eval(a + sign + b);
	}
	return "unknown value";
}

calculator(1, 2, "+");
calculator(1, 2, "&");
calculator(1, "k", "*");


// Personal note : can be done with switch case instead of eval function to avoid security issues (eval is evil).
// Example below:
// function calculator(a,b,sign){
// 	if ((typeof a === "number") && (typeof b === "number")) {
//     switch (sign) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     }
//   }
//   return "unknown value";
// }