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
let x13;
let y13;
let x23;
let y23;
let x33;
let y33;
let x43;
let y43;

let offset;
let offset2;



function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
// stroke(255,50);
//
// offset = 0.0;
// noFill();
frameRate(5);
stroke(216, 179, 252,40);
offset = 0.0;
noFill();

 stroke(216, 179, 252,40);
offset2 = 0.0;
noFill();

 stroke(216, 179, 252,40);
offset2 = 0.0;
noFill();
}

function draw(){
//first curve
x1 = noise(offset + 2)*width;
y1 = noise(offset + 4)*height;
x2 = noise(offset + 4)*width;
y2 = noise(offset + 8)*height;
x3 = noise(offset + 6)*width;
y3 = noise(offset + 10)*height;
x4 = noise(offset + 8)*width;
y4 = noise(offset + 12)*height;

arc(x1, y1, x2, y2, HALF_PI, PI);

offset = offset + 0.01;
//2nd curve
x12 = noise(offset2 + 2)*width;
y12 = noise(offset2 + 4)*height;
x22 = noise(offset2 + 4)*width;
y22 = noise(offset2 + 8)*height;
x32 = noise(offset2 + 6)*width;
y32 = noise(offset2 + 10)*height;
x42 = noise(offset2 + 8)*width;
y42 = noise(offset2 + 12)*height;

bezier(x12,y12,x22,y22,x32,y32,x42,y42);
offset2 = offset2 + 0.01;


//3rd curve
x13 = noise(offset2 + 2)*width;
y13 = noise(offset2 + 8)*height;
x23 = noise(offset2 + 4)*width;
y23 = noise(offset2 + 8)*height;
x33 = noise(offset2 + 8)*width;
y33 = noise(offset2 + 10)*height;
x43 = noise(offset2 + 8)*width;
y43 = noise(offset2 + 18)*height;

arc(x13, y13, x23, y23, PI, PI + QUARTER_PI);
offset2 = offset2 + 0.01;
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
