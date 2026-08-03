/**
 * Reverse a string
 * @param {string} text - Input string
 * @returns {string} Reversed string
 * @example
 * reverseString("hello"); // "olleh"
 */
function reverseString(text) {
    return text.split('').reverse().join('');
}

/**
 * Count the number of words in a text
 * @param {string} text - Input text
 * @returns {number} Number of words
 * @example
 * countWords("Hello world"); // 2
 */
function countWords(text) {
    return text.split(" ").length;
}

/**
 * Check if a string is a palindrome
 * @param {string} text - Input text
 * @returns {boolean} True if palindrome, otherwise false
 * @example
 * isPalindrome("madam"); // true
 */
function isPalindrome(text) {
    return text === text.split('').reverse().join('');
}

/**
 * Check if a number is prime
 * @param {number} n - Number to check
 * @returns {boolean} True if prime, otherwise false
 * @example
 * isPrime(7); // true
 */
function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

/**
 * Calculate the factorial of a number
 * @param {number} n - Non-negative integer
 * @returns {number} Factorial of n
 * @example
 * factorial(5); // 120
 */
function factorial(n) {
    if (n < 0) {
        return undefined;
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

/**
 * Return the nth Fibonacci number
 * @param {number} n - Position in Fibonacci sequence
 * @returns {number} Fibonacci number
 * @example
 * fibonacci(6); // 8
 */
function fibonacci(n) {
    if (n < 0) {
        return undefined;
    }

    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let previous = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        let next = previous + current;
        previous = current;
        current = next;
    }

    return current;
}

/**
 * Remove duplicate items from an array
 * @param {Array} arr - Input array
 * @returns {Array} Array without duplicates
 * @example
 * removeDuplicates([1, 2, 2, 3]); // [1, 2, 3]
 */
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

/**
 * Find the median value of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Median value
 * @example
 * findMedian([1, 3, 2]); // 2
 */
function findMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}


/**
 * Check if an email address is valid
 * @param {string} email - Email address
 * @returns {boolean} True if valid, otherwise false
 * @example
 * isValidEmail("test@example.com"); // true
 */
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/**
 * Check if a phone number is valid
 * @param {string} phone - Phone number
 * @returns {boolean} True if valid, otherwise false
 * @example
 * isValidPhone("08012345678"); // true
 */
function isValidPhone(phone) {
    return /^(\+234|0)[789][01]\d{8}$/.test(phone);
}


// TESTING THE FUNCTIONS
console.log("reverseString:", reverseString("Ibrahim"));
console.log("countWords:", countWords("Ibrahim is a software developer"));
console.log("isPalindrome:", isPalindrome("Ibrahim"));

console.log("isPrime:", isPrime(7));
console.log("factorial:", factorial(5));
console.log("fibonacci:", fibonacci(8));

console.log("removeDuplicates:", removeDuplicates([1, 2, 2, 3, 3, 4]));
console.log("findMedian:", findMedian([5, 2, 8, 1, 4]));

console.log("isValidEmail:", isValidEmail("ibrahimshamsuddeen@gmail.com"));
console.log("isValidPhone:", isValidPhone("08127984428"));