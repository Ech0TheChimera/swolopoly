var boardBack = $("#boardBack"); // define element we will write to for the board \\
var boardPart = $("#boardPart"); // define element we will write to for the pieces \\

// init board x \\
var game = new Array(11);
var players = [];
players[0] = new pieceConstructor(100,100,"rect",0);
players[1] = new pieceConstructor(100,100,"rect",270);
players[1].deltaPos(9,10);

// init board y \\
for (i=0;i<game.length;i++){
	game[i] = new Array(11);
}

// roll dice \\
function roll(){
	return (Math.floor(Math.random() * ((6-1) +1)+1));
}

$("#btnRoll").click(function(){
	console.log(roll() + roll());
});

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
	boardBack.html(gameBoardGen); //render board from gameBoardGen \\
}

drawBoard(); //draw the board \\

function drawPlayers(){
	var playerGen = "";
	for (var i of players) {
		playerGen += "<rect width=50 height=50 x="+(i.posx*75)+" y="+(i.posy*75)+" gridx="+i.posx+" gridy="+i.posy+" fill='hsl("+i.hcolor+",100%,50%)' stroke='black' />"; // draw \\
	}
	boardPart.html(playerGen);
}

drawPlayers();

// game piece constructor \\
function pieceConstructor (life,gains,shape,hcolor){
	this.life = life;
	this.gains = gains;
	this.shape = shape;
	this.hcolor = hcolor;
	this.posx = 10;
	this.posy = 10;

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
}

// equipment constructor \\
var equipmentConstructor = function(posx,posy,type,cost,rent,color){
	this.posx = posx;
	this.posy = posy;
	this.type = type;
	this.cost = cost;
	this.rent = rent;
	this.color = color;
	this.owner = null;
	this.plates = 0;

	// add plate method \\
	this.addPlate = function(amount){
		this.plates += amount;
	};
};