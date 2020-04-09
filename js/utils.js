function Distance(p1, p2) {
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  let dist = Math.sqrt(dx * dx + dy * dy);
  return dist;
}

function AreCollide(obj1, obj2) {
  let dist = Distance(obj1.pos, obj2.pos);
  return dist < obj1.radius + obj2.radius;
}

function RandomRange(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function RandomOptions(options) {
  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

function RandomColor() {
  return RandomOptions(COLORS);
}

function Sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
