function alphabetPosition(text) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        if (alphabet.includes(text.toLowerCase().charAt(i))) {
            newText = newText + (alphabet.indexOf(text.toLowerCase().charAt(i)) + 1) + " ";
            console.log(newText)
        }
    }
    newText = newText.slice(0 ,-1);
    return newText;
}