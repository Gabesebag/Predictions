function titleScreen() {
    fill('white');
    textSize(32);
    textAlign(CENTER, CENTER);
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
