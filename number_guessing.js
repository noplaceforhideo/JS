// Number Guessing Game
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = null;
let attempts = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);
    attempts++;
    if (guess > randomNumber) {
        console.log("Too high!");
    } else if (guess < randomNumber) {
        console.log("Too low!");
    } else if (guess === randomNumber) {
        console.log(`Correct! You guessed the number in ${attempts} attempts.`);
    } else {
        console.log("Please enter a valid number.");
    }
}