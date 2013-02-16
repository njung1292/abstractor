var VisualBox = function(boxID, x, y, color, width, height, app) {
	this.id = boxID;
	this.x = x;
	this.y = y;
	this.color = color;
	this.width = width;
	this.height = height;
	// this.x1 = 0;
	// this.x2 = 0;
	// this.y1 = 0;
	// this.y2 = 0;
	// this.linkCount = 0;

	this.initGraphics();
	this.graphics(true, "blah");
	this.events(app);
}

VisualBox.prototype.initGraphics = function() {
	$("#canvas").append("<textarea id='"+this.id+"' class='rectangle'></textarea>");
	this.graphics(true, "Empty string");

}

VisualBox.prototype.graphics = function(isEdit, contents) {

	window.visbox = this;
	var vis = window.visbox;
	if (isEdit) {
		$("#"+this.id).replaceWith("<textarea id='"+this.id+"' class='rectangle'>"+contents+"</textarea>");
	}

	else { //is div
		$("#"+this.id).replaceWith("<div id='"+this.id+"' class='rectangle'>"+contents+"</div>");
		$("#"+this.id).draggable( {stop: function( event, ui ) {} });
		$("#"+this.id).on( "dragstop", function(event, ui) { 
			vis.x = ui.offset.left;
			vis.y = $(window).height() - ui.offset.top - vis.height;
			console.log(vis.x);
		});



	}
	$("#"+this.id).css("left",this.x);
	$("#"+this.id).css("bottom",this.y);
	$("#"+this.id).css("width",this.width);
	$("#"+this.id).css("height",this.height);
	$("#"+this.id).css("border-color",this.color);

	console.log('lalalal');
}


VisualBox.prototype.events = function(app) {
	window.visbox = this;
	var vis = window.visbox;

	console.log(this.id);
	$("#"+vis.id).click(function(e) {

		// if (app.editMode !== true && app.linkMode === true && vis.linkCount < 1 && $("#"+vis.id).get(0).tagName === 'DIV') {
		// 	vis.x1 = vis.x;
		// 	vis.y1 = $(window).height - vis.y;
		// 	vis.linkCount +=0; 
		// } else if (linkCount.length >= 1 && $("#"+vis.id).get(0).tagName === 'DIV') {
		// 	vis.x2 = vis.x;
		// 	vis.y2 = $(window).height - vis.y;
		// 	$("#canvas").append(newLine(vis.x1,vis.y1,vis.x2,vis.y2,vis.id));
		// 	vis.linkCount = 0;
		// }	


		console.log($("#"+vis.id).get(0).tagName);
		if (app.editMode === true && $("#"+vis.id).get(0).tagName === 'DIV') {
			vis.graphics(true, $("#"+vis.id).html());
			vis.events(app);
		}
	});


	$("#"+vis.id).bind("keypress", function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code === 13) {
			e.preventDefault();
			var rawText = $("#"+vis.id).val();
			console.log(rawText);
			vis.graphics(false, rawText);
			
			$("#edit_text").html('<img src="icons/T_sidemenu.png">\
            <span class="menu_text">Edit Text</span>')
            app.editMode = false;
            vis.events(app);
			console.log("got here!");			
		}
	});

	// $("#"+this.id).children(".text_box").click(function(e) {
	// 	e.preventDefault();

	// });





	// $("#"+vis.id).hover(function() {
	// 	$("#"+vis.id).append("<span style='position:relative;right:-50px;top:-10px;background-color:red; z-index:1000000;'>Hiii</span>");
	// },
	// function() {
	// 	$("#"+vis.id).css("background-color","#fff");
	// }

	// );

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
