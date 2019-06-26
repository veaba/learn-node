/***********************
 * @desc 标准输入stdin
 * @name JS
 * @author Jo.gel
 * @date 2019/6/26 0026
 ***********************/
process.stdin.resume();//?
process.stdin.setEncoding('utf8');
process.stdin.on('data',(text)=>{
	console.info('xxxxx');
	process.stdout.write(text)
});

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function(data) {
// 	console.info(12121212);
// 	process.stdout.write(data);
// });
