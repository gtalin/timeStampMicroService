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
	var date = req.params.date;
	console.log(req.params)
	console.log(typeof date);
	function parseDate(date) {
		/*var extractedDate = date.replace(/[20%]/g," ");*/
		var  convertedDate = {unix:null,natural:null};
		if (isNaN(date)) {
			console.log("Not unix");
			console.log(date, Date.parse(date), typeof date);
			if (Date.parse(date)){
			  convertedDate.unix = Date.parse(date)/1000;
			  /*If say date above is of the form "Dec 15" it
			  is converted to 1008374400000 in node. In Firefox
			  though it gives NaN Thus we convert date as follows 
			  to get the same result as from the fcc demo*/
			  /*convertedDate.natural = date;*/
			  var newd = new Date(convertedDate.unix*1000)
			  convertedDate.natural=newd.toDateString().split(" ").slice(1).join(" ");
		    }
		}
		else {
			console.log("Unix");
			console.log(new Date(parseInt(date)*1000));
			/*Coz it expects unix without seconds*/
			convertedDate.unix = date;
			var newd = new Date(parseInt(date)*1000)
			convertedDate.natural=newd.toDateString().split(" ").slice(1).join(" ")
			/*convertedDate.natural = newd.toDateString();*/
		}
		return convertedDate
	}
	var converted = parseDate(date);
	res.send(converted);
});