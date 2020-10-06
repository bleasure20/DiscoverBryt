
let xpos = 500;
let ypos = 0;
let xballspeed = 3;
let yballspeed = 4;

function setup() {
// Create a full screen canvas
createCanvas(windowWidth, windowHeight);

}


function draw() {
background(242, 174, 233);
//Place circle in the center of the screen
circle(xpos,ypos,100);
fill(145, 235, 224);


xpos = xpos + xballspeed;
ypos = ypos + yballspeed;


//Chcecl fpr x position
//Check when ball crosses right side of canvas
if(xpos > width){
  xballspeed = -xballspeed;


}

if(xpos  < 0){
  xballspeed = -xballspeed;
}
//check when ball crosses left side of canvas
if(ypos > height){
  yballspeed = -yballspeed;

}

  if(ypos < 0){
    yballspeed = -yballspeed;
  }

if( mouseIsPressed & dist(mouseX,mouseY,xpos,ypos)<50){
  xpos = random(0,width);
  ypos = random(0,height);
}


}
