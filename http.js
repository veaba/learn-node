const http= require('http')
const url ='http://www.baidu.com'
// http.get(url,(res)=>{
//     const {statusCode}= res;
//     const contentType= res.headers['content-type']
//     let error;
//     if(statusCode!=200){
//         error = new Error(statusCode)
//     }
//     res.on('data',(chunck)=>{
//         console.log(chunck)
//     })
// });