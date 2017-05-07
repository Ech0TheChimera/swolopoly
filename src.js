/*

var board = new Array(11);

var gameBoard = "";
for (i of board){
	if (i === 0 || i === 10){
		board[i] = new Array(11);
	}
}

x = 0;
for (i of board){
	x++;
	gameBoard += ("<rect width=5 height=5 x="+5*x+" y=5 />");
}

/*
for (i of board) {
	for (j of i){
		gameBoard += ("<rect width=5 height=5 x="+((i*10)+10)+" y="+((j*10)+10)+" />");
	}
}

*/

var svg = $("svg");

//svg.html(gameBoard);


var game = [
	[
		{
			type:"benchpress",
			rent:500,
			cost:700,
			owned:false
		},
		{
			type:"player",
			life:100,
			gains:0
		}
	]
];

for (i of game){
	for (j of i){
		if (j.type === "benchpress"){
			alert(j.rent);
		}
	}
}