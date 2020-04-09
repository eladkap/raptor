class Vector {
  constructor(x, y) {
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

  Multiply(factor) {
    this.x *= factor;
    this.y *= factor;
  }

  FromAngle(angle, mag) {
    this.x = mag * Math.cos(angle);
    this.y = mag * Math.sin(angle);
  }
}
