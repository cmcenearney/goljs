/*
Set class
	will create a set of any object that implements toString such that the string can be used to determine uniqueness

	use array to back the set instead of an object(hash)?
		would need a hash function to convert item to array index
		faster?
*/

function Set(){
	this.items = {};
}

Set.prototype = {
	constructor: Set,
	add: function(item) {
		if (item.toString() == "[object Object]") {
			throw new Error("Set requires objects to implement toString");
		}
		else {
			this.items[item.toString()] = item;
			return true;	
		}			
	},
	union: function(set) {
		if (set.constructor.name !== "Set") {
			throw new Error("Set operations can only be performed on instances of Set");
		}
		for (var item in set.items) {
			this.items[item] = set.items[item]
		}
	},
	intersection: function() {},
	substract: function(set) {},
	remove: function(item) {
		s = item.toString()
		delete this.items[s];
		return this.items[s] == null;
	},
	size: function() {
		var i = 0;
		for (var item in this.items) {
			i++;
		}
		return i;
	},
	contains: function(item) {
		return this.items[item.toString()] != null;
	}
};