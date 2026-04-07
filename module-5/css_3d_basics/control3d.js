// JavaScript Document
$(document).ready(function () {
	var rotateX = 0;
	var rotateY = 0;
	var rotateZ = 0;
	var translateZ = 0;
	


	function myRotate() {
		$("#inner").css("transform", "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg) translateZ(" + translateZ + "px)");
	}	
	
	
////x rotate////////////////////
	$("#minusX").click(function () {
		rotateX -= 15;
		myRotate();
	});


	$("#plusX").click(function () {
		rotateX += 15;
		myRotate();
	});

	
	
	////y rotate////////////////////
	
	$("#minusY").click(function () {
		rotateY -= 15;
		myRotate();
	});


	$("#plusY").click(function () {
		rotateY += 15;
		myRotate();
	});

////z rotate////////////////////	
	

	$("#minusZ").click(function () {
		rotateZ -= 15;
		myRotate();
	});


	$("#plusZ").click(function () {
		rotateZ += 15;
		myRotate();
	});

	////z translate////////////////////
	
	
	$("#minusTZ").click(function () {
		translateZ -= 15;
		myRotate();
	});


	$("#plusTZ").click(function () {
		translateZ += 15;
		myRotate();
	});
	
//////////////////////////////////////GROUND////////////////////////////////////
		var grotateX = 0;
	var grotateY = 0;
	var grotateZ = 0;
	var gtranslateZ = 0;
		
	
		function mygRotate() {
		$("#theGround").css("transform", "rotateX(" + grotateX + "deg) rotateY(" + grotateY + "deg) rotateZ(" + grotateZ + "deg) translateZ(" + gtranslateZ + "px)");
	}
	
////y rotate////////////////////
	
	$("#gminusY").click(function () {
		
		grotateY -= 15;
		mygRotate();
	});

	
	
	
}); //end doc ready
