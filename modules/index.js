const keyMap = {};
window.addEventListener('keydown', function (e) {
  if(!keyMap[e.key]){
    if(e.key === ' '){
      bullets.push(new Bullet(player.x,player.y,10,'pink'));
    }
  }
  keyMap[e.key] = true;
})
window.addEventListener('keyup', function (e) {
  keyMap[e.key] = false;
});
const player = new Player(50, 30, "white", 250, 600);
const bullets = [];
function loop() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, c.width, c.height);
  drawComeet();
  player.speedX = 0;
  if (keyMap['ArrowLeft'] || keyMap['a'] ) player.speedX = -7;
  if (keyMap['ArrowRight'] || keyMap['d']) player.speedX = 7;
  for(let i = bullets.length - 1; i >= 0; i--){
    bullets[i].update();
    bullets[i].draw();
  }
  player.newPos();
  player.update();
  requestAnimationFrame(loop);
}
loop();