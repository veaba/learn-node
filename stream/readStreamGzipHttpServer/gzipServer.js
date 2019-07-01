/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/7/1 0001
 ***********************/
const http= require('http');
const fs =  require('fs');
const zlib = require('zlib');

http.createServer((req,res)=>{
	res.writeHead(200,{'content-encoding':"gzip"});
	fs.createReadStream(__dirname+'/index.html')
		.pipe(zlib.createGzip())//开启之后379b，未开启 405b
		.pipe(res)
}).listen(8081,()=>{
	console.log('listen 8081')
});
