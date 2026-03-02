// === IMAGE SLIDESHOW ===
const layers = document.querySelectorAll('.image-layer');
let current = 0;
setInterval(() => {
  layers[current].classList.remove('active');
  current = (current + 1) % layers.length;
  layers[current].classList.add('active');
}, 5000);

// === TRAIL EFFECT ===
const canvas = document.getElementById('trail');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = innerWidth; canvas.height = innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
let particles = [];
document.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 3; i++) {
    particles.push({ x: e.clientX, y: e.clientY, alpha: 1, size: Math.random() * 8 + 2, dx: (Math.random() - 0.5) * 2, dy: (Math.random() - 0.5) * 2 });
  }
});
function animateTrail() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.dx; p.y += p.dy; p.alpha -= 0.02;
    if (p.alpha <= 0) particles.splice(i, 1);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,255,255,${p.alpha})`;
    ctx.shadowColor = '#00ffff';
    ctx.shadowBlur = 20;
    ctx.fill();
  });
  requestAnimationFrame(animateTrail);
}
animateTrail();

// === MODAL CONFIRM ===
const modal = document.getElementById('confirmModal');
const yesBtn = document.getElementById('confirmYes');
const noBtn = document.getElementById('confirmNo');
const socialBtn = document.getElementById('social-btn');

socialBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('active');
});

yesBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  setTimeout(() => window.open('https://lnk.bio/RichafAnimations', '_blank'), 300);
});

noBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});
