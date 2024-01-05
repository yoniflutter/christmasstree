const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flakes = [];

function createSnowFlake() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    radius: Math.random() * 3 + 1,
    color: "rgba(100, 100, 100, 0.5)",
    speed: Math.random() * 3 + 1,
    angle: Math.random() * Math.PI * 2,
  };
}

function drawSnowFlake(flake) {
  ctx.beginPath();
  ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  ctx.fillStyle = flake.color;
  ctx.fill();
  ctx.closePath();
}

function updateSnowFlake(flake) {
  flake.y += flake.speed;
  flake.x += Math.sin(flake.angle) * 2;

  if (flake.y > canvas.height) {
    flake.y = 0;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  flakes.forEach((flake) => {
    drawSnowFlake(flake);
    updateSnowFlake(flake);
  });

  requestAnimationFrame(draw);
}

function createSnowfall() {
  for (let i = 0; i < 100; i++) {
    flakes.push(createSnowFlake());
  }

  draw();
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

createSnowfall();
