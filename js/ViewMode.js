//Constants//
var open = 0;
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
function exp_collapse(){
	Box.child_array = this.get_array();
	for (var i = 0; i<Box.child_array.length; i++){
		var id = Box.child_array[i].get_id(); //get the ID for the child box//
		$("#"+id).click(function(){ 
			if (Box.clicked == closed) $(this).slideDown("slow");
			else $(this).slideUp("slow");
		});
	}
	Box.clicked = -Box.clicked;
}


