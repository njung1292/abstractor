var AbstractorApp = function(){
    this.setUp();
}    

AbstractorApp.prototype.setUp = function(){
    this.ajaxSetUp();
    this.initPages();
    this.editMode = false;
    this.linkMode = false; 


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

    $("#edit_mode_button");

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




    this.perRow = 0;
    this.x = 50;
    this.y = 50 + $("#content").height();
    this.width = $(window).width()/5;
    this.height = 100;
    this.widthWhole = $(window).width();

    this.windowWidth = $(window).width();
    this.windowHeight = $(window).height();


    
    // $("#canvas").append(newLine(0,-1000,4000,200));

    $("#edit_mode_button").click(function() {
        createBox(app.NewTree,0,0,app.widthWhole,175,app);
    });

    $("#new_box").click(function() {
        app.editMode = true;
        $("#edit_text_img").attr("src", "icons/pikachu.png");
        createBox(app.NewTree, app.x, app.y, app.width, app.height, app);
        if (app.perRow < 3) {
            app.x += 20 + app.width;
            app.perRow += 1;
        } else {
            app.x = 50;
            app.y += 50;
            app.perRow = 0;
        }
    });

    $("#edit_text").click(function() {
        if (app.editMode) {
            app.editMode = false;
            $("#edit_text_img").attr("src", "icons/T_sidemenu.png");
        } else {
            app.editMode = true;
            $("#edit_text_img").attr("src", "icons/pikachu.png");
        }
       
    });

    $("#new_link").click(function() {
        if (app.linkMode) {
            app.linkMode = false;
            $("#new_link_img").attr("src", "icons/connect.png");;
        } else {
            app.linkMode = true;
            $("#new_link_img").attr("src", "icons/dotted_connect.png");
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














