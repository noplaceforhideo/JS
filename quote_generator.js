// Random Quote Generator
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The only way to do great work is to love what you do.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Believe you can and you're halfway there."
];

const randomIndex = Math.floor(Math.random() * quotes.length);
console.log(quotes[randomIndex]);