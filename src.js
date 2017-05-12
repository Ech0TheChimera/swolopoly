var svg = $("svg"); // define element we will write to \\

// init board x \\
var game = new Array(11);

// init board y \\
for (i=0;i<game.length;i++){
	game[i] = new Array(11);
}

// make gamePiece Render Var \\
var pieceRender = "";

function drawBoard(){
	var gameBoardGen = ""; // holds content to eventually be pushed into SVG DOM \\
	for (i=0;i<game.length;i++) {
		for (j=0;j<game[i].length;j++){
			if ((i === 0 || i === 10) || (j === 0 || j === 10)){ // ONLY DRAW IF THE GRID IS ON THE FAR LEFT, RIGHT, TOP OR BOTTOM \\
				gameBoardGen += ("<rect width=75 height=75 x="+(i*75)+" y="+(j*75)+" gridx="+i+" gridy="+j+" fill='hsl(180,100%,50%)' stroke='black' />"); // draw \\
			}
		}
	}
	svg.html(gameBoardGen); //render board from gameBoardGen \\
}

drawBoard(); //draw the board \\

$("rect").hover(function() {
	let x = $(this).attr("gridx");
	let y = $(this).attr("gridy");
	$("p").html(x + ", " + y);
});

game[10][10] += {
	type:"player",
	gains:0,
	life:100
};

// game piece constructor \\
var pieceConstructor = function(life,gains,shape){
	this.life = life;
	this.gains = gains;
	this.shape = shape;
	this.posx = 11;
	this.posy = 11;

	// render player \\
 	this.display = function(){
  		pieceRender = "<rect x="+this.posx+" y="+this.posy+"width=20 height=20 />";
		$("#piece").html(pieceRender);
  	};

  	// move player \\
  	this.deltaPos = function(x,y){
  		this.posx = x;
  		this.posy = y;
  	};
};

// 