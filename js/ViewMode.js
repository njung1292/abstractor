var ViewMode = function(config) {
	this.deleteAllDiagrams = config.deleteAllDiagrams;
	this.deleteDiagram = config.deleteDiagram;
	this.getAllDiagrams = config.getAllDiagrams;
	this.getDiagram = config.getDiagram;
	this.postDiagram = config.postDiagram;
	this.putDiagram = config.putDiagram;
}

//Toggle if the box has been clicked
var box_clicked = false;

//Expand or collapse on click//
function exp_collapse(){
	if (box_clicked = false) {
		box_clicked = true; //toggle
		expand(parent_box);
	else {
		box_clicked= false; //toggle
		collapse(parent_box);
	}
}

function expand(parent_box){
	var child = get_child(parent_box);
	//some CSS animation like "show child"//
}

function collapse(parent_box){
	//requires: box_clicked = true;
	var child = get_child(parent_box);
	//some CSS animation like "hide child"//
}
