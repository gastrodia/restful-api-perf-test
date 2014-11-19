/**
 * Created by yang on 14-11-19.
 */
var http = require('http');
var app = require('express')();

app.all('*',function(req,res){
    //console.log(req.url);
    //console.log(req.method);
    res.json({});
});

http.createServer(app).listen(8000,function(){
    console.log('server is listen on 8000');
})