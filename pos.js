var gb;
var a;

var y = 20;

var sum = 0;
var lsum = -1;

var run = 1;

var n = 0;
function setup() {
  createCanvas(480, 2000);
  background(230);
  a = Number(prompt("첫째항", "1"));
  gb = Number(prompt("공비 입력", "0.5"));
  stroke(2);
  textSize(10);
  fill(0);
  text("Expected Value: "" + a/(1-gb) ,10, 20);
}
 //<>//
function draw() { //<>//
  if(run) {
  y+=20;
  n+=1;
  sum+=a;
  if(sum - lsum < 0.0000000000001) {
    run = 0;
  }
  text(n+": "+"sum= "+ sum + ", n= " +a, 10, y);
  a *= gb;
  lsum = sum;
}
}

function keyPressed() {
  if(key == '1') {
  }
}
