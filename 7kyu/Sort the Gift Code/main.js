sortGiftCode = (code) => code.split('').sort().join('');

console.log(sortGiftCode("abcdef")); // => "abcdef"
console.log(sortGiftCode("pqksuvy")); // => "kpqsuvy"
console.log(sortGiftCode("zyxwvutsrqponmlkjihgfedcba")); // => "abcdefghijklmnopqrstuvwxyz"
