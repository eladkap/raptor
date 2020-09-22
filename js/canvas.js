var canvas = document.getElementById("main");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

/* GLOBALS SOUND FILES */
var soundFire1;

/* GLOBALS */
var level;
var levelData;
var raptor;
var frame;
var scoreBoard;
var bullets;
var rockets;
var timeProgressBar;
var statsBar;

/* KEYBOARD EVENTS */
window.addEventListener("keypress", KeyPressed);
window.addEventListener("keydown", KeyDown);
window.addEventListener("keyup", KeyReleased);

function KeyPressed(event) {
  if (event.key == " ") {
    console.log("rocket");
    raptor.FireRocket(ANGLE_OFFSET);
  }
}

function KeyDown(event) {
  if (event.key == "ArrowLeft") {
    raptor.SteerLeft();
    raptor.SetAccelerating(true);
  }
  if (event.key == "ArrowRight") {
    raptor.SteerRight();
    raptor.SetAccelerating(true);
  }
  if (event.key == "ArrowUp") {
    raptor.Forward();
    raptor.SetAccelerating(true);
  }
  if (event.key == "ArrowDown") {
    raptor.Reverse();
    raptor.SetAccelerating(true);
  }
  if (event.key == " ") {
    raptor.FireBullet(ANGLE_OFFSET);
    // Sleep(BULLET_INTERVAL);
  }
}

function KeyReleased(event) {
  raptor.SetAccelerating(false);
  raptor.Stop();
}

/* END KEYBOARD EVENTS */

/* Load sounds */
function LoadSounds() {
  soundFire1 = new Audio("/sound/fire1.wav");
}
/* End Load sounds */

/* Load level */
function LoadLevel() {
  let levelText = ReadTextFile("levels/level001.json");
  levelData = JSON.parse(levelText);
  level = new Level();
  level.CreateFrom(levelData);
  console.log(level);
}
/* End Load level */

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

function CreateScoreBoard() {
  scoreBoard = new ScoreBoard(STATS_POS_X, STATS_POS_Y, 0);
}

function CreateRaptor() {
  //x, y, radius, speed, heading, health, altitude, shield
  raptor = new Raptor(
    RAPTOR_POS_X,
    RAPTOR_POS_Y,
    RAPTOR_RADIUS,
    0,
    0,
    10000,
    RAPTOR_RADIUS,
    RAPTOR_BACKCOLOR,
    100
  );
}

function CreateBullets() {
  bullets = [];
}

function CreateRockets() {
  rockets = [];
}

function DrawFrame() {
  frame.Draw();
}

function DrawScoreBoard() {
  scoreBoard.Draw();
}

function DrawRaptor() {
  raptor.Draw();
  raptor.Update();
}

function DrawBullets() {
  for (let bullet of bullets) {
    bullet.Draw();
    bullet.Update();
  }
}

function DrawRockets() {
  for (let rocket of rockets) {
    rocket.Draw();
    rocket.Update();
  }
}

function RemoveBulletsOffscreen() {
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].toDestroy) {
      bullets.splice(i, 1);
    }
  }
}

function RemoveRocketsOffscreen() {
  for (let i = 0; i < rockets.length; i++) {
    if (rockets[i].toDestroy) {
      rockets.splice(i, 1);
    }
  }
}

/* MAIN */
function Setup() {
  LoadSounds();
  LoadLevel();
  CreateFrame();
  CreateScoreBoard();
  CreateRaptor();
  CreateBullets();
  CreateRockets();
}

function Draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  DrawFrame();
  DrawScoreBoard();
  DrawRaptor();
  DrawBullets();
  DrawRockets();
  RemoveBulletsOffscreen();
  RemoveRocketsOffscreen();
  requestAnimationFrame(Draw);
}

Setup();
requestAnimationFrame(Draw);
