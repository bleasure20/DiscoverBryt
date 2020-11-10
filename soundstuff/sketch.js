let img1;
let partImage;


function preload(){
  img1 = loadImage('https://i.imgur.com/1EiCOSa.jpg')

}

function setup() {
  createCanvas(windowWidth, windowHeight);




}
function draw() {
background(242, 174, 23);
image(img1,0,0);
 blend(img1,150,100,150,150,1000,100,150,150,BURN);
image(img1,300,300);

}
