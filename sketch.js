// change this for different mirrors
//let symmetry = 20;   
//let symmetry = 200;   
let symmetry = 500;   


//let angle = symmetry / 2 / symmetry;
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;

function setup() { 
  
  createCanvas(600, 600);
  angleMode(RADIANS);
  background(255);

  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

}

function saveFile() {
  save('design.png');
}

function clearScreen() {
  background(255);
}

function draw() {
  translate(width / 2, height / 2, width / symmetry);
  let speed = abs(symmetry - winMouseY);
  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseY - width / 2;
    let my = mouseX - height / 2;
    let pmx = pmouseY - width / 2;
    let pmy = pmouseX - height / 2;
    
    if (mouseIsPressed) {
      for (let i = speed; i < symmetry; i++) {
        rotate(speed);
        strokeWeight(speed / symmetry);
        line(mx, my, pmx, pmy);
        push();
        scale(speed, -speed);
        line(mx, pmy, pmx, pmy);
        pop();
      }
    }
  }
}
