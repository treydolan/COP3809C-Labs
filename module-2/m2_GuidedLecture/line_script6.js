// JavaScript Document

$(document).ready(function() {

var c = $('#myCanvas');
var ctx = c.get(0).getContext('2d');

var centerH=c.width()/2;
var centerV=c.height()/2;
var myradius;
if (centerH>centerV){
myradius=centerV;
}else{
myradius=centerH();
}



ctx.beginPath();
ctx.arc(centerH, centerV, myradius, 0, 2 * Math.PI);
// 2 is complete 360
ctx.fillStyle="#F00";

ctx.fill();

});