const fs = require('fs');

let buf = fs.readFileSync('./index.html','utf8');

console.log(buf);
