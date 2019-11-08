let buf1 = Buffer.alloc(10,'a');

console.log(buf1)

let buf2 = Buffer.from('你好');

console.log(buf2);

console.log(Buffer.byteLength(buf2))

//utf8 一个汉字 = 3字节描述

//utf16le 2字节

console.log(buf2.toString())

buf1.write('b',2);

console.log(buf1)

let c = 'a'+'b'; //ab

let bufa = Buffer.from('a');

let bufb = Buffer.from('b');

let buf = Buffer.concat([bufa,bufb]);

console.log(buf)

console.log(buf.toString())

console.log(Buffer.isEncoding('utf16le') )
