function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= 200; i = i + 10) {
    line(200-i,i, i+200,i);
   for (var z = 10; z <= 200; z = z + 10) {
    line(z,z+200, 400-z,200+z);
  }
}
}
