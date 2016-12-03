$(document).ready(function(){
	buildGrid();
	choicePen();
});

function buildGrid() {
	numberCells = prompt('Enter your number of raws and columns');
	var rows = numberCells;
	var cols = numberCells;
	var height = 480/rows;
	var width = 480/cols;
	var $cell = $('<div />').height(height).width(width).addClass('cell');
	var box = $(".playbox").empty();
	for(var j=0; j<rows*cols; j++){
		box.append($cell.clone());
	};
};

function choicePen() {
	$('#green').click(function(){
		greenColor();
	});
	$('#random').click(function(){
		randomColor();
	});
	$('#reload').click(function(){
		reloadGrid();
	});
};

function greenColor(){
	$('.cell').mouseenter(function() {
		$(this).css('background', 'green');
	});
};

function randomColor(){
	$('.cell').mouseenter(function() {
		var color = ["red", "blue", "yellow", "green", "pink", "violet", "purple", "brown", "aqua", "gold"];
      	var random = color[Math.floor(Math.random() * color.length)];
      	$(this).css("background", random);
	});
};

function reloadGrid(){
	$('.cell').css('background','white');
};







