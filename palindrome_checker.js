// Palindrome Checker
const str = prompt("Enter a string:").toLowerCase().replace(/[^a-z0-9]/g, '');
const reversedStr = str.split('').reverse().join('');

if (str === reversedStr) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}