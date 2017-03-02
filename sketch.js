var angle = 0.0;

function setup() {
    createCanvas(800, 800);
    background(255);
    
}

function draw() {
    push();
    fill(255, 0, 0);
    strokeWeight(.25);
    translate(mouseX, mouseY);
    rotate(angle);
    scale(mouseX/60.0);
    rect(-15, -15, 30, 30);
    angle +=0.2;
    pop();
   
    if (mouseIsPressed) {
        strokeWeight(.1);
        translate(mouseX, mouseY);
        rotate(angle);
        triangle(400, 400, 50, 50, 86, 75);
        angle +=0.1;
    }
    else {
        rect(30, 30);
    }
}


    

    
