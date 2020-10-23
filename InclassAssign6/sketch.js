let img;
let img1;
let img2;
let img3;
let img4;


function preload(){
  img = loadImage('https://i.imgur.com/1EiCOSa.jpg')
  img1 = loadImage('https://i.imgur.com/1EiCOSa.jpg')
  img2 = loadImage('https://i.imgur.com/1EiCOSa.jpg')
  img3 = loadImage('https://i.imgur.com/1EiCOSa.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
background(0, 0, 0);



}
function draw() {


// REd IMAGE 1
  img.loadPixels();

  for(let x = 0; x < img.width ; x = x + 1){
    for(let y = 0; y < img.height ; y = y + 1){
      let i = (x + y * img.width) * 4;

      let pixr = img.pixels[i+0];
      let pixb = img.pixels[i+1];
      let pixg = img.pixels[i+2];
      let pixa = img.pixels[i+3];


 img.pixels[i+1] = 0;
 img.pixels[i+2] = 0;


}
}
img.updatePixels();
image(img,0,0);
//END OF IMAGE 1






//IMAGE 2
img1.loadPixels();
for(let x = 0; x < img1.width ; x = x + 1){
  for(let y = 0; y < img1.height ; y = y + 1){
    let i = (x + y * img1.width) * 4;

    let pixr = img1.pixels[i+0];
    let pixb = img1.pixels[i+1];
    let pixg = img1.pixels[i+2];
    let pixa = img1.pixels[i+3];

    if(pixr > 200){
      img1.pixels[i+0] = 0;
    }
}
}
img1.updatePixels();
image(img1,400,0);
//end of image 2




//begins new image 3
img2.loadPixels();
for(let x = 0; x < img2.width/2 ; x = x + 2){
  for(let y = 0; y < img2.height ; y = y + 2){
    let i = (x + y * img2.width) * 4;

    let pixr = img2.pixels[i+0];
    let pixb = img2.pixels[i+1];
    let pixg = img2.pixels[i+2];
    let pixa = img2.pixels[i+3];

    let blackwhite;
if(pixr>150){
  blackwhite = 200;

}
  else{
    blackwhite = 255;
  }
img2.pixels[i+0] = blackwhite;
img2.pixels[i+1] = blackwhite;
img2.pixels[i+2] = blackwhite;

img2.updatePixels();
image(img2,800,0);
//end of Image 3
    }


}
// manipulating image 3 with overlays of color manipulation on part of image 3
blend(img,150,100,10,150,1000,100,150,150,SCREEN);
blend(img,150,100,20,150,1000,100,200,200,DIFFERENCE);
// End of image 3 parts










}
