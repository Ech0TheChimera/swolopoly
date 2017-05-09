
// init board x
var game = new Array(11);

// init board y
for (i=0;i<game.length;i++){
	game[i] = new Array(11);
}


var gameBoardGen = ""; // holds content to eventually be pushed into SVG DOM


for (i=0;i<game.length;i++) {
	for (j=0;j<game[i].length;j++){
		if ((i === 0 || i === 10) || (j === 0 || j === 10)){
			gameBoardGen += ("<rect width=50 height=50 x="+(i*50)+" y="+(j*50)+" gridx="+i+" gridy="+j+" fill='white' stroke='black' />");
		}
	}
}



var svg = $("svg"); //Define element we will write to

svg.html(gameBoardGen); //render board from gameBoardGen