function setup() {
// Create a full screen canvas
createCanvas(windowWidth, windowHeight);
background(242, 174, 233);




}
function draw() {

  for(let i = 0; i < width; i = i +20){
      fill(199, 96, 240);
      rect(500,i,100);

      fill(96, 213, 240);
      circle(500,i,40);

      fill(199, 96, 240);
      rect(400,i,100);

      fill(96, 213, 240);
      circle(300,i,40);

      circle(600,i,40);

      fill(199, 96, 240);
      rect(500,i,100);

      fill(133, 255, 249);
      circle(500,i,40);

      fill(133, 255, 249);
      circle(500,i,30);

      fill(247, 82, 214);
      rect(200,i,200);

      fill(96, 213, 240);
      circle(200,i,40);


      fill(247, 82, 214);
      rect(800,i,200);

      fill(96, 213, 240);
      circle(600,i,40);


}




}
