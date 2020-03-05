function Player(){
    this.diameter = 25;
    this.pos = {
        x: 500,
        y: 600
    }
}

const player = new Player();
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(player.pos.x + ((player.diameter+10)*2), player.pos.y,player.diameter, 0, 2 * Math.PI);
ctx.fill();