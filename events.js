// const EventEmitter = require('events')
// class em extends EventEmitter{}
// class Home{
//     //构造函数
//     constructor(height,width){
//       this.height=height;
//       this.width=width
//     }
//     // getter
//     get area(){
//         return this.all()
//     }
//     //methods
//     all(){
//        return this.height*this.width
//     }
//   }
// const h = new Home(100,999)
// // console.log(h.width)
// console.log(h.all())

class Point{
    constructor (x,y){
      this.x=x
      this.y=y
    }
    //static 关键字，顶一个类的静态方法
    static distance(a,b){
        console.log(a,b)
        const dx = a.x-b.x
        const dy = a.y-b.y
        console.log(dx,dy)
        return Math.hypot(dx,dy)//参数平方和的平方根
    }
  }
  

  
  const p1 = new Point(5,5)
  const p2 = new Point(10,10)
  console.log(Point.distance(p1,p2))
  