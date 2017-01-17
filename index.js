const express = require("express");
const app = express();

var server = app.listen("3000",listening);

function listening() {
	console.log("Listening");
}

app.get("/", function(req, res) {
	/*Home page with user stories*/
	res.send("This page has user stories");
});

app.get("/:date", function(req, res) {
	/*Page with JSON data of date*/
	console.log(req.params);
	res.send("Will send JSON data here");
});