function colourQAs() {
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
    if (currentScreen == Q1) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Which one do you visually like more?", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "Sun", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "Moon", color(173, 216, 230)));
    }

    // LEFT PATH
    // Left - Question 2
    if (currentScreen == Q2) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Which scenery is more relaxing for you?", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "Gentle breeze", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "Bright night sky", color(173, 216, 230)));
    }

    // Left - Question 4
    if (currentScreen == Q4) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Would you say you are practical and down to Earth?", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "Yes", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "No", color(173, 216, 230)));
    }

    // Left - Question 5
    if (currentScreen == Q5) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Which one fits your personality the most?", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "Calm", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "Creative", color(173, 216, 230)));
    }

    // RIGHT PATH
    // Right - Question 3
    if (currentScreen == Q3) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Do you like it when an art work is gentle on your eyes or bold?", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "Gentle", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "Bold", color(173, 216, 230)));
    }

    // Right - Question 6
    if (currentScreen == Q6) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Are you more optimistic and cheerful by nature?", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "Yes", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "No", color(173, 216, 230)));
    }

    // Right - Question 7
    if (currentScreen == Q7) {
        textSize(32);
        textAlign(CENTER, CENTER);
        text("Would you consider yourself flamboyant? (easier time getting along with others)", width / 2, height / 2 - 140);

        answerBoxes.push(new Answerboxes(buttonX, 400, buttonWidth, 60, "Yes", color(173, 216, 230)));
        answerBoxes.push(new Answerboxes(buttonX, 480, buttonWidth, 60, "No", color(173, 216, 230)));
    
    }
}