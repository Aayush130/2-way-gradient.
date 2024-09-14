let n = 8;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let t = i / (n - 1);
      let u = j / (n - 1);

      let topColor = lerpColor(color(0, 0, 255), color(3, 255, 200), t);
      let bottomColor = lerpColor(color(255, 41, 200), color(255, 255, 200), t);
      let c = lerpColor(topColor, bottomColor, u);

      fill(c);
      noStroke();
      rect(i * (width / n), j * (height / n), width / n, height / n);
    }
  }
}