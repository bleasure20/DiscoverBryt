let xposList = [600,500,800,40,50,60,100,60];
let yposList = [700,100,700,100,70,80,50,30];

let xspeedList = [10,10,30,5,2,4,6,2];
let yspeedList = [10,5,8,12,2,6,8,2];

let circlesize = [7,20,24,9,90,10,40,30];

function setup() {
// Create a full screen canvas
createCanvas(windowWidth, windowHeight);
background(242, 174, 233);




}
function draw() {
  background(242, 174, 233);

  for(let i = 0; i < xposList.length ; i = i + 1){

fill (255, 135, 135);
    circle(xposList[i],yposList[i],circlesize[i]);
fill (255, 203, 135);
  circle(xposList[i],yposList[i],circlesize[5,6,7]);

    xposList[i] = xposList[i] + xspeedList[i];
    yposList[i] = yposList[i] + yspeedList[i];

    if(xposList[i] > width){
      xspeedList[i] = -xspeedList[i];
    }
    //reverse direction of the speed
    if(xposList[i] < 0){
      xspeedList[i] = - xspeedList[i];
    }
    if (yposList[i] > height){
      yspeedList[i] = -yspeedList[i];
    }
    if (yposList[i] < 0){
      yspeedList[i] = -yspeedList[i];
    }
    if(mouseIsPressed & dist(mouseX,mouseY,xposList[i],yposList[i])<50){
      xposList[i] = random(0,width);
      yposList[i] = random(0,height);
}
  }


}
