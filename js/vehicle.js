class Vehicle {
  constructor(x, y, radius) {
    this.pos = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.radius = radius;
    this.heading = 0;
    this.life = 100;
  }

  Draw() {}

  Update() {
    this.pos.Add(this.velocity);
  }

  SetAccelerating(b) {
    this.isAccelerating = b;
  }

  SetVelocity(vx, vy) {
    this.velocity = new Vector(vx, vy);
  }
}
