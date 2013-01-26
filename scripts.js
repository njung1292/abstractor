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
                            console.log(data.hasLoc);
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


/*

AbstractorApp.prototype.initDriversStreetView = function() {
    this.DriversStreetView = new DriversStreetView({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                            });
    this.DriversStreetView.init();
}


*/


