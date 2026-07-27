let num = 10;
if(num > 0) {
    console.log(`The number ${num} is positive.`);
} else if(num < 0) {
    console.log(`The number ${num} is negative.`);
}

let score = 85;
let grade;

if(score >= 70) {
    grade = 'A';
} else if(score >= 60) {
    grade = 'B';
} else if(score >= 50) {
    grade = 'C';
} else if(score >= 45) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log(`Score ${score}: Grade ${grade}`);

let age = 18;
let isRegistered = true;
if(age >= 18) {
    if(isRegistered) {
        console.log("You are eligible to vote and registered.");
    } else {
        console.log("You are eligible to vote, but you are not registered.");
    }
} else {
    console.log("You are not eligible to vote.");
}
