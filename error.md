
- 同步API（不接受callback函数阻塞的方法fs.readFileSync）会使用`throw` 报告错误
- 异步方法被一个`EventEmitter` 对象调用，错误会被分发到对象的`error`事件上
- `try/catch` 不能截获异步方法产生的错误！！！！ 除非 启用 domains ` process.on('uncaughtException') ` 相关联的异常处理器
- `error.stack` 追踪代码错误位置
## 错误
> 四类错误

 - ReferenceError 引用错误，如undefined
 - EvalError
 - SyntaxError
 > 不是有效的javascript代码，结果产生和传播，来自eval、Function、require、或vm
 - AssertionError
 > 断言失败
 - RangeError
 > 超出给定数值或者入参个数
 - TypeError
 > 提供的参数不是一个被允许的类型
 - URIError

### 抛出错误
`throw`
```js
    try{

    }catch(err){

    }
//demo 1  大多数异步方法都接受callback函数，默认error 对象传入作为第一个参数

fs.readFile('一个不存在的文件',(err,file)=>{
    if(err) console.log(err) return 
    //todo 
})
// demo2 异步方法被一个`EventEmitter` 对象调用，错误会被分发到对象的`error`事件上
const net  = require('net')
const connection = net.connect('localhost')
connection.on('error',(err)=>{
    console.log(err)
})
```