class Bar {
  constructor(x, y, w, h, value) {
    this.pos = new Vector(x, y);
    this.width = w;
    this.height = h;
    this.hue = 100;
    this.value = value;
  }

  Draw() {
    var grad = ctx.createLinearGradient(0, 0, 0, 180);
    grad.addColorStop(0, "transparent");
    grad.addColorStop(1, "rgba(0,0,0,0.8)");
    ctx.fillStyle = grad;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);

    ctx.fillStyle = "hsla(" + this.hue + ", 100%, 50%, 1)";
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  Update(newValue) {
    this.value = newValue;
    this.hue = (this.value / 100) * 100;
    this.width = (this.value / 100) * this.width;
  }
}
