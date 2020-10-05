var http = require("https");

var options = {
	"method": "GET",
	"hostname": "dolarapi.p.rapidapi.com",
	"port": null,
	"path": "/blue",
	"headers": {
	"x-rapidapi-host": "dolarapi.p.rapidapi.com",
	"x-rapidapi-key": "d541277110mshbc626965e3830adp1cbbb1jsn94a95dcf34a8",
	"useQueryString": true
	}
};

var req = http.get(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});