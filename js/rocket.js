class Rocket extends Weapon {
  constructor(damage, x, y, width, height, backColor, velocity) {
    super(damage);
    this.pos = new Vector(x, y);
    this.width = width;
    this.height = height;
    this.velocity = velocity;
    this.backColor = backColor;
    this.toDestroy = false;
  }

  Draw() {
    ctx.fillStyle = this.backColor;
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
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
