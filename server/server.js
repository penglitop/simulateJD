const _http = require('http'),
	Route=require('./route.js');
const hostname = '127.0.0.1';
const port = 3000;
const server = _http.createServer(
	function(req, res){
		Route.requestComing(req, res);
	}
);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});