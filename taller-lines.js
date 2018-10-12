function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 0; i <= 390; i = i + 3) {
    line(i,i+150, i,i-400);
  }
}
