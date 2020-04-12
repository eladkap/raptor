class Building {
  constructor(x, y, width, height, backColor) {
    this.pos = new Vector(x + width / 2, y + height / 2);
    this.width = width;
    this.height = height;
    this.backColor = backColor;
  }

  Draw() {
    ctx.fillStyle = this.backColor;
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fill();
  }
}
