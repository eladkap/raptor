const GRAVITY = 0.1;

/* Colors */
const BLACK = "rgba(0,0,0,)";
const DARK = "rgba(5,5,5,0.9)";
const GRAY = "rgba(200,200,200,0.7)";
const WHITE = "rgba(255,255,255,1)";
const RED = "rgba(255,0,0,1)";
const GREEN = "rgba(0,255,0,1)";
const BLUE = "rgba(0,0,255,1)";
const AQUA = "rgba(0,250,250,1)";
const PINK = "rgba(255,105,180,1)";

const COLORS = [WHITE, GRAY, GREEN, BLUE, AQUA, PINK];

const ANGLE_OFFSET = -Math.PI / 2;

/* Frame */
const FRAME_POS_X = 0.1 * window.innerWidth;
const FRAME_POS_Y = 0;
const FRAME_WIDTH = window.innerWidth * 0.8;
const FRAME_HEIGHT = window.innerHeight * 1;
const FRAME_BORDER_WEIGHT = 0;

/* Stats */
const STATS_POS_X = window.innerWidth * 0.3;
const STATS_POS_Y = 50;
const HEALTH_BAR_WIDTH = 200;
const HEALTH_BAR_HEIGHT = 25;

/* Raptor */
const RAPTOR_POS_X = window.innerWidth * 0.5;
const RAPTOR_POS_Y = window.innerHeight * 0.95;
const RAPTOR_RADIUS = 40;
const RAPTOR_ACC = 0.7;
const RAPTOR_BOOST_ACC = 1;
const RAPTOR_MAX_SPEED = 8;
const MAX_BOOST_SPEED = 10;
const ROTATE_ACC = 0.1;
const MAX_ROTATE = 1;
const RAPTOR_FRICTION = 0.95;
const RAPTOR_BACKCOLOR = WHITE;

/* Bullet */
const BULLET_SPEED = 20;
const BULLET_RADIUS = 1;
const BULLET_COLOR = WHITE;
const BULLET_INTERVAL = 500;
const BULLET_DAMAGE = 5;

/* Rocket */
const ROCKET_SPEED = 10;
const ROCKET_WIDTH = 3;
const ROCKET_HEIGHT = 30;
const ROCKET_COLOR = GRAY;
const ROCKET_DAMAGE = 30;

/* Enablers */
var ALLOW_SOUND = false;
