let beginX = [1646.67,1233,1028,823,411.5,205,100]; // Initial x-coordinate
let beginY = [900.0,972,960,950]; // Initial y-coordinate
let endX = [200.0,100,1233]; // Final x-coordinate
let endY = [200.0,100,960,972];// Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponentlist = [4,6,8,12,18,20,24]; // Determines the curve

let x = 0; // Current x-coordinate
let y = 0; // Current y-coordinate
let steplist = [0.02,.004,.001,.005]; // Size of each step along the path
let pctlist = [0.0,.6,.02,.04,1,.06,.08,3]; // Percentage traveled (0.0 to 1.0)
let circlesize = [2,5,8,6,4,20,30,40,50,100];


function setup() {
  createCanvas(windowWidth, windowHeight);
background(0,0,0);
  noStroke();
  distX = endX[0] +- beginX[0];
  distY = endY[0] +- beginY[0];



}
// {
//
//   noStroke(255);
//   distX = endX[3] - beginX[0];
//   distY = endY[3] - beginY[0];
//
//
//
// }

function draw() {

  pctlist[3] += steplist[0];
  if (pctlist[3] < 2.0) {
    x = beginX[0] + pctlist[3] * distX;
    y = beginY[0] + pow(pctlist[3], exponentlist[3]) * distY;
  }
  fill(32,119,139);
circle(x,y, circlesize[6]);

  {


    pctlist[2] += steplist[3];
    if (pctlist[2] < 1.0) {
      x = beginX[0] + pctlist[2] * distX;
      y = beginY[2] + pow(pctlist[2], exponentlist[1]) * distY;
    }
    fill(50,173,181);
    circle(x, y, circlesize[7]);
  }
  {


    pctlist[1] += steplist[0];
    if (pctlist[1] <10) {
      x = beginX[1] + pctlist[1] * distX;
      y = beginY[0] + pow(pctlist[1], exponentlist[6]) * distY;
    }
  fill(50,173,181);
    circle(x, y, circlesize[6]);
  }

  {


    pctlist[4] += steplist[1];
    if (pctlist[4] < 1.0) {
      x = beginX[0] + pctlist[4] * distX;
      y = beginY[0] + pow(pctlist[4], exponentlist[1]) * distY;
    }
    fill(50,173,181);
    circle(x, y, circlesize[5]);
  }

  {


    pctlist[5] += steplist[1];
    if (pctlist[5] < 1.0) {
      x = beginX[0] + pctlist[5] * distX;
      y = beginY[0] + pow(pctlist[5], exponentlist[3]) * distY;
    }
    fill(56,177,185);
    circle(x, y, circlesize[5]);
  }

  {


    pctlist[5] += steplist[1];
    if (pctlist[5] < 1.0) {
      x = beginX[0] + pctlist[5] * distX;
      y = beginY[4] + pow(pctlist[5], exponentlist[1]) * distY;
    }
    fill(56,177,185);
    circle(x, y, circlesize[5]);
  }

  {

//darker blues
    pctlist[5] += steplist[1];
    if (pctlist[5] < 1.0) {
      x = beginX[1] + pctlist[5] * distX;
      y = beginY[2] + pow(pctlist[5], exponentlist[1]) * distY;
    }
    fill(28,57,99);
    circle(x, y, circlesize[5]);
  }

  {

//darker blues
    pctlist[5] += steplist[1];
    if (pctlist[5] < 1.0) {
      x = beginX[1] + pctlist[5] * distX;
      y = beginY[3] + pow(pctlist[5], exponentlist[1]) * distY;
    }
    fill(28,57,99);
    circle(x, y, circlesize[5]);
  }

  {

//darker blues
    pctlist[4] += steplist[1];
    if (pctlist[4] < 0.0) {
      x = beginX[2] + pctlist[4] * distX;
      y = beginY[4] + pow(pctlist[4], exponentlist[5]) * distY;
    }
    fill(28,57,99);
    circle(x, y, circlesize[8]);
  }

  {

//darker blues
    pctlist[4] += steplist[1];
    if (pctlist[4] < 0.0) {
      x = beginX[3] + pctlist[4] * distX;
      y = beginY[1] + pow(pctlist[4], exponentlist[5]) * distY;
    }
    fill(28,57,99);
    circle(x, y, circlesize[8]);
  }

  {

//darker blues
    pctlist[2] += steplist[1];
    if (pctlist[2] < 1.0) {
      x = beginX[0] + pctlist[2] * distX;
      y = beginY[1] + pow(pctlist[2], exponentlist[5]) * distY;
    }
    fill(17,9,20);
    circle(x, y, circlesize[8]);
  }
  {

//darker blues
    pctlist[2] += steplist[1];
    if (pctlist[2] < 0.0) {
      x = beginX[0] + pctlist[2] * distX;
      y = beginY[1] + pow(pctlist[2], exponentlist[5]) * distY;
    }
    fill(8,14,24);
    circle(x, y, circlesize[3]);
  }

}
