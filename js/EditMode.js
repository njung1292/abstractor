var EditMode = function(config) {
	this.deleteAllDiagrams = config.deleteAllDiagrams;
	this.deleteDiagram = config.deleteDiagram;
	this.getAllDiagrams = config.getAllDiagrams;
	this.getDiagram = config.getDiagram;
	this.postDiagram = config.postDiagram;
	this.putDiagram = config.putDiagram;
}



EditMode.prototype.init = function() {
	// this.initBlah();
	window.EditMode = this;
	var otherThis = window.EditMode;

	// var putReq = this.putDiagram(id, code);

	$("#submit").click(function(e) {
		e.preventDefault();
		var text = $("#editArea").val();
		console.log(text);
		var postReq = otherThis.postDiagram(text);
	});

	$("#delete").click(function(e) {
		e.preventDefault();
		var deleteAllReq = otherThis.deleteAllDiagrams();
	});


	//shows all existing diagram codes in the database
	function retrieveDiagramCode() {
		var getAllReq = otherThis.getAllDiagrams();
		getAllReq.success(function(allDiagramsData) {
			var diagram_id;
			var code;
			for (var i = 0; i < allDiagramsData.length; i++) {

				diagram_id = allDiagramsData[i]._id;
				code = allDiagramsData[i].code;
				console.log(code);
				// diagramCode += code;
			}
		});
	}

	retrieveDiagramCode();
		
}





