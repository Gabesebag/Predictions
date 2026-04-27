class Answerboxes {
    constructor(x, y, width, height, answerText, colour) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.answerText = answerText;
        this.colour = colour;
    }

    display() {
        fill(this.colour || 255);
        rect(this.x, this.y, this.width, this.height, 10);
        fill('black');
        textSize(18);
        textAlign(LEFT, CENTER);
        text(this.answerText, this.x + 10, this.y + this.height / 2);
    }

    isClicked() {
        return mouseX >= this.x &&
               mouseX <= this.x + this.width &&
               mouseY >= this.y &&
               mouseY <= this.y + this.height;
    }
}