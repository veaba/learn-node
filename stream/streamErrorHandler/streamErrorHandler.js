/***********************
 * @name JS
 * @author Jo.gel
 * @date 2019/7/1 0001
 ***********************/
const fs =require('fs')
const stream = fs.createReadStream('no-found')

stream.on('error',(err)=>{
    console.trace()
    console.error('Stack:',err.stack)
    console.error('The Error:',err)
})
