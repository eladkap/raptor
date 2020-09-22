class Vehicle {
  constructor(x, y, speed, heading, health) {
    this.pos = new Vector(x, y);
    this.velocity = Vector.FromAngle(heading, speed);
    this.heading = heading;
    this.health = health;
  }

  Draw() {}

  Update() {
    this.pos.Add(this.velocity);
  }

  SetVelocity(vx, vy) {
    this.velocitys.Set(vx, vy);
  }
}
