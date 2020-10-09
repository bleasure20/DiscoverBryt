//canvases created so I could have an interactive piece continuously and not just once (the drawing)
//starX and starY are a variable I created that tells me that this is random scatter (like a star)
let x = 0;
let y = 0;
let extraCanvas;
let extraCanvas2;
let extraCanvas3;
let extraCanvas4;



function setup() {
//canvas for still lasers
  createCanvas(windowWidth, windowHeight);


//canvas for drawing triangles (lasers)
  extraCanvas = createGraphics(windowWidth, windowHeight);
  extraCanvas.clear();
  background(0);
//canvas for optical lines
  extraCanvas2 = createGraphics(windowWidth, windowHeight);
  extraCanvas2.clear();
//canvas for flipped optical lines
  extraCanvas3 = createGraphics(windowWidth, windowHeight);
  extraCanvas3.clear();
//canvas for line formation
  extraCanvas4 = createGraphics(windowWidth, windowHeight);
  extraCanvas4.clear();






}

function draw() {

  // no triangles appearing, the triangles stay at their opacity. wthout then they go completely white
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);

  // triangles appear when clicking mouse
  if (mouseIsPressed) {
    extraCanvas.fill(21, 211,255,30);
    extraCanvas.noStroke();
    //extraCanvas.triangle(mouseX, mouseY, 600, 600,400,200);
    //rectMode(CENTER);
    let starX = random(width);
   let starY = random(height);
   rectMode(CENTER);
   extraCanvas.triangle(starX, starY, 600, 600, 700,700);
  }



  // triangles appear when clicking mouse
  if (keyIsPressed & keyCode === DOWN_ARROW) {
    extraCanvas.fill(200,7,96,50);
    extraCanvas.noStroke();
    //extraCanvas.triangle(mouseX, mouseY, 600, 600,400,200);
    //rectMode(CENTER);
    let starX = random(width);
   let starY = random(height);
   //rectMode(CENTER);
   extraCanvas.triangle(starX, starY, 700, 600,800,500);
  }




  // triangles appear when clicking mouse
  if (keyIsPressed & keyCode === UP_ARROW) {
    extraCanvas.fill(190,7,200,50);
    extraCanvas.noStroke();
    //extraCanvas.triangle(mouseX, mouseY, 600, 600,400,200);
    //rectMode(CENTER);
    let starX = random(width);
   let starY = random(height);
   //rectMode(CENTER);
   extraCanvas.triangle(starX, starY, 700, 600,800,500);
  }

//just something more advanced to add to the lasers and how they can visually look like they curve
image(extraCanvas4, 0, 0);
  let ypos = 0;
      for(let i = 5000 ; i > 0 ; i = i - 200){
  ypos = ypos + 10;

stroke(172,42,138);
        line(2000,i,ypos,0);
stroke(249,1,170);
        line(30,i,ypos,0);
stroke(123,90,223);
        line(800,i,ypos,0);
stroke(60,80,100);
    line(800,i,ypos,0);







    }

//triangles with opacity of 120 disappear when left arrow on keyboard is pressed as well as the drawn triangles
    if(keyIsPressed & keyCode === LEFT_ARROW){
      trianglecolor = 0

    }
    else{
//more white triangles lasers
  image(extraCanvas, 0, 0);
    fill(255, 255, 255,120);
  stroke(255);
  rectMode(CENTER);
  triangle(50,height,200,600,100,5);
  triangle(200,height,550,50,600,50);
  triangle(600,height,175,10,200,9);
  triangle(800,height,250,9,280,5);
  triangle(800,height,800,9,850,9);
  triangle(800,height,950,15,1000,25);
  triangle(800,height,1200,30,1250,50);
  triangle(1000,height,0,0,0,20);
  triangle(1000,height,1680,75,1600,100);

}
//random laser visuals appear when mouse is held down
  //image(extraCanvas2,600,600);
  let xpos = 200;
      for(let i = 200 ; i > 0 ; i = i - 30){
  xpos = xpos + 120;
  stroke(200,7,96,120);
        line(500,i,xpos,width)



//white triangles lasers standstill used triangle because i wanted a 3 sided figure that i could manipulate to look like lasers
          //image(extraCanvas3, 0, 0);
            fill(255, 255, 255,180);
          stroke(58,255,243);

          triangle(50,height,50,600,80,15);
          triangle(300,height,50,50,20,50);
          triangle(800,height,250,9,280,5);
          triangle(600,height,700,9,750,9);
          triangle(800,height,760,20,800,30);
          triangle(800,height,0,40,0,80);
          triangle(900,height,1500,50,1550,30);
          triangle(1200,height,0,75,0,100);
          triangle(1400,height,1300,100,1350,90);
          triangle(1600,height,1350,100,1400,90);




}



}
