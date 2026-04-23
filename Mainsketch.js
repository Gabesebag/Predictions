function setup() {
	createCanvas(windowWidth, windowHeight);
	currentScreen = 0;  // Start with title screen
}


function draw() {
    clear();
	background('Black')
    titleScreen()

    switch(currentScreen){
        case 0:
            titleScreen();
            break;
        case 1:
            colour();
            break;
        case 2:
            number();
            break;
    }
}
