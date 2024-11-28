var Ghost = function () {
	const colors = ["white", "purple", "yellow", "red"];
	this.color = colors[Math.floor(Math.random() * colors.length)];
};

ghost = new Ghost();
console.log(ghost);
