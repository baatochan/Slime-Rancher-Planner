/**
 * Created by barto on 09.09.17.
 */

var desiredWidth = 1680;
var desiredHeight = 920;

var leftOffset = 0;
var topOffset = 0;

var plots = [
	{
		'id': 1, 'leftPosition': 341, 'topPosition': 614, 'align': 'bottom-right'
	}, {
		'id': 2, 'leftPosition': 341, 'topPosition': 655, 'align': 'top-right'
	}, {
		'id': 3, 'leftPosition': 381, 'topPosition': 614, 'align': 'bottom-left'
	}, {
		'id': 4, 'leftPosition': 381, 'topPosition': 655, 'align': 'top-left'
	}, {
		'id': 5, 'leftPosition': 441, 'topPosition': 365, 'align': 'top-right'
	}, {
		'id': 6, 'leftPosition': 489, 'topPosition': 268, 'align': 'bottom-right'
	}, {
		'id': 7, 'leftPosition': 552, 'topPosition': 270, 'align': 'bottom-left'
	}, {
		'id': 8, 'leftPosition': 561, 'topPosition': 363, 'align': 'top-left'
	}, {
		'id': 9, 'leftPosition': 776, 'topPosition': 192, 'align': 'bottom-right'
	}, {
		'id': 10, 'leftPosition': 775, 'topPosition': 232, 'align': 'top-right'
	}, {
		'id': 11, 'leftPosition': 893, 'topPosition': 191, 'align': 'bottom-right'
	}, {
		'id': 12, 'leftPosition': 893, 'topPosition': 232, 'align': 'top-right'
	}, {
		'id': 13, 'leftPosition': 893, 'topPosition': 318, 'align': 'top-right'
	}, {
		'id': 14, 'leftPosition': 934, 'topPosition': 191, 'align': 'bottom-left'
	}, {
		'id': 15, 'leftPosition': 934, 'topPosition': 232, 'align': 'top-left'
	}, {
		'id': 16, 'leftPosition': 934, 'topPosition': 318, 'align': 'top-left'
	}, {
		'id': 17, 'leftPosition': 1069, 'topPosition': 595, 'align': 'bottom-right'
	}, {
		'id': 18, 'leftPosition': 1069, 'topPosition': 648, 'align': 'top-right'
	}, {
		'id': 19, 'leftPosition': 1108, 'topPosition': 595, 'align': 'bottom-left'
	}, {
		'id': 20, 'leftPosition': 1108, 'topPosition': 648, 'align': 'top-left'
	}, {
		'id': 21, 'leftPosition': 1150, 'topPosition': 708, 'align': 'top-left'
	}, {
		'id': 22, 'leftPosition': 1152, 'topPosition': 233, 'align': 'bottom-right'
	}, {
		'id': 23, 'leftPosition': 1167, 'topPosition': 305, 'align': 'top-right'
	}, {
		'id': 24, 'leftPosition': 1218, 'topPosition': 222, 'align': 'bottom-right'
	}, {
		'id': 25, 'leftPosition': 1262, 'topPosition': 248, 'align': 'top-left'
	}, {
		'id': 26, 'leftPosition': 1258, 'topPosition': 325, 'align': 'top-left'
	}, {
		'id': 'W', 'leftPosition': 374, 'topPosition': 570, 'align': 'bottom-right'
	}
];

$(document).ready(function (e) {
	calculateBodySize();
	showPlots();

	$(window).resize(function () {
		calculateBodySize();
		showPlots();
	});

	$('[id^="plotA-"]').click(function (e) {
		$('#setupPlot').modal('show');
		var id = $(this).attr('id');
		id = id.slice(6);
		if (id === 'W') {
			$('#setupPlotNumber').text('- waterfall');
		} else {
			$('#setupPlotNumber').text(id);
		}
	});

	$('#firstChoice').change(function () {
		// TODO!
	});
});

function calculateBodySize() {
	var actualWidth = window.innerWidth;
	var actualHeight = window.innerHeight;

	leftOffset = (actualWidth-desiredWidth)/2;
	topOffset = (actualHeight-desiredHeight)/2;

	$(document.body).css('width', actualWidth);
	$(document.body).css('height', actualHeight);
}

function showPlots() {
	$('[id^="plotA-"]').remove();

	var plotBorder = $('.plot').css('border-width');
	plotBorder = plotBorder.slice(0, -2);
	plotBorder = parseInt(plotBorder);
	var plotTemplate = $('#plotTemplate');


	$.each(plots, function (key, value) {
		var plot = plotTemplate.clone();
		plot.attr('id', 'plotA-' + value.id);
		plot.css('display', '');
		plot.css('z-index', 0);
		if (value.id === 'W') {
			plot.find('.plot').attr('id', 'waterfall'); //BE CAREFULL IN FUTURE
		} else {
			plot.find('.plot').attr('id', 'plot-' + value.id);
		}
		var leftPosition = value.leftPosition + leftOffset - plotBorder;
		var topPosition = value.topPosition + topOffset - plotBorder;
		plot.find('.plot').css('left', leftPosition + 'px');
		plot.find('.plot').css('top', topPosition + 'px');
		plot.find('.plotNumber').text(value.id);
		plotTemplate.after(plot);
	});
}