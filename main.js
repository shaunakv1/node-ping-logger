var ping = require("ping");
var pingstats = require("ping-stats");

var host = "192.168.1.100"

var cfg = {
	 timeout: 600,
     extra: ["-i 2"]
}

ping.promise.probe(host).then(function (res) {
            console.log(res.host);
            console.log(res.alive);
            console.log(res);
});