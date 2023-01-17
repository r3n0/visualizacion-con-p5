let pos;
let vel;
const diam = 50;
const rad = diam / 2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pos = createVector(windowWidth / 2, windowHeight / 2);
	vel = p5.Vector.random2D();
	vel.setMag(random(2, 10));
}

function draw() {
	vel.rotate(random(-0.2, 0.2));
	pos.add(vel);

	if (pos.x > windowWidth - rad) {
		background(255, 20);
		vel.x *= -1;
	}
	if (pos.x < rad) {
		background(255, 20);
		vel.x *= -1;
	}
	if (pos.y > windowHeight - rad) {
		background(255, 20);
		vel.y *= -1;
	}
	if (pos.y < rad) {
		background(255, 20);
		vel.y *= -1;
	}

	fill(100, 0, 200);
	stroke(255, 100, 100, 100);
	strokeWeight(10);
	circle(pos.x, pos.y, diam);
}
