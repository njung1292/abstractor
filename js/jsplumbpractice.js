AbstractorApp.prototype.initJSPlumb = function() {
    jsPlumb.bind("ready",function() {

        var container0Clicked = false;
        var container1Clicked = false;
        var e0;
        var e1;


        $("#container0").click(function() {
            if (container0Clicked === false && container1Clicked === false) {
                container0Clicked = true;
                jsPlumb.Defaults.Container = $("body");
                jsPlumb.DefaultDragOptions = { cursor: "pointer", zIndex: 2000 };
                e0 = jsPlumb.addEndpoint("c0");
                console.log("clicked on container 0");
            } else if (container0Clicked === false && container1Clicked) {
                container0Clicked = true;
                e0 = jsPlumb.addEndpoint("c0");
                jsPlumb.connect({ source:e1, target:e0,
                    anchors: ["RightMiddle", "TopCenter"],

                });

                jsPlumb.draggable("container0");
                jsPlumb.draggable("container1");
                console.log("clicked on container 0");
            }
        });


        $("#container1").click(function() {
            if (container0Clicked && container1Clicked === false) {
                container1Clicked = true;
                e1 = jsPlumb.addEndpoint("c1");
                jsPlumb.connect({ source:e0, target:e1,
                    anchors: ["RightMiddle", "TopCenter"],

                });

                jsPlumb.draggable("container0");
                jsPlumb.draggable("container1");
                console.log("clicked on container 1");
            } else if (container0Clicked === false && container1Clicked === false) {
                container1Clicked = true;
                jsPlumb.Defaults.Container = $("body");
                jsPlumb.DefaultDragOptions = { cursor: "pointer", zIndex: 2000 };
                e1 = jsPlumb.addEndpoint("c1");
                console.log("clicked on container 1");
            }
        });


        $("#container0").dblclick(function() {
            if (container0Clicked && container1Clicked){
                jsPlumb.detachAllConnections("c0");

                container0Clicked = false;
                container1Clicked = false;

                console.log("double clicked in container 0");

            }
        });

        $("#container1").dblclick(function() {
            if (container0Clicked && container1Clicked){
                jsPlumb.detachAllConnections("c1");

                container0Clicked = false;
                container1Clicked = false;

                console.log("double clicked in container 1");
            }
        });
    });
}