var express = require("express");
var path = require("path");
var mongoose = require("mongoose");

//init
var app = express();


// CORS Middleware that sends HTTP headers with every request
// Allows connections from http://localhost:8081
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');

    next();
}

//Database
mongoose.connect('mongodb://heroku_app10763577:7fqicugtlm3lpu8rndhmutn4el@ds047307.mongolab.com:47307/heroku_app10763577');
var Schema = mongoose.Schema;

var Diagram = new Schema({
    // status: {type:Number, required: false}, WILL IMPLEMENT THIS LATER
    desc: {type:String, required: false},
    hasLoc: {type:Boolean, required: false},
    lat: {type:Number, required: false},
    lng: {type:Number, required: false},
    state: {type:String, required: false}
});

var DiagramModel = mongoose.model('Diagram',Diagram);


//Config
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(allowCrossDomain);
    app.use(app.router);
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});



app.use("/", express.static(__dirname));
app.get("/", function(req, res) { res.redirect("/index.html");});


// Get all issues
app.get('/diagrams', function (req, res) {
    return DiagramModel.find(function(err, diagrams) {
        return res.send(diagrams);
    });
});

// Get a single issue
app.get('/diagrams/:id', function (req, res) {
    // pattern matches /issues/*
    // given id is passed to req.params.id
    return DiagramModel.findById(req.params.id, function(err, diagram) {
        res.send(diagram);
    });
});

// Add an issue
app.post('/diagrams', function (req,res) {
    console.log(req.body);
    var diagram = new DiagramModel({
        code: req.body.code
        //commas
    });

    // save to mongodb
    diagram.save();

    // useful so client gets server generated stuff like IDs
    return res.send(diagram);
});

// Delete an issue
app.delete('/diagrams/:id', function(req, res) {
    return DiagramModel.findById(req.params.id, function(err, diagram){
        return diagram.remove(function(err) {
            return res.send('');
        });
    });

    // return DiagramModel.findById(req.params.id, function(err, issue) {
    //     diagram.state = req.body.state,
    //     diagram.save();
    //     return res.send(issue);
    // });
});


// Delete all issues
app.delete('/diagrams', function(req, res) {
    return DiagramModel.find(function(err, diagrams) {
        for (var i =0; i < diagrams.length; i++) {
            diagrams[i].remove();
        }
        return res.send('');
    });
});


// Editing an issue
app.put('/diagrams/:id', function(req, res) {
    return DiagramModel.findById(req.params.id, function(err, diagram) {
        diagram.code = req.body.code;
        diagram.save();
        return res.send(diagram);
    });
});

//Launch server
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// app.listen(8080);

// var port = process.env.PORT || 5000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });





