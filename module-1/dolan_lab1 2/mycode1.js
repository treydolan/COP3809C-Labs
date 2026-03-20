$(document).ready(function(){

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Gradient Background
    const gradient = ctx.createLinearGradient(0,0,0,400);

    gradient.addColorStop(0,"white");
    gradient.addColorStop(0.5,"cyan");
    gradient.addColorStop(1,"white");

    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,900,400);

    // Triangle Settings
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;

    // x --> 450 = center
    // y --> 200 = center

    // UP triangle
    ctx.beginPath();
    ctx.moveTo(450, 50);    // UP Top point
    ctx.lineTo(300, 300);   // UP Left point
    ctx.lineTo(600, 300);   // UP Right point
    ctx.closePath();
    ctx.stroke();

    // DOWN triangle
    ctx.beginPath();
    ctx.moveTo(450, 350);   // DOWN Bottom point
    ctx.lineTo(300, 100);   // DOWN Left point
    ctx.lineTo(600, 100);   // DOWN Right point
    ctx.closePath();
    ctx.stroke();

});
