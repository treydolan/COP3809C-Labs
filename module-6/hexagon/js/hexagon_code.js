// JavaScript Document
$(document).ready(function () {
	
	//we add code for arrows and keyboard here!!!
	
	
	
	
	

	///detect swipe

	$('#parent_of_myhex').on("swipeleft", swipeLeftHandler);

	function swipeLeftHandler(event) {
		Yrotate -= 60;
		doMove();
	}

	$('#parent_of_myhex').on("swiperight", swipeRightHandler);

	function swipeRightHandler(event) {
		Yrotate += 60;
		doMove();
	}




	//the func to actually move	
	function doMove() {
		$('#myhex').css("transform", "rotateY(" + Yrotate + "deg) ");
	}

	

	
	

}); ///end document ready