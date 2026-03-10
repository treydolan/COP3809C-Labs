// JavaScript Document

$(document).ready(function() {

    var c = $('#myCanvas');
    var ctx = c.get(0).getContext('2d');

    ctx.fillRect(50,20,100,50);

    //////
    ctx.fillStyle="#f8f";
    ctx.font="700 30px Arial";
    ctx.fillText("Trey Dolan",200,50);

    ctx.font="30px Verdana";
    // Create gradient
    var gradient=ctx.createLinearGradient(0,0,120,0);
    gradient.addColorStop("0","magenta");
    gradient.addColorStop("0.5","blue");
    gradient.addColorStop("1.0","red");
    // Fill with gradient
    ctx.fillStyle=gradient;
    ctx.fillText("Big smile!",10,120);

    ctx.rotate(40*Math.PI/180);
    ctx.fillStyle="#0ff";
    ctx.fillText("more!",70,-20);

});
