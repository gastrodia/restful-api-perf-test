/**
 * Created by yang on 14-11-19.
 */
var http = require('http');
var server = http.createServer(function (request, response) {

    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    response.write('{}');
    response.end();

});
server.listen(8000,function(){
    console.log('server is listen on 8000');
});