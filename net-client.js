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
