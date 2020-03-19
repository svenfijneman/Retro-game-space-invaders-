function Bullet(x,y,rad,color) {
    this.rad = rad;
    this.speedX = 0;
    this.x = x;
    this.y = y;
    this.draw = function() {
        ctx.fillStyle = color || '#fff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad,0, 2 * Math.PI);
        ctx.fill();
    }
    this.update = function() {
        this.y -= 10;
    }
}