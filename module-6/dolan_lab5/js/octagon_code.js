// JavaScript Document
$(document).ready(function () {
	
	//we add code for arrows and keyboard here!!!
	
	
	
	
	

	///detect swipe

	$('#parent_of_myoct').on("swipeleft", swipeLeftHandler);

	function swipeLeftHandler(event) {
		Yrotate -= 45;
		doMove();
	}

	$('#parent_of_myoct').on("swiperight", swipeRightHandler);

	function swipeRightHandler(event) {
		Yrotate += 45;
		doMove();
	}




	//the func to actually move	
	function doMove() {
		$('#myoct').css("transform", "rotateY(" + Yrotate + "deg) ");
	}

	

	
	

}); ///end document ready
