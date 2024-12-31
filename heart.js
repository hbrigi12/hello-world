let hearts = [];
let words = ["Be Mine", "Love You", "Hug Me", "Kiss Me", "Sweet Talk", "XOXO", "True Love", "Cutie Pie", "Be Cool", "Luv Ya", "You're Sweet"];
let colors = ["white", "pink", "yellow", "lightgreen", "violet", "orange","white", "pink", "yellow", "lightgreen", "orange", "violet"];
let index = 0;
let heartSize = 50;
let heartScale = 1; // Adjust heart size scale

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      hearts.push(new Heart(j * 100 + 50, i * 60 + 0, words[index], colors[index]));
      index = (index + 1) % words.length;
    }
  }
}

function draw() {
  background(220);
  for (let heart of hearts) {
    heart.display();
  }
}

function mousePressed() {
  for (let heart of hearts) {
    heart.changeText();
    heart.changeColor();
  }
}

class Heart {
  constructor(x, y, text, color) {
    this.x = x;
    this.y = y;
    this.text = text;
    this.color = color;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    beginShape();
    vertex(this.x, this.y + 15);
    bezierVertex(this.x - 15 * heartScale, this.y - 10 * heartScale, this.x - 45 * heartScale, this.y + 20 * heartScale, this.x, this.y + 50 * heartScale);
    bezierVertex(this.x + 45 * heartScale, this.y + 20 * heartScale, this.x + 15 * heartScale, this.y - 15 * heartScale, this.x, this.y + 15);
    endShape(CLOSE);
    textAlign(CENTER, CENTER);
    textSize(9);
    fill("red");
    text(this.text, this.x, this.y + 25 * heartScale); // Adjusted text position
  }

  changeText() {
    this.text = words[index];
    index = (index + 1) % words.length;
  }

  changeColor() {
    this.color = colors[index];
    index = (index + 1) % colors.length;
  }
}
