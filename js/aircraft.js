class Aircraft extends Vehicle {
  constructor(x, y, speed, heading, health, altitude) {
    super(x, y, speed, heading, health);
    this.altitude = altitude;
  }
}
