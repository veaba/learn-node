/**
 * @desc 以下代码比较粗劣，一个使用流的Express 应用
 * 
 */
const stream = require('stream')
const util = require('util')
const express= require('express')

const app = express()

util.inherits(StatStream,stream.Readable)

function StatStream(limit){
    stream.Readable.call(this)
    this.limit=limit
}

StatStream.prototype._read=function(size){
    if(this.limit===0) this.push()
    else {
        this.push(util.inspect(process.memoryUsage()))//?memoryUsage
        this.push('n')
        this.limit--
    }
}

app.get('/',(req,res)=>{
    const statStream = new StatStream(10)
    statStream.pipe(res)
    res.send('hello world')
})
app.listen(8081,()=>{
    console.log('port 8081')
})