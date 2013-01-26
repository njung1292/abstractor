var VisualBox = function(boxID, x, y, color, stage, width, height) {
	this.id = boxID;
	this.x = x;
	this.y = y;
	this.color = color;
	this.stage = stage;
	this.width = width;
	this.height = height;

	this.layer = new Kinetic.Layer();
	this.group = new Kinetic.Group({
		draggable: true
	});

	this.graphics();
	this.events();

	this.group.add(this.rect);
	this.group.add(this.rectHeader);
	this.group.add(this.xCircle);
	this.group.add(this.xCircleText);
	this.layer.add(this.group);
}

VisualBox.prototype.graphics = function() {
	this.rectHeader = new Kinetic.Rect({
	  x: this.x,
	  y: this.y,
	  width: this.width,
	  height: 5,
	  fill: this.color,
	  offset: {
	    x: -25,
	    y: -25
	  },
	  // draggable: true,
	  id: 'rectHeader',
	  name: 'I am a rectangle header'
	});

	this.rect = new Kinetic.Rect({
	  x: this.x,
	  y: this.y,
	  width: this.width,
	  height: this.height,
	  fill: '#fff',
	  strokeWidth: 1,
	  stroke: this.color,
	  shadowColor: '#000',
	  shadowBlur: 12,
	  shadowOffset: 5,
	  shadowOpacity: 0.3,
	  offset: {
	    x: -25,
	    y: -25
	  },
	  // draggable: true,
	  id: 'rect',
	  name: 'I am a rectangle'
	});

	this.xCircle = new Kinetic.Circle({
        x: this.x,
        y: this.y,
        radius: 10,
        fill: '#fff',
        stroke: this.color,
        strokeWidth: 1,
        id: 'xCircle'
    });

    this.xCircleText = new Kinetic.Text({
        x: this.x,
        y: this.y,
        text: 'x',
        fontSize: 20,
        fontFamily: 'PT Sans',
        fill: this.color,
        id: 'xCircle'
    });
}


VisualBox.prototype.events = function() {
	window.visbox = this;
	var vis = window.visbox;
	this.group = new Kinetic.Group({
	  draggable: true
	});

	this.layer.on('click', function(e) {
		var shape = e.shape;
		
		/* if clicked on circular x button then remove the rectangle, 
		rectangle header, and x button */
		if (shape.getId() == 'xCircle') {
			vis.layer.remove(shape);
		} else {
			var newBoxText = document.createElement("textarea");
		}
	});



}







// var VisualBox = function(boxID, x, y, color, stage, width, height) {
// 	this.id = boxID;
// 	this.x = x;
// 	this.y = y;
// 	this.color = color;
// 	this.stage = stage;
// 	this.width = width;
// 	this.height = height;

// 	this.layer = new Kinetic.Layer();
// 	this.group = new Kinetic.Group({
// 		draggable: true
// 	});

// 	this.graphics();
// 	this.events();

// 	this.group.add(this.rect);
// 	this.group.add(this.rectHeader);
// 	this.group.add(this.xCircle);
// 	this.group.add(this.xCircleText);
// 	this.layer.add(this.group);
// }

// VisualBox.prototype.graphics = function() {
// 	this.rectHeader = new Kinetic.Rect({
// 	  x: this.x,
// 	  y: this.y,
// 	  width: this.width,
// 	  height: 5,
// 	  fill: this.color,
// 	  offset: {
// 	    x: -25,
// 	    y: -25
// 	  },
// 	  // draggable: true,
// 	  id: 'rectHeader',
// 	  name: 'I am a rectangle header'
// 	});

// 	this.rect = new Kinetic.Rect({
// 	  x: this.x,
// 	  y: this.y,
// 	  width: this.width,
// 	  height: this.height,
// 	  fill: '#fff',
// 	  strokeWidth: 1,
// 	  stroke: this.color,
// 	  shadowColor: '#000',
// 	  shadowBlur: 12,
// 	  shadowOffset: 5,
// 	  shadowOpacity: 0.3,
// 	  offset: {
// 	    x: -25,
// 	    y: -25
// 	  },
// 	  // draggable: true,
// 	  id: 'rect',
// 	  name: 'I am a rectangle'
// 	});

// 	this.xCircle = new Kinetic.Circle({
//         x: this.x,
//         y: this.y,
//         radius: 10,
//         fill: '#fff',
//         stroke: this.color,
//         strokeWidth: 1,
//         id: 'xCircle'
//     });

//     this.xCircleText = new Kinetic.Text({
//         x: this.x,
//         y: this.y,
//         text: 'x',
//         fontSize: 20,
//         fontFamily: 'PT Sans',
//         fill: this.color,
//         id: 'xCircle'
//     });
// }


// VisualBox.prototype.events = function() {
// 	window.visbox = this;
// 	var vis = window.visbox;
// 	this.group = new Kinetic.Group({
// 	  draggable: true
// 	});

// 	this.layer.on('click', function(e) {
// 		var shape = e.shape;
		
// 		/* if clicked on circular x button then remove the rectangle, 
// 		rectangle header, and x button */
// 		if (shape.getId() == 'xCircle') {
// 			vis.layer.remove(shape);
// 		} else {
// 			var newBoxText = document.createElement("textarea");
// 		}
// 	});



// }
