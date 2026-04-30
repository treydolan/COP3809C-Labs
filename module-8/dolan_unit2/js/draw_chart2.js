// JavaScript Document
$(document).ready(function () {
	var myCanvas = $('#myCanvas');
	var myPaper = myCanvas.get(0).getContext('2d');
	var container = $(myCanvas).parent();
	var theMax = 0;
	var theMin = 0;
	var theAvg = 0;
	var timer;

	respondCanvas();

	function getMyData() {
		clearInterval(timer);
		var children = document.getElementsByTagName('node');
		var canvasWidth = myCanvas.get(0).width;
		var canvasHeight = myCanvas.get(0).height;
		var chartPadding = 70;
		var bottomPadding = 130;
		var chartWidth = canvasWidth - (chartPadding * 2);
		var chartHeight = canvasHeight - chartPadding - bottomPadding;
		var widthPerNode = chartWidth / (children.length - 1);
		var loadArray = [];
		var loadArraySum = 0;
		var i = 0;

		for (var z = 0; z < children.length; z++) {
			var getLoadTime = parseFloat(children[z].getAttribute('loadtime'));
			loadArray.push(getLoadTime);
			loadArraySum += getLoadTime;
		}

		theMax = Math.max.apply(Math, loadArray);
		theMin = Math.min.apply(Math, loadArray);
		theAvg = (loadArraySum / children.length).toFixed(0);
		$('#showMax').text('Slowest: ' + theMax + ' ms');
		$('#showMin').text('Fastest: ' + theMin + ' ms');
		$('#showAvg').text('Average: ' + theAvg + ' ms');

		myPaper.clearRect(0, 0, canvasWidth, canvasHeight);

		myPaper.fillStyle = 'rgba(255, 255, 255, 0.72)';
		myPaper.fillRect(0, 0, canvasWidth, canvasHeight);

		myPaper.strokeStyle = 'rgba(0, 0, 0, 0.08)';
		myPaper.lineWidth = 1;

		for (var g = 0; g <= 5; g++) {
			var gridY = chartPadding + (chartHeight / 5) * g;
			myPaper.beginPath();
			myPaper.moveTo(chartPadding, gridY);
			myPaper.lineTo(canvasWidth - chartPadding, gridY);
			myPaper.stroke();
		}

		myPaper.strokeStyle = '#111';
		myPaper.lineWidth = 1;
		myPaper.beginPath();
		myPaper.moveTo(chartPadding, chartPadding);
		myPaper.lineTo(chartPadding, canvasHeight - bottomPadding);
		myPaper.lineTo(canvasWidth - chartPadding, canvasHeight - bottomPadding);
		myPaper.stroke();

		myPaper.fillStyle = '#111';
		myPaper.font = '14px Inter, Arial, sans-serif';
		myPaper.fillText('Load Time (ms)', chartPadding, 35);
		myPaper.fillText('Development Optimization', canvasWidth / 2 - 100, canvasHeight - 25);

		myPaper.strokeStyle = '#00bcd4';
		myPaper.lineWidth = 4;
		myPaper.beginPath();

		timer = setInterval(function () {
			drawOneNode();
		}, 200);

		function drawOneNode() {
			if (i < children.length) {
				var nextX = chartPadding + (i * widthPerNode);
				var loadTime = parseFloat(children[i].getAttribute('loadtime'));
				var nextY = (canvasHeight - bottomPadding) - (loadTime * (chartHeight / theMax));

				if (i === 0) {
					myPaper.moveTo(nextX, nextY);
				} else {
					myPaper.lineTo(nextX, nextY);
					myPaper.stroke();
				}
				myPaper.save();
				myPaper.beginPath();
				myPaper.arc(nextX, nextY, 5, 0, Math.PI * 2);
				myPaper.fillStyle = '#00bcd4';
				myPaper.fill();
				myPaper.restore();
				
				myPaper.beginPath();
				myPaper.moveTo(nextX, nextY);

				myPaper.fillStyle = '#111';
				myPaper.font = '11px Inter, Arial, sans-serif';
				myPaper.fillText(loadTime + ' ms', nextX - 24, nextY - 12);
				var label = children[i].getAttribute('optimization');

				myPaper.save();
				myPaper.translate(nextX, canvasHeight - 60);
				myPaper.rotate(-Math.PI / 4); // 45° rotation
				myPaper.fillText(label, 0, 0);
				myPaper.restore();

				i++;
			} else {
				clearInterval(timer);
			}
		}
	}

	var doit;
	$(window).resize(function () {
		clearTimeout(doit);
		doit = setTimeout(respondCanvas, 600);
	});

	function respondCanvas() {
		if ($(container).width() < 1000) {
			myCanvas.attr('width', $(container).width());
			myCanvas.attr('height', $(container).width() / 1.67);
		} else {
			myCanvas.attr('width', 1000);
			myCanvas.attr('height', 600);
		}
		getMyData();
	}
});
