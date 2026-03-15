// JavaScript Document

$(document).ready(function() {

var c = $('#myCanvas');
var ctx = c.get(0).getContext('2d');

ctx.shadowBlur=10;
ctx.shadowColor="#999";
ctx.shadowOffsetX=5;
ctx.shadowOffsetX=5;
ctx.fillStyle="#FF0000";
ctx.fillRect(20,20,150,100);

var my_gradient=ctx.createLinearGradient(320,0,640,0);


my_gradient.addColorStop(0,"#0f0");//green
my_gradient.addColorStop(0.5,"#0ff");//cyan
my_gradient.addColorStop(1,"#ff0");//yellow
ctx.fillStyle=my_gradient;
ctx.fillRect(320,100,320,100);

});
