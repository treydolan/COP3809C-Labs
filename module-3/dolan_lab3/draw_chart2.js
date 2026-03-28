// JavaScript Document
$(document).ready(function () {
	var myCanvas = $('#myCanvas');
	var myPaper = myCanvas.get(0).getContext('2d');
	
	var container = $(myCanvas).parent();
	var theMax = 0;
	var theMin = 0;
	var theAvg = 0;

	if ($(container).width() < 960) { //if small screen	
		myCanvas.attr('width', $(container).width()); //set a new width
		myCanvas.attr('height', $(container).width() / 2.4);
	}

	// Requirement #2 
	var canvasEl = myCanvas.get(0);
	myPaper.fillStyle = "black";
	myPaper.fillRect(0, 0, canvasEl.width, canvasEl.height);

	getMyData();

	function getMyData() {

		var children = document.getElementsByTagName('node');
		//alert(children.length);
		//alert(children[0].getAttribute('price'));
		var nextX = 0;
		var nextY = 0;
		var canvasWidth = $("#myCanvas").width();
		var canvasHeight = $("#myCanvas").height();
		var widthPerNode = canvasWidth / (children.length-1)*0.95;
		//alert(widthPerNode);
		var priceArray = new Array();
		var priceArraySum = 0;
		var z = 0;

		for (z; z < children.length; z++) {
			var getPrice = parseFloat(children[z].getAttribute('price'));
			priceArray.push(getPrice);
			priceArraySum += getPrice;

		}
		//alert(priceArraySum);

		theMax = Math.max.apply(Math, priceArray);
		//alert(theMax);
		theMin = Math.min.apply(Math, priceArray);
		//alert(theMin);
		theAvg = (priceArraySum / children.length).toFixed(2);
		$('#showMax').text("Max: "+theMax);
		$('#showMin').text("Min: "+theMin);
		$('#showAvg').text("Average: "+theAvg);

		myPaper.strokeStyle="#F00";
		myPaper.lineWidth="1";
		myPaper.beginPath();
		myPaper.moveTo(-2,canvasHeight);
		
		
		setInterval(function () {
			drawOneNode()
		}, 200);

		var i = 0;
		
		function drawOneNode() {

			if (i < children.length) {
				//myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear the canvas
				nextX =( i * widthPerNode)-2;
				nextY = canvasHeight - children[i].getAttribute('price') * (canvasHeight / theMax)*0.9;//scale

				myPaper.lineTo(nextX,nextY);
				myPaper.stroke();

				// Requirement #1
				myPaper.beginPath();
				myPaper.arc(nextX, nextY, 10, 0, Math.PI * 2);
				myPaper.fillStyle = "red";
				myPaper.fill();
				
				// Requirement # 4
				myPaper.fillStyle = "white";
				myPaper.font = "1.2vw Arial";
				
				myPaper.fillText(children[i].getAttribute('price'), nextX+5,nextY+20 );

				// Requirement # 3
				// myPaper.fillText(children[i].getAttribute('timepoint'), nextX+5 ,  canvasHeight-10);

				
			
				
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
		if ($(container).width() < 960) { //if small screen

			myCanvas.attr('width', $(container).width()); //set a new width
			myCanvas.attr('height', $(container).width() / 2.4);
			myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height); //clear the canvas
			getMyData(); //redraw the blocks
		} else {

			myCanvas.attr('width', 960);
			myCanvas.attr('height', 400);
			myPaper.clearRect(0, 0, myCanvas.width, myCanvas.height);
			getMyData();
		} //end if-else
	} //end func respond canvas
}); //end doc ready
