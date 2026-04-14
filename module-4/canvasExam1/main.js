var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Ball properties
var x = 50;
var y = 50;
var speedX = 5;
var speedY = 3;
var radius = 20;

var listItems = document.getElementsByTagName('li');
console.log(listItems);

$(document).ready(function() {
    console.log("jQuery is working");

    setInterval(function() {

        // 1. Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 2. Redraw gradient background
        var gradient = ctx.createLinearGradient(0, 0, 500, 500);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.5, 'green');
        gradient.addColorStop(1, 'blue');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 500, 500);

        // 3. Redraw line
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(120, 120);
        ctx.strokeStyle = 'black';
        ctx.stroke();

        // 4. Redraw arcTo
        ctx.beginPath();
        ctx.moveTo(300, 100);
        ctx.arcTo(150, 20, 150, 70, 100);
        ctx.stroke();

        // 5. Redraw triangle
        ctx.beginPath();
        ctx.moveTo(400, 450);
        ctx.lineTo(350, 300);
        ctx.lineTo(200, 500);
        ctx.closePath();
        ctx.stroke();

        // 6. Redraw black rectangle
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(150, 145, 200, 10);

        // 7. Redraw Hello World text
        ctx.font = '24px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Hello World', 100, 100);

        // 8. Draw bouncing ball
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();

        // 9. Move ball and bounce
        x += speedX;
        y += speedY;
        if (x + radius > canvas.width || x - radius < 0) speedX = -speedX;
        if (y + radius > canvas.height || y - radius < 0) speedY = -speedY;

    }, 16);
});
