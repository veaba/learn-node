/**
 * @desc 搭建dns 服务器。不在公网的域名可以在局域网随便使用
 * 
 */
const dns =require('dns')
// demo1dns.lookup 底层操作系统工具进行域名解析
// dns.lookup('weibo.com',(err,address,family)=>{
//     console.log('IP 地址：%j 地址族IPv%s',address,family)
//     console.log(address)
//     console.log(family)
// })
// F:\Github\learn-nodejs>node dns.js
// IP 地址："180.149.134.141" 地址族IPv4
// 180.149.134.141
// 4
// 微博竟然没有对ip访问做重定向

// demo2 连接真实的dns服务进行域名解析

// dns.resolve4('baidu.com',(err,addresses)=>{
//     if(err) throw err
//     console.log(`IP:${JSON.stringify(addresses)}`)
//     addresses.forEach((a)=>{
//         dns.resolve(a,(err1,hostname)=>{
//             if(err1) {
//                 console.log(err1)
//                 // throw err1;
//             }
//             if(hostname){
//             console.log(`IP地址${a}逆向解析到域名：${JSON.stringify(hostname)}`)
//             }
//         })
//     })
// })