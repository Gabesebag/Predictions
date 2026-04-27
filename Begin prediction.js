function titleScreen() {
    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
<<<<<<< HEAD
    text("Welcome", width / 2, height / 2 - 240);
	 textSize(15);
    textAlign(CENTER, CENTER);
	 text("CHOOSE your favourite colour and number among these", width/2, height/2 - 185)
    text("Colour: red, yellow, orange, blue, purple, green, none ", width / 2, height / 2 - 160);
	 text("and", width/2, height/2 - 140)
	 text("Number: 1 - 100", width / 2, height / 2 - 120);

    // Display player name at top right
    fill('white');
    textSize(16);
    textAlign(RIGHT, TOP);
    text("Name: " + playerName, width - 20, 20);

    // Name input text box - highlight if focused
    if (nameInputFocused) {
        fill('yellow');  // Yellow when focused
    } else {
        fill('lightblue');  // Light blue when not focused
    }
    rect(windowWidth / 2 - 100, height / 2 + 20, 200, 40, 10);

    fill('black');
    textSize(16);
    textAlign(CENTER, CENTER);
    text(playerName.length > 0 ? playerName : "Enter your name", windowWidth / 2, height / 2 + 40);

    // Start button
    fill('lightblue');
    rect(windowWidth / 2 - 100, 400, 200, 60, 10);

    fill('black');
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Start", windowWidth / 2, 430);
}

function resultsScreen() {
    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Your Prediction Results", width / 2, height / 2 - 140);

    // Display player name
    fill('white');
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Player: " + playerName, width / 2, height / 2 - 80);

    // Display calculated colour
    fill('white');
    textSize(28);
    textAlign(CENTER, CENTER);
    text("Your Colour:", width / 2, height / 2 - 20);

    fill('white');
    textSize(48);
    textAlign(CENTER, CENTER);
    text(resultColour, width / 2, height / 2 + 50);

    // Display total score
    fill('white');
    textSize(20);
    textAlign(CENTER, CENTER);
    text(resultnumber, width / 2, height / 2 + 120);

    // Display answer breakdown
    fill('lightgray');
    textSize(14);
    textAlign(LEFT, TOP);
    text("Answers: A=" + A + " B=" + B + " C=" + C + " D=" + D + " E=" + E + " F=" + F + " G=" + G, 20, 20);

    // Play again button
    fill('lightblue');
    rect(windowWidth / 2 - 80, height - 80, 160, 50, 10);

    fill('black');
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Play Again", windowWidth / 2, height - 55);
}
=======
    text("Welcome", width / 2, height / 2 - 140);
	 textSize(15);
    textAlign(CENTER, CENTER);
	 text("CHOOSE", width/2, height/2 - 85)
    text("Colour: red, yellow, orange, blue, purple, green, none ", width / 2, height / 2 - 60);
	 text("or", width/2, height/2 - 40)
	 text("Number: 1 - 100", width / 2, height / 2 - 20);
    textSize(20);
    text("Which one do you want to choose?", width / 2, height / 2 + 35);

    // Draw the options
	 //(x, y, w, h, text, colour)
    fill('lightblue');
    rect(windowWidth/2 - 100, 400, 200, 60, 10);
    rect(windowWidth/2 - 100, 480, 200, 60, 10);

    fill('black');
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Colour", windowWidth/2, 430);
    text("Number", windowWidth/2, 510);
}
>>>>>>> e6969dfface5f265d9fc7812c16f275d96b71725
