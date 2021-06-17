var gb;
var a;

var y = 30;

var sum = 0;
var lsum = -1;

var run = 1;

var bd = 1;

var n = 0;
function setup() {
  createCanvas(1280, 7000);
  background(230);
  a = Number(prompt("첫째항", "1"));
  gb = Number(prompt("공비 입력", "0.5"));
  stroke(2);
  textSize(30);
  fill(0);
  text("Expected Value: " + a/(1-gb) ,10, y);
}
 //<>//
function draw() { //<>//
  if(run && bd) {
  y+=40;
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
    bd = 1
  }
}
