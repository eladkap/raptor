var canvas = document.getElementById("main");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

/* GLOBALS SOUND FILES */
var soundFire1;

/* GLOBALS */
var ship;
var bubbles;
var frame;
var stats;
var ship;
var bullets;
var timeProgressBar;
var statsBar;

/* KEYBOARD EVENTS */
window.addEventListener("keypress", KeyPressed);
window.addEventListener("keydown", KeyDown);
window.addEventListener("keyup", KeyReleased);

function KeyPressed(event) {}

function KeyDown(event) {
  if (event.key == "ArrowLeft") {
    ship.SteerLeft();
    ship.SetAccelerating(true);
  }
  if (event.key == "ArrowRight") {
    ship.SteerRight();
    ship.SetAccelerating(true);
  }
  if (event.key == "ArrowUp") {
    ship.Forward();
    ship.SetAccelerating(true);
  }
  if (event.key == "ArrowDown") {
    ship.Reverse();
    ship.SetAccelerating(true);
  }
  if (event.key == " ") {
    ship.FireBullet(ANGLE_OFFSET);
  }
  if (event.key == "d") {
    console.log("Damage");
    stats.DecreaseLife(5);
  }
}

function KeyReleased(event) {
  ship.SetAccelerating(false);
  ship.Stop();
}

/* END KEYBOARD EVENTS */

/* Load sounds */
function LoadSounds() {
  soundFire1 = new Audio("/sound/fire1.wav");
}
/* End Load sounds */

function CreateBubbles(number) {
  bubbles = [];
  for (let i = 0; i < BUBBLES_NUM; i++) {
    let radius = RandomOptions(BUBBLE_RADIUS_OPTIONS);
    let x = RandomRange(frame.pos.x, frame.pos.x + frame.width);
    let y = RandomRange(frame.pos.y, frame.pos.y + frame.height);
    let speed = RandomRange(BUBBLE_MIN_SPEED, BUBBLE_MAX_SPEED);
    let color = RandomColor();
    let bubble = new Bubble(x, y, radius, speed, color);
    bubbles.push(bubble);
  }
}

function CreateFrame() {
  frame = new Frame(
    FRAME_POS_X,
    FRAME_POS_Y,
    FRAME_WIDTH,
    FRAME_HEIGHT,
    FRAME_BORDER_WEIGHT,
    DARK,
    BLACK
  );
}

function CreateStats() {
  stats = new Stats(STATS_POS_X, STATS_POS_Y, ENEMIES);
}

function CreateShip() {
  ship = new Ship(SHIP_POS_X, SHIP_POS_Y, SHIP_RADIUS);
}

function CreateBullets() {
  bullets = [];
}

function DrawBubbles() {
  bubbles.forEach((bubble) => {
    bubble.Draw();
    bubble.Update();
    bubble.CheckEdges(frame);
  });
}

function DrawFrame() {
  frame.Draw();
}

function DrawStats() {
  stats.Draw();
}

function DrawShip() {
  ship.Draw();
  ship.Update();
}

function DrawBullets() {
  for (let bullet of bullets) {
    bullet.Draw();
    bullet.Update();
  }
}

function RemoveBulletsOffscreen() {
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].toDestroy) {
      bullets.splice(i, 1);
    }
  }
}

function CheckBulletBubbleCollision() {
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = bubbles.length - 1; j >= 0; j--) {
      if (AreCollide(bullets[i], bubbles[j])) {
        let bubble = bubbles.pop(j);
        if (bubble.radius > BUBBLE_MIN_RADIUS) {
          bubbles.splice(j, 1);
        }
        bubble.radius /= 2;
        bullets.splice(i, 1);
        return;
      }
    }
  }
}

/* MAIN */
function Setup() {
  LoadSounds();
  CreateFrame();
  CreateStats();
  CreateShip();
  // CreateBubbles();
  CreateBullets();
}

function Draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(Draw);
  DrawFrame();
  DrawStats();
  DrawShip();
  // DrawBubbles();
  DrawBullets();
  RemoveBulletsOffscreen();
  CheckBulletBubbleCollision();
}

Setup();
requestAnimationFrame(Draw);
