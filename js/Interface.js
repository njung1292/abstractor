 function createBox(tree, stage) {
	/* this creates the abstract box that holds data */
	var box = tree.addBox(0);
	
	/* this creates the graphic and event thing for the box */
	var visualBox = new VisualBox(box); 
	
	/* this renders the box by adding it to the stage */
	stage.add(visualBox.layer);
}
