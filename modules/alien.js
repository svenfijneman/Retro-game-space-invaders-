function Komeet(i){
    this.i = i;
    this.diameter = 25;
    this.snelheid = 5;
    this.pos = {
        x: 500,
        y: 100
    }
}

Komeet.prototype.draw = function(){
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(this.pos.x + ((this.diameter+10)*this.i*2), this.pos.y,this.diameter, 0, 2 * Math.PI);
    ctx.fill();
}
// extra for loop voor de y-as
// meerdere rijen van aliens

const cometen = [];
    for (i = 0; i < 10; i++) {
      cometen.push(new Komeet(i));
    }

    function drawComeet() {
        for (i = 0; i < cometen.length; i++) {
            cometen[i].draw();
        }
    }

// voorbereiding voor bewegende aliens
// function draw(){
//   ctx.clearRect(0, 0, c.width, c.height);
//   for (i = 0; i < 10; i++) {
//     const komeet = new Komeet();
//     ctx.fillStyle = '#000';
//     ctx.beginPath();
//     ctx.arc(komeet.pos.x + ((komeet.diameter+10)*i*2), komeet.pos.y,komeet.diameter, 0, 2 * Math.PI);
//     ctx.fill();
//     // console.log(komeet.pos.x + (komeet.diameter*i));
//   }
//   requestAnimationFrame(draw);
// }
// requestAnimationFrame(draw);
