var gb;
var a;

var y = 0;

var sum = 0;
var lsum = -1;
function setup() {
  createCanvas(1280, 2000);
  background(230);
  a = Number(prompt("첫째항", "1"));
  gb = Number(prompt("공비 입력", "0.3"));
  stroke(2);
  textSize(10);
  fill(0);
}
 //<>//
function draw() { //<>//
  y+=20;
  sum+=a;
  if(lsum == sum) {
    return;
  }
  text("sum= "+ sum + ", n= " +a, 10, y);
  a *= gb;
  lsum = sum;
}

function keyPressed() {
  if(key == '1') {
  }
}
