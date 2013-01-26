var AbstractorApp = function(){
    this.setUp();
}    

AbstractorApp.prototype.setUp = function(){
    this.ajaxSetUp();
    this.initPages();
}

AbstractorApp.prototype.ajaxSetUp = function() {
    this.deleteAllDiagrams = function() {
        var deleteAllReq = $.ajax({
                        url: 'http://'+window.location.host+'/diagrams',
                        type: 'DELETE',
                        // data: {"desc": ""},
                        success: function(data) {
                            console.log("successfully deleted all diagrams");
                            return data;
                        }
        });
        return deleteAllReq;
    }

    this.deleteDiagram = function(givenId) {
        var deleteReq = $.ajax({
                        url: 'http://'+window.location.host+'/diagrams/'+givenId,
                        type: 'DELETE',
                        // data: {"state": "deleted"},
                        success: function(data) {
                            console.log("successfully deleted given diagram");
                            return data;
                        }

        });
        return deleteReq;
    }

    this.getDiagram = function(givenId) {
        var getReq = $.ajax({
                        url: 'http://'+window.location.host+'/diagrams/'+givenId,
                        type: 'GET',
                        success: function(data) {
                            console.log("successfully retrieved given diagrams");
                            return data; 
                        }
        });
        return getReq;
    }


    this.getAllDiagrams = function() {
        var getAllReq = $.ajax({
                        url: 'http://'+window.location.host+'/diagrams',
                        type: 'GET',
                        success: function(data) {
                            console.log("successfully retrieved all diagrams");
                            return data;
                        }
        });
        return getAllReq;
    }


    this.postDiagram = function(code) {
       
        var postReq = $.ajax({
                        url: 'http://'+window.location.host+'/diagrams',
                        type: 'POST',
                        data: {"code": code},
                        success: function(data) {
                            // console.log(data[0].desc);
                            console.log("successfully posted new diagram");
                            return data;
                        }
        });
        return postReq;
    }

    this.putDiagram = function(givenId,code) {
        var putReq = $.ajax({
                        url: 'http://'+window.location.host+'/diagrams/'+givenId,
                        type: 'PUT',
                        data: {"code": code},
                        success: function(data) {
                            console.log("successfully edited existing diagram");
                            return data;
                        }
        })
        return putReq;
    }
}


AbstractorApp.prototype.initPages = function() {
    window.AbstractorApp = this;
    var otherThis = window.AbstractorApp;

    this.initTrees();
    this.initStage();
    
    this.initEditMode();

    /*

    $('#current_view').on("click",".back", function() {

        //HOME BUTTONS
        if($(this).attr("id") === 'drivers_perspective_button') {
           $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#drivers_perspective").addClass("shown_html");
            },0);

        }

        if($(this).attr("id") === 'mechanics_perspective_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#mechanics_perspective").addClass("shown_html");
            },0);
        }
    });

*/

}


AbstractorApp.prototype.initEditMode = function() {
    this.EditMode = new EditMode ({
                                'deleteAllDiagrams': this.deleteAllDiagrams,
                                'deleteDiagram': this.deleteDiagrams,
                                'getAllDiagrams': this.getAllDiagrams,
                                'getDiagram': this.getDiagram,
                                'postDiagram': this.postDiagram,
                                'putDiagram': this.putDiagram,
                            });
    this.EditMode.init();
}

AbstractorApp.prototype.initTrees = function() {
    $("#newTree").click(function() {
        this.NewTree = new Tree(1);
        this.NewTree.addBox(1);
    });
}


AbstractorApp.prototype.initStage = function() {
    window.AbstractorApp = this;
    var app = window.AbstractorApp;

    this.stage = new Kinetic.Stage({
      container: 'canvas',
      width: $(window).width(), 
      height: $(window).height() - 4 //this is a hack
    });



    $("#create_box").click(function() {
        
        /* this creates the abstract box that holds data */
        // app.NewTree.addBox(2);
        /* this creates the graphic and event thing for the box */
        var visualBox = new VisualBox(2); 
        /* this renders the box by adding it to the stage */
        app.stage.add(visualBox.layer);

        alert("woasdklfj");
    });

}













