const fs= require('fs')

/**同步sync */
// try{
//     fs.unlinkSync('./tmp/hello.js1')
//     console.log('is deleted')
// }catch(err){
//     console.log('删除失败',err)
// }

/**异步async */
// fs.unlink('./tmp/hello.js',(err)=>{
//     if(err) throw err
//     console.log('delete')
// })
/**文件描述符 */
// fs.open('./tmp/hello.js','r',(err,fd)=>{
//     if(err) throw err
//     fs.fstat(fd,(err1,stat)=>{
//       if(err1) throw err1
//       //文件属性
//       console.log(stat) 

//       //关闭文件描述符
//       fs.close(fd,(errC)=>{
//         if(errC) throw errC
//         console.log('关闭')
//       })
//     })
//   })

//   fs.stat('./tmp/hello.js',(err1,stat)=>{
//     if(err1) throw err1
//     //文件属性
//     console.log(stat) 
//   })

// fs.open('./tmp/hello.js','r',(err,fd)=>{
//     if(err){
//         if (err.code === 'EEXIST') {
//             console.error('文件已存在');
//             return;
//           }
//         throw err
//     }
//     console.log(fd)
//     fs.close(fd,(errC)=>{
//         if(errC) throw errC
//         console.log('关闭')
//     })
// })
/**异步追加数据 */
// fs.appendFile('./tmp/append.txt','\n hello world append file for node.js fs.appendFile function '+new Date() +'\n',(err)=>{
    // if(err) throw err
//   })
/**同步追加数据 */
// try {
//     fs.appendFileSync('./tmp/appendFileSync.txt','\n'+new Date())
//     console.log(new Date()
// }catch (error) {
//     console.log(error)
// }
//  try{
//      // 描述符。'a' 打开文件用于追加，不存在则创建
//      fd = fs.openSync('./tmp/appendFileSync.txt','a')
//     fs.appendFileSync(fd,'\n'+new Date())
//  }catch{
    
//  }finally{
//      if(fd!==undefined){
//          fs.closeSync(fd)
//      }
//  }
/**文件模式，异步 */
// fs.chmod(path,mode,callback)
/**文件模式，同步 */
// fs.chmodSync(path,mode)
/**文件模式，更改权限组，异步*/
// fs.chown(path,uid,gid,callback)
/**文件模式，更改权限组，同步 */
// fs.chownSync(path,uid,gid)
/** */
// fs.close()
// fs.closeSync()
/**包含文件系统操作常用常量的对象 */
// fs.constants()
// fs.copyFile(src,dest,[,flags],callback)
// fs.copyFileSync(src,dest,[,flag])
// fs.createReadStream(path,[,options])
// fs.createWriteStream(path,[,options])