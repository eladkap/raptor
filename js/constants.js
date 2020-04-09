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
const FRAME_POS_X = 0.05 * window.innerWidth;
const FRAME_POS_Y = 0;
const FRAME_WIDTH = window.innerWidth * 0.9;
const FRAME_HEIGHT = window.innerHeight * 1;
const FRAME_BORDER_WEIGHT = 0;

/* Stats */
const STATS_POS_X = window.innerWidth * 0.3;
const STATS_POS_Y = 50;
const LIFEBAR_WIDTH = 200;
const LIFEBAR_HEIGHT = 25;

/* Ship */
const SHIP_POS_X = window.innerWidth * 0.5;
const SHIP_POS_Y = window.innerHeight * 0.95;
const SHIP_RADIUS = 20;
const SHIP_ACC = 0.3;
const SHIP_BOOST_ACC = 0.5;
const SHIP_MAX_SPEED = 5;
const MAX_BOOST_SPEED = 7;
const ROTATE_ACC = 0.1;
const MAX_ROTATE = 1;
const SHIP_FRICTION = 0.95;
const SHIP_SLOWDOWN = 0.02;

/* Bubbles */
const BUBBLES_NUM = 10;
const BUBBLE_MIN_RADIUS = 2;
const BUBBLE_MAX_RADIUS = 16;
const BUBBLE_MIN_SPEED = 1;
const BUBBLE_MAX_SPEED = 3;
const BUBBLE_RADIUS_OPTIONS = [4, 8, 16, 32];

/* Enemies */
const ENEMIES = 10;

/* Bullets */
const BULLET_SPEED = 10;
const BULLET_RADIUS = 1;
const BULLET_COLOR = WHITE;

/* ENABLERS */
var ALLOW_SOUND = false;
