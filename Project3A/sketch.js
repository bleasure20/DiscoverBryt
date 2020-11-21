let ypos;


let xposn;
let yposn;
let yposn2;
let yposn3;
let i;
let i2;
let i3;
let offset = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
 angleMode(DEGREES);


}
function draw() {
background(0);


//circles drawn at random
for(let i = 0; i < width; i = i + 10){
  ypos = random(0,height);
  circle(i,ypos,50);
  fill(random(0,255),30);
}

//circles drawn
for(let i = 0; i < width; i = i + 20){

  yposn = noise(offset)*width;
  console.log(noise(offset));
  fill(207, 162, 252);
  noStroke();
  circle(i,yposn,20);
  offset = offset + 0.01;

}
for(let i = 0; i < width; i = i + 30){

  yposn = noise(offset)*height;
  console.log(noise(offset));
  fill(242, 87, 250,80);
  noStroke();
  circle(i,yposn,30);
  offset = offset + 0.009;

}
for(let i = 0; i < width; i = i + 30){

  yposn = noise(offset)*height;
  console.log(noise(offset));
  fill(54, 235, 255,110);
  noStroke();
  pop();
  circle(i,yposn,10);
  offset = offset + 0.1;

}

//teal rubber band squares
for(let i = 0; i < width; i = i + 10){

  yposn = noise(offset)*height;
  console.log(noise(offset));
  fill(20,40,120);
  noStroke();
  square(i,yposn,35);
  rotate(random(0,30));
  offset = offset + 0.1;

}

//triangle rubberband thing
for(let i = 0; i < width; i = i + 30){

  yposn = noise(offset)*50;
  console.log(noise(offset));
  fill(60,40,120);
  noStroke();
  circle(i,yposn,20);
  offset = offset + 0.009;

}
}
