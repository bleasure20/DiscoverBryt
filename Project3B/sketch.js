let xpos;
let ypos;

let xoffset;
let yoffset;

let xoffset1;
let yoffset1;

let xoffset2;
let yoffset2;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
  noStroke();

xoffset = 0.0;
yoffset = 200;
xoffset1 = 0.0;
yoffset1 = 100;
xoffset2 = 0.0;
yoffset2 = 50;

}

function draw(){

xpos = noise(xoffset)*width;
ypos = noise(yoffset)*height;

fill(0,0,120,25);

circle(xpos,ypos,100);

xoffset = xoffset + 0.01;
yoffset = yoffset + 0.01;


xpos = noise(xoffset1)*width;
ypos = noise(yoffset1)*height;

fill(20,40,120,25);

circle(xpos,ypos,80);

xoffset1 = xoffset1 + 0.01;
yoffset1 = yoffset1 + 0.01;


xpos = noise(xoffset2)*width;
ypos = noise(yoffset2)*height;

fill(60,40,120,120);

circle(xpos,ypos,50);

xoffset2 = xoffset2 + 0.01;
yoffset2 = yoffset2 + 0.01;


}
