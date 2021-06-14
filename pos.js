var gb;
var a;

var y = 0;

var la = 0;

function setup() {
  createCanvas(1280, 720);
  background(230);
  a = prompt("첫째항", "1");
  gb = prompt("공비 입력", "1");
  stroke(2);
  textSize(20);
  fill(0);
}
 //<>//
function draw() { //<>//
  y+=20;
  text("val: "+ a, 10, y);
  a *= gb;
}

function keyPressed() {
  if(key == '1') {
  }
}
