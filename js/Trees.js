/* constants */
var VERTICAL = 0;
var TANGENT = 1;

/* utility */
/* Array.remove: removes a value*/
Array.prototype.remove = function(value) {
	var i = this.indexOf(value);
	if (i >= 0 && i < this.length) //in bound
		this.splice(i, 1);
}

/* defining the data structure elements. All IDs should correspond to
 * their appropriate index on their respective arrays */
  
/* Tree: the overall data structure containing the entire diagram */
var Tree = function(treeID) {
	this.id = treeID;
	this.boxes = new Array();
	this.links = new Array();
	this.topBox = 0; //highest box ID
	this.topLevel = 0; //the level of highest level box
	
	/* addLink: links two boxes/phrases and makes references to itself */
	this.addLink = function(src, dst, type) {
		var link = new Link(src, dst, type);
		src.links.push(link); //insert link to source links array
		dst.links.push(link); //to dest links array
		this.links.push(link); // tree links array
		return link;
	}
	
	/* deleteLink: removes a link and its references*/
	this.deleteLink = function(link) {
		link.src.links.remove(link); //remove from source
		link.dst.links.remove(link); // from dest
		this.links.remove(link); //from tree
	}
	
	/* addPhrase: adds a phrase to a box */
	this.addPhrase = function(box, start, end) {
		var phrase = new Phrase(box, start, end);
		box.phrases.push(phrase); //insert
		return phrase;
	}
	
	/* deletePhrase: removes a phrase from a box and may delete link */
	this.deletePhrase = function(phrase) {
		phrase.box.phrases.remove(phrase); //remove from box list
		for (var i = phrase.links.length - 1; i >= 0; i--) { //remove links
			this.deleteLink(phrase.links[i]);
		}
	}

	/* addBox: creates a new empty box at a given level
	 *  and places it at end of box array */
	this.addBox = function(boxLevel) {
		var box = new Box(boxLevel);
		this.boxes.push(box); //insert at end
		this.box.id = this.topBox++;
		return box;
	}
	
	/* deleteBox: removes a given box from the box array 
	 * may remove a link */
	this.deleteBox = function(box) {
		this.boxes.remove(box); //remove from box list
		for (var i = box.links.length - 1; i >= 0; i--) { //remove links
			this.deleteLink(box.links[i]);
		}
		for (var i = box.phrases.length - 1; i >= 0; i--) { //remove phrases
			this.deletePhrase(box.phrases[i]);
		}
	}
	
}

/* Box: each node in the tree, containing phrases and being linked by Links */
var Box = function(boxLevel) {
	this.id;
	this.level = boxLevel; //should always be lower than box above
	this.text = ""; //raw text
	this.parsed= ""; //parsed text
	this.phrases = new Array();
	this.links = new Array();
	this.tangent = null; //if non-null, references a Link	
	
	/* get_array: returns an array of all children boxes and links
	 * including the boxes with the phrases that this box is linked to */
	this.get_array = function(){
		var link;
		var parent;
		var child;
		var children { 
			boxes:[] ,
			links:[]
		};
		for (var i = 0; i < this.links.length; i++) {
			link = this.links[i];
			parent = link.src;
			if (parent instanceof Phrase)
				parent = parent.box;
			child = link.dst;
			if (parent == this) {//this box is parent
				if (child instanceof Phrase)
					child = child.box;
				children.boxes.push(child); //push in child box
				children.links.push(link); //push in corresponding link
			}
		}
		return children;
	}
	
	}
}

/* Phrase: an element inside a box (the parent) 
 * starting position is inclusive and ending pos is exclusive */
var Phrase = function(box, start, end) {
	this.box = box;
	this.links = new Array();
	this.start = start;
	this.end = end;
}

/* Link: connectors between phrase and box for vertical links
 * and boxes for tangents */
var Link = function(src, dst, linkType) {
	this.src = src; //should be the higher level box
	this.dst = dst; //lower level box
	this.type = linkType; //VERTICAL or TANGENT
}

