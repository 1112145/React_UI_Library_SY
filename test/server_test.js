var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname,('./test_build'))));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,('./test_build')));
});

app.listen(3030,function(){
    console.log('test server run at: 3030');
})
