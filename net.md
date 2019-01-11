> `net`模块用于创建基于stream 的 `TCP` 和 `IPC`的服务器 `net.createServer()` 和客户端 `net.createConnection()`
- 思考，net 模块的实际应用场景都有什么？这里需要一个比较具象化的实例来描述和理解这样的概念。


## 附赠一段 沙雕互怼代码

server
```js
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
```

client
```js
const net = require('net')
const host = '127.0.0.1'
const port = 8124
const client = new net.Socket()
client.setEncoding('binary')
// 创建客户端
client.connect(port,host,()=>{
    client.write('I am client')
})

//接受server 的数据
client.on('data',(data)=>{
    console.log(data)
   setTimeout(()=>{
    client.write('by client:'+new Date()+'\r\n')
   },2000)
})

client.on('error',(err)=>{
    console.log('client error')
    client.destroy()
    throw err
})
client.on('close',()=>{
    console.log('Connect is closed')
})


```