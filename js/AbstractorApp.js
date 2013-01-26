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

    this.stage = new Kinetic.Stage({
      container: 'canvas',
      width: $(window).width(), 
      height: $(window).height() - 4 //this is a hack
    });

    /* when click on new box menu item, a box (abstract and graphic) is created */
    // $("#new_box").click(function() {
    //     createBox(app.NewTree, app.stage);
    // });
    this.rectID = 0;
    this.x = 50;
    this.y = 50 + $("#content").height();
    $("#new_box").click(function() {



        var color = "#"
        $("#canvas").append("<textarea id='"+app.rectID+"' class='rectangle'></textarea>");
        $("#"+app.rectID).css("left",app.x);
        $("#"+app.rectID).css("bottom",app.y);
        $("#"+app.rectID).css("width",app.stage.getWidth()/5);
        $("#"+app.rectID).css("border-color","#dc423c");
        app.rectID++;
        app.x += 20 + app.stage.getWidth()/5;

        // createBox(app.NewTree, app.stage, app.color);

        // $("#"+app.rectID).append('<form class="box_text">'
        //     +'<input type="text" name="box_text"'
        //     +' id='+app.rectID+' class="active" value="" />'
        //     +'<span class="box_text" id="bx=box_text>+</span></form>');
        // $(".box_text > #"+app.rectID).css("width",100);


        // $("#canvas").append("<div class='rectangle' id="+app.rectID+"></div>");
        // $("#"+app.rectID).attr("width",app.stage.getWidth()/4);
        // app.rectID++;
    });


    /*
        on highlight (function() {
            createBox()
            createLink(midpoint of start and end points)
        });
*/

}

var blue = 388e9e;
var red = dc423c;
var yellow = eecb25;
var purple = 7d2a44;
var gray = 515151;
color_array = [red, yellow, gray, blue, purple];

Box.prototype.color = function() {
    this.color = color_array[(this.level mod 5)];
}















