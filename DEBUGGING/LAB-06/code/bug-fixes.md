# Bug #1

## Error type
Syntax error

## Problem
The function is missing a closing curly brace.

## Fixed code
```javascript
function greet(name) {
    console.log(`Hello,${name}`);
}
greet("Ibrahim");

## How I Debugged It
I checked the code and i noticed that it is missing its closing curly brace.I added the closing curly brace before calling function.


# Bug #2

## Error type
Logical error

## Problem
The loop runs 10 times, but the array only contains 5 elements. This causes 'Undefined' to be printed after the fifth element.

## Fixed code
```javascript
const numbers = [1,2,3,4,5];
for (let i = 0, i < numbers.length, i++){
    console.log(numbers[i]);
}

## How I Debugged It
I checked the number of elements in the array and i noticed that the loop was running beyond the array length. I changed i < 10 to i < numbers.length. 

# Bug #3

## Error type
Logical error

## Problem
The function is supposed to check if a number is even, but it checks if the remainder is 1. Even numbers have a remainder of 0 when divided by 2.

## Fixed Code
```javascript
function isEven(n) {
  return n % 2 === 0;
}

console.log(isEven(4));

## How I Debugged It
I tested the function with the number 4. Since 4 is even, the result is true. I noticed that the condition was checking for a remainder of 1, so I changed it to 0.

# Bug #4

## Error type
Type conversion error

## Problem
The value "5" is a string, not a number. JavaScript joins "5" and 10 together instead of adding them.

## Fixed Code
```javascript
const userInput = "5";
const result = Number(userInput) + 10;

console.log(result);

## How I Debugged It
I checked the value of userInput and noticed that it was stored as a string. I converted it to a number using Number() before adding 10.

# Bug #5

## Error type
Logical error

## Problem
The function receives an empty array. Since the array has no elements, there is no first or last item, so both values become undefined.

## Fixed Code
function getFirstAndLast(items) {
  if (items.length === 0) {
    return null;
  }

  const first = items[0];
  const last = items[items.length - 1];

  return { first, last };
}

const result = getFirstAndLast([]);

console.log(result);

## How I Debugged It
I noticed that the function was being called with an empty array. I added a condition to check if the array is empty before trying to get the first and last elements. If it is empty, the function returns null.






