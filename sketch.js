let x = 0,y = 0;
let xCor = 0;
let yCor = 0;

 function setup() {
  //createCanvas(1200,800);
  createCanvas(windowWidth, windowHeight)
   background(0);
  colorMode(HSB);
}
 function draw() {
   drawCircles();
 }

 function drawCircles() {
  stroke(x,255,255);
  strokeWeight(5);
  noFill();
  xCor = random(0,width);
  yCor = random(0,height);
   ellipse(xCor,yCor,25,25);
   if(x > 255){
    x = 0;
  }
  x+=10;
}

 function mouseDragged() {
  stroke(x,255,255);
  strokeWeight(5);
  //noFill();
  ellipse(mouseX,mouseY,25,25);
   if(x > 255){
    y+=50;
    x = 0;
  }
   if(y > 255){
    y = 50;
  }
  x+=10;
 }
