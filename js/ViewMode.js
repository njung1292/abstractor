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


