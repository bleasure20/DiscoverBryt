var col = 0;

function setup() {
// Create a full screen canvas
createCanvas(windowWidth, windowHeight);





}
function draw() {
col = map(mouseX,0,width,0,255);
background(0,0,0);




let xpos = 0;
    for(let i = height ; i > 0 ; i = i - 10){
xpos = xpos + 20;
stroke(200,7,96);
      line(800,i,xpos,width)


//Up arrow turns stroke from purple to white
      if (keyIsPressed & keyCode === UP_ARROW ) {
          stroke(255);
        }
        else {
          stroke(145, 106, 2233);
        }


    }


//Click mouse and "lights" (white triangles) disappear
if(mouseIsPressed){
  trianglecolor = 0

}
else{
trianglecolor = (255,255,255);
  triangle(50,5,200,600,100,5);
  triangle(200,600,550,50,600,50);
  triangle(600,600,175,10,200,9);
  triangle(800,550,250,9,280,5);
  triangle(800,550,800,9,850,9);
  triangle(800,550,950,15,1000,25);
  triangle(800,550,1200,30,1250,50);
  triangle(1000,600,1500,50,1450,30);
  triangle(1000,600,1680,75,1600,100);

  fill(255,255,255,120);
  noStroke();

}



















}
