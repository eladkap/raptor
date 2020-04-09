class Ship {
  constructor(x, y, radius) {
    this.pos = new Vector(x, y);
    this.velocity = new Vector(0, 0);
    this.radius = radius;
    this.rockets = [];
    this.angle = 0;
    this.steer = new Vector(0, 0);
    this.life = 100;
    this.isAccelerating = false;
    this.backColor = WHITE;
    this.maxSpeed = SHIP_MAX_SPEED;
    this.boostMaxSpeed = MAX_BOOST_SPEED;
  }

  Draw() {
    ctx.save();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.beginPath();
    ctx.moveTo(-this.radius / 2, this.radius / 2);
    ctx.lineTo(this.radius / 2, this.radius / 2);
    ctx.lineTo(0, -this.radius);
    ctx.closePath();
    ctx.fillStyle = WHITE;
    ctx.strokeStyle = GRAY;
    ctx.lineWidth = 0;
    ctx.stroke();
    ctx.fill();
    ctx.restore();
  }

  Update() {
    if (this.isAccelerating) {
      this.Accelerate();
    }
    this.pos.Add(this.velocity);
    this.SlowDown();
    this.CheckEdges();
  }

  CheckEdges() {
    if (this.pos.x > frame.pos.x + frame.width) {
      this.pos.x = frame.pos.x + frame.width;
    }
    if (this.pos.x < frame.pos.x) {
      this.pos.x = frame.pos.x;
    }
    if (this.pos.y > frame.pos.y + frame.height) {
      this.pos.y = frame.pos.y + frame.height;
    }
    if (this.pos.y < frame.pos.y) {
      this.pos.y = frame.pos.y;
    }
  }

  SetAngle(angle) {
    this.angle = angle;
  }

  Stop() {
    this.steer.x = 0;
    this.steer.y = 0;
  }

  SteerLeft() {
    // this.SetAngle(-0.5 * Math.PI);
    this.steer.x = -1;
  }

  SteerRight() {
    // this.SetAngle(0.5 * Math.PI);
    this.steer.x = 1;
  }

  Forward() {
    // this.SetAngle(2 * Math.PI);
    this.steer.y = -1;
  }

  Reverse() {
    // this.SetAngle(Math.PI);
    this.steer.y = 1;
  }

  Force(a) {
    let force = new Vector(this.steer.x, this.steer.y);
    // force.FromAngle(this.angle + a, SHIP_ACC);
    if (this.isBoosting && this.velocity.Magnitude() < this.boostMaxSpeed) {
      this.velocity.Add(force);
    } else if (this.velocity.Magnitude() < this.maxSpeed) {
      this.velocity.Add(force);
    }
  }

  SetBoosting(b) {
    this.isBoosting = b;
  }

  SetAccelerating(b) {
    this.isAccelerating = b;
  }

  Accelerate() {
    this.Force(ANGLE_OFFSET);
  }

  Boost() {
    if (this.boostFuel > 0 && !this.isFillingBoostFuel) {
      this.Force(ANGLE_OFFSET);
      if (frameCount % 5 == 0) {
        this.boostFuel -= 5;
      }
    }
  }

  FillBoostFuel() {
    if (this.boostFuel < 100) {
      this.isFillingBoostFuel = true;
      if (frameCount % 10 == 0) {
        this.boostFuel++;
      }
    } else {
      this.isFillingBoostFuel = false;
    }
  }

  SlowDown() {
    if (this.velocity.Magnitude() > 0) {
      this.velocity.Multiply(SHIP_FRICTION);
    }
  }

  SetRotation(angle) {
    this.rotation = angle;
  }

  Turn() {
    this.angle += this.rotation;
  }

  Rotate(angle) {
    if (abs(this.rotation) < MAX_ROTATE) {
      this.rotation += angle;
    }
  }

  FireBullet(a) {
    let v = new Vector(0, 0);
    v.FromAngle(this.angle + a, BULLET_SPEED);
    let bullet = new Bullet(
      this.pos.x,
      this.pos.y,
      BULLET_RADIUS,
      BULLET_COLOR,
      v
    );
    bullets.push(bullet);
    if (ALLOW_SOUND) {
      soundFire1.play();
    }
  }

  // FireRocket() {
  //   let v = p5.Vector.fromAngle(this.angle, ROCKET_SPEED);
  //   this.rockets.push(new Rocket(this.pos.x, this.pos.y, 1, v));
  // }

  Collide(obj) {
    var d = dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y);
    return d < this.radius / 2 + obj.radius;
  }
}
