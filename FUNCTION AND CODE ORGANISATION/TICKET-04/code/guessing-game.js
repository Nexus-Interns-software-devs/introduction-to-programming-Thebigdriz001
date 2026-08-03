secretNumber = 42; // The secret number to guess
guessCount = 0; // Initialize guess count
function checkGuess(guess) { // Function to check the user's guess
    guessCount++; // Increment guess count
    if (guess < secretNumber) { // If guess is less than secret number
        return "Too low!"; // Return "Too low!" message
    } else if (guess > secretNumber) { // If guess is greater than secret number
        return "Too high!"; // Return "Too high!" message
    } else { // If guess is equal to secret number
        return "Correct!"; // Return "Correct!" message
    }
    
}  

console.log("guess 50: " + checkGuess(50)); // Example usage
console.log("guess 30: " + checkGuess(30)); // Example usage
console.log("guess 100: " + checkGuess(100)); // Example usage
console.log("guess 1: " + checkGuess(1)); // Example usage
console.log("guess 42: " + checkGuess(42)); // Example usage
console.log("you won in " + guessCount + " guesses!"); // Example usage



