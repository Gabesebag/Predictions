let questionType = "colour";
let questionIndicator = 0;
let questionIndex = 0;
let answerBoxes = [];

// Answerboxes class
class Answerboxes {
    constructor(x, y, w, h, text, col, value = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = text;
        this.col = col;
        this.value = value;  // Store the point/color value
    }
    
    display() {
        fill(this.col);
        rect(this.x, this.y, this.w, this.h, 10);
        
        fill('black');
        textSize(16);
        textAlign(CENTER, CENTER);
        text(this.text, this.x + this.w / 2, this.y + this.h / 2);
    }
}
    isClicked() {
        return (mouseX >= this.x && mouseX <= this.x + this.w &&
                mouseY >= this.y && mouseY <= this.y + this.h);
        }
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
    // Q1 fork - button 0 (Sun) goes RIGHT path, button 1 (Moon) goes LEFT path
    if (currentScreen === Q1) {
        if (index === 0) {
            currentScreen = Q3;  // Sun → right path (Q3)
        } else {
            currentScreen = Q2;  // Moon → left path (Q2)
        }
    }
    // LEFT PATH
    else if (currentScreen === Q2) currentScreen = Q4;
    else if (currentScreen === Q4) currentScreen = Q5;
    else if (currentScreen === Q5) currentScreen = "titleScreen";
    
    // RIGHT PATH
    else if (currentScreen === Q3) currentScreen = Q6;
    else if (currentScreen === Q6) currentScreen = Q7;
    else if (currentScreen === Q7) currentScreen = "titleScreen";
    
    // NUMBER QUESTIONS
    else if (currentScreen === NQ1) currentScreen = NQ2;
    else if (currentScreen === NQ2) currentScreen = NQ3;
    else if (currentScreen === NQ3) currentScreen = NQ4;
    else if (currentScreen === NQ4) currentScreen = NQ5;
    else if (currentScreen === NQ5) currentScreen = NQ6;
    else if (currentScreen === NQ6) currentScreen = NQ7;
    else if (currentScreen === NQ7) currentScreen = "titleScreen";

    questionIndex++;
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    console.log("Setup called - Canvas created");
}

function draw() {
    background('black');
    
    // Display current screen
    if (currentScreen === "titleScreen") {
        titleScreen();
    } else if (currentScreen === "results") {
        resultsScreen();
    } else if (currentScreen >= Q1 && currentScreen <= Q7) {
        colourQAs();
    }
    
    // Display answer boxes if we're on a question screen
    answerBoxes.forEach(box => box.display());
}

function mousePressed() {
    // Check if we're on the title screen and if the start buttons are clicked
    if (currentScreen === "titleScreen") {
        let buttonX = windowWidth / 2 - 100;
        let buttonWidth = 200;

        // Check if name input box clicked
        if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && 
            mouseY >= height / 2 + 20 && mouseY <= height / 2 + 60) {
            nameInputFocused = true;
            return;
        }

        // Check if Start button clicked
        if (mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= 400 && mouseY <= 460) {
            nameInputFocused = false;  // Unfocus text box
            if (playerName.length > 0) {  // Only proceed if name is entered
                currentScreen = Q1;
                questionType = "colour";
                questionIndex = 1;
            }
            return;
        }
        
        // Clicked elsewhere on title screen - unfocus text box
        nameInputFocused = false;
    }
    
    // Check if on results screen and "Play Again" button clicked
    if (currentScreen === "results") {
        if (mouseX >= windowWidth / 2 - 80 && mouseX <= windowWidth / 2 + 80 &&
            mouseY >= height - 80 && mouseY <= height - 30) {
            // Reset for new game
            playerName = "";
            nameInputFocused = false;
            A = 0; B = 0; C = 0; D = 0; E = 0; F = 0; G = 0;
            totalScore = 0;
            resultColour = "Blue";
            //currentScreen = "titleScreen";
            return;
        }
    }

    answerBoxes.forEach((box, index) => {
        if (box.isClicked()) {
            handleAnswerBoxClick(index);
        }
    });
}

function keyPressed() {
    // Only handle text input when focused on title screen
    if (currentScreen === "titleScreen" && nameInputFocused) {
        if (keyCode === BACKSPACE) {
            playerName = playerName.slice(0, -1);  // Remove last character
        } else if (keyCode !== SHIFT && keyCode !== CONTROL && keyCode !== ALT && key.length === 1) {
            // Add character if it's not a special key and name is less than 20 characters
            if (playerName.length < 20) {
                playerName += key;
            }
        }
        return false;  // Prevent default key behavior
    }
}

function handleAnswerBoxClick(index) {
    // Get the value from the clicked button and store it
    let selectedValue = answerBoxes[index].value;
    
    // Q1 fork - Store answer in A, then branch
    if (currentScreen === Q1) {
        A = selectedValue;  // Store answer value
        if (index === 0) {
            currentScreen = Q3;  // Sun → right path (Q3)
        } else {
            currentScreen = Q2;  // Moon → left path (Q2)
        }
    }
    // LEFT PATH
    else if (currentScreen === Q2) {
        B = selectedValue;
        currentScreen = Q4;
    }
    else if (currentScreen === Q4) {
        C = selectedValue;
        currentScreen = Q5;
    }
    else if (currentScreen === Q5) {
        D = selectedValue;
       // currentScreen = "results";  // Go to results screen
    }
    
    // RIGHT PATH
    else if (currentScreen === Q3) {
        E = selectedValue;
        currentScreen = Q6;
    }
    else if (currentScreen === Q6) {
        F = selectedValue;
        currentScreen = Q7;
    }
    else if (currentScreen === Q7) {
        G = selectedValue;
        calculateResult();  // Calculate final result
        currentScreen = "results";  // Show results screen
    }
}

function calculateResult() {
    // Sum all the answer values
    totalScore = A + B + C + D + E + F + G;
    
    // Determine colour based on total score
    if (totalScore >= 60) {
        resultColour = "Red";
    } else if (totalScore >= 50) {
        resultColour = "Orange";
    } else if (totalScore >= 40) {
        resultColour = "Yellow";
    } else if (totalScore >= 30) {
        resultColour = "Green";
    } else if (totalScore >= 20) {
        resultColour = "Blue";
    } else {
        resultColour = "Purple";
    }
    questionIndex++;
}