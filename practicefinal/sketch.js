let x = 100;
let y = 100;



function setup() {
  createCanvas(windowWidth, windowHeight);
background(0,0,0);




}


function draw() {
  for (let i = 0; i < 1000; i = i + 10){
  x = i;
    y=5*log(x*1000)^2;
    console.log(y);
    fill(255);
      circle(x+100,y-20,10);




  }



}
