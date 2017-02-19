var http = require('http');
var fs = require('fs');
var result = fs.readFileSync(__dirname +'/index.html' ,'utf8');
var css = fs.readFileSync(__dirname +'/style.css');
http.createServer(function(req,res){
   res.end(result);
 }).listen(8080,function(){
    console.log('Listening on 8080');
  });
