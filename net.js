/**
 * @desc
 * 
 */
// const net =require('net')
// const server = net.createServer((res)=>{
//     console.log('client is connected')
//     res.on('end',()=>{
//         console.log('client is disconnected')
//     })
//     res.write('hello,My master,you are so honor\r\n')
//     res.pipe(res)//干吗的？
// })
// server.on('error',(err)=>{
//     throw err
// })
// server.listen(8124,()=>{
//     console.log('I lisent to port 8124')
// })
const net =require('net')
const server = net.createServer((res)=>{
    console.log('client is connected')
    res.on('end',()=>{
        console.log('client is disconnected')
    })
    res.write('hello,My master,you are so honor\r\n')
    res.pipe(res)//干吗的？
})
server.on('error',(err)=>{
    throw err
})
server.listen(8124,()=>{
    console.log('I lisent to port 8124')
})