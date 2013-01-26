var AbstractorApp = function(){
    this.setUp();
}    

AbstractorApp.prototype.setUp = function(){
    this.ajaxSetUp();
    this.initPages();
    this.editMode = false;


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


    $(".modes").hide();
    $("#splash").show();
    this.currentMode = "splash";

    $("#edit_mode_button").click(function() {
        $(".modes").hide();
        $("#edit").show();
        this.currentMode = "edit";
    });

    $("#view_mode_button").click(function() {
        $(".modes").hide();
        $("#view").show();
        this.currentMode = "view";
    });

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
    this.NewTree = new Tree(1);

    /* $("#newTree").click(function() {
        this.NewTree = new Tree(1);
        this.NewTree.addBox(1);
    }); */
}


AbstractorApp.prototype.initStage = function() {
    window.AbstractorApp = this;
    var app = window.AbstractorApp;


    this.x = 50;
    this.y = 50 + $("#content").height();
    this.width = $(window).width()/5;
    this.height = 100;
    

    $("#new_box").click(function() {
        app.editMode = true;
        $("#edit_text").html('<img src="icons/T.png">\
            <span class="menu_text">Edit Text</span>')
        createBox(app.NewTree, app.x, app.y, app.width, app.height, app);
        app.x += 20 + app.width;

    });

    $("#edit_text").click(function() {
        if (app.editMode) {
            app.editMode = false;
            $("#edit_text").html('<img src="icons/T_sidemenu.png">\
            <span class="menu_text">Edit Text</span>')
        } else {
            app.editMode = true;
            $("#edit_text").html('<img src="icons/T.png">\
            <span class="menu_text">Edit Text</span>')
        }
       
    });


    /*
        on highlight (function() {
            createBox()
            createLink(midpoint of start and end points)
        });
*/

}



        // var color = "#"
        // $("#canvas").append("<textarea id='"+app.rectID+"' class='rectangle'></textarea>");
        // $("#"+app.rectID).css("left",app.x);
        // $("#"+app.rectID).css("bottom",app.y);
        // $("#"+app.rectID).css("width",app.stage.getWidth()/5);
        // $("#"+app.rectID).css("border-color","#dc423c");
        // app.rectID++;














