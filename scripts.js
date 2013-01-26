var AbstractorApp = function(){
    this.setUp();
}    

AbstractorApp.prototype.setUp = function(){
    this.ajaxSetUp();
    this.initPages();
}

AbstractorApp.prototype.ajaxSetUp = function() {
    this.deleteAllIssues = function() {
        var deleteAllReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues',
                        type: 'DELETE',
                        // data: {"desc": ""},
                        success: function(data) {
                            console.log("successfully deleted all issues");
                            return data;
                        }
        });
        return deleteAllReq;
    }

    this.deleteIssue = function(givenId) {
        var deleteReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues/'+givenId,
                        type: 'DELETE',
                        // data: {"state": "deleted"},
                        success: function(data) {
                            console.log("successfully 'deleted' given issue");
                            return data;
                        }

        });
        return deleteReq;
    }

    this.getIssue = function(givenId) {
        var getReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues/'+givenId,
                        type: 'GET',
                        success: function(data) {
                            console.log("successfully retrieved given issue");
                            return data; 
                        }
        });
        return getReq;
    }


    this.getAllIssues = function() {
        var getAllReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues',
                        type: 'GET',
                        success: function(data) {
                            console.log("successfully retrieved all issues");
                            return data;
                        }
        });
        return getAllReq;
    }


    this.postIssue = function(description) {
       
        var postReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues',
                        type: 'POST',
                        data: {"desc": description,
                                "hasLoc": 0,
                                "lat": 0,
                                "lng": 0,
                                "state": "new"},
                        success: function(data) {
                            // console.log(data[0].desc);
                            console.log("successfully posted new issue with given description");
                            console.log(data.hasLoc);
                            return data;
                        }
        });
        return postReq;
    }

    this.putIssue = function(givenId,description,state) {
        var putReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues/'+givenId,
                        type: 'PUT',
                        data: {"desc": description,
                                "hasLoc": 0,
                                "lat": 0,
                                "lng": 0,
                                "state": state},
                        success: function(data) {
                            console.log("successfully edited existing issue with given description");
                            return data;
                        }
        })
        return putReq;
    }


    this.postIssueWithLocation = function(description,lat,lng) {
        var postReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues',
                        type: 'POST',
                        data: {"desc": description,
                                "hasLoc": 1,
                                "lat": lat,
                                "lng": lng,
                                "state": "new"},
                        success: function(data) {
                            // console.log(data[0].desc);
                            console.log("successfully posted new issue with given description and location");
                            return data;
                        }
        });
        return postReq;
    }

    this.putIssueWithLocation = function(givenId,description,lat,lng,state) {
        var putReq = $.ajax({
                        url: 'http://'+window.location.host+'/issues/'+givenId,
                        type: 'PUT',
                        data: {"desc": description,
                                "hasLoc": 1,
                                "lat": lat,
                                "lng": lng,
                                "state": state},
                        success: function(data) {
                            console.log("successfully edited existing issue with given description and location");
                            return data;
                        }
        })
        return putReq;
    }
}


AbstractorApp.prototype.initPages = function() {
    window.BuggyApp = this;
    var otherThis = window.BuggyApp;
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

    $('#current_view').on("click",".footer_link", function() {


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


    $('#current_view').on("click",".menu_button", function() {

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


        if($(this).attr("id") === 'issues_log_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#issues_log").addClass("shown_html");
                    otherThis.initIssuesLog();
            },0);
        }


        //DRIVER'S PERSPECTIVE BUTTONS
        if($(this).attr("id") === 'drivers_street_view_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#drivers_street_view").addClass("shown_html");
                    otherThis.initDriversStreetView();
            },0);
        }

        if($(this).attr("id") === 'drivers_aerial_view_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#drivers_aerial_view").addClass("shown_html");
                    otherThis.initDriversAerialView();
            },0);

        }

        if($(this).attr("id") === 'drivers_report_issues_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#drivers_report_issues").addClass("shown_html");
                    otherThis.initDriversReportIssues();
            },0);
        }


        //MECHANIC'S PERSPECTIVE BUTTONS
        if($(this).attr("id") === 'mechanics_street_view_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#mechanics_street_view").addClass("shown_html");
                    otherThis.initMechanicsStreetView();
            },0);
        }

        if($(this).attr("id") === 'mechanics_aerial_view_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#mechanics_aerial_view").addClass("shown_html");
                    otherThis.initMechanicsAerialView();
            },0);
        }

        if($(this).attr("id") === 'mechanics_issues_list_button') {
            $(this).closest(".page").removeClass("shown_html").addClass("hidden_html");
            setTimeout(function() {
                    $("#mechanics_issues_list").addClass("shown_html");
                    otherThis.initMechanicsIssuesList();
            },0);
        }

    });

}


AbstractorApp.prototype.initIssuesLog = function() {
    this.IssuesLog = new IssuesLog({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                                'postIssueWithLocation': this.postIssueWithLocation,
                                'putIssueWithLocation': this.putIssueWithLocation
                                });
    this.IssuesLog.init();
} 

AbstractorApp.prototype.initDriversStreetView = function() {
    this.DriversStreetView = new DriversStreetView({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                                'postIssueWithLocation': this.postIssueWithLocation,
                                'putIssueWithLocation': this.putIssueWithLocation,

                                'hill2Lat': 40.440665,
                                'hill2Lng': -79.942092,
                                'hill2Heading': 220,
                                'hill2Pitch': -25,

                                'chuteLat': 40.440671,
                                'chuteLng': -79.947962,
                                'chuteHeading': 0,
                                'chutePitch': -20,

                                'hill3Lat': 40.441510,
                                'hill3Lng': -79.947018,
                                'hill3Heading': 120,
                                'hill3Pitch': -25
                            });
    this.DriversStreetView.init();
}

BuggyApp.prototype.initDriversAerialView = function() {
    this.DriversAerialView = new DriversAerialView({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                                'postIssueWithLocation': this.postIssueWithLocation,
                                'putIssueWithLocation': this.putIssueWithLocation,

                                'initialLat': 40.440665,
                                'initialLng': -79.942092,
                                'initialZoom': 17
                                });
    this.DriversAerialView.init();
} 

BuggyApp.prototype.initDriversReportIssues = function() {
    this.DriversReportIssues = new DriversReportIssues({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                                'postIssueWithLocation': this.postIssueWithLocation,
                                'putIssueWithLocation': this.putIssueWithLocation
                                });
    this.DriversReportIssues.init();
} 


BuggyApp.prototype.initMechanicsStreetView = function() {
    this.MechanicsStreetView = new MechanicsStreetView({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                                'postIssueWithLocation': this.postIssueWithLocation,
                                'putIssueWithLocation': this.putIssueWithLocation,

                                'hill2Lat': 40.440665,
                                'hill2Lng': -79.942092,
                                'hill2Heading': 220,
                                'hill2Pitch': -25,

                                'chuteLat': 40.440671,
                                'chuteLng': -79.947962,
                                'chuteHeading': 0,
                                'chutePitch': -20,

                                'hill3Lat': 40.441510,
                                'hill3Lng': -79.947018,
                                'hill3Heading': 120,
                                'hill3Pitch': -25
                                });
    this.MechanicsStreetView.init();
} 




BuggyApp.prototype.initMechanicsAerialView = function() {
    this.MechanicsAerialView = new MechanicsAerialView({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                                'postIssueWithLocation': this.postIssueWithLocation,
                                'putIssueWithLocation': this.putIssueWithLocation,

                                'initialLat': 40.440665,
                                'initialLng': -79.942092,
                                'initialZoom': 17
                                });
    this.MechanicsAerialView.init();
} 

BuggyApp.prototype.initMechanicsIssuesList = function() {
    this.MechanicsIssuesList = new MechanicsIssuesList({
                                'deleteAllIssues': this.deleteAllIssues,
                                'deleteIssue': this.deleteIssue,
                                'getAllIssues': this.getAllIssues,
                                'getIssue': this.getIssue,
                                'postIssue': this.postIssue,
                                'putIssue': this.putIssue,
                                'postIssueWithLocation': this.postIssueWithLocation,
                                'putIssueWithLocation': this.putIssueWithLocation
                                });
    this.MechanicsIssuesList.init();
} 
