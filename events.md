> 异步事件驱动架构，触发器Emitter，触发命名事件来调用函数，又称 监听器，listener

- 能够触发事件的对象都是`eventEmitter` 类型的实例
- `EventEmitter` 对象触发一个事件时，所有绑定在该事件上的函数都会被同步的调用