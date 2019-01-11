const net = require('net')
const server = net.createServer((socket)=>{
    // create scoket server
    console.log('connect:'+socket.remoteAddress+':'+socket.remotePort)
    socket.setEncoding('binary')

    //接受数据
    socket.on('data',(data)=>{
        console.log('client send:',data)
        setTimeout(()=>{
            socket.write('by serverL'+new Date()+'\r\n')
        },2000)
    })
    // 服务端回应
    socket.write('I Love You!~~~~~\r\n')

    // 数据错误
    socket.on('error',(err)=>{
        throw err
    })
    // 客户端关闭连接
    socket.on('close',(data)=>{
        console.log(data)
        console.log('Loss my Love')
    })
})

// 服务启动
server.listen(8124,()=>{
    console.log(JSON.stringify(server.address()))
    console.log('yes,I lisent:'+server.address().address,8124)
})

//服务端错误事件
server.on('error',(err)=>{
    throw err
})