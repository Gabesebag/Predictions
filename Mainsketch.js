function setup() {
	createCanvas(windowWidth, windowHeight);
}

let answer = A + B + C + D + E + F + G + H + I + J

function draw() {
    clear();
	background('white')


    switch(currentScreen){
        case 0:
            // Code for the start screen
            break;
        case 1:
            colour();
            break;
        case 2:
            number();
            break;
    }
}
