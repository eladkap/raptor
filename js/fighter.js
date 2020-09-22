class Fighter extends Aircraft {
  constructor(x, y, speed, heading, health, altitude, radius, backColor) {
    super(x, y, speed, heading, health, altitude);
    this.radius = radius;
    this.backColor = backColor;
  }

  Draw() {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.beginPath();
    ctx.moveTo(-this.radius / 2, this.radius / 2);
    ctx.lineTo(this.radius / 2, this.radius / 2);
    ctx.lineTo(0, -this.radius);
    ctx.closePath();
    ctx.fillStyle = this.backColor;
    ctx.strokeStyle = GRAY;
    ctx.lineWidth = 0;
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }
}
