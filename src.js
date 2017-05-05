var board = new Array(11);

var gameBoard = "";
for (i of board){
	if (i === 0 || i === 10){
		board[i] = new Array(11);
	}
}

for (i of board) {
	for (j of i){
		gameBoard += ("<rect width=5 height=5 x="+((i*10)+10)+" y="+((j*10)+10)+"></rect>");
	}
}

var svg = $("svg");

svg.html(gameBoard);
