class ScoreBoard {
  constructor(x, y, enemiesCount) {
    this.pos = new Vector(x, y);
    this.lives = 3;
    this.enemiesCount = enemiesCount;
    this.healthBar = new Bar(
      x + 500,
      y,
      HEALTH_BAR_WIDTH,
      HEALTH_BAR_HEIGHT,
      100
    );
  }

  Draw() {
    ctx.fillStyle = WHITE;
    ctx.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
    ctx.font = "20px Arial";
    ctx.fillText(
      `Enemies: ${this.enemiesCount}   Life: ${raptor.life}   Lives: ${this.lives}`,
      this.pos.x,
      this.pos.y
    );
    this.healthBar.Draw();
  }

  IncrementLives() {
    this.lives++;
  }

  DecrementLives() {
    this.lives--;
  }

  IncrementEnemiesCount() {
    this.enemiesCount++;
  }

  DecrementEnemiesCount() {
    this.enemiesCount--;
  }
}
