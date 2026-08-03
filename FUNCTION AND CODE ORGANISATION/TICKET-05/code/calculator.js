/** 
 * Adds two numbers. 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The sum 
 */
function add(a, b) {
    return a + b;
}
/**
 * Subtracts the second number from the first. 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The difference 
 */
function subtract(a, b) {
    return a - b;
}
/**
 * Multiplies two numbers. 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The product 
 */
function multiply(a, b) {
    return a * b;
}
/**
 * Divides the first number by the second. 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The quotient 
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
/**
 * Raises the first number to the power of the second number. 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} The result 
 */
function exponent(a, b) {
    return Math.pow(a, b);
}
/**
 * Calculates the square root of a number. 
 * @param {number} a 
 * @returns {number} The square root 
 */
function squareRoot(a) {
    if (a < 0) {
        throw new Error("Square root of negative number is not allowed.");
    }
    return Math.sqrt(a);
}

let memory = 0; // Initialize memory variable

/**
 * Stores a value in memory.
 * @param {number} value - The value to store in memory.
 */
function storeMemory(value) {
    memory = value;
}

/**
 * Recalls the value stored in memory.
 * @returns {number} The value stored in memory.
 */
function recallMemory() {
    return memory;
}
/**
 * Clears the value stored in memory.
 */
function clearMemory() {
    memory = 0;
}

const history = []; // Initialize history array

/**
 * Adds an operation and its result to the history.
 * @param {string} operation - The operation performed.
 * @param {number} result - The result of the operation.
 */
function addToHistory(operation, result) {
    history.push({ operation, result });

    if (history.length > 10) {
        history.shift();
    }
}


/**
 * Displays the history of operations.
 */
function displayHistory() {
    if (history.length === 0) {
        console.log("No history available.");
        return;
    }
    console.log("Calculator History:");
    history.forEach((item, index) => {
        console.log(`${index + 1}. ${item.operation} = ${item.result}`);
    });
    
}
/**
 * Clears the history of operations.
 */
function clearHistory() {
    history.length = 0; // Clear the history array
}

let result = add(10, 5); 
console.log("10 + 5 =", result); 
addToHistory("10 + 5", result); 
result = subtract(10, 5); 
console.log("10 - 5 =", result); 
addToHistory("10 - 5", result); 
result = multiply(10, 5); 
console.log("10 * 5 =", result); 
addToHistory("10 * 5", result); 
result = divide(10, 5); 
console.log("10 / 5 =", result); 
addToHistory("10 / 5", result); 
result = exponent(2, 3); 
console.log("2 ^ 3 =", result); 
addToHistory("2 ^ 3", result); 
result = squareRoot(25); 
console.log("√25 =", result); 
addToHistory("√25", result);

storeMemory(result);
console.log("Memory stored:", recallMemory());

clearMemory();
console.log("Memory after clearing:", recallMemory());

displayHistory();

clearHistory();

console.log("History after clearing:");
displayHistory();
