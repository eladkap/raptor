class Chopper extends Aircraft {
  constructor(
    x,
    y,
    speed,
    heading,
    health,
    altitude,
    width,
    height,
    backColor
  ) {
    super(x, y, speed, heading, health, altitude);
    this.width = width;
    this.height = height;
    this.backColor = backColor;
  }

  Draw() {
    // Draw rectangle
  }
}
