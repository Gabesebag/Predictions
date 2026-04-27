function colourQAs() {
    //fork
	if (currentScreen == Q1) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Sun", windowWidth / 2, 430);
		text("Moon", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
			A = a1
		}
	}
    //left 
	if (currentScreen == Q2) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Gentle breeze", windowWidth / 2, 430);
		text("Bright night sky", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
		B = b1
		}
	}
    //Right
	if (currentScreen == Q3) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Gentle", windowWidth / 2, 430);
		text("Bold", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
		C = c1
		}
	}
    //Left
	if (currentScreen == Q4) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Yes", windowWidth / 2, 430);
		text("No", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
		D = d1
		}
	}
    //Left
	if (currentScreen == Q5) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Calm", windowWidth / 2, 430);
		text("Creative", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
		E = e1
		}
	}
    //Right
	if (currentScreen == Q6) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Yes", windowWidth / 2, 430);
		text("No", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
		F = f1
		}
	}
    //Right
	if (currentScreen == Q7) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Yes", windowWidth / 2, 430);
		text("No", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
		G = g1
		}
	}
    //incase
	if (currentScreen == Q8) {
		fill('lightblue');
		rect(windowWidth / 2 - 100, 400, 200, 60, 10);
		rect(windowWidth / 2 - 100, 480, 200, 60, 10);

		text("Colour", windowWidth / 2, 430);
		text("Number", windowWidth / 2, 510);
		if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
		H = h1
		}
	}
}