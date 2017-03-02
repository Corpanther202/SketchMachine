var angle = 0;
var offset = 300;
//how much to scale up from sin:
//this makes the wave bigger or smaller
var scalar = 300;
var speed = 0.1;

function setup() {
    createCanvas(800, 800);
    fill(0);
    
}

function draw() {
    background(255);
    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    var y4 = offset + sin(angle + 1.2) * scalar;
    var y5 = offset + sin(angle + 1.6) * scalar;
    var y6 = offset + sin(angle + 2) * scalar;
    var y7 = offset + sin(angle + 2.4) * scalar;
    
    fill(0, 0, 0);
    ellipse(50, y1, 100, 100);
    ellipse(300, y2, 100, 100);
    ellipse(550, y3, 100, 100);
    
    
    fill(0, 0, 255);
    ellipse(120, y4, 75, 75);
    ellipse(480, y5, 75, 75);
    
    
    
    fill(255, 0, 50);
    ellipse(190, y6, 50, 50);
    ellipse(410, y7, 50, 50);

    
    angle += speed;
     
  }

    
