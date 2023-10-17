var correct_answers = ["she wants to build a good credit rating", "a digital camera", "interest rates are often very high", "$18,000", "come up a financial management plan"];
let score = 0;
let sum = 0;
let gameOver = false; // Variable to track game over state

function checkAnswer(element, questionIndex, answerIndex) {
    if (gameOver) {
        // If the game is over, do nothing
        return;
    }

    var correctAnswer = answerIndex;

    if (correctAnswer === 1) {
        element.style.backgroundColor = "green";
        score += 1;
        sum += 1;
    } else {
        element.style.backgroundColor = "red";
        sum += 1;

        var answerItems = element.parentNode.querySelectorAll('.test_item');
        for (var i = 0; i < answerItems.length; i++) {
            for (var j = 0; j < correct_answers.length; j++) {
                if (i === correct_answers[j]) {
                    answerItems[i].style.backgroundColor = "green";
                    break;
                }
            }
        }
    }

    if (sum === 5) {
        alert("Your score is: " + score);
        gameOver = true; // Set the game over state
    }
}
