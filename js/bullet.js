class Bullet extends Weapon {
  constructor(damage, x, y, radius, backColor, velocity) {
    super(damage);
    this.pos = new Vector(x, y);
    this.radius = radius;
    this.velocity = velocity;
    this.backColor = backColor;
    this.toDestroy = false;
  }

  Draw() {
    ctx.fillStyle = this.backColor;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  Update() {
    this.pos.Add(this.velocity);
    this.CheckEdges();
  }

  CheckEdges() {
    // left or right
    if (this.pos.x < frame.pos.x || this.pos.x > frame.pos.x + frame.width) {
      this.Destroy();
    }
    // up or down
    else if (
      this.pos.y < frame.pos.y ||
      this.pos.y > frame.pos.y + frame.height
    ) {
      this.Destroy();
    }
  }

  Destroy() {
    this.toDestroy = true;
  }
}
