class Frame {
  constructor(x, y, w, h, borderWeight, backColor, borderColor) {
    this.pos = { x: x, y: y };
    this.width = w;
    this.height = h;
    this.borderWeight = borderWeight;
    this.backColor = backColor;
    this.borderColor = borderColor;
  }

  Draw() {
    ctx.fillStyle = this.backColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderWeight;
    ctx.rect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }
}
