const c = document.querySelector('canvas');
const ctx = c.getContext('2d');

function canvasResize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}
canvasResize();
window.addEventListener('resize', canvasResize);

function Player(){
    this.diameter = 25;
    this.pos = {
        x: 2500,
        y: 100
    }
}

const player = new Player();
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(player.pos.x + ((player.diameter+10)*i*2), player.pos.y,player.diameter, 0, 2 * Math.PI);
ctx.fill();