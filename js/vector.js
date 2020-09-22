class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  Set(x, y) {
    this.x = x;
    this.y = y;
  }

  Add(other) {
    this.x += other.x;
    this.y += other.y;
  }

  Magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  Angle() {
    return Math.atan(this.y / this.x);
  }

  Multiply(factor) {
    this.x *= factor;
    this.y *= factor;
  }

  static FromAngle(angle, mag) {
    let x = mag * Math.cos(angle);
    let y = mag * Math.sin(angle);
    return new Vector(x, y);
  }
}
