// JavaScript Document

$(document).ready(function() {

var c = $('#myCanvas');
var ctx = c.get(0).getContext('2d');

//quadraticCurveTo
ctx.beginPath();
ctx.moveTo(220,20);
ctx.quadraticCurveTo(240,100,260,20);

ctx.stroke();



ctx.moveTo(20,20); // Create a starting point
ctx.lineTo(100,20); // Create a horizontal line
ctx.arcTo(150,20,150,70,50); // Create an arc

/*x1 The x-coordinate of the beginning of the arc
y1 The y-coordinate of the beginning of the arc
x2 The x-coordinate of the end of the arc
y2 The y-coordinate of the end of the arc
r The radius of the arc*/

ctx.lineTo(150,120); // Continue with vertical line
ctx.stroke(); // Draw it

});
