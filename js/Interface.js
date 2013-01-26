 function createBox(tree, stage) {
	/* this creates the abstract box that holds data */
	var box = tree.addBox(0);
	
	/* this creates the graphic and event thing for the box */

	function levelToX(levels) {
		var base = 200;
		var heightPerLevel = 150;
		var height = base + (heightPerLevel * levels);
		return height;
	}

	function boxesPerLevelToWidth(boxes) {
		var width = stage.getWidth()/boxes;
		return width;
	}

	var levels = 2;
	var boxes = 4;

	var width = boxesPerLevelToWidth(boxes);
	var height = levelToHeight(levels); 


	var x = 0;
	var boxesPerP
	var y = 0;
	var id = 0;
	var color = "#dc423c";
	var visualBox = new VisualBox(id,x,y,"#dc423c",stage, width, height); 
	
	/* this renders the box by adding it to the stage */
	stage.add(visualBox.layer);
}


function createLink(tree, stage) {
	/* this creates the abstract link that holds data */
	// var link = tree.addLink();

	/* this creates the graphic and event thing for the link */
	var visualLink = new VisualLink(start, end, box); 

	/* this renders the link by adding it to the stage */
	stage.add(visualLink.layer);
}









//  function createBox(tree, stage) {
// 	/* this creates the abstract box that holds data */
// 	var box = tree.addBox(0);
	
// 	/* this creates the graphic and event thing for the box */
	

// 	function levelToX(levels) {
// 		var base = 200;
// 		var heightPerLevel = 150;
// 		var height = base + (heightPerLevel * levels);
// 		return height;
// 	}

// 	function boxesPerLevelToWidth(boxes) {
// 		var width = stage.getWidth()/boxes;
// 		return width;
// 	}

// 	var levels = 2;
// 	var boxes = 4;

// 	var width = boxesPerLevelToWidth(boxes);
// 	var height = levelToHeight(levels); 


// 	var x = 0;
// 	var boxesPerP
// 	var y = 0;
// 	var id = 0;
// 	var color = "#dc423c";
// 	var visualBox = new VisualBox(id,x,y,"#dc423c",stage, width, height); 
	
// 	/* this renders the box by adding it to the stage */
// 	stage.add(visualBox.layer);
// }


// function createLink(tree, stage) {
// 	/* this creates the abstract link that holds data */
// 	// var link = tree.addLink();

// 	/* this creates the graphic and event thing for the link */
// 	var visualLink = new VisualLink(start, end, box); 
	
// 	/* this renders the link by adding it to the stage */
// 	stage.add(visualLink.layer);
// }
