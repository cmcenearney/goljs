// Cell class
function Cell(x,y){
  this.x = x;
  this.y = y;
  this.isAlive = false;
  this.liveNeighborCount = 0;
}

Cell.prototype = {
	constructor: Cell,
	toString: function() {
		return this.x +  "," + this.y;
	}
};

