// JavaScript Document

$(document).ready(function() {

var c = $('#myCanvas');
var ctx = c.get(0).getContext('2d');

ctx.lineWidth="15";
ctx.strokeStyle="#F83";
ctx.beginPath();

ctx.moveTo(10,175);
ctx.lineTo(450,175);
ctx.stroke();

ctx.strokeStyle="#ff00ff";
ctx.lineWidth="5";
ctx.beginPath();
ctx.moveTo(50,10);
ctx.lineTo(250,350);
ctx.lineTo(550,10);
ctx.closePath();
ctx.stroke(); // Draw it

ctx.fillStyle="rgba(0,0,230,0.5)";
ctx.fill();

});
