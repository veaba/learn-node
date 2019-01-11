/**
 * 
 * require 存在无限循环，会返回某个exports 对象的`未完成的副本`
 * 在 ./some-library 目录中，则 require('./some-library') 会试图加载 ./some-library/lib/some-library.js。
 */

 exports ==  module.exports
 require.cache//引入的模块缓存在此对象中