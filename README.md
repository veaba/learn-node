## 学习 node.js

## 学习一些api 的方法和使用


## node线程
- node 是单线程进程
    - 特点：
        - JS引擎只有一个实例
        - 事件驱动处理IO等异步
        - 可能更适合IO密集型操作
    - 优点：减少线程间切换的开销
    - 缺点：
        - 无法让主线程进行CPU密集型操作，会阻塞主线程
    - cpu 密集型（计算），可以通过child_process 创建独立的子进程，父子进程通过IPC通信（进程间通信），子进程可以是外部程序，结果返回给父进程
    - IPC通信：进程间通信，科普：https://www.cnblogs.com/CheeseZH/p/5264465.html

    - node 不是单线程：严格说，node不是单线程！
        - js引擎执行的线程
        - 定时器线程（setTimeout,setInterval）
        - 异步http线程（ajax）
    - node 一般单线程说法：
        - 只有一个JS引擎在主线程上运行
        - 其他异步IO和事件驱动相关线程通过libuv实现内部的线程池和线程调度   
        - libuv 存在 Event Loop，通过它来实现多线程效果
        - Event Loop：维持一个执行栈和一个事件队列
    - node 单进程：线程是最小进程，因此node 也是单进程。（node 是单进程、单线程的原因）
- CPU密集
    - 计算、逻辑判断
- IO密集操作
    - 网络通讯、网络传输、磁盘读写
- libuv：跨平台高性能、事件驱动的I/O库
- node 提供 child_process 模块实现多进程
    - 子进程：也叫工作进程，worker
        - 可以调用非Node命令，如python、shell、以流或回调形式返回
    - 主进程：master进程


### child_process API

- spawn：非Node应用、流的形式返回、不能直接运行shell命令
- execFile：非Node应用、流的形式返回

|类型|spawn|execeFile|exec|fork|
|----|----|----|----|----|
|是否Node应用|否|否|否|是|
|返回结果|流|回调|回调|流|
|是否直接执行shell|否|否|是|否|

#### exec 
- 安全性比较低
```js
const cp= require('child_porcess')
cp.execFile('echo hello world'],functionc(err,stdout){
    console.log(setout)
})
```
#### execFile
- 安全性高
- 会检查入参安全性
```js
const cp= require('child_porcess')
cp.execFile('echo',['hello','world'],functionc(err,stdout){
    console.log(setout)
})
```

#### spawn

```js
const cp=require('child_process')
const cat= cp.spawn('cat',['input.txt'])
const sort=cp.spawn('sort')
const uniq=cp.spawn('uniq')

cat.stdout.pipe('sort.stdin')
sort.stdout.pipe('uniq.stdin')
uniq.stdout.pipe(process.stdout)

console.log(porcess.stdout)
```

#### fork

- 子进程
    - process.on('message')接收消息、process.send()发送消息

- 父进程
    - child.on('message')接收消息、child.send() 发送消息