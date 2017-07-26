'use strict';
//创建一个http协议
var http=require('http');
//创建一个服务
var server = http.createServer(function (request,response) {
	var url = request.url;
	switch(url){
		case '/signin':
		singin(request,response);
		break;
		case '/post':
		post(request,response);
		break;
		default:
		response.writeHead(404,{});
		response.end();
		break; 
	}
});
//启动服务
server.listen(8080,function (error) {
	console.log('成功监听8080端口');
})

function singin(request,response) {
	// body...
	console.log('请求signin');
}
function post(request,response){

	console.log('请求Post提交');
}