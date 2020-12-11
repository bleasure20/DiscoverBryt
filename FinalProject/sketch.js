let beginX = [0,1646.67,1233,1028,800]; // Initial x-coordinate
let beginY = [0,900,972,960,950]; // Initial y-coordinate
let endX = [0,100,1233,1600,]; // Final x-coordinate
let endY = [0,100,960,900];// Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponentlist = [3,6,9,12]; // Determines the curve

let x = 0; // Current x-coordinate
let y = 0;
let x1 = 0;
let y1 = 0;
let x2 = 1200;
let y2 = 200;
let x3 = 200;
let y3 = 800;
let x4 = 1600;
let y4 = 972;
// Current y-coordinate
let steplist = [0.02,.004,.001,.005]; // Size of each step along the path
let pctlist = [0.0,.06,.02]; // Percentage traveled (0.0 to 1.0)



function preload() {
  //all presets of images used on canvas
  scorpion = loadImage("https://i.imgur.com/XJLFOMc.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);
background(0,0,0);
  noStroke();
  angleMode(DEGREES);
  rectMode(CENTER);

  frameRate(12);
  distX = beginX[0] + endX[2];
  distY = beginY[2] + endY[0];


}


function draw() {


  textSize(120);
text('SCORPIO', 10, 100);
fill(32,119,150,50);


    image(scorpion,0,0);
    // tint(random(0,255));





//darker teal wave
  pctlist[1] += steplist[1];
  if (pctlist[2] < 1.0) {
    x1 = beginX[0] - pctlist[1] * distX*80;
    y4 = beginY[0] - pow(pctlist[2], 20) * distY*20;

  }
  stroke(32,119,150,50);
  noFill();

  curve(x1, y1, 1200, y2, 0, 972 ,1200, 972);




//bluer wave
pctlist[2] += steplist[1];
  if (pctlist[0] < 3.0) {
    x1 = beginX[0] - pctlist[2] * distX*80;
    y4 = beginY[0] - pow(pctlist[2], 20) * distY*80;

  }
  stroke(32,119,180,50);
  noFill();

  curve(x1, y1, 1200, y2, 0, 972,1200, 972 );


//lighter blue wave from the 2nd
  pctlist[2] += steplist[1];
    if (pctlist[0] < 2.0) {
      x1 = beginX[0] - pctlist[2] * distX*8;
      y4 = beginY[0] - pow(pctlist[2], 20) * distY*8;

    }
    stroke(32,119,200,50);
    noFill();

    curve(x1, y1, 1200, y2, 0, 972,1200, 972 );
//white wave
    pctlist[2] += steplist[1];
      if (pctlist[0] < 2.0) {
        x1 = beginX[0] - pctlist[2] * distX*8;
        y4 = beginY[0] - pow(pctlist[2], 20) * distY*8;

      }
      stroke(255,255,255,20);
      noFill();

      curve(x1, y1, 1200, y2, 0, 972,1200, 972 );




  }
