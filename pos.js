var gb;
var a;

var y = 0;

var sum = 0;

function setup() {
  createCanvas(1280, 720);
  background(230);
  a = prompt("첫째항", "1");
  gb = prompt("공비 입력", "1");
  stroke(2);
  textSize(10);
  fill(0);
}
 //<>//
function draw() { //<>//
  y+=20;
  sum+=a;
  text("val: "+ sum, 10, y);
  a *= gb;
}

function keyPressed() {
  if(key == '1') {
  }
}
