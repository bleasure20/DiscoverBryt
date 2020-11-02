let pumpkin;
let moon;

let cloud;
let xpos = 0;
let ypos = 10;
let xcloudspeed = 3;
let ycloudspeed = 4;

function preload() {
  //all presets of images used on canvas
  moon = loadImage("https://i.imgur.com/Hu99RBo.png");
  pumpkin = loadImage("https://i.imgur.com/gRZMjVh.png");
  back = loadImage("https://i.imgur.com/CAkH13p.png");
  cloud = loadImage("https://i.imgur.com/rzO3MqM.png");
  bat = loadImage("https://i.imgur.com/94Wzc4l.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);



//pumpkins
  image(pumpkin,600,650);
  image(pumpkin,950,650);


}

function draw() {
//background photo
background(back);



//moon appears after mouse is clicked will change brightness of entire canvas every click randomly
if( mouseIsPressed) {

  image(moon,100,0);
  tint(random(0,255));
}

//pumpkins that stay in place
image(pumpkin,600,650);
image(pumpkin,950,650);


//moving back and forth spooky cloud
image(cloud,xpos,0);



 xpos = xpos + xcloudspeed;
 ypos = ypos + ycloudspeed;


 //Chceck for x position
 //Check when cloud crosses right side of canvas
 if(xpos > width){
   xcloudspeed = -xcloudspeed;


 }

 if(xpos  < 0){
   xcloudspeed = -xcloudspeed;
 }
//bat is attached to mouse and will move around with mouse
 image(bat,mouseX,mouseY);


}
