class Bubble {
  constructor(x, y, radius, speed, color) {
    this.pos = new Vector(x, y);
    this.radius = radius;
    let angle = Math.random() * Math.PI * 2;
    let vx = speed * Math.cos(angle);
    let vy = speed * Math.sin(angle);
    this.velocity = new Vector(vx, vy);
    this.color = color;
  }

  Draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  Update() {
    this.pos.Add(this.velocity);
  }

  CheckEdges(frame) {
    if (this.pos.y > frame.height) {
      this.pos.y = 0;
    }
    if (this.pos.y < 0) {
      this.pos.y = frame.height;
    }
    if (this.pos.x > frame.width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = frame.width;
    }
  }

  SetRadius(radius) {
    this.radius = radius;
  }
}
