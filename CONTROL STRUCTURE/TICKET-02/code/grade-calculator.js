let score = 85;
let grade;
// Check if the score is valid.
if (score < 0 || score > 100) {
    console.log("Invalid score. Please enter a score between 0 and 100.");
// Grade A: Scores from 90 to 100.
} else if (score >= 90) {
    grade = 'A';
// Grade B: Scores from 80 to 89.
} else if(score >= 80) {
    grade = 'B';
// Grade C: Scores from 70 to 79.
}else if(score >= 70) {
    grade = 'C';
// Grade D: Scores from 60 to 69.
}else if(score >= 60) {
    grade = 'D';
// Grade F: Scores below 60.
}else {
    grade = 'F';
}   
// Display the score and corresponding grade.
console.log(`Score: ${score} - Grade: ${grade}`);