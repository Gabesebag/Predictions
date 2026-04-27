function numberQA(){
    let buttonX = windowWidth / 2 - 100;
    let buttonWidth = 200;

    // Display current question number in top left
    fill('white');
    textSize(16);
    textAlign(LEFT, TOP);
    text("Q: " + currentScreen, 20, 20);

    // Clear answer boxes for this question
    answerBoxes = [];

    // FORK - Question 1
    if (currentScreen == NQ1) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("hi", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "hi", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "hi", color(173, 216, 230)));
    }

    // LEFT PATH
    // Left - Question 2
    if (currentScreen == NQ2) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("hi", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "hi", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "hi", color(173, 216, 230)));
    }

    // Left - Question 4
    if (currentScreen == NQ4) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("hi", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "hi", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "hi", color(173, 216, 230)));
    }

    // Left - Question 5
    if (currentScreen == NQ5) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("hi", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "hi", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "hi", color(173, 216, 230)));
    }

    // RIGHT PATH
    // Right - Question 3
    if (currentScreen == NQ3) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("hi", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "hi", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "hi", color(173, 216, 230)));
    }

    // Right - Question 6
    if (currentScreen == NQ6) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("hi", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "hi", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "hi", color(173, 216, 230)));
    }

    // Right - Question 7
    if (currentScreen == NQ7) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("hi", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "hi", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "hi", color(173, 216, 230)));
    }
}