'use strict';
var str="yjwstr";
//创建一个http协议
var http=require('http');
//创建一个服务
var server = http.createServer(function (request,response) {
	console.log(request.url);
	//响应报文头	
	response.writeHead(200,{
		'Content-Type':'text/html' 
	});
	//响应报文体   只能是字符串
	response.write('yanjgianwei');
	response.end();
});
//启动服务
server.listen(8080,function (error) {
	console.log('成功监听8080端口');
})
