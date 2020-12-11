let beginX = [0,1646.67,1233,1028]; // Initial x-coordinate
let beginY = [0,900,972,960,950]; // Initial y-coordinate
let endX = [0,100,1233,1600,]; // Final x-coordinate
let endY = [0,100,960,900];// Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move


let x = 0; // Current x-coordinate
let y = 0;
let x1 = 800;
let y1 = 400;
let x2 = 200;
let y2 = 100;
let x3 = 1600; //where starting
let y3 = 972; //where starting
let x4 = 1200;
let y4 = 200;
// Current y-coordinate
let steplist = [0.02,.004,.001,.005]; // Size of each step along the path
let pctlist = [0.0,.06,.02]; // Percentage traveled (0.0 to 1.0)



function preload() {
  //all presets of images used on canvas
  leo = loadImage("https://i.imgur.com/PiR7CCA.png");

}



function setup() {
  createCanvas(windowWidth, windowHeight);
background(0,0,0);
  noStroke();
  angleMode(DEGREES);
  rectMode(CENTER);

  frameRate(20);
  distX = beginX[0] + endX[2];
  distY = beginY[2] + endY[0];


}


function draw() {


  textSize(120);
text('LEO', 1350, 100);
fill(0,100,20,50);


  image(leo,0,0);
  // tint(random(0,255));




//red fire
  pctlist[1] += steplist[3];
  if (pctlist[2] < 1.0) {
    x1 = beginX[0] + pctlist[1] * distX*80;
    y4 = beginY[0] + pow(pctlist[2], 20) * distY*10;

  }
  stroke(200,4,20,50);
  noFill();
  curve(x1, y1, x2, y2, x3, y3 ,x4, y4);


//orange fire
  pctlist[1] += steplist[1];
  if (pctlist[2] < 1.0) {
    x1 = beginX[0] + pctlist[1] * distX*80;
    y4 = beginY[0] + pow(pctlist[2], 40) * distY*10;

  }
  stroke(255, 166, 64,50);
  noFill();
  curve(x1, y1, x2, y2, x3, y3 ,x4, y4);

//yellow orange fire
  pctlist[1] += steplist[1];
  if (pctlist[2] < 1.0) {
    x1 = beginX[1] + pctlist[1] * distX*60;
    y4 = beginY[1] + pow(pctlist[2], 40) * distY*40;

  }
  stroke(252, 177, 3,60);
  noFill();
  curve(x1, y1, x2, y2, x3, y3 ,x4, y4);

//red fire3
  pctlist[1] += steplist[2];
  if (pctlist[2] < 1.0) {
    x1 = beginX[0] + pctlist[1] * distX*80;
    y4 = beginY[0] + pow(pctlist[2], 40) * distY*10;

  }
  stroke(200,4,20,50);
  noFill();
  curve(x1, y1, x2, y2, x3, y3 ,x4, y4);

//red fire2
  pctlist[1] += steplist[2];
  if (pctlist[2] < 1.0) {
    x1 = beginX[1] + pctlist[1] * distX*80;
    y4 = beginY[1] + pow(pctlist[2], 40) * distY*10;

  }
  stroke(200,4,20,50);
  noFill();
  curve(x1, y1, x2, y2, x3, y3 ,x4, y4);

//dark orange fire
  pctlist[1] += steplist[2];
  if (pctlist[2] < 1.0) {
    x1 = beginX[0] + pctlist[1] * distX*80;
    y4 = beginY[0] + pow(pctlist[2], 40) * distY*10;

  }
  stroke(255, 101, 18,50);
  noFill();
  curve(x1, y1, x2, y2, x3, y3 ,x4, y4);

//bright yellow fire
    pctlist[1] += steplist[2];
    if (pctlist[2] < 1.0) {
      x1 = beginX[0] + pctlist[1] * distX*80;
      y4 = beginY[0] + pow(pctlist[2], 40) * distY*10;

    }
    stroke(255, 255, 18,60);
    noFill();
    curve(x1, y1, x2, y2, x3, y3 ,x4, y4);

    //bright yellow fire
        pctlist[1] += steplist[2];
        if (pctlist[1] < 1.0) {
          x1 = beginX[0] + pctlist[1] * distX*100;
          y4 = beginY[0] + pow(pctlist[2], 40) * distY*20;

        }
        stroke(255, 255, 18,60);
        strokeWeight(4);
        noFill();
        curve(x1, y1, x2, y2, x3, y3 ,x4, y4);

  }

//
// x1 = noise(offset + 2)*width;
// y1 = noise(offset + 4)*height;
// x2 = noise(offset + 4)*width;
// y2 = noise(offset + 8)*height;
// x3 = noise(offset + 6)*width;
// y3 = noise(offset + 10)*height;
// x4 = noise(offset + 8)*width;
// y4 = noise(offset + 12)*height;
//
// arc(x1, y1, x2, y2, HALF_PI, PI);
//
// offset = offset + 0.01;
//
