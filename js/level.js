class Level {
  constructor() {
    this.waves = [];
  }

  CreateFrom(levelData) {
    let wavesObj = levelData.waves;
    for (let waveObj of wavesObj) {
      let enemies = [];
      for (let enemyObj of waveObj.enemies) {
        let enemy = null;
        if (enemyObj["type"] == "fighter") {
          let x = enemyObj["posx"];
          let y = enemyObj["posy"];
          let vx = enemyObj["vx"];
          let vy = enemyObj["vy"];
          let radius = enemyObj["radius"];
          let velocity = new Vector(vx, vy);
          let speed = velocity.Magnitude();
          let heading = velocity.Angle();

          let color = enemyObj["color"];
          enemy = new Fighter(x, y, speed, heading, 100, 10000, radius, color);
        }
        enemies.push(enemy);
      }
      this.waves.push(enemies);
    }
  }
}
