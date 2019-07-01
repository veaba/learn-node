/**
 *
 * require 存在无限循环，会返回某个exports 对象的`未完成的副本`
 * 在 ./some-library 目录中，则 require('./some-library') 会试图加载 ./some-library/lib/some-library.js。
 */

exports == module.exports;
console.info(exports);// {}
const x = require.cache;//引入的模块缓存在此对象中
console.info(x);
/*
{ 'F:\\Github\\learn-nodejs\\module.js':
	Module {
	id: '.',
		exports: {},
	parent: null,
		filename: 'F:\\Github\\learn-nodejs\\module.js',
		loaded: false,
		children: [],
		paths:
	[ 'F:\\Github\\learn-nodejs\\node_modules',
		'F:\\Github\\node_modules',
		'F:\\node_modules' ] } }
*/
