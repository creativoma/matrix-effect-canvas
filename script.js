const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

const FONT_SIZE = 20;

let w, h, cols, ypos;

function setup() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  cols = Math.floor(w / FONT_SIZE) + 1;
  ypos = Array(cols).fill(0);

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
}

function matrix() {
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#0f0";
  ctx.font = "15pt monospace";

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * FONT_SIZE;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + FONT_SIZE;
  });
}

setup();
window.addEventListener("resize", setup);
setInterval(matrix, 50);
