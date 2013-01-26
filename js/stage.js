var stage = new Kinetic.Stage({
  container: 'canvas',
  width: $(window).width(), 
  height: $(window).height() - 4 //this is a hack
});

var layer = new Kinetic.Layer();

// for(var n = 0; n < 10; n++) {
//   var circle = new Kinetic.Circle({
//     x: Math.random() * stage.getWidth(),
//     y: Math.random() * stage.getHeight(),
//     radius: Math.random() * 50 + 25,
//     fill: 'red',
//     strokeWidth: 3
//   });

//   layer.add(circle);
// }

// var rect = new Kinetic.Rect({
//   x: 300,
//   y: 90,
//   width: 100,
//   height: 50,
//   border
//   fill: '#fff',
//   strokeWidth: 3,
//   offset: {
//     x: 50,
//     y: 25
//   },
//   draggable: true,
//   id: 'myRect',
//   name: 'I am a rectangle'
// });

layer.on('click', function(evt) {
        // get the shape that was clicked on
        var shape = evt.shape;
        // console.log(shape.getId());

        

});

// $("myRect").click(function() {
//   console.log("testtt");
// });


// layer.add(rect);
stage.add(layer);

// document.getElementById('activate').addEventListener('click', function() {
//   var shape = stage.get('#myRect')[0];
//   shape.transitionTo({
//     scale: {
//       x: Math.random() * 2,
//       y: Math.random() * 2
//     },
//     duration: 1,
//     easing: 'elastic-ease-out'
//   });
// }, false);