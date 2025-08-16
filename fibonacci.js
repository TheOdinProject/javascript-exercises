/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// creation of the project. (2d flowchart)
class symboloflife {
    constructor(number) {
        this.arcradius = 10;
        this.number = number;
        this.scale = 30;
        this.angle = 0;
        this.radius = 0;
        this.positionX = 0;
        this.positionY = 0;
    }
    updatepositions() {
        this.angle = this.number * 0.5 + /* perfomance optimisation **/
            performance.now() * 0.001;
        this.radius = this.scale * Math.sqrt(this.number);
        this.positionX = this.radius * Math.sin(this.angle) + canvas.width / 2;
        this.positionY = this.radius * Math.cos(this.angle) + canvas.height / 2;
    }
    creationz() {
        context.beginPath(); context.lineWidth = 4;
        context.fillStyle = `hsl(${Math.random() * 360}, 0%, 50%)`;
        context.strokeStyle = `hsl(${Math.random() * 360}, 10%, 100%)`;
        context.arc(this.positionX, this.positionY, this.arcradius, 0, Math.PI * 2);
        context.fill(); context.stroke(); context.closePath();
    }
}
let partials = [];
for (let j = 0; j < 100; j++) {
    partials.push(new symboloflife(j));
}
function animation() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let partial of partials) {
        partial.updatepositions(); partial.creationz();
    }
    requestAnimationFrame(animation);
} animation();
