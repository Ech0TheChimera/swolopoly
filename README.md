# swolopoly

Plan: Construct items and develop rendering first, then instantiate objects in the board, render them seperately. 

* Board:
	* 11x11 grid:
		* Arrays holding place/equipment objects
	* Parts move clockwise on board
	* Parts start at pos[10][10]

* Functions
	* renderBoard
	* renderPlayer
	* rollDie

* Objects
	* Players
		* Methods
			* passGo
				* add 50 to player.life and 100 to player.gains
			* purchase
				* subtract a certain amount of life
			* rent
				* subtract a certain amount of gains
			* die
				* remove player object
			* move
				* change player.posx and player.posy
		* Fields
			* life(int)
			* gains(int)
			* posx(int)
			* posy(int)
	* Places
		* Methods
		* Fields
			* ownedBy(str)
			* rent(int)
			* cost(int)
			* mortgageStatus(bool)
			* plates(arr)