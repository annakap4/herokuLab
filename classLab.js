var http = require("http")

http.createServer(function(request, response) {
	response.write("<h1>You Found me out!</h1>");
	response.end();
}).listen(3000);


// Access: http://localhost:3000