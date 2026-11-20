
 // Generate a secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test value for the user's guess
let userGuess = 25;

// Compare the guess with the secret number
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 of the secret number
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too high");
    } else if (userGuess < secretNumber && userGuess >= 1 && userGuess <= 50) {
        console.log("Too low");
    } else {
        console.log("Please enter a number between 1 and 50.");
    }
}
