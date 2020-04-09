class Stats {
  constructor(x, y, enemies) {
    this.pos = new Vector(x, y);
    this.lives = 3;
    this.enemies = enemies;
    this.lifebar = new ProgressBar(
      x + 500,
      y,
      LIFEBAR_WIDTH,
      LIFEBAR_HEIGHT,
      100
    );
  }

  Draw() {
    ctx.fillStyle = WHITE;
    ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.font = "20px Arial";
    ctx.fillText(
      `Enemies: ${this.enemies}   Life: ${ship.life}   Lives: ${this.lives}`,
      this.pos.x,
      this.pos.y
    );
    this.lifebar.Draw();
  }

  DecreaseLife(amount) {
    ship.life -= amount;
    this.lifebar.Update(ship.life);
  }
}
