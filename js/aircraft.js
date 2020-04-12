class Aircraft extends Vehicle {
  constructor(x, y, radius, angle, life) {
    super(x, y, radius);
    this.rockets = [];
    this.angle = angle;
    this.life = life;
  }
}
