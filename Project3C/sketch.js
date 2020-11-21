let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;
let x12;
let y12;
let x22;
let y22;
let x32;
let y32;
let x42;
let y42;

let offset;
let offset2;



function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
// stroke(255,50);
//
// offset = 0.0;
// noFill();
stroke(255,50);
offset2 = 0.0;
noFill();
//teal linear lines
stroke(54, 235, 255,12);
offset = 0.0;
noFill();
}

function draw(){

x1 = noise(offset)*width;
y1 = noise(offset + 4)*height;
x2 = noise(offset)*width;
y2 = noise(offset+8)*height;
x3 = noise(offset)*width;
y3 = noise(offset + 10)*height;
x4 = noise(offset)*width;
y4 = noise(offset + 12)*height;

bezier(x1,y1,x2,y2,x3,y3,x4,y4);

offset = offset + 0.01;


x12 = noise(offset2)*width;
y12 = noise(offset2 + 10)*height;
x22 = noise(offset2)*width;
y22 = noise(offset2)*height;
x32 = noise(offset2)*width;
y32 = noise(offset2)*height;
x42 = noise(offset2)*width;
y42 = noise(offset2)*height;

 bezier(x12,y12,x22,y22,x32,y32,x42,y42);
// //stroke(160,40,80,50);
// // offset2 = 0.0;
// // noFill();
 offset2 = offset2 + 0.01;
}
