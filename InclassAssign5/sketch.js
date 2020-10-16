let lemonList = [];
let peachList = [];
let xposList = [];
let yposList = [];

let yspeedList = [];

let numofLemons = 50;
let numofPeaches = 50;

let sizeList = [];

function preload() {
  for(let i = 0; i < numofPeaches; i = i + 1){
  peachList[i] = loadImage('https://i.imgur.com/OJmWrAJ.png');
  }
for(let i = 0; i < numofLemons; i = i + 1){
  lemonList[i] = loadImage('https://i.imgur.com/5FDatvl.png');

}




}




function setup() {

// Create a full screen canvas
createCanvas(windowWidth, windowHeight);

for(let i = 0 ; i < numofPeaches; i = i + 1){
  xposList[i] = random(0,width);
  yposList[i] = random(0,height);
  yspeedList[i] = random(10,15);
  sizeList[i] = random(20,200);
}


for(let i = 0 ; i < numofLemons; i = i + 1){
  xposList[i] = random(0,width);
  yposList[i] = random(0,height);
  yspeedList[i] = random(5,20);
  sizeList[i] = random(20,200);
}
  console.log(xposList);
//





}
function draw() {
background(242, 174, 233);
imageMode(CENTER);

for(let i = 0; i < numofPeaches; i = i + 2){
  image(peachList[i],xposList[i],yposList[i],sizeList[i],sizeList[i]);
  yposList[i] = yposList[i] + yspeedList[i];
}
for(let i = 0; i < numofLemons; i = i + 1){
  image(lemonList[i],xposList[i],yposList[i],sizeList[i],sizeList[i]);

  yposList[i] = yposList[i] + yspeedList[i];
}

for(let i = 0; i < numofPeaches; i = i + 2){
  image(peachList[i],xposList[i],yposList[i],sizeList[i],sizeList[i]);
  yposList[i] = yposList[i] + yspeedList[i];
}

//if(yposList[i] > height){
//  yspeedList[i] = -yspeedList[i];
//}
//if(yposList[i] < 0){
//  yspeedList[i] = -yspeedList[i];
//}


}
