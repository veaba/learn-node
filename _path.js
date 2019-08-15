/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/8/15 0015 上午 10:10
 * @desc 了解path
 ***********************/
const path = require('path');

// console.info(path.basename('/foo/bar/baz/asdf/quux.html'));//quux.html
// console.info(path.basename('/foo/bar/baz/asdf/quux.html', '.html'));//quux
// console.info(path.basename('http://static.nodejs.cn/_static/img/ad/api_nav_qcloud.jpg','.jpg'));//api_nav_qcloud

// console.info(process.env.PATH);
// console.info(process.env.PATH.split(path.delimiter));

// const arr= process.env.PATH.split(path.delimiter);
// console.info(arr);
// console.info(arr.filter(item=>item));



// 1. 界定符 path.delimiter
// console.info(path.delimiter);

// 2. dirname 返回path的路径名
// console.info(path.dirname('/foo/bar/baz/asdf/quux')); // /foo/bar/baz/asdf

// 3. 返回字符串的拓展名 extname http://nodejs.cn/api/path.html
// console.info(path.extname('index.html')); // .html
// console.info(path.extname('.3,.,65,65.364,4')); // .364,4
// console.info(path.extname('.index')); // 空字符串

// 4. path.format(pathObject)
// const pathObject={
// 	dir:"C:\\xad\\xadd\\dddd",
// 	base:"99.log"
// };
//
// console.info(path.format(pathObject));//C:\xad\xadd\dddd\99.log
//
// console.log(path.format({
// 	dir: 'C:\\path\\dir',
// 	base: 'file.txt'
// })); //C:\path\dir\file.txt

// 5. path.isAbsolute(path)
// posix
// console.info(path.isAbsolute('/foor/baar')); // true
// console.info(path.isAbsolute('/foor/..')); // true
// console.info(path.isAbsolute('foor/..')); // false
// console.info(path.isAbsolute('.')); // false
// console.info(path.isAbsolute('/')); // true

// 6. path.join([...paths]) 使用平台特定的分隔符作为界定符将所有给定的path片段连接在一起

// const pathJoin= path.join('xx','xads','ooo');
// console.info(pathJoin); //xx\xads\ooo

// 7、path.normalize(path) 规范化path
// console.info(path.normalize('/foor/bar//xsa/xad/dx/..')); // \foor\bar\xsa\xad

// 8、path.parse(path)
// console.info(path.parse('C:\\path\\xxa\\c\\xa.txt'));
// { root: 'C:\\',
// 	dir: 'C:\\path\\xxa\\c',
// 	base: 'xa.txt',
// 	ext: '.txt',
// 	name: 'xa' }

// 9、path.posix 对path方法的POSIX特定实现访问

// 10、path.relative(from,to) 根据当前工作目录返回from到to的相对路径

// console.info(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')); // ..\..\impl\bbb

// 11、path.resolve([...paths]) 将路径或路径片段解析为绝对路径

console.info(path.resolve('/fria/dad/ss','dsad/','dsad/')); //F:\fria\dad\ss\dsad\dsad

console.info(path.resolve());//F:\Github\learn-nodejs


const _path={
	delimiter:'返回平台的路径定界符',//win `;`,posix `:`
	dirname(){
		return 'x'
	},
};

// console.info(_path);
