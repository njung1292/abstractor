var DriversStreetView = function(config) {
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


	//shows all existing issues stored on server

	var diagramCode = "";

	function retrieveDiagramCode(diagramCode) {

		var getAllReq = otherThis.getAllDiagrams();
		getAllReq.success(function(allDiagramsData) {


			var diagram_id;
			var code;
			var issueLat;
			var issueLng;
			var issueTitle;
			var state;

			for (var i = 0; i < allDiagramsData.length; i++) {

				issue_id = allDiagramsData[i]._id;
				code = allIssuesData[i].code;

				diagramCode += code;
			}
		});
	}

	retrieveDiagramCode(diagramCode);
	console.log(diagramCode);
		
}