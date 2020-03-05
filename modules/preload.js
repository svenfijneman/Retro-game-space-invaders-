const c = document.querySelector('canvas');
const ctx = c.getContext('2d');

function canvasResize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
}
canvasResize();
window.addEventListener('resize', canvasResize);