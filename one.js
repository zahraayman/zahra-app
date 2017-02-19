var http = require('http');

http.createServer(function(req,res){
   res.end("<h1 style="color: #ffec7a;font-weight: bold;font-size: 70px;margin: 70px 0px 20px;">welcome..<h1>");
 }).listen(process.env.PORT || 8080,function(){
    console.log('Listening on 8080');
  });
