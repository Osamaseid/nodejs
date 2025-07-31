const http = require('http');

const server = http.createServer(function(req, res){
  console.log('request recived');
});

server.listen(3000, function(){
  console.log('server is listening on port 3000');
});
