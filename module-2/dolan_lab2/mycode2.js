$(document).ready(function(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    // Face outline
    ctx.beginPath();
    ctx.arc(centerX, centerY, 140, 0, Math.PI * 2);
    ctx.stroke();

    // Left eye
    ctx.beginPath();
    ctx.arc(centerX - 60, centerY - 45, 30, 0, Math.PI * 2);
    ctx.stroke();

    // Right eye
    ctx.beginPath();
    ctx.arc(centerX + 60, centerY - 45, 30, 0, Math.PI * 2);
    ctx.stroke();

    // Smile
    ctx.beginPath();
    ctx.arc(centerX, centerY + 10, 80, 0, Math.PI);
    ctx.stroke();

    // Text
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Happy", centerX, centerY + 180);

});