var VisualBox = function(boxID) {
	this.id = boxID;
	this.layer = new Kinetic.Layer();
	this.group = new Kinetic.Group({
		draggable: true
	});

	this.graphics();
	this.events();

	this.group.add(this.rect);
	this.group.add(this.rectHeader);
	this.layer.add(this.group);
}

VisualBox.prototype.graphics = function() {
	this.rectHeader = new Kinetic.Rect({
	  x: 300,
	  y: 90,
	  width: ($(window).width()/5) - 50,
	  height: 5,
	  fill: '#dc423c',
	  offset: {
	    x: 50,
	    y: 25
	  },
	  // draggable: true,
	  id: 'myRectHeader',
	  name: 'I am a rectangle header'
	});

	this.rect = new Kinetic.Rect({
	  x: 300,
	  y: 90,
	  width: ($(window).width()/5) - 50,
	  height: 50,
	  fill: '#fff',
	  strokeWidth: 1,
	  stroke: '#dc423c',
	  shadowColor: '#000',
	  shadowBlur: 12,
	  shadowOffset: 5,
	  shadowOpacity: 0.3,
	  offset: {
	    x: 50,
	    y: 25
	  },
	  // draggable: true,
	  id: 3,
	  name: 'I am a rectangle'
	});
}


VisualBox.prototype.events = function() {
	this.group = new Kinetic.Group({
	  draggable: true
	});

	this.layer.on('click', function(evt) {
            // get the shape that was clicked on
            var shape = evt.shape;
            alert(shape.getId());
            // console.log(shape.getId());
    });
}

