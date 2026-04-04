// JavaScript Document
$(document).ready(function () {
	var myCanvas = $('#myCanvas');
	var myPaper = myCanvas.get(0).getContext('2d');
	
	var container = $(myCanvas).parent();
	var theMax = 0;
	var theMin = 0;
	var theAvg = 0;

	if ($(container).width() < 1000) { //if small screen	
		myCanvas.attr('width', $(container).width()); //set a new width
		myCanvas.attr('height', $(container).width() / 1.667);
	}

	getMyData();

	function getMyData() {

		var children = document.getElementsByTagName('endOfYear');
		//alert(children.length);
		//alert(children[0].getAttribute('closing'));
		var nextX = 0;
		var nextY = 0;
		var canvasWidth = $("#myCanvas").width();
		var canvasHeight = $("#myCanvas").height();
		var widthPerNode = canvasWidth / (children.length);
		//alert(widthPerNode);
		var priceArray = new Array();
		var priceArraySum = 0;
		var z = 0;

		for (z; z < children.length; z++) {
			var getPrice = parseFloat(children[z].getAttribute('closing'));
			priceArray.push(getPrice);
			priceArraySum += getPrice;

		}
		//alert(priceArraySum);

		theMax = Math.max.apply(Math, priceArray);
		//alert(theMax);
		theMin = Math.min.apply(Math, priceArray);
		//alert(theMin);

		// Locate index position of min/max for display
		var maxIndex = priceArray.indexOf(theMax);
		var minIndex = priceArray.indexOf(theMin);
		var maxYear = children[maxIndex].getAttribute('year');
		var minYear = children[minIndex].getAttribute('year');


		$('#showMax').text("Best Year: "+ maxYear + " - Closing: " + theMax);
		$('#showMin').text("Worst Year: "+ minYear + " - Closing: " + theMin);


		setInterval(function () {
			drawOneNode()
		}, 400);

		var i = 0;

		function drawOneNode() {

			if (i < children.length) {
				//myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear the canvas
				$("#Outer").fadeToggle(1000);
				nextX = i * widthPerNode;
				nextY = canvasHeight - children[i].getAttribute('closing') * (canvasHeight / theMax) + 10;

				var my_gradient = myPaper.createLinearGradient(0, 0, 0, canvasHeight);



				my_gradient.addColorStop(0, "rgba(255, 200, 0, 0.85)");
				my_gradient.addColorStop(0.5, "rgba(0, 180, 180, 0.75)");
				my_gradient.addColorStop(1, "rgba(0, 80, 200, 0.85)");
				myPaper.fillStyle = my_gradient;


				myPaper.fillRect(nextX, nextY, widthPerNode - 4, canvasHeight - nextY);
				myPaper.shadowColor = "rgba(0, 0, 0, 0.8)";
				myPaper.shadowBlur = 4;
				myPaper.fillStyle = "white";
				myPaper.font = "13px monospace";
				myPaper.fillText(children[i].getAttribute('closing'), nextX + 5, nextY + 15);
				myPaper.fillStyle = "rgba(255, 255, 255, 0.95)";
				myPaper.fillText(children[i].getAttribute('year'), nextX + 5, canvasHeight - 10);
				i++;
			} //end of if not last node
		} //end of the func timer
	} //end getMy data

	var doit;
	$(window).resize(function () {
		clearTimeout(doit); //clear prev values
		doit = setTimeout(respondCanvas, 600);
	});

	function respondCanvas() {
		if ($(container).width() < 1000) { //if small screen

			myCanvas.attr('width', $(container).width()); //set a new width
			myCanvas.attr('height', $(container).width() / 1.667);
			myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear the canvas
			getMyData(); //redraw the blocks
		} else {
			myCanvas.attr('width', 1000);
			myCanvas.attr('height', 600);
			myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height);
			getMyData();
		} //end if-else
	} //end func respond canvas
}); //end doc ready
