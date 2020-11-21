let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

let offset;
// let offset2;



function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
// stroke(255,50);
//
// offset = 0.0;
// noFill();
frameRate(5);
stroke(60,40,120);
offset = 0.0;
noFill();





//circles drawn at random
for(let i = 0; i < width; i = i + 10){
  ypos = random(0,height);
  circle(i,ypos,50);
  fill(random(0,255),30);

}
}

function draw(){
// curve drawn at random
x1 = noise(offset + 2)*width;
y1 = noise(offset + 4)*height;
x2 = noise(offset + 4)*width;
y2 = noise(offset + 8)*height;
x3 = noise(offset + 6)*width;
y3 = noise(offset + 10)*height;
x4 = noise(offset + 8)*width;
y4 = noise(offset + 12)*height;

bezier(x1,y1,x2,y2,x3,y3,x4,y4);
offset = offset + 0.01;


}
