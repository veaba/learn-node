const os = require('os')
os.EOL// \n POSIX \r\n windows
os.arch() //x64  可能：'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', 'x64'。
os.constants //包含错误代码
os.cpus()//返回cpus信息
os.endianness()//返回string，Node.js 二进制编译环境的顺序，'BE'大端模式,'LE'小端模式
os.freemem()//3376144384  整数形式回空闲系统内存的字节数
os.getPriority()//不太懂，PID相关
os.homedir()// C:\Users\Administrator返回home 目录
os.hostname()// R25NXG61NGXJ5N0 主机名称
os.loadavg() //windows [0,0,0,]
os.networkInterfaces()//返回网络接口对象
os.platform()//win32 可能 aix darwin freebsd linux openbsd sunos win32
os.release()//6.1.7601 操作系统发行版版本
os.tmpdir()//C:\Users\ADMINI~1\AppData\Local\Temp 临时文件夹
os.totalmem()//8472985600 方法以整数的形式返回所有系统内存的字节数.
os.type()//windows:Windows_NT linux:Linux macOs:Darwin
os.uptime()//4802 操作系统的上线时间
os.userInfo()
console.log(os.uptime()) 