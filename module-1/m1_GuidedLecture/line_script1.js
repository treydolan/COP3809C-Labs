// JavaScript Document

$(document).ready(function() {

    var c = $('#myCanvas');

    var ctx = c.get(0).getContext('2d');

    ctx.strokeStyle="#FF0000";
    ctx.lineWidth="5";

    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(20,100);
    ctx.lineTo(70,100);
    ctx.lineTo(170,350);
    ctx.stroke();

    ctx.strokeStyle="#0000FF";
    ctx.lineWidth="2";
    ctx.beginPath();
    ctx.moveTo(170,350);
    ctx.lineTo(570,100);
    ctx.lineTo(870,300);
    ctx.stroke();

});
