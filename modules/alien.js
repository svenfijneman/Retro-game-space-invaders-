const c = document.querySelector('canvas');
const ctx = c.getContext('2d');

function canvasResize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}
canvasResize();
window.addEventListener('resize', canvasResize);

function Komeet(){
    this.diameter = 100;
    this.snelheid = 5;
    this.pos = {
        x: 200,
        y: 200
    }
}

const komeet = new Komeet();

ctx.clearRect(0, 0, c.width, c.height);
ctx.fillStyle = '#000';
ctx.beginPath();
ctx.arc(komeet.pos.x, komeet.pos.y, komeet.diameter, 0, 2 * Math.PI);
ctx.fill();
