import p5 from "p5";
import drawEllipse from './modules/drawEllipse.js';

window.setup = function () {
    createCanvas(window.innerWidth, window.innerHeight);

    background(0);
}

window.draw = function () {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    push();
    translate(mouseX, mouseY);    
    drawEllipse();
    pop();
}
