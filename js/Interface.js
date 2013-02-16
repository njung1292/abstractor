var blue = "#388e9e";
var red = "#dc423c";
var yellow = "#eecb25";
var purple = "#7d2a44";
var gray = "#515151";
var color_array = [red, blue, yellow, gray, purple];

Box.prototype.color = function() {
    this.colorField = color_array[(this.id % 5)];
    return this.colorField;
}



 function createBox(tree, x, y, width, height, app) {
	/* this creates the abstract box that holds data */
	var box = tree.addBox(0);

	var color = box.color();
	/* this creates the graphic and event thing for the box */

	var visualBox = new VisualBox(box.id,x,y,color, width, height, app); 
	
	/* this renders the box by adding it to the stage */
}


// function createLink(tree) {
// 	/* this creates the abstract link that holds data */
// 	// var link = tree.addLink();

// 	 this creates the graphic and event thing for the link 
// 	var visualLink = new VisualLink(start, end, box); 

// 	/* this renders the link by adding it to the stage */
// 	stage.add(visualLink.layer);
// }


//Constants//
var open = -1;
var closed = 1;

var ViewMode = function(config) {
	this.deleteAllDiagrams = config.deleteAllDiagrams;
	this.deleteDiagram = config.deleteDiagram;
	this.getAllDiagrams = config.getAllDiagrams;
	this.getDiagram = config.getDiagram;
	this.postDiagram = config.postDiagram;
	this.putDiagram = config.putDiagram;
}

//Toggle if the box has been clicked
Box.clicked = closed;

//Expand or collapse on click//
Box.prototype.exp_collapse = function(){
	var children = this.get_array();
	for (var i = 0; i<children.boxes.length; i++){
		var id = children.boxes[i].get_id(); //get the ID for the child box//
		var link_id = children.links[i].get_link_id();
		var thisBox = this;
		$("#"+id).click(function(){
			if (thisBox.clicked == closed) {
				$(this).slideDown("slow");
				$("#"+link_id).fadeOut(500);
			}
			else {
				$(this).slideUp("slow");
				$("#"+link_id).fadeIn(500);
			}
		});
	}
	this.clicked = -this.clicked; //toggle back//
}


/* NOTE: ADAPTED FROM http://gapjumper.com/research/lines.html */
function createLine(tree,x1, y1, x2, y2, id)
	{
		if (x2 < x1)
		{
			var temp = x1;
			x1 = x2;
			x2 = temp;
			temp = y1;
			y1 = y2;
			y2 = temp;
		}
		var line = document.createElement("div");
		line.className = "line";
		line.id = id;
		var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
		line.style.width = length + "px";

		
	
			var angle = Math.atan((y2-y1)/(x2-x1));
			line.style.top = y1 + 0.5*length*Math.sin(angle) + "px";
			line.style.left = x1 - 0.5*length*(1 - Math.cos(angle)) + "px";
			line.style.MozTransform = line.style.WebkitTransform = line.style.OTransform= "rotate(" + angle + "rad)";
	
		
	}


// Line.prototype.newLine = function(tree,x1,y1,x2,y2,id) {
// 	this.x1 = x1;
// 	this.x2 = x2;
// 	this.y1 = y1;
// 	this.y2 = y2;
// 	this.id = id;

// 	// var link = tree.addLink()

// 	$("#canvas").append(createLine(x1,y1,x2,y2,id));
// }



