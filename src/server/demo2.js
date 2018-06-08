//引入内置模块http模块
var http = require('http');
var url = require('url');
var util = require('util');

//2
http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end(util.inspect(url.parse('http://192.168.191.1:8124/aa.html&abc=123')));
}).listen(8124,'192.168.191.1',()=>{
    console.log('服务器已运行，请打开本地服务查看！');
});