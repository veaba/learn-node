/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/7/1 0001
 ***********************/
const http= require('http');
const fs =  require('fs');

http.createServer((req,res)=>{
	fs.createReadStream(__dirname+'/index.html')
		.pipe(res)
}).listen(8081,()=>{
	console.log('listen 8081')
});
