let questionType = "colour";
let questionIndicator = 0;
let questionIndex = 0;
let answerBoxes = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}



function draw() {
    clear();
	background('Black');

    // Display the current screen
    if (currentScreen === "titleScreen") {
        titleScreen();
    } else if (currentScreen >= Q1 && currentScreen <= Q7) {
        colourQAs();
    } else if (currentScreen >= NQ1 && currentScreen <= NQ7) {
        numberQA();
    }
    // Display answer boxes if we're on a question screen
    answerBoxes.forEach(box => box.display());
}

function mousePressed() {
    // Check if we're on the title screen and if the start buttons are clicked
    if (currentScreen === "titleScreen") {
        let buttonX = windowWidth / 2 - 100;
        let buttonWidth = 200;

        if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
            currentScreen = Q1;
            questionType = "colour";
            questionIndex = 1;
            return;
        }

        if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 480 && mouseY <= 540) {
            currentScreen = NQ1;
            questionType = "number";
            questionIndex = 1;
            return;
        }
    }

    answerBoxes.forEach((box, index) => {
        if (box.isClicked()) {
            handleAnswerBoxClick(index);
        }
    });
}

function handleAnswerBoxClick(index) {
    // record the answer if needed, then move to next question
    if (currentScreen === Q1) currentScreen = Q2;
    else if (currentScreen === Q2) currentScreen = Q3;
    else if (currentScreen === Q3) currentScreen = Q4;
    else if (currentScreen === Q4) currentScreen = Q5;
    else if (currentScreen === Q5) currentScreen = Q6;
    else if (currentScreen === Q6) currentScreen = Q7;
    else if (currentScreen === Q7) currentScreen = "titleScreen";
    else if (currentScreen === NQ1) currentScreen = NQ2;
    else if (currentScreen === NQ2) currentScreen = NQ3;
    else if (currentScreen === NQ3) currentScreen = NQ4;
    else if (currentScreen === NQ4) currentScreen = NQ5;
    else if (currentScreen === NQ5) currentScreen = NQ6;
    else if (currentScreen === NQ6) currentScreen = NQ7;
    else if (currentScreen === NQ7) currentScreen = "titleScreen";

    questionIndex++;
}
