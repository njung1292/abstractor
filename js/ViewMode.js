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
	var child_array = this.get_array();
	for (var i = 0; i<child_array.length; i++){
		var abst_id = child_array[i].get_id(); //get the ID for the child box//
		var link_id = child_array[i].get_link_id(); //get the ID for the link//
		var thisBox = this;
		$("#"+abst_id).click(function(){
			if (thisBox.clicked == closed) {
				$(this).slideDown("slow"); //expand the child box//
				$("#"+link_id).fadeIn(500); //fade in the link//
			}
			else {
				$(this).slideUp("slow"); //collapse the child box//
				$("#"+link_id).fadeOut(500); //fade out the link//
			}
		});
	}
	this.clicked = -this.clicked; //toggle back//
}


